package controllers

import (
	"encoding/json"
	"fmt"
	"msgtype"
	"math/rand"
	"github.com/gorilla/websocket"
	"time"
	"log"
	"models"
	"sync"
	"os"
	"bufio"
	"strings"
	"io"
	"regexp"
	"common"
	"strconv"
)
var mutex sync.Mutex
const (
	PLACES  = 6
)
var Lguid  = common.GHOST_Login_GUID //登录服务器的guid

type CLIENTCONN struct {
	GUID         string   //储存连接的GUID
	Username     string   //储存的用户名
	Password     string   //储存的密码
	Validatecode string   //手机验证码
	Conn *websocket.Conn  //储存的连接
	Tname        string   //第三方平台名称
	//LZcount      int      //同一个连接发送登陆、注册次数（10次）
	Guid         string   //用户登录成功分配的guid
}

//用户账号登陆次数及密码错误次数
type UserLCount struct {
	UserName 	string	//用户名
	PassErr 	int	//密码错误次数
	LoginCount	int	//用户当天登陆次数
}

var UserConn = make([]CLIENTCONN,0) //用户连接数组
var UserLogin = make([]UserLCount,10) //用户当天登陆次数及密码错误次数

//添加用户至账号登陆次数切片
func AddUserInUserLogin(uname string,lcount int,pcount int) bool{
	for i:=0;i<len(UserLogin);i++{
		if len(UserLogin[i].UserName)<=0{
			UserLogin[i].UserName = uname
			return true
		}
	}
	var ul UserLCount
	ul.UserName = uname
	ul.LoginCount = lcount
	ul.PassErr = pcount
	UserLogin = append(UserLogin,ul)
	return true
}
//根据用户名查询当天信息
func FindUserLoignByUname(uname string)UserLCount{
	var ul UserLCount
	for i:=0;i<len(UserLogin);i++{
		if UserLogin[i].UserName == uname{
			ul = UserLogin[i]
			return ul
		}
	}
	return ul
}
//判断用户名是否存在，若不存在添加，若存在修改其登陆次数
func JudgeuserNameInLogin(uname string) bool{
	for i:=0;i<len(UserLogin);i++{
		if UserLogin[i].UserName == uname{
			UserLogin[i].LoginCount += 1
			return true
		}
	}
	if AddUserInUserLogin(uname,1,0){
		return true
	}
	return false
}

//判断用户名是否存在，若不存在添加，若存在修改其登陆次数
func JudgeuserNameInPassErr(uname string) bool{
	for i:=0;i<len(UserLogin);i++{
		if UserLogin[i].UserName == uname{
			UserLogin[i].PassErr += 1
			return true
		}
	}
	if AddUserInUserLogin(uname,0,1){
		return true
	}
	return false
}

//每天0点初始化用户登陆次数及密码错误次数
func UpdateUserLCount() bool{
	for i:=0;i<len(UserLogin);i++{
		if UserLogin[i].PassErr != 0 || UserLogin[i].LoginCount != 0{
			UserLogin[i].PassErr = 0
			UserLogin[i].LoginCount = 0
		}
	}
	return true
}
//判断客户端信息是否存在
func JudgeClient(guid string) (bool,int){
	for i:=0;i<len(UserConn);i++{
		if guid == UserConn[i].GUID{
			return true,i
		}
	}
	return false,-1
}
//保存客户端发送的信息
func SaveClient(guid string, conn *websocket.Conn) bool {
	var clientMsg CLIENTCONN
	if  conn == nil {
		fmt.Println("传入的用户信息有误！")
		return false
	}

	_,num := JudgeClient(guid)
	if num != -1{
		UserConn[num].GUID = guid
		UserConn[num].Conn = conn
	}else {
		clientMsg.GUID = guid
		clientMsg.Conn = conn
		clientMsg.Username = ""
		clientMsg.Password = ""
		clientMsg.Validatecode = ""
		clientMsg.Tname = ""
		//clientMsg.LZcount = 0
		clientMsg.Guid = ""
		UserConn = append(UserConn, clientMsg)
	}
	return true
}

//根据GUID查询用户的用户名
func FindUserNameByGUID(guid string) string{
	for i:=0;i<len(UserConn);i++{
		if guid == UserConn[i].GUID{
			return UserConn[i].Username
		}
	}
	return ""
}

//修改同一连接的登陆、注册次数
func UpdateConnLZcount(guid string)bool{
	for i:=0;i<len(UserConn);i++{
		if guid == UserConn[i].GUID{
			//UserConn[i].LZcount += 1
			return true
		}
	}
	return false
}

//判断连接的GUID是否存在
func JudgeGUID(guid string) bool{
	if len(guid)<=0{
		fmt.Println("无效的guid")
		return false
	}
	for i:=0;i<len(UserConn);i++{
		if UserConn[i].GUID == guid{
			return true
		}
	}
	fmt.Println("GUID不存在！")
	return false
}
//修改客户端连接中的信息
func UpdaConnMsg(guid string,uname string,pass string) bool{
	if !JudgeGUID(guid){
		return false
	}
	for i:=0;i<len(UserConn);i++{
		if UserConn[i].GUID == guid{
			UserConn[i].Username = uname
			UserConn[i].Password = pass
			return true
		}
	}
	return false
}

//修改客户端连接中的信息
func UpdaConnMsg_copy(guid string,conn *websocket.Conn) bool{
	for i:=0;i<len(UserConn);i++{
		if UserConn[i].Conn == conn{
			UserConn[i].GUID = guid
			return true
		}
	}
	return false
}



//删除客户端连接信息
func DelUserConn(conn *websocket.Conn) bool{
	if conn == nil{
		return false
	}
	for i:=0;i<len(UserConn);i++{
		if UserConn[i].Conn == conn{
			UserConn[i].Conn.Close()
			UserConn[i].Conn = nil
			UserConn = DeleteArrElement(UserConn,i)
			return true
		}
	}
	return false
}
//删除已验证过或过期的验证码
func DelUserValidate(guid string) bool {
	if !JudgeGUID(guid){
		return false
	}
	for i := 0; i < len(UserConn); i++ {
		if UserConn[i].GUID == guid {
			UserConn[i].Validatecode = ""
			return true
		}
	}
	fmt.Println("没有找到对应的连接GUID！")
	return false
}

//剔除数组中的某个元素
func DeleteArrElement(arr []CLIENTCONN, num int) []CLIENTCONN {
	darr := make([]CLIENTCONN, 0)
	if num > 0 && num < len(arr)-1 {
		darr = append(darr, arr[:num]...)
		darr = append(darr, arr[num+1:]...)
	} else if num == len(arr)-1 {
		darr = append(darr, arr[:num]...)
	} else if num == 0 {
		darr = append(darr, arr[1:]...)
	}
	return darr
}

//给客户端发送消息
func SendMsgInClient(guid string,msg []byte) bool {
	mutex.Lock()
	defer mutex.Unlock()
	if !JudgeGUID(guid){
		return false
	}
	for i := 0; i < len(UserConn); i++ {
		if guid == UserConn[i].GUID  && UserConn[i].Conn != nil{
			if UserConn[i].Conn.WriteMessage(websocket.TextMessage, msg) !=nil{
				unsubscribe <- models.MsgLeave{Conn:UserConn[i].Conn}
				fmt.Println("注册结果发送失败")
				return false
			}
			return true
		}
	}
	return false
}

//给sharemem服务器发送消息
func SendMsgInSha(msg []byte) bool{
	if ServerConn != nil{
		if ServerConn.WriteMessage(websocket.TextMessage, msg) != nil{
			fmt.Println("向DB服务器发送成功！")
			return false
		}
		return true
	}
	fmt.Println("与sharemem服务器的连接为空")
	return false
}

//接受到登录的db服务器消息处理
func RecDBMsgInfo(data []byte) bool{
	var srs msgtype.Sha_Ret_Find_Union
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_FIND_UNION_U, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}

	return true
}






//接受到登录的db服务器消息处理
func RecDBMsgInfo_RoleSkin(data []byte) bool{
	var srs msgtype.Sha_Ret_Find_RoleSkin
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_FIND_ROLESKIN_U, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}

	return true
}

//接受到登录的db服务器消息处理
func RecDBMsgInfo_RoleSkin_NM(data []byte) bool{
	var srs msgtype.Sha_Ret_RoleSkin_NN
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_FIND_ROLESKIN_NM_U, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}

	return true
}


//sharemem返回充值结果
func RecDBMsgInfo_RoleSkin_NM_Imitate_Pay(data []byte) bool{
	var srs msgtype.Sha_Ret_Imitate_Pay
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_IMITSTE_PAY, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}

	return true
}



//sharemem返回大区汇总信息
func RecDBMsgInfo_Collect(data []byte) bool{
	var srs msgtype.Sha_Ret_Collect
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_COLLECT, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}

	return true
}


//sharemem返回发送邮件的结果
func RecDBMsgInfo_Send_Mail(data []byte) bool{
	var srs msgtype.Back_Req_Send_Mail
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_MAIL, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}

	return true
}


//sharemem返回修改公告的结果
func RecDBMsgInfo_Ann(data []byte) bool{
	var srs msgtype.BACK_RSE_NOTICE
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_ANN, data)
	if !SendMsgInClient(srs.UG,finalData){
	return false
	}
	return true
}


//sharemem返回公告信息
func RecDBMsgInfo_Ann_inform(data []byte) bool{
	var srs msgtype.BACK_RSE_SEANOTICE
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_SRL_ANN, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}


//sharemem返回公告信息
func RecDBMsgInfo_Ann_Update(data []byte) bool{
	var srs msgtype.BACK_RSE_AMENDNOTICE
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_UPDATE_ANN, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}


//sharemem返回游戏内公告添加成功与否信息
func RecDBMsgInfo_Ann_add(data []byte) bool{
	var srs msgtype.BACK_RSE_AMENDNOTICE
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_ANN, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}



//sharemem返回游戏内公告信息
func RecDBMsg_Ann_inform(data []byte) bool{
	var srs msgtype.BACK_RSE_SEAGAMENOTICE
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_SRL_ANN, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}


//sharemem返回后台修改数据是否成功
func RecDBMsgInfo_Ann_Updat_informe(data []byte) bool{
	var srs msgtype.BACK_RSE_AMENDNOTICE
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_UPDATE_ANN, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}



//sharemem返回后台添加游戏内活动
func RecDBMsgInfo_insert_informe(data []byte) bool{
	var srs msgtype.BACK_RSE_GAMEINNOTICE
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_ACTIVITY, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}


//sharemem返回后台查询游戏内活动公告
func RecDBMsgInfo_select_informe(data []byte) bool{
	var srs msgtype.BACK_RSE_SEAGAMEINNOTICE
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_SRL_ACTIVITY, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}

//sharemem返回后台修改游戏内活动公告
func RecDBMsgInfo_Update_informe(data []byte) bool{
	var srs msgtype.BACK_RSE_AMENDSEAGAMEINNOTICE
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_UPDATE_ACTIVITY, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}

//sharemem返回后台查询VIP信息
func RecDBMsgInfo_Select_informe_Vip(data []byte) bool{
	var srs msgtype.BACK_SEA_FINDVIP
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_SRL_VIP, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}


//sharemem返回后台查询VIP信息
func RecDBMsgInfo_Select_informe_Shopdetail(data []byte) bool{
	var srs msgtype.BACK_RSE_FINDSHOP
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_UPDATE_SHPPING, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}



//sharemem返回后台核弹信息
func RecDBMsgInfo_Select_informe_NUCLEARMSG(data []byte) bool{
	var srs msgtype.BACK_RSE_FINDSHOP
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_UPDATE_NUCLEARMSG, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}


//sharemem后台返回支付日志内容
func RecDBMsgInfo_Select_informe_pay(data []byte) bool{
	var srs msgtype.BACK_RSE_FINDSHOP
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_UPDATE_pay, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}



//sharemem后台查询在线数据  MSG_RET_GAME_PLAYERDATA
func RecDBMsgInfo_Select_informe_Onlindata(data []byte) bool{
	var srs msgtype.BACK_RSE_ONLINEDATA
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_ONLINEDATA, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}



//sharemem后台查询最高在线人数  MSG_RET_GAME_PLAYERDATA
func RecDBMsgInfo_Select_informe_OnlinTop(data []byte) bool{
	var srs msgtype.BACK_RSE_ONLINEDATA
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_PLAYERDATA, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}




//sharemem后台查询最高在线人数  MSG_RET_GAME_PLAYERDATA
func RecDBMsgInfo_Select_informe_001(data []byte) bool{
	var srs msgtype.BACK_RSE_ONLINEDATA
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_PAYDATA_01, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}


//sharemem后台查询后台返回充值卡详情
func RecDBMsgInfo_Select_CREATECARDS_COPY(data []byte) bool{
	var srs msgtype.BACK_RSE_CREATEPAYCARDS
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_CREATECARDS_COPY, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}



//sharemem后台返回充值卡详情
func RecDBMsgInfo_Select_CARDSPAYUSE(data []byte) bool{
	var srs msgtype.BAKC_RSE_PAYCARDSUSE
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_CREATECARDS_COPY, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}



//返回给后台支付查询
func RecDBMsgInfo_Select_pay(data []byte) bool{
	var srs msgtype.Sha_RSE_USERPAYMSG
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_PAY, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}




//返回给后台增加金币
func RecDBMsgInfo_Select_money(data []byte) bool{
	var srs msgtype.Sha_RSE_USERPAYMSG
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_IMITSTE_PAY, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}



//返回后台核弹数据
func Get_Bomb_inform(data []byte) bool{
	var srs msgtype.BACK_DET_SELECT_BOMB
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}

	var msg msgtype.BACK_DET_SELECT_BOMB_USER
	msg.BbCt = srs.BbCt1 +  srs.BbCt2 +  srs.BbCt3 +  srs.BbShop1 +  srs.BbShop2 +  srs.BbShop3
	msg.BbGv = srs.BbGv1 +  srs.BbGv2 +  srs.BbGv3
	msg.BbUe = srs.BbUe1 +  srs.BbUe2 +  srs.BbUe3
	msg.BbUT = srs.BbUT1 +  srs.BbUT2 +  srs.BbUT3
	msg.ERR = srs.Err
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_BOMB, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}



//返回后台核弹数据
func Get_Bomb_inform_rose(data []byte) bool{
	var srs msgtype.BACK_DET_SELECT_BOMB
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}

	var msg msgtype.BACK_DET_SELECT_BOMB_USER
	msg.BbCt = srs.BbCt1 +  srs.BbCt2 +  srs.BbCt3 +  srs.BbShop1 +  srs.BbShop2 +  srs.BbShop3
	msg.BbGv = srs.BbGv1 +  srs.BbGv2 +  srs.BbGv3
	msg.BbUe = srs.BbUe1 +  srs.BbUe2 +  srs.BbUe3
	msg.BbUT = srs.BbUT1 +  srs.BbUT2 +  srs.BbUT3
	msg.ERR = srs.Err
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_BOMB, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}


//返回后台金币排行榜
func Get_Bomb_User_inform(data []byte) bool{
	var srs msgtype.Sha_RSE_User
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}

	var msg msgtype.Sha_RSE_User_back
	msg.CT = srs.CT
	msg.UMG = srs.UMG
	msg.Errcode = srs.Errcode
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_USER, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}



//返回后台金币排行榜
func Get_Bomb_User_inform_user(data []byte) bool{
	var srs msgtype.Sha_RSE_User
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}

	var msg msgtype.Sha_RSE_User_back
	msg.CT = srs.CT
	msg.UMG = srs.UMG
	msg.Errcode = srs.Errcode
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_USER, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}

//返回后台金币排行榜
func Get_Bomb_inform_copy(data []byte) bool{
	var srs msgtype.BACK_DET_SPECIAL_PROPS
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}

	var msg msgtype.BACK_DET_SPECIAL_PROPS
	msg.ST = srs.ST
	msg.QueType = srs.QueType
	msg.SN = srs.SN
	msg.NUM = srs.NUM
	msg.USERS = srs.USERS
	msg.Err = srs.Err
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_USER, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}


//返回后台金币排行榜
func Get_Bomb_inform_vip(data []byte) bool{
	var srs msgtype.BACK_SET_VIP_PROPS
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	var msg msgtype.BACK_SET_VIP_PROPS
	msg.UG = srs.UG
	msg.VF = srs.VF
	msg.VH = srs.VH
	msg.ERR = srs.ERR
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_GET_USER_VIP_HTML, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}

//返回后台金币排行榜
func Get_id_and_name_inform_vip(data []byte) bool{
	var srs msgtype.BACK_SET_VIP_UID_AND_NAME
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	var msg msgtype.BACK_SET_VIP_UID_AND_NAME
	msg.UG = srs.UG
	msg.Viplist = srs.Viplist
	msg.Err = srs.Err
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_GET_USER_VIP_HTML, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}

//返回后台销售总况
func Get_Bomb_inform_shop(data []byte) bool{
	var srs msgtype.BACK_SEQ_ALLP_GENERAL
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	var msg msgtype.BACK_SEQ_ALLP_GENERAL
	msg.UG = srs.UG
	msg.CT = srs.CT
	msg.CSDJ = srs.CSDJ
	msg.XSDJ = srs.XSDJ
	msg.GMRS = srs.GMRS
	msg.NUM = srs.NUM
	msg.Err = srs.Err
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_GET_SELECT_USER_GENERAL_HTML, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}






//返回玫瑰花数据总汇数据
func Get_Bomb_inform_data(data []byte) bool{
	var srs msgtype.BACK_DET_SPECIAL_PROPS
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	var msg msgtype.BACK_DET_SPECIAL_PROPS
	msg.UG = srs.UG
	msg.ST = srs.ST
	msg.QueType = srs.QueType
	msg.SN = srs.SN
	msg.NUM = srs.NUM
	msg.CT = srs.CT
	msg.USERS = srs.USERS
	msg.Err = srs.Err
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_GET_USER_ROSE_BACK, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}













//返回后台销售明细
func Get_Bomb_inform_shopDetailed(data []byte) bool{
	var srs msgtype.BACK_SET_ALL_XSMX_GENERAL
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	var msg msgtype.BACK_SET_ALL_XSMX_GENERAL
	msg.UG = srs.UG
	msg.CT = srs.CT
	msg.NUM = srs.NUM
	msg.Err = srs.Err

	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_GET_SELECT_USER_DETAILS_HTML, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}

//返回后台支付查询数据
func Get_Bomb_inform_pay(data []byte) bool{
	var srs msgtype.BACK_SET_PAY_GENERAL
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	var msg msgtype.BACK_SET_PAY_GENERAL
	//msg.BG = srs.BG
	//msg.UG = srs.UG
	//msg.NAME = srs.NAME
	//msg.UID = srs.UID
	//msg.ST = srs.ST
	msg.UG = srs.UG
	msg.CT = srs.CT
	msg.BL = srs.BL
	msg.Err = srs.Err

	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_GET_SELECT_USER_PAY_HTML, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}


//后台请求 核弹和玫瑰数据
func  Back_Bomb_the(msg  msgtype.BACK_SEA_SPECIAL_PROPS) bool{
	msg.BG = common.GHOST_Login_GUID
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_SPECIAL_PROPS, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}



//后台请求图表信息数据
func Select_table_inform(ug string  ) bool {
	var msg msgtype.BACK_SEA_VIP_PROPS
	msg.BG = common.GHOST_Login_GUID
	msg.UG = ug
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_USER_VIP, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}


//后台请求图表信息数据
func Select_vip_inform_name(ug string,name string ,uid int  ) bool {
	var msg msgtype.BACK_SEA_VIP_UID_AND_NAME
	msg.BG = common.GHOST_Login_GUID
	msg.UG = ug
	msg.NAME = name
	msg.UID = uid
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_SELECT_USER_VIP, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}
//后台请求销售明细数据
func Select_shop_inform_name(ug string,name string ,uid int, ct int, sn int , num int ) bool {
	var msg msgtype.BACK_SEA_ALLP_GENERAL
	msg.BG = common.GHOST_Login_GUID
	msg.UG = ug
	msg.CT = ct
	msg.SN = sn
	msg.NUM = num
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_SELECT_USER_GENERAL, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}

//后台请求销售总况数据
func Select_shopDetailed_inform_name(ug string,name string ,uid int  ) bool {
	var msg msgtype.BACK_SEA_ALL_XSMX_GENERAL
	msg.BG = common.GHOST_Login_GUID
	msg.UG = ug
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_SELECT_USER_DETAILS, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}
//后台请求支付查询数据
func Select_pay_inform_name(ug string,name string ,uid int, st int ,sn int, num int) bool {
	var msg msgtype.BACK_SEA_PAY_GENERAL
	msg.BG = common.GHOST_Login_GUID
	msg.UG = ug
	msg.NAME = name
	msg.UID = uid
	msg.ST = st
	msg.SN = sn
	msg.NUM = num
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_SELECT_USER_PAY, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}


//返回后台金币排行榜
func Get_BACK_inform_administrator(data []byte) bool{
	var srs msgtype.BACK_RSE_ADMAIN
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}

	var msg msgtype.BACK_RSE_ADMAIN
	msg.Err = srs.Err
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_USER, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}


//返回后台金币排行榜
func Get_BACK_inform_administrator_Delect(data []byte) bool{
	var srs msgtype.BACK_RSE_ADMAIN_DELECT
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}

	var msg msgtype.BACK_RSE_ADMAIN_DELECT
	msg.Err = srs.Err
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_GET_USER_DELECT_USER, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}



//返回后台金币排行榜   int64  和 注释
func Get_BACK_insert_administrator_Monery(data []byte) bool{
	var srs msgtype.BACK_RET_RECHARGEWITH
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}

	var msg msgtype.BACK_RSE_ADMAIN_DELECT
	msg.Err = srs.Err
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_GET_USER_DELECT_USER, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}





func Get_BACK_user_inform(data []byte) bool{
	var srs msgtype.Sha_RSE_USERMSG_back
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}

	var msg msgtype.Sha_RSE_USERMSG_back
	msg = srs
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_GET_USER_DELECT_USER, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}


//sharemem返回给后台用户信息
func Get_bacr_game_inform(data []byte) bool{
	var srs msgtype.Sha_RSE_USERMSG_back
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}

	var msg msgtype.Sha_RSE_USERMSG_back
	msg = srs
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_GET_USER_DELECT_USER, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}


//返回查询逻辑服比赛详情
func Get_bacr_game_inform_copy(data []byte) bool{
	var srs msgtype.BACK_RET_GAMEDRAW
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}

	var msg msgtype.BACK_RET_GAMEDRAW
	msg = srs
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_GET_USER_DELECT_USER, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}

//返回查询所有管理员信息
func Get_bacr_game_inform_ADMINS(data []byte) bool{
	var srs msgtype.RET_Select_Admini_INFORN
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	fmt.Println("========Get_bacr_game_inform_copy======",srs)
	var msg msgtype.RET_Select_Admini_INFORN
	msg = srs
	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_GET_SELECT_USER_ADMIN, carddata)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}




//sharemem后台查询最高在线人数  MSG_RET_GAME_PLAYERDATA
func RecDBMsgInfo_Select_CREATECARDS(data []byte) bool{
	var srs msgtype.BACK_RSE_CREATEPAYCARDS
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_CREATECARDS, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}







//sharemem返回封禁用户聊天的结果
func ShaRetSUResult(data []byte) bool{
	var srs msgtype.Sha_RSE_CLOSEUMSG
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_DE_ARCHIVE_U, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}



//sharemem返回解封用户聊天的结果
func ResDBreturn(data []byte) bool {
	var srs msgtype.Sha_Ret_De_Banned_Post
	err := json.Unmarshal(data,&srs)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_DE_BANNED_POST_U, data)
	if !SendMsgInClient(srs.UG,finalData){
		return false
	}
	return true
}
//客户端请求短信验证码
func ResClientValidate(msg msgtype.UserRegister) bool {
	var register msgtype.Validatecode_Re
	if !JudgeGUID(msg.GUID){
		return false
	}
	if len(msg.Username) <= 0 || validate(msg.Username) == false{
		fmt.Println("客户端发送数据有误！")
		register.Errcode = 43
		carddata, err := json.Marshal(register)
		if err != nil {
			fmt.Println("carddata err ")
		}
		finalData := msgtype.CombinationData(msgtype.MSG_RET_VALICODE, carddata)
		if !SendMsgInClient(msg.GUID,finalData){
			return false
		}
		return true
	}
	str := GetRandom()
	for i:=0;i<len(UserConn);i++{
		if UserConn[i].GUID == msg.GUID && UserConn[i].Conn != nil{
			UserConn[i].Validatecode = str
			if Request3(msg.Username, str) {
				register.Errcode = -1
				register.GUID = msg.GUID
				register.Validatecode = str
				carddata, err := json.Marshal(register)
				if err != nil {
					fmt.Println("carddata err ")
				}
				finalData := msgtype.CombinationData(msgtype.MSG_RET_VALICODE, carddata)
				if UserConn[i].Conn.WriteMessage(websocket.TextMessage, finalData) != nil{
					unsubscribe <- models.MsgLeave{Conn:UserConn[i].Conn}
					fmt.Println("向客户端发送信号失败！")
					return false
				}
				fmt.Println("发送短信验证码成功！")
				return true
			}
		}
	}
	return false
}



//后台请求查询禁言用户信息
func JudgeValidatecode(data []byte) bool{
	var jv msgtype.BACK_SEA_USERTALKCLOSE
	err := json.Unmarshal(data,&jv)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	//sn,num,sid int
	 if Select_User_Bpuser_NN(jv.UG,jv.NickName,jv.USid,jv.USid,jv.SID){
		 fmt.Println("send JudgeValidatecode message success!")
	 }
	return true
}

//客户端请求禁言
func ClientSendUpdatePass(data []byte) bool{
	var rup msgtype.BACK_SEA_CLOSEUMSG
	err := json.Unmarshal(data,&rup)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}

	if Select_User_Banned_To_Post(rup.UG,rup.NickName,rup.MC,rup.WhClose){
		fmt.Println("send ClientSendUpdatePass message success!")
	}
	return true
}
//sharemem返回解封用户账号的结果
func RecShaRetUpPass(data []byte) bool{
	var srr msgtype.ShaRetResult
	err := json.Unmarshal(data,&srr)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	var rr msgtype.RetResult
	rr.Errcode = srr.Errcode
	carddata, err := json.Marshal(rr)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_UPPASS, carddata)
	fmt.Println("finalData:",string(finalData))
	if !SendMsgInClient(srr.UG,finalData){
		return false
	}
	return true
}


//客户端请求解封禁言
func ClienReqRandNickName(data []byte) bool{
	var crnn msgtype.Back_Req_De_Banned_Post
	err := json.Unmarshal(data,&crnn)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if Select_User_De_Banned_Post(crnn.UG,crnn.ST,crnn.ID){
		fmt.Println("send ClientSendUpdatePass message success!")

	}
	return true
}

//客户端请求封禁账户
func ClientReqThirdLogin(data []byte) bool{
	var rup msgtype.BACK_SEA_CLOSEANDOPEN
	err := json.Unmarshal(data,&rup)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	Select_User_Banned_User(rup.UG,rup.Nickname,rup.WhClose,rup.SID,rup.Close)
	return true
}

//后台请求查询用户角色信息
func ClientReqThird_Find_RoleSkin(data []byte) bool{
	fmt.Println("=-=========",string(data))
	var rup msgtype.Back_Req_Find_RoleSkin
	err := json.Unmarshal(data,&rup)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	 if ShaRetLogin_Select(rup.UG,rup.UID,rup.SID,rup.SN,rup.NUM) {
		 fmt.Println("send ClientReqThird_Find_RoleSkin message success!")
	 }
	return true
}



//后台请求查询用户角色信息
func ClientReqThird_RoleSkin_NM(data []byte) bool{
	var rup msgtype.Back_Req_RoleSkin_NM
	err := json.Unmarshal(data,&rup)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if ShaRetLogin_RoleSkin(rup.UG,rup.NM,rup.UID,rup.SID,) {
		fmt.Println("send ClientReqThird_Find_RoleSkin message success!")
	}
	return true
}



//sharemem返回第三方第一次登陆
func ShaRetFirstLogin(data []byte) bool{
	var rtl msgtype.Sha_RSE_CLOSEANDOPEN
	err := json.Unmarshal(data,&rtl)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	carddata, err := json.Marshal(rtl)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_DE_ARCHIVE_U, carddata)
	fmt.Println("finalData:",string(finalData))
	if !SendMsgInClient(rtl.UG,finalData){
		return false
	}
	return false
}


//客户端请求工会日志
func ClientReqJudgeNC(data []byte) bool{
	var rup msgtype.Back_Req_Find_Union_user
	err := json.Unmarshal(data,&rup)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}


	timedate := strings.Replace(rup.ST, "/", "-", -1) //结束时间
	if len(timedate) <= 0 {
		fmt.Println("===========传入结束时间有误")
	}else{
		timedate = timedate[0:10]
		timedate =  timedate
	}
	tm2, _ := time.Parse("2006-01-02", timedate)

	//tm3, _ := time.Parse("2006-01-02", timedate)
	timedate1 := strings.Replace(rup.ET, "/", "-", -1) //开始时间
	if len(timedate1) <= 0 {
		fmt.Println("===========传入开始时间有误")
	}else{
		timedate1 = timedate1[0:10]
		timedate1 =  timedate1
	}
	tm1, _ := time.Parse("2006-01-02", timedate1)

	if Select_User_Find_Union(rup.UG,rup.NM,rup.SID,rup.SN,rup.NUM,tm1.Unix(),tm2.Unix()){
		fmt.Println("send ClientReqJudgeNC message success!")
	}

	return true
}


//后台请求给用户充值（金币和钻石）
func ClientReq_Imitate_Pay(data []byte) bool{
	var rup msgtype.BACK_SEA_SHOWMONEY
	err := json.Unmarshal(data,&rup)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if ShaRetGame_Select_Money(rup.UG,rup.Diamonds,rup.Sid,rup.Golds){
		fmt.Println("send ClientReq_Imitate_Pay message success!")
	}
	return true
}





//后台请求给用户发送邮件
func ClientReq_Send_Mail(data []byte) bool{
	var rup msgtype.Back_Req_Send_Mail_user
	err := json.Unmarshal(data,&rup)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	var  msg_copy []msgtype.SAccessory

	//for i:= 0 ; i< len(rup.PA) ;i++  {
	//	var  msg_emil  msgtype.SAccessory
	//	if rup.PA[i] == "元宝"{
	//		if len(msg_copy) == 0{
	//			msg_emil.Prop = 1
	//			msg_emil.Num = 0
	//			msg_copy = append(msg_copy,msg_emil)
	//		}
	//		//for s:= 0; s<len(msg_copy) ; s++ {
	//		//	if msg_copy[s].Prop == 1 {
	//		//		continue
	//		//	}else{
	//		//		msg_emil.Prop = 1
	//		//		msg_emil.Num = 0
	//		//		msg_copy = append(msg_copy,msg_emil)
	//		//	}
	//		//}
	//	}else if rup.PA[i] == "核弹"{
	//		if len(msg_copy) == 0{
	//			msg_emil.Prop = 2
	//			msg_emil.Num = 0
	//			msg_copy = append(msg_copy,msg_emil)
	//		}
	//		for s:= 0; s<len(msg_copy) ; s++ {
	//			if msg_copy[s].Prop == 0 {
	//				continue
	//			}else{
	//				msg_emil.Prop = 2
	//				msg_emil.Num = 0
	//				msg_copy = append(msg_copy,msg_emil)
	//			}
	//		}
	//	}
	//}
	//for i:= 0 ; i<= len(rup.PA)-1 ;i++  {
	//	if rup.PA[i] == "元宝"{
	//		fmt.Println("===============元宝")
	//		//for s:= 0; s<len(msg_copy) ; s++ {
	//		//	if msg_copy[s].Prop == 1 {
	//		//		Y_state_copy,error := strconv.Atoi(rup.PA[i+1])
	//		//		if error != nil{
	//		//			fmt.Println("字符串转换成整数失败",rup.PA[i+1])
	//		//		}
	//		//		msg_copy[s].Num += Y_state_copy
	//		//	}
	//		//}
	//	}else if rup.PA[i] == "核弹"{
	//		fmt.Println("===============核弹")
	//		//for s:= 0; s<len(msg_copy) ; s++ {
	//		//	if msg_copy[s].Prop == 2 {
	//		//		Y_state_copy,error := strconv.Atoi(rup.PA[i+1])
	//		//		if error != nil{
	//		//			fmt.Println("字符串转换成整数失败",rup.PA[i+1])
	//		//		}
	//		//		msg_copy[s].Num += Y_state_copy
	//		//	}
	//		//}
	//	}
	//}
	fmt.Println("=========Back_Req_Send_Mail_user=======",rup.UL)

	for i:= 0 ; i< len(rup.PA) ;i++  {
		var  msg_emil  msgtype.SAccessory
		if rup.PA[i] == "核弹"{
			if len(msg_copy) == 0{
				msg_emil.Prop = 2
				msg_emil.Num = 0
				msg_copy = append(msg_copy,msg_emil)
			}
			for s:= 0; s<len(msg_copy) ; s++ {
				if msg_copy[s].Prop == 2 {
					continue
				}else{
					msg_emil.Prop = 2
					msg_emil.Num = 0
					msg_copy = append(msg_copy,msg_emil)
				}
			}
		}else if rup.PA[i] == "元宝"{
			if len(msg_copy) == 0{
				msg_emil.Prop = 1
				msg_emil.Num = 0
				msg_copy = append(msg_copy,msg_emil)
			}
			for s:= 0; s<len(msg_copy) ; s++ {
				if msg_copy[s].Prop == 1 {
					continue
				}else{
					msg_emil.Prop = 1
					msg_emil.Num = 0
					msg_copy = append(msg_copy,msg_emil)
				}
			}
		}
	}
	for i:= 0 ; i<= len(rup.PA)-1 ;i++  {
		if rup.PA[i] == "元宝"{
			for s:= 0; s<len(msg_copy) ; s++ {
				if msg_copy[s].Prop == 1 {
					Y_state_copy,error := strconv.Atoi(rup.PA[i+1])
					if error != nil{
						fmt.Println("字符串转换成整数失败",rup.PA[i+1])
					}
					msg_copy[s].Num += Y_state_copy
				}
			}
		}else if rup.PA[i] == "核弹"{
			for s:= 0; s<len(msg_copy) ; s++ {
				if msg_copy[s].Prop == 2 {
					Y_state_copy,error := strconv.Atoi(rup.PA[i+1])
					if error != nil{
						fmt.Println("字符串转换成整数失败",rup.PA[i+1])
					}
					msg_copy[s].Num += Y_state_copy
				}
			}
		}
	}



	//var Uid  []string
	str := strings.Replace(rup.SA, "，", ",", -1)
	uid := strings.Split(str,",")
	//for i:= 0;i<len(uid) ;i++  {
	//	uids := strings.Split(uid[i],",")
	//	for j:= 0;j<len(uids) ; j++ {
	//		Uid = append(Uid,uids[j])
	//	}
	//}

	if ShaRetLogin_Send_Mail(rup.UG,rup.TT,rup.BTime,rup.CTime,rup.MS,rup.SID,msg_copy,uid,rup.UL){
		fmt.Println("send ClientReq_Send_Mail message success!")
	}
	return true
}




//后台请求大区汇总信息
func ClientReq_Collect(data []byte) bool{
	var rup msgtype.Back_Req_Collect_User
	err := json.Unmarshal(data,&rup)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	timedate := strings.Replace(rup.ST, "/", "-", -1) //结束时间
	if len(timedate) <= 0 {
		fmt.Println("===========传入结束时间有误")
	}else{
		timedate = timedate[0:10]
		timedate =  timedate
	}
	tm2, _ := time.Parse("2006-01-02", timedate)

	//tm3, _ := time.Parse("2006-01-02", timedate)
	timedate1 := strings.Replace(rup.ET, "/", "-", -1) //开始时间
	if len(timedate1) <= 0 {
		fmt.Println("===========传入开始时间有误")
	}else{
		timedate1 = timedate1[0:10]
		timedate1 =  timedate1
	}
	tm1, _ := time.Parse("2006-01-02", timedate1)
	if ShaRetLogin_Collect(rup.UG,rup.SID,tm1.Unix(),tm2.Unix()){
		fmt.Println("send ClientReqJudgeNC message success!")
	}
	return true
}






//sharemem返回修改昵称的结果
func ShaRetUpdateNC(data []byte) bool {
	var srjn msgtype.Sha_RSE_USERTALKCLOSE
	err := json.Unmarshal(data,&srjn)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_DE_BPUSER_U, data)
	fmt.Println("finalData:",string(finalData))
	if !SendMsgInClient(srjn.UG,finalData){
		return false
	}
	return false
}

//生成验证码================================================================================
//返回六个数字字符串
func GetRandom() string {
	var str string = ""
	//取六个数字
	for i := 0; i < PLACES; i++ {
		rnd := rand.Intn(10)
		fmt.Println("rnd:",rnd)
		str = str + fmt.Sprintf("%d", rnd)
	}
	return str
}

//生成随机数字字符串
func GetRandomInt(num int) string {
	str := "0123456789"
	bytes := []byte(str)
	result := []byte{}
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	for i := 0; i < num; i++ {
		result = append(result, bytes[r.Intn(len(bytes))])
	}
	fmt.Println("result:",len(result),"字符串长度：",len(string(result)))
	return string(result)
}

//根据num求出一个随机数
func Generate_Randnum(maxnumber int) int {
	rand.Seed(time.Now().Unix())
	rnd := rand.Intn(maxnumber)
	fmt.Printf("rand is %v\n", rnd)
	return rnd
}


////////////////////////////////////////////////////////手机号验证//////////////////////////////////////////////////////
const (
	regular = "^(13[0-9]|14[579]|15[0-35-9]|17[0-35-8]|18[0-9])\\d{8}$"
)

func validate(mobileNum string) bool { //true为手机号、false不是手机号
	reg := regexp.MustCompile(regular)
	return reg.MatchString(mobileNum)
}

//判断用户名、密码、昵称的位数
func JudgeUPN(uname string,pass string) int{
	if !validate(uname){
		return 43
	}
	if len(pass)<6 || len(pass)>16{
		return 44
	}
	return -1
}

//////////////////////////////////////////////////////////////读取txt文件///////////////////////////////////////////////
var KeyWord = make([]string,0)
//读取txt文件中敏感字符,保存在缓存
func ReadTxt(){
	f, err := os.Open("./docs/words.txt") //打开文件
	fmt.Println("err:",err)
	defer f.Close()                         //打开文件出错处理
	fmt.Println("nil == err:",nil == err)
	if nil == err {
		buff := bufio.NewReader(f) //读入缓存
		for {
			line, err := buff.ReadString('\n') //以'\n'为结束符读入一行
			line = strings.Replace(line, "\n", "", -1)
			if err != nil || io.EOF == err {
				break
			}
			nums := strings.Split(line, ",")
			for _, value := range nums {
				KeyWord = append(KeyWord,value)
			}
		}
	}
}

//判断昵称中是否含有敏感字符
func JudgeKeyword(str string) bool{
	for i:=0;i<len(KeyWord);i++{
		if strings.Contains(str,KeyWord[i]){
			return true
		}
	}
	return false
}


var NickName = make([]string,0)

//读取txt文件中昵称,保存在缓存
func ReadTxtNickName(){
	f, err := os.Open("./docs/nickname.txt") //打开文件
	fmt.Println("err:",err)
	defer f.Close()                         //打开文件出错处理
	fmt.Println("nil == err:",nil == err)
	if nil == err {
		buff := bufio.NewReader(f) //读入缓存
		for {
			line, err := buff.ReadString('\n') //以'\n'为结束符读入一行
			line = strings.Replace(line, "\n", "", -1)
			if err != nil || io.EOF == err {
				break
			}
			nums := strings.Split(line, ",")
			for _, value := range nums {
				NickName = append(NickName,value)
			}
		}
	}
}

//获取一个随机的昵称
func GetRandNickName() string{
	var str string = ""
	num := Generate_Randnum(len(NickName)-1)
	str = string(NickName[num]) + GetRandomInt(5)
	str = strings.Replace(str, "\r", "", -1)
	fmt.Println("NickName[num]:",len(NickName[num]),"-------------",NickName[num])
	return str
}

//修改用户GUId
func Update_GUId(UG string,conn *websocket.Conn){



}





//登录包头处理
func DisposeClientMsg(msg msgtype.Back_Req_GM_Login) bool {
	var sendUserMsg msgtype.Back_SEA_GM_Login
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UN = msg.UN
	sendUserMsg.PW = msg.PW
	inserdata, err := json.Marshal(sendUserMsg)
	if err != nil {
		log.Println(err)
		return false
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_ADMIN, inserdata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}



//后台请求查询用户信息
func Select_User(ug string,sn,num,sid int ,uid []string,nn string) bool {
	fmt.Println(":=====Select_User=====",uid)
	var sendUserMsg msgtype.BACK_SEA_USERMSG
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.SID = sid
	sendUserMsg.UID = uid
	sendUserMsg.SN = sn
	sendUserMsg.NUM = num
	inserdata, err := json.Marshal(sendUserMsg)
	if err != nil {
		log.Println(err)
		return false
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_USERMSG, inserdata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}



//后台请求封禁用户账号信息
func Select_User_Banned_NN(ug,nn string,sn,num,sid int ) bool {
	var sendUserMsg msgtype.BACK_SEA_USERCLOSEMSG
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.SID = sid
	sendUserMsg.NickName = nn
	//sendUserMsg.NN = nn
	//sendUserMsg.SN = sn
	//sendUserMsg.NUM = num
	inserdata, err := json.Marshal(sendUserMsg)
	if err != nil {
		log.Println(err)
		return false
	}
	finalData := msgtype.CombinationData(msgtype.B_RSE_FINDUSERCLOSE, inserdata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}



//后台请求封禁用户账号
func Select_User_Banned_User(ug,nn,wl string,db,cs int ) bool {
	var sendUserMsg msgtype.BACK_SEA_CLOSEANDOPEN
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.Nickname = nn
	sendUserMsg.SID = db
	sendUserMsg.WhClose = wl
	sendUserMsg.Close = cs
	inserdata, err := json.Marshal(sendUserMsg)
	if err != nil {
		log.Println(err)
		return false
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_USERCLOSE, inserdata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}




//后台请求解封用户账号
func Select_User_De_Archive(ug string,st int,id int64 ) bool {
	var sendUserMsg msgtype.Back_Req_De_Archive
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.ID = id
	sendUserMsg.ST = st
	inserdata, err := json.Marshal(sendUserMsg)
	if err != nil {
		log.Println(err)
		return false
	}
	finalData := msgtype.CombinationData(msgtype.B_REQ_DE_ARCHIVE, inserdata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}

//后台请求查询禁言用户信息
func Select_User_Bpuser_NN(ug,nn string,sn,num,sid int ) bool {
	var sendUserMsg msgtype.BACK_SEA_USERTALKCLOSE
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.SID = sid
	sendUserMsg.NickName = nn
	sendUserMsg.USid = sn
	//sendUserMsg.NUM = num
	inserdata, err := json.Marshal(sendUserMsg)
	if err != nil {
		log.Println(err)
		return false
	}
	finalData := msgtype.CombinationData(msgtype.B_RSE_FINDUSERTALKCLOSE, inserdata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}



//后台请求将用户禁言
func Select_User_Banned_To_Post(ug,nn string,db int ,WhClose string) bool {
	var sendUserMsg msgtype.BACK_SEA_CLOSEUMSG
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.NickName = nn
	sendUserMsg.MC = db
	sendUserMsg.WhClose = WhClose
	inserdata, err := json.Marshal(sendUserMsg)
	if err != nil {
		log.Println(err)
		return false
	}
	finalData := msgtype.CombinationData(msgtype.B_RSE_USERTALK, inserdata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}


//后台请求解禁用户禁言
func Select_User_De_Banned_Post(ug string,st int,id int64 ) bool {
	var sendUserMsg msgtype.Back_Req_De_Banned_Post
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.ID = id
	sendUserMsg.ST = st
	inserdata, err := json.Marshal(sendUserMsg)
	if err != nil {
		log.Println(err)
		return false
	}
	finalData := msgtype.CombinationData(msgtype.B_REQ_DE_BANNED_POST, inserdata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}




//后台请求查询工会日志信息
func Select_User_Find_Union(ug,nm string,sid,sn,num int,st,et int64 ) bool {
	var sendUserMsg msgtype.Back_Req_Find_Union
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.ST = st
	sendUserMsg.ET = et
	sendUserMsg.NM = nm
	sendUserMsg.SID = sid
	sendUserMsg.SN = sn
	sendUserMsg.NUM = num
	inserdata, err := json.Marshal(sendUserMsg)
	if err != nil {
		log.Println(err)
		return false
	}
	finalData := msgtype.CombinationData(msgtype.B_REQ_FIND_UNION, inserdata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}


//后台请求查询用户角色信息
func ShaRetLogin_Select(ug string ,uid int64,sid,sn,num int) bool {

	var sendUserMsg msgtype.Back_Req_Find_RoleSkin
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.UID = uid
	sendUserMsg.SID = sid
	sendUserMsg.SN = sn
	sendUserMsg.NUM = num
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_REQ_FIND_ROLESKIN, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}



//后台请求查询用户角色信息根据角色名称
func ShaRetLogin_RoleSkin(ug,nm string ,uid int64,sid  int) bool {
	var sendUserMsg msgtype.Back_Req_RoleSkin_NM
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.UID = uid
	sendUserMsg.SID = sid
	sendUserMsg.NM = nm
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_REQ_ROLE_NM, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}






//后台请求给用户充值（金币和钻石）
func ShaRetLogin_RoleSkin_Imitate_Pay(ug,nn string,sid,gd,sn  int) bool {
	var sendUserMsg msgtype.Back_Req_Imitate_Pay
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.SID = sid
	sendUserMsg.NN = nn
	sendUserMsg.GD = gd
	sendUserMsg.SN = sn
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_REQ_IMITATE_PAY, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}


//后台请求大区汇总信息
func ShaRetLogin_Collect(ug string,sid  int ,st,et int64) bool {
	var sendUserMsg msgtype.Back_Req_Collect
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.SID = sid
	sendUserMsg.ST = st
	sendUserMsg.ET = et
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_REQ_COLLECT, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}

//后台请求发送邮件
func ShaRetLogin_Send_Mail(ug,tt,ms,ed,cd string,sid int,pa []msgtype.SAccessory,nick,Ul []string) bool {
	var sendUserMsg msgtype.BACK_SEA_MAIL
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.SID = sid
	sendUserMsg.NickName = nick
	sendUserMsg.USid = 0
	sendUserMsg.Title = tt
	sendUserMsg.Word = cd
	sendUserMsg.Acce = pa
	sendUserMsg.UL = Ul
	//sendUserMsg.BTime = ed
	//sendUserMsg.CTime = cd
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_RSE_MAIL, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}



//后台请求增加公告信息根据后台GUID
func ShaRetLogin_Ann(ug string,bt,ct,tt,wd, wy string,sd int) bool{
	var sendUserMsg msgtype.BACK_SEA_NOTICE
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.SID = sd
	sendUserMsg.BTime = bt
	sendUserMsg.CTime = ct
	sendUserMsg.Title = tt
	sendUserMsg.Word = wd
	sendUserMsg.Way = wy
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_RSE_NOTICE, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}


//后台查看登录公告内容
func ShaRetLogin_Select_ann(ug string, wy string,sd int) bool{
	var sendUserMsg msgtype.BACK_SEA_SEANOTICE
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.SID = sd
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_RSE_SEANOTICE, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}


//后台修改登录公告内容
func ShaRetLogin_Update_ann(ug string,bt,ct,tt,wd, wy string,sd,id int) bool{
	var sendUserMsg msgtype.BACK_SEA_AMENDNOTICE
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.Id = id
	sendUserMsg.SID = sd
	sendUserMsg.BTime = bt
	sendUserMsg.CTime = ct
	sendUserMsg.Title = tt
	sendUserMsg.Word = wd
	sendUserMsg.Way = wy
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_RSE_AMENDNOTICE, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}



//后台添加游戏内公告
func ShaRetLogin_ADD_ann(ug,href string,bt,ct,tt,wd, wy string,sd int) bool{
	var sendUserMsg msgtype.BACK_SEA_GAMENOTICE
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.SID = sd
	sendUserMsg.BTime = bt
	sendUserMsg.CTime = ct
	sendUserMsg.Title = tt
	sendUserMsg.Word = wd
	sendUserMsg.Way = wy
	sendUserMsg.Photo = href
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_RSE_GAME, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}



//后台游戏内公告查询
func ShaRetGame_Select_ann(ug string,id int) bool{
	var sendUserMsg msgtype.BACK_SEA_SEAGAMENOTICE
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.SID = id
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_RSE_GAMENOTICE, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}

//后台修改游戏内公告
func ShaRetGame_Update_ann(ug,href string,bt,ct,tt,wd, wy string,sd,id int) bool{
	var sendUserMsg msgtype.BACK_SEA_AMENDGAMENOTICE
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.Id  = id
	sendUserMsg.SID = sd
	sendUserMsg.BTime = bt
	sendUserMsg.CTime = ct
	sendUserMsg.Title = tt
	sendUserMsg.Word = wd
	sendUserMsg.Way = wy
	sendUserMsg.Photo = href
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_RSE_AMEDNOGAMENOTICE, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}




//后台添加游戏内活动
func ShaRetGame_insert_activity(ug string,bt,ct,tt,wd, wy string,sd int,cahivty string,acce []msgtype.GameAccessory ) bool{
	var sendUserMsg msgtype.BACK_SEA_GAMEINNOTICE
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.SID = sd
	sendUserMsg.BTime = bt
	sendUserMsg.CTime = ct
	sendUserMsg.Title = tt
	sendUserMsg.Word = wd
	sendUserMsg.Way = wy
	sendUserMsg.Activty = cahivty
	sendUserMsg.Acce = acce
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_RSE_ACTIVITY, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}


//后台查看游戏内活动
func ShaRetGame_Select_activity(ug string,sd int) bool{
	var sendUserMsg msgtype.BACK_SEA_SEAGAMEINNOTICE
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.SID = sd
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_RSE_ACTIVITYNOTICE, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}


//后台修改游戏内活动
func ShaRetGame_Update_activity(ug string,bt,ct,tt,wd, wy string,sd,id int,cahivty string,acce []msgtype.GameAccessory ) bool{
	var sendUserMsg msgtype.BACK_SEA_AMENDSEAGAMEINNOTICE
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.Id  = id
	sendUserMsg.SID = sd
	sendUserMsg.BTime = bt
	sendUserMsg.CTime = ct
	sendUserMsg.Title = tt
	sendUserMsg.Word = wd
	sendUserMsg.Way = wy
	sendUserMsg.Activty = cahivty
	sendUserMsg.Acce = acce
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_AMEDNOACTIVITYNOTICE, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}



//后台请求商城消费记录
func ShaRetGame_Findshop(ug string ) bool{
	var sendUserMsg msgtype.BACK_SEA_FINDSHOP
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_SHOPDETAIL, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}



//后台请求商城消费记录
func ShaRetGame_nuclearmsg(ug string ) bool{
	var sendUserMsg msgtype.BACK_SEA_FINDSHOP
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_NUCLEARMSG, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}


//后台请求查询在线数据
func ShaRetGame_Select_msg_onlinedata(ug string ) bool{
	var sendUserMsg msgtype.BACK_SEA_ONLINEDATA
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_ONLINEDATA, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}


//后台请求查询最高人数数据  B_SEA_PAYDATA
func ShaRetGame_Select_msg_top(ug string, s  int) bool{
	var sendUserMsg msgtype.BACK_SEA_PLAYERLV
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.Type = s
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_PLAYERDATA, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}




//后台请求收入日报
func ShaRetGame_Select_msg_001(ug,udate,duate string) bool{
	var sendUserMsg msgtype.BACK_SEA_PAYDATA
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.UDate = udate
	sendUserMsg.DUate = duate
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_PAYDATA, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}


//后台请求生成卡密
func ShaRetGame_insert_CREATECARDS(ug string,CardsN,Ctype int) bool{
	var sendUserMsg msgtype.BACK_SEA_CREATEPAYCARDS
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.CardsN = CardsN
	sendUserMsg.Ctype = Ctype
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_CARDSPAY, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}



//后台请求充值卡使用情况
func ShaRetGame_Select_CREATECARDS(ug,card string,ucards ,dcards  int) bool{
	var sendUserMsg msgtype.BACK_SEA_PAYCARDSUSE
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.UCards = ucards
	sendUserMsg.DCards = dcards
	sendUserMsg.Cards = card
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_CREATECARDS, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}





//后台请求添加金币元宝
func ShaRetGame_Select_Money(ug string, dia ,sid  int,ucards int64) bool{
	var sendUserMsg msgtype. BACK_SEA_SHOWMONEY
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.Sid = sid
	sendUserMsg.Golds = ucards
	sendUserMsg.Diamonds  = dia
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_SHOWMETHEMONEY, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}








//后台请求查询卡密(yonghu)  B_SEA_USERCARDS
func ShaRetGame_Select_CREATECARDS_copy(ug,udate,duate string) bool{
	var sendUserMsg msgtype.BACK_SEA_PAYDATA
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.UDate = udate
	sendUserMsg.DUate = duate
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_CARDSPAYUSE, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}





//后台请求核弹使用情况
func Select_Bomb_count(ug  string) bool{

	var sendUserMsg msgtype.BACK_SEA_SELECT_BOMB
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug

	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_USER_BOMB, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}


//后台请求玫瑰花使用使用情况
func Select_Bomb_count_rose(ug  string) bool{
	var sendUserMsg msgtype.BACK_SEA_SELECT_BOMB
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug

	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_USER_ROSE, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}



//后台请求玫瑰花使用使用情况
func Select_User_inform(ug  msgtype.Back_SEA_User_back) bool{
	var sendUserMsg msgtype.Back_SEA_User
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug.UG
	sendUserMsg.ST = ug.ST
	sendUserMsg.SID = ug.SID
	sendUserMsg.SN = ug.SN
	sendUserMsg.NUM = ug.NUM
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_USER_MONEY, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}




//后台请求玫瑰花使用使用情况
func Select_User_inform_rose(ug  msgtype.Back_SEA_User_back) bool{
	var sendUserMsg msgtype.Back_SEA_User
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug.UG
	sendUserMsg.ST = ug.ST
	sendUserMsg.SID = ug.SID
	sendUserMsg.SN = ug.SN
	sendUserMsg.NUM = ug.NUM
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SET_USER_ROSE_USER, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}





//后台请求商城消费记录
func ShaRetGame_VIP_find(ug string,sn int,num int ) bool{
	var sendUserMsg msgtype.BACK_SEA_FINDVIP
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.SN = sn
	sendUserMsg.NUM = num
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_SEA_VIP, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}


//后台请求支付日志记录
func ShaRetGame_PAY_find(ug ,nickName  string,sid ,usid int ) bool{
	var sendUserMsg msgtype.BACK_SEA_USEPAYMSG
	sendUserMsg.BG = common.GHOST_Login_GUID
	sendUserMsg.UG = ug
	sendUserMsg.SID = sid
	sendUserMsg.NickName = nickName
	sendUserMsg.USid = usid
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.B_RSE_USERPAY, carddata)
	var msgs models.MsgSInfo
	msgs.Data = finalData
	Msg_out_sha <- msgs
	return true
}







//后台请求增加公告信息
func ClientReqAnn(data []byte) bool{
	var msg msgtype.BACK_SEA_NOTICE
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if ShaRetLogin_Ann(msg.UG,msg.BTime,msg.CTime,msg.Title,msg.Word,msg.Way,msg.SID){
		//fmt.Println("---------------!!!")
	}
	return true
}


//后台请求查询公告信息
func ClientReqAnn_select(data []byte) bool{
	var msg msgtype.BACK_SEA_SEANOTICE
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if ShaRetLogin_Select_ann(msg.UG,msg.BG,msg.SID){
		//fmt.Println("---------------!!!")
	}
	return true
}

//后台请求增加公告信息
func ClientReqAnn_Update(data []byte) bool{
	var msg msgtype.BACK_SEA_AMENDNOTICE
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if ShaRetLogin_Update_ann(msg.UG,msg.BTime,msg.CTime,msg.Title,msg.Word,msg.Way,msg.SID,msg.Id){
		//fmt.Println("---------------!!!")
	}
	return true
}


//后台请求增加游戏内公告信息
func ClientReq_game_Ann_ADD(data []byte) bool{
	var msg msgtype.BACK_SEA_GAMENOTICE
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if ShaRetLogin_ADD_ann(msg.UG,msg.Photo,msg.BTime,msg.CTime,msg.Title,msg.Word,msg.Way,msg.SID,){
		//fmt.Println("---------------!!!")
	}
	return true
}


//后台请求修改游戏内公告信息
func ClientReq_game_Ann_Update(data []byte) bool{
	var msg msgtype.BACK_SEA_AMENDGAMENOTICE
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if ShaRetGame_Update_ann(msg.UG,msg.Photo,msg.BTime,msg.CTime,msg.Title,msg.Word,msg.Way,msg.SID,msg.Id){
		//fmt.Println("---------------!!!")
	}
	return true
}


//后台请求查询公告信息
func ClientReq_Game_Ann_select(data []byte) bool{
	var msg msgtype.BACK_SEA_SEAGAMENOTICE
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if ShaRetGame_Select_ann(msg.UG,msg.SID){
		//fmt.Println("---------------!!!")
	}
	return true
}


//后台请求查询VIP信息
func ClientReq_Game_VIP_select(data []byte) bool{
	var msg msgtype.BACK_SEA_FINDVIP
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if ShaRetGame_VIP_find(msg.UG,msg.SN,msg.NUM){
		//fmt.Println("---------------!!!")
	}
	return true
}




//后台请求查询商城信息
func ClientReq_Game_shpping_select(data []byte) bool{
	var msg msgtype.BACK_SEA_FINDVIP
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if ShaRetGame_Findshop(msg.UG){
		//fmt.Println("---------------!!!")
	}
	return true
}

//后台请求查询核弹信息信息
func ClientReq_Game_hedan_select(data []byte) bool{
	var msg msgtype.BACK_SEA_FINDVIP
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if ShaRetGame_nuclearmsg(msg.UG){
		//fmt.Println("---------------!!!")
	}
	return true
}



//后台请求查询在线数据
func ClientReq_Game_hedan_inform(data []byte) bool{
	var msg msgtype.BACK_SEA_ONLINEDATA
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if ShaRetGame_Select_msg_onlinedata(msg.UG){
		//fmt.Println("---------------!!!")
	}
	return true
}


//后台请求收入日报
func ClientReq_Game_inform_pay_001(data []byte) bool{
	var msg msgtype.BACK_SEA_PAYDATA
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if ShaRetGame_Select_msg_001(msg.UG,msg.UDate,msg.DUate){
		//fmt.Println("---------------!!!")
	}
	return true
}



//后台请求收入日报
func ClientReq_insert_CREATECARDS(data []byte) bool{
	var msg msgtype.BACK_SEA_CREATEPAYCARDS
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if ShaRetGame_insert_CREATECARDS(msg.UG,msg.CardsN,msg.Ctype){
		//fmt.Println("---------------!!!")
	}
	return true
}




//后台请求充值卡详情
func ClientReq_insert_CARDSPAYUSE_inform(data []byte) bool{
	var msg msgtype.BACK_SEA_PAYCARDSUSE
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if ShaRetGame_Select_CREATECARDS(msg.UG,msg.Cards,msg.UCards,msg.DCards){
		//fmt.Println("---------------!!!")
	}
	return true
}



//后台请求修改档位函数
func ClientReq_Update_CARDSPAYUSE_Game(data []byte) bool{
	var msg msgtype.BACKGROUNDMODIFYRATE_S
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}

	if Get_Game_inform_se(msg.Room,msg.Rt,msg.Mgd){
		//fmt.Println("---------------!!!")
	}
	return true
}




//后台请求查询服务器数据
func ClientReq_Select_CARDSPAYUSE_Game(data []byte,conn *websocket.Conn) bool{
	var msg msgtype.Back_Req_Find_Union_User
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	var  msg_copy  msgtype.Back_Ret_Find_Union_User
	//var  msg_copy1  []msgtype.BACK_RET_USER_GAME_INFORM
	var  msg_copy2  msgtype.BACK_RET_USER_GAME_INFORM
	fmt.Println("===后台请求查询服务器数据======",INFORM)
	for i := 0; i< 23 ;i++ {
		msg_copy.AP = append(msg_copy.AP,msg_copy2)
	}

	fmt.Println("===后台请求查询服务器数据==1====",msg_copy.AP)
	for i:= 0; i<len(INFORM) ; i++  {

		//msg_copy2.Los +=  INFORM[i].Los
		//msg_copy2.Tm =  INFORM[i].Tm
		//msg_copy2.Win +=  INFORM[i].Win
		for j:= 0 ; j< 24 ; j++  {
			 //ins := Substr(INFORM[i].Tm,11,12)
			ins := string([]byte(INFORM[i].Tm)[11:13])
			_,error := strconv.Atoi(ins)
			if error != nil{
				fmt.Println("字符串转换成整数失败",ins)
			}
			//msg_copy.AP[Y_state_copy].Win +=  INFORM[i].Win
			//msg_copy.AP[Y_state_copy].Los +=  INFORM[i].Los

		}
	}
	msg_copy.Err = -1
	carddata, err := json.Marshal(msg_copy)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_INFORME_USER, carddata)
	//fmt.Println("======ClientReq_Select_CARDSPAYUSE_Game========",string(finalData))
	//SendMsgInSha_Game(finalData)


	if conn.WriteMessage(websocket.TextMessage,finalData) !=  nil{
		log.Println("=======发送客户端数据失败")
	}
	return true
}


func Substr(str string, start int, length int) string {
	rs := []rune(str)
	rl := len(rs)
	end := 0

	if start < 0 {
		start = rl - 1 + start
	}
	end = start + length

	if start > end {
		start, end = end, start
	}

	if start < 0 {
		start = 0
	}
	if start > rl {
		start = rl
	}
	if end < 0 {
		end = 0
	}
	if end > rl {
		end = rl
	}

	return string(rs[start:end])
}




//后台请求查询最高在线人数信息
func ClientReq_Game_top_select(data []byte) bool{
	var msg msgtype.BACK_SEA_PLAYERLV
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if ShaRetGame_Select_msg_top(msg.UG,msg.Type){
		//fmt.Println("---------------!!!")
	}
	return true
}





//后台请求添加游戏内活动内容
func ClientReq_Send_Activitv(data []byte) bool{
	var rup msgtype.BACK_SEA_GAMEINNOTICE_back
	err := json.Unmarshal(data,&rup)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	var  msg_copy []msgtype.GameAccessory
	for i:= 0 ; i< len(rup.PA) ;i++  {
		var  msg_emil  msgtype.GameAccessory
		if rup.PA[i] == "核弹"{
			if len(msg_copy) == 0{
				msg_emil.Prop = 2
				msg_emil.Num = 0
				msg_copy = append(msg_copy,msg_emil)
			}
			for s:= 0; s<len(msg_copy) ; s++ {
				if msg_copy[s].Prop == 2 {
					continue
				}else{
					msg_emil.Prop = 2
					msg_emil.Num = 0
					msg_copy = append(msg_copy,msg_emil)
				}
			}
		}else if rup.PA[i] == "元宝"{
			if len(msg_copy) == 0{
				msg_emil.Prop = 1
				msg_emil.Num = 0
				msg_copy = append(msg_copy,msg_emil)
			}
			for s:= 0; s<len(msg_copy) ; s++ {
				if msg_copy[s].Prop == 1 {
					continue
				}else{
					msg_emil.Prop = 1
					msg_emil.Num = 0
					msg_copy = append(msg_copy,msg_emil)
				}
			}
		}
	}
	for i:= 0 ; i<= len(rup.PA)-1 ;i++  {
		if rup.PA[i] == "元宝"{
			for s:= 0; s<len(msg_copy) ; s++ {
				if msg_copy[s].Prop == 1 {
					Y_state_copy,error := strconv.Atoi(rup.PA[i+1])
					if error != nil{
						fmt.Println("字符串转换成整数失败",rup.PA[i+1])
					}
					msg_copy[s].Num += Y_state_copy
				}
			}
		}else if rup.PA[i] == "核弹"{
			for s:= 0; s<len(msg_copy) ; s++ {
				if msg_copy[s].Prop == 2 {
					Y_state_copy,error := strconv.Atoi(rup.PA[i+1])
					if error != nil{
						fmt.Println("字符串转换成整数失败",rup.PA[i+1])
					}
					msg_copy[s].Num += Y_state_copy
				}
			}
		}
	}
	//str := strings.Replace(rup.SA, "，", ",", -1)
	//uid := strings.Split(str,",")
	if ShaRetGame_insert_activity(rup.UG,rup.BTime,rup.CTime,rup.Title,rup.Word,rup.Way,rup.SID,rup.Activty,msg_copy){
		fmt.Println("send ClientReq_Send_Mail message success!")
	}
	return true
}




//后台请求修改游戏内活动内容
func ClientReq_Send_UPDATE_Activitv(data []byte) bool{
	var rup msgtype.BACK_SEA_AMENDSEAGAMEINNOTICE_back
	err := json.Unmarshal(data,&rup)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	var  msg_copy []msgtype.GameAccessory
	for i:= 0 ; i< len(rup.PA) ;i++  {
		var  msg_emil  msgtype.GameAccessory
		if rup.PA[i] == "核弹"{
			if len(msg_copy) == 0{
				msg_emil.Prop = 2
				msg_emil.Num = 0
				msg_copy = append(msg_copy,msg_emil)
			}
			for s:= 0; s<len(msg_copy) ; s++ {
				if msg_copy[s].Prop == 2 {
					continue
				}else{
					msg_emil.Prop = 2
					msg_emil.Num = 0
					msg_copy = append(msg_copy,msg_emil)
				}
			}
		}else if rup.PA[i] == "元宝"{
			if len(msg_copy) == 0{
				msg_emil.Prop = 1
				msg_emil.Num = 0
				msg_copy = append(msg_copy,msg_emil)
			}
			for s:= 0; s<len(msg_copy) ; s++ {
				if msg_copy[s].Prop == 1 {
					continue
				}else{
					msg_emil.Prop = 1
					msg_emil.Num = 0
					msg_copy = append(msg_copy,msg_emil)
				}
			}
		}
	}
	for i:= 0 ; i<= len(rup.PA)-1 ;i++  {
		if rup.PA[i] == "元宝"{
			for s:= 0; s<len(msg_copy) ; s++ {
				if msg_copy[s].Prop == 1 {
					Y_state_copy,error := strconv.Atoi(rup.PA[i+1])
					if error != nil{
						fmt.Println("字符串转换成整数失败",rup.PA[i+1])
					}
					msg_copy[s].Num += Y_state_copy
				}
			}
		}else if rup.PA[i] == "核弹"{
			for s:= 0; s<len(msg_copy) ; s++ {
				if msg_copy[s].Prop == 2 {
					Y_state_copy,error := strconv.Atoi(rup.PA[i+1])
					if error != nil{
						fmt.Println("字符串转换成整数失败",rup.PA[i+1])
					}
					msg_copy[s].Num += Y_state_copy
				}
			}
		}
	}
	//str := strings.Replace(rup.SA, "，", ",", -1)
	//uid := strings.Split(str,",")
	if ShaRetGame_Update_activity(rup.UG,rup.BTime,rup.CTime,rup.Title,rup.Word,rup.Way,rup.SID,rup.Id,rup.Activty,msg_copy){
		fmt.Println("send ClientReq_Send_Mail message success!")
	}
	return true
}


//后台请求查询游戏活动信息
func ClientReq_Game__slelct_Avtivity(data []byte) bool{
	var msg msgtype.BACK_SEA_SEAGAMEINNOTICE
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if ShaRetGame_Select_activity(msg.UG,msg.SID){
		//fmt.Println("---------------!!!")
	}
	return true
}























//获取当前年份，月份，日期，时间，礼拜几
func GetNowTime()(year,date,day,tim,wek string){
	return time.Now().Format("2006-01-02 15:04:05")[0:4],time.Now().Format("2006-01-02 15:04:05")[5:7],time.Now().Format("2006-01-02 15:04:05")[8:10],time.Now().Format("2006-01-02 15:04:05")[11:19],time.Now().Weekday().String()
}
func BackYear()string{
	year,_,_,_,_ := GetNowTime()
	return year
}
func BackMonth()string{
	_,date,_,_,_ :=GetNowTime()
	return date
}
func BackDay()string{
	_,_,day,_,_ := GetNowTime()
	return day
}
func BackTime()string{
	_,_,_,tim,_ := GetNowTime()
	return tim
}
func BackWek()string{
	_,_,_,_,wek :=GetNowTime()
	return wek
}







//后台请求逻辑服记录长度函数
func Get_Game_count() bool{
	var sendUserMsg msgtype.PLAYERGETMATCHRECORD_R
	sendUserMsg.Guid = common.GAMEGHOST_Login_PORT
	sendUserMsg.Room = 0
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_RECCOUNT_S, carddata)
	//var msgs models.MsgSInfo
	//msgs.Data = finalData
	//Msg_in_Game_server <- msgs
	SendMsgInSha_Game(finalData)
	return true
}




//获取逻辑服 1
//后台请求逻辑服记录长度函数
func Get_Game_inform() bool{
	var sendUserMsg msgtype.BACKGROUNDRECORD_S
	sendUserMsg.Guid = common.GAMEGHOST_Login_PORT
	sendUserMsg.Room = 29
	sendUserMsg.Mgd = common.GAMEGHOST_Login_PORT
		sendUserMsg.Mi = 0
		sendUserMsg.Mx = 50
		if sendUserMsg.Mx >  models.Num_00001_DZ{
			sendUserMsg.Mx = models.Num_00001_DZ
		}
	//Get_Game_inform_count(10)
	//sendUserMsg.Mx = num_00001-1
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_REC_S_DZ, carddata)
	SendMsgInSha_Game(finalData)
	//var msgs models.MsgSInfo
	//msgs.Data = finalData
	//Msg_in_Game_server <- msgs
	return true
}



//获取逻辑服2

var num_01 = 50
var MIN_NUM =0
var MAX_NUM = 50
func Get_Game_inform_count() bool{
		var sendUserMsg msgtype.BACKGROUNDRECORD_S
		if MAX_NUM >= models.Num_00001_DZ{
			sendUserMsg.Mx = models.Num_00001_DZ
			sendUserMsg.Mi = MIN_NUM
			if  sendUserMsg.Mi <= 0{
				sendUserMsg.Mi  = 0
			}
		}else{
			sendUserMsg.Mx = MAX_NUM
			sendUserMsg.Mi = MIN_NUM
		}
		if sendUserMsg.Mi > models.Num_00001_DZ{
			return true
		}
		sendUserMsg.Guid = common.GAMEGHOST_Login_PORT
		sendUserMsg.Room = 0
		carddata, err := json.Marshal(sendUserMsg)
		if err != nil {
			fmt.Println("carddata err ")
		}
		finalData := msgtype.CombinationData(msgtype.CONSOLE_REC_S, carddata)
		SendMsgInSha_Game(finalData)
		MIN_NUM += num_01
		MAX_NUM += num_01
		if MAX_NUM >= models.Num_00001_DZ{
			return true
		}
	return true
}


//获取逻辑服3

//循环获取德州逻辑服数据

var num_01_dz = 50
var MIN_NUM_dz =0
var MAX_NUM_dz = 50

func Get_DZ_Game_inform_count() bool{
	var sendUserMsg msgtype.BACKGROUNDRECORD_S
	if MAX_NUM_dz >= models.Num_00001_DZ{
		sendUserMsg.Mx = models.Num_00001_DZ
		sendUserMsg.Mi = MIN_NUM_dz
		if  sendUserMsg.Mi <= 0{
			sendUserMsg.Mi  = 0
		}
	}else{
		sendUserMsg.Mx = MAX_NUM_dz
		sendUserMsg.Mi = MIN_NUM_dz
	}
	if sendUserMsg.Mi > models.Num_00001_DZ{
		return true
	}
	sendUserMsg.Mgd = common.GAMEGHOST_Login_PORT
	sendUserMsg.Guid = common.GAMEGHOST_Login_PORT
	sendUserMsg.Room = 29
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_REC_S_DZ, carddata)
	SendMsgInSha_Game(finalData)
	MIN_NUM_dz += num_01_dz
	MAX_NUM_dz += num_01_dz
	if MAX_NUM_dz >= models.Num_00001_DZ{
		return true
	}
	return true
}



//获取逻辑服4

//循环获取黑红梅方逻辑服数据

var num_01_HHMF = 50
var MIN_NUM_HHMF =0
var MAX_NUM_HHMF = 50

func Get_HHMF_Game_inform_count() bool{
	var sendUserMsg msgtype.BACKGROUNDRECORD_S
	if MAX_NUM_HHMF >= models.Num_00001_HHMF{
		sendUserMsg.Mx = models.Num_00001_HHMF
		sendUserMsg.Mi = MIN_NUM_HHMF
		if  sendUserMsg.Mi <= 0{
			sendUserMsg.Mi  = 0
		}
	}else{
		sendUserMsg.Mx = MAX_NUM_HHMF
		sendUserMsg.Mi = MIN_NUM_HHMF
	}
	if sendUserMsg.Mi > models.Num_00001_HHMF{
		return true
	}
	sendUserMsg.Mgd = common.GAMEGHOST_Login_PORT
	sendUserMsg.Guid = common.GAMEGHOST_Login_PORT
	sendUserMsg.Room = 29
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_REC_S_HHMF, carddata)
	SendMsgInSha_Game(finalData)
	MIN_NUM_HHMF += num_01_HHMF
	MAX_NUM_HHMF += num_01_HHMF
	if MAX_NUM_HHMF >= models.Num_00001_HHMF{
		return true
	}
	return true
}










//获取逻辑服5

//循环获取牛牛逻辑服数据

var num_01_NN = 50
var MIN_NUM_NN =0
var MAX_NUM_NN = 50

func Get_NN_Game_inform_count() bool{

	var sendUserMsg msgtype.BACKGROUNDRECORD_S
	if MAX_NUM_NN >= models.Num_00001_NN{
		sendUserMsg.Mx = models.Num_00001_NN
		sendUserMsg.Mi = MIN_NUM_NN
		if  sendUserMsg.Mi <= 0{
			sendUserMsg.Mi  = 0
		}
	}else{
		sendUserMsg.Mx = MAX_NUM_NN
		sendUserMsg.Mi = MIN_NUM_NN
	}
	if sendUserMsg.Mx > models.Num_00001_NN{
		return true
	}
	sendUserMsg.Mgd = common.GAMEGHOST_Login_PORT
	sendUserMsg.Guid = common.GAMEGHOST_Login_PORT
	sendUserMsg.Room = 29
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_REC_S_NN, carddata)
	SendMsgInSha_Game(finalData)
	MIN_NUM_NN += num_01_NN
	MAX_NUM_NN += num_01_NN
	if MAX_NUM_NN >= models.Num_00001_NN{
		return true
	}
	return true
}




//获取逻辑服5

//循环获取拼三张逻辑服数据

var num_01_PSZ = 50
var MIN_NUM_PSZ =0
var MAX_NUM_PSZ = 50

func Get_PSZ_Game_inform_count(guid string) bool{
	var sendUserMsg msgtype.BACKGROUNDRECORD_S
	if MAX_NUM_PSZ >= models.Num_00001_PSZ{
		sendUserMsg.Mx = models.Num_00001_PSZ
		sendUserMsg.Mi = MIN_NUM_PSZ
		if  sendUserMsg.Mi <= 0{
			sendUserMsg.Mi  = 0
		}
	}else{
		sendUserMsg.Mx = MAX_NUM_PSZ
		sendUserMsg.Mi = MIN_NUM_PSZ
	}
	if sendUserMsg.Mi > models.Num_00001_PSZ{
		//发送客户端消息
		fmt.Println("=======22===不给逻辑服发送请求信息数据了  因为不够50条")
		//var  msg_0001   msgtype.BACK_GEA_BACK_PSZ_GAME
		//msg_0001.Err = -1
		//msg_0001.RM = Faction_PSZ_INFORM(PSZNUMBER)
		//carddata, err := json.Marshal(msg_0001)
		//if err != nil {
		//	fmt.Println("carddata err ")
		//}
		//finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_USER_PSZ, carddata)
		//fmt.Println(guid,"========Get_PSZ_Game_inform_count=========",string(finalData))
		//SendMsgInClient(guid,finalData)
		return true
	}
	sendUserMsg.Mgd = common.GAMEGHOST_Login_PORT
	sendUserMsg.Guid = common.GAMEGHOST_Login_PORT
	sendUserMsg.Room = 29
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_REC_S_PSZ, carddata)
	SendMsgInCtype_Game(finalData,25)
	MIN_NUM_PSZ += num_01_PSZ
	MAX_NUM_PSZ += num_01_PSZ
	if MAX_NUM_PSZ >= models.Num_00001_PSZ{
		fmt.Println("==========不给逻辑服发送请求信息数据了  因为不够50条")
		//处理返回给客户端的数据


		////发送客户端消息
		//
		//var  msg_0001   msgtype.BACK_GEA_BACK_PSZ_GAME
		//msg_0001.Err = -1
		//msg_0001.RM = Faction_PSZ_INFORM(PSZNUMBER)
		//carddata, err := json.Marshal(msg_0001)
		//if err != nil {
		//	fmt.Println("carddata err ")
		//}
		//finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_USER_PSZ, carddata)
		//fmt.Println(guid,"========Get_PSZ_Game_inform_count=========",string(finalData))
		//SendMsgInClient(guid,finalData)
		//
		return true
	}
	return true
}











//请求牛牛  数据
func Insert_BACK_all_NN(guid string,tm int)bool {
	var sendUserMsg msgtype.BACKGROUNDGLOBALRECORD_S_PJ
	sendUserMsg.Guid =   guid
	sendUserMsg.Room = 29
	sendUserMsg.Mgd = common.GAMEGHOST_Login_PORT
	sendUserMsg.Trm = tm
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_RECCOUNT_S_NN, carddata)
	SendMsgInSha_Game(finalData)
	return true
}







//请求拼三张  数据
func Insert_BACK_all_PSZ(guid string,tm int)bool {
	var sendUserMsg msgtype.BACKGROUNDGLOBALRECORD_S_PJ
	sendUserMsg.Guid =   guid
	sendUserMsg.Room = 29
	sendUserMsg.Mgd = common.GAMEGHOST_Login_PORT
	sendUserMsg.Trm = tm
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_RECCOUNT_S_PSZ, carddata)
	SendMsgInCtype_Game(finalData,25)
	return true
}



//后台请求逻辑服修改概率
func Get_Game_inform_se( room , rt int,guid string) bool{
	var sendUserMsg msgtype.BACKGROUNDMODIFYRATE_S
	sendUserMsg.Guid =  common.GAMEGHOST_Login_PORT
	sendUserMsg.Room = 0
	sendUserMsg.Rt = rt
	sendUserMsg.Mgd = guid
	sendUserMsg.Mm = room
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_MODIFY_RATE_S, carddata)
	SendMsgInSha_Game(finalData)
	return true
}



//请求德州 数据
func Insert_BACK_all(guid string,tm int)bool {
	var sendUserMsg msgtype.BACKGROUNDGLOBALRECORD_S_PJ
	sendUserMsg.Guid =   guid
	sendUserMsg.Room = 29
	sendUserMsg.Mgd = common.GAMEGHOST_Login_PORT
	sendUserMsg.Trm = tm
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_RECCOUNT_S_DZ, carddata)
	SendMsgInSha_Game(finalData)
	return true
}


//后台请求修改 德州 概率
func Update_dezhou_( room , rt int,guid string) bool{ //CONSOLE_MODIFY_RATE_S_DZ
	var sendUserMsg msgtype.BACKGROUNDMODIFYRATE_S
	sendUserMsg.Guid =  common.GAMEGHOST_Login_PORT
	sendUserMsg.Room = 0
	sendUserMsg.Rt = rt
	sendUserMsg.Mgd = guid
	sendUserMsg.Mm = room
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_MODIFY_RATE_S_DZ, carddata)

	SendMsgInSha_Game(finalData)
	return true
}


//请求黑红梅方  数据
func Insert_BACK_all_HHMF(guid string,tm int)bool {
	var sendUserMsg msgtype.BACKGROUNDGLOBALRECORD_S_PJ
	sendUserMsg.Guid =   guid
	sendUserMsg.Room = 29
	sendUserMsg.Mgd = common.GAMEGHOST_Login_PORT
	sendUserMsg.Trm = tm
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_RECCOUNT_S_HHMF, carddata)
	SendMsgInSha_Game(finalData)
	return true
}






























//后台请求修改 黑红梅方 概率  CONSOLE_RECCOUNT_S_NN
func Update_HHMF_( room , rt int,guid string) bool{ //CONSOLE_MODIFY_RATE_S_DZ
	var sendUserMsg msgtype.BACKGROUNDMODIFYRATE_S
	sendUserMsg.Guid =  common.GAMEGHOST_Login_PORT
	sendUserMsg.Room = 0
	sendUserMsg.Rt = rt
	sendUserMsg.Mgd = guid
	sendUserMsg.Mm = room
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_MODIFY_RATE_S_DZ, carddata)

	SendMsgInSha_Game(finalData)
	return true
}
























/*
链接大厅数据  LY_RET_BACK_ALLIPORT
*/

//向大厅请求当前所有逻辑服IP 和端口
func Insert_loby_BACK_all()bool {
	var sendUserMsg msgtype.BACK_REQ_LOGICPORT
	sendUserMsg.LG = common.GHOST_Login_GUID
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.LY_RET_BACK_ALLIPORT, carddata)
	SendLobyInSha_Game(finalData)
	return true
}









//请求水浒传  数据
func Insert_BACK_all_SHZ(guid string,tm int)bool {
	var sendUserMsg msgtype.BACKGROUNDGLOBALRECORD_S_PJ
	sendUserMsg.Guid =    common.GAMEGHOST_Login_PORT
	sendUserMsg.Room = 29
	sendUserMsg.Mgd = guid
	sendUserMsg.Trm = tm
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_RECCOUNT_S_SH, carddata)
	log.Println("=====Insert_BACK_all_SHZ=======",string(finalData))
	SendMsgInCtype_Game(finalData,21)
	return true
}



//获取逻辑服5

//循环获取拼三张逻辑服数据

var num_01_SHZ = 50
var MIN_NUM_SHZ =0
var MAX_NUM_SHZ = 50

func Get_SHZ_Game_inform_count(guid string,rm int) bool{
	var sendUserMsg msgtype.BACKGROUNDGLOBALRECORD_S_SH
	//if MAX_NUM_SHZ >= models.Num_00001_SHZ{
	//	sendUserMsg.Mx = models.Num_00001_SHZ
	//	sendUserMsg.Mi = MIN_NUM_SHZ
	//	if  sendUserMsg.Mi <= 0{
	//		sendUserMsg.Mi  = 0
	//	}
	//}else{
	//	sendUserMsg.Mx = MAX_NUM_SHZ
	//	sendUserMsg.Mi = MIN_NUM_SHZ
	//}
	//if sendUserMsg.Mi > models.Num_00001_SHZ{
		//发送客户端消息

	//	var  msg_0001   msgtype.BACK_GEA_BACK_PSZ_GAME
	//	msg_0001.Err = -1
	//	msg_0001.RM = Faction_PSZ_INFORM(PSZNUMBER)
	//	carddata, err := json.Marshal(msg_0001)
	//	if err != nil {
	//		fmt.Println("carddata err ")
	//	}
	//	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_USER_SHU, carddata)
	//	fmt.Println(guid,"========111Get_PSZ_Game_inform_count=========",string(finalData))
	//	SendMsgInClient(guid,finalData)
	//	return true
	//}
	sendUserMsg.Mgd = common.GAMEGHOST_Login_PORT
	sendUserMsg.Guid = guid
	sendUserMsg.Room = 29
	sendUserMsg.Trm = rm
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_REC_S_SH, carddata)
	SendMsgInCtype_Game(finalData,21)
	//MIN_NUM_SHZ += num_01_SHZ
	//MAX_NUM_SHZ += num_01_SHZ
	//if MAX_NUM_SHZ >= models.Num_00001_SHZ{
	//	//fmt.Println("==========不给逻辑服发送请求信息数据了  因为不够50条")
	//	//处理返回给客户端的数据
	//
	//
	//	//发送客户端消息
	//
	//	var  msg_0001   msgtype.BACK_GEA_BACK_PSZ_GAME
	//	msg_0001.Err = -1
	//	msg_0001.RM = Faction_PSZ_INFORM(PSZNUMBER)
	//	carddata, err := json.Marshal(msg_0001)
	//	if err != nil {
	//		fmt.Println("carddata err ")
	//	}
	//	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_USER_SHU, carddata)
	//	//fmt.Println(guid,"========Get_PSZ_Game_inform_count=========",string(finalData))
	//	SendMsgInClient(guid,finalData)
	//
	//	return true
	//}
	return true
}
















