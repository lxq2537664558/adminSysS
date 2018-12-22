package controllers

import (
	"msgtype"
	"encoding/json"
	"fmt"
	"github.com/gorilla/websocket"
	"strings"

	"models"

	"common"
)

//获取DB服务器端的消息类型
func ServerDBMsg(msg []byte){
	b := []byte{msg[0], msg[1], msg[2], msg[3]}
	mymsgtype := string(b)
	//fmt.Println("BT:",mymsgtype)
	switch mymsgtype {
	case msgtype.B_RSE_ADMIN: //用户登录包头
		ResDBLoginMsg(msg[4:])
		break
	case msgtype.B_RSE_USERMSG://sharemem返回用户信息1
		ResDBUserCheck(msg[4:])
		break
	case msgtype.B_SEA_FINDUSERCLOSE://sharemem返回用户封禁信息
		ResDBSaveUserMsg(msg[4:])
		break
	case msgtype.B_RSE_USERCLOSE: //sharemem返回封禁结果
		ShaRetFirstLogin(msg[4:])
		break
	case msgtype.S_RET_DE_ARCHIVE://sharemem返回解封用户账号的结果
		RecShaRetUpPass(msg[4:])
		break
	case msgtype.B_SEA_FINDUSERTALKCLOSE: //sharemem返回禁言用户信息
		ShaRetUpdateNC(msg[4:])
		break
	case msgtype.B_SEA_USERTALK: //sharemem返回禁言用户的结果
		ShaRetSUResult(msg[4:])
		break
	case msgtype.S_RET_DE_BANNED_POST: //sharemem返回解禁用户禁言的结果
		ResDBreturn(msg[4:])
		break
	case msgtype.S_RET_FIND_UNION: //sharemem返回工会日志信息
		RecDBMsgInfo(msg[4:])
		break
	case msgtype.S_RET_FIND_ROLESKIN:
		RecDBMsgInfo_RoleSkin(msg[4:])
		break
	case msgtype.S_RET_ROLE_NM:
		RecDBMsgInfo_RoleSkin_NM(msg[4:])
		break
	case msgtype.S_RET_IMITATE_PAY:
		RecDBMsgInfo_RoleSkin_NM_Imitate_Pay(msg[4:])
		break
	case msgtype.S_RET_COLLECT:
		RecDBMsgInfo_Collect(msg[4:])
		break
	case msgtype.B_SEA_MAIL:
		RecDBMsgInfo_Send_Mail(msg[4:])
		break
	case msgtype.B_SEA_NOTICE: //R_RSE_SEANOTICE
		RecDBMsgInfo_Ann(msg[4:])
		break
	case msgtype.R_RSE_SEANOTICE: //R_RSE_SEANOTICE
		RecDBMsgInfo_Ann_inform(msg[4:])
		break
	case msgtype.B_SEA_AMENDNOTICE: //R_RSE_SEANOTICE
		RecDBMsgInfo_Ann_Update(msg[4:])
		break
	case msgtype.B_SEA_GAME: //R_RSE_SEANOTICE
		RecDBMsgInfo_Ann_add(msg[4:])
		break
	case msgtype.B_SEA_GAMENOTICE: //R_RSE_SEANOTICE
		RecDBMsg_Ann_inform(msg[4:])
		break
	case msgtype.B_SEA_AMEDNOGAMENOTICE: //B_SEA_ACTIVITY
		RecDBMsgInfo_Ann_Updat_informe(msg[4:])
		break
	case msgtype.B_SEA_ACTIVITY: //B_SEA_ACTIVITY
		RecDBMsgInfo_insert_informe(msg[4:])
		break
	case msgtype.B_SEA_ACTIVITYNOTICE: //B_SEA_ACTIVITY
		RecDBMsgInfo_select_informe(msg[4:])
		break
	case msgtype.B_RSE_AMEDNOACTIVITYNOTICE: //B_SEA_ACTIVITY
		RecDBMsgInfo_Update_informe(msg[4:])
		break
	case msgtype.B_RSE_VIP: //B_SEA_ACTIVITY
		RecDBMsgInfo_Select_informe_Vip(msg[4:])
		break
	case msgtype.B_RSE_SHOPDETAIL: //  B_RSE_NUCLEARMSG
		RecDBMsgInfo_Select_informe_Shopdetail(msg[4:])
		break
	case msgtype.B_RSE_NUCLEARMSG: //  B_SEA_USERPAY
		RecDBMsgInfo_Select_informe_NUCLEARMSG(msg[4:])
		break
	case msgtype.B_RSE_ONLINEDATA: //  B_RSE_ONLINEDATA
		RecDBMsgInfo_Select_informe_Onlindata(msg[4:])
		break
	case msgtype.B_RSE_PLAYERDATA: //  B_RSE_PAYDATA
		RecDBMsgInfo_Select_informe_OnlinTop(msg[4:])
	case msgtype.B_RSE_PAYDATA: //  B_RSE_CREATECARDS
		RecDBMsgInfo_Select_informe_001(msg[4:])
		break
	case msgtype.B_RSE_CARDSPAY: //  B_RSE_CARDSPAYUSE
		RecDBMsgInfo_Select_CREATECARDS(msg[4:])
		break
	case msgtype.B_RSE_CARDSPAYUSE: //  B_RSE_CARDSPAY
		RecDBMsgInfo_Select_CREATECARDS_COPY(msg[4:])
		break
	case msgtype.B_RSE_CREATECARDS: //  B_SEA_USERPAY
		RecDBMsgInfo_Select_CARDSPAYUSE(msg[4:])
		break
	case msgtype.B_SEA_USERPAY: 	//返回给后台支付查询
		RecDBMsgInfo_Select_pay(msg[4:])
		break
	case msgtype.B_RSE_SHOWMETHEMONEY: 	//返回给后台支付查询
		RecDBMsgInfo_Select_money(msg[4:])
		break

	case msgtype.B_GET_USER_BOMB: //返回后台核弹查询
		Get_Bomb_inform(msg[4:])
		break
	case msgtype.B_GET_USER_ROSE:
		Get_Bomb_inform_rose(msg[4:])
		break
	case msgtype.B_GET_USER_MONEY:
		Get_Bomb_User_inform(msg[4:])
		break
	case msgtype.B_GET_USER_ROSE_USER:
		Get_Bomb_User_inform_user(msg[4:])
		break
	case msgtype.B_GET_SPECIAL_PROPS:
		Get_Bomb_inform_data(msg[4:])
		break
	case msgtype.B_GET_USER_VIP:
		Get_Bomb_inform_vip(msg[4:])
		break
	case msgtype.B_GET_SELECT_USER_VIP:
		Get_id_and_name_inform_vip(msg[4:])
		break
	case msgtype.B_GET_SELECT_USER_GENERAL:
		Get_Bomb_inform_shop(msg[4:])
		break
	case msgtype.B_GET_SELECT_USER_DETAILS:
		Get_Bomb_inform_shopDetailed(msg[4:])
		break
	case msgtype.B_GET_SELECT_USER_PAY:
		Get_Bomb_inform_pay(msg[4:])
		break
	default:
		break
	}
}

//db返回的用户信息
func ResDBLoginMsg(data []byte){
	var loginretmsg msgtype.Sha_Ret_GM_Login
	err := json.Unmarshal(data, &loginretmsg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_CLIENT_U, data)
	for i:= 0; i<len(UserConn) ;  i++ {
		if UserConn[i].GUID ==  loginretmsg.UN {
			if UserConn[i].Conn.WriteMessage(websocket.TextMessage, finalData) != nil {
				//处理用户离开消息
				//subscribe <- Subscriber{Name: user, Conn: ws, Room: room}
				//unsubscribe <- models.MsgLeave{Guid: RoomList[room].PLAYERS[i].GUID, Room: room}
			}
		}
	}
	if loginretmsg.UG != "" {
		for i:= 0; i<len(UserConn) ;  i++ {
			if UserConn[i].GUID ==  loginretmsg.UN {
				UserConn[i].GUID = loginretmsg.UG
				UserConn[i].Username = loginretmsg.UN
			}
		}
	}
}



//sharemem返回用户信息
func ResDBUserCheck(data []byte){
	var loginretmsg msgtype.Sha_RSE_USERMSG
	err := json.Unmarshal(data, &loginretmsg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_DETECTION_U, data)
	for i:= 0; i<len(UserConn) ;  i++ {
		if UserConn[i].GUID ==  loginretmsg.UG {

			if UserConn[i].Conn.WriteMessage(websocket.TextMessage, finalData) != nil {
				//处理用户离开消息
				//subscribe <- Subscriber{Name: user, Conn: ws, Room: room}
				//unsubscribe <- models.MsgLeave{Guid: RoomList[room].PLAYERS[i].GUID, Room: room}
			}
		}
	}

//100002，安幕忆嫣红，100011,时光清浅,100015

	//if ResDBreturn(retuguid){
	//	fmt.Println("send ResDBUserGuid message success!")
	//}
}
//db返回的用户guid信息
func ResDBSaveUserMsg(data []byte){
	var retuguid msgtype.Sha_RSE_USERCLOSEMSG
	err := json.Unmarshal(data, &retuguid)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_REGISTER_U, data)
	for i:= 0; i<len(UserConn) ;  i++ {
		if UserConn[i].GUID ==  retuguid.UG {

			if UserConn[i].Conn.WriteMessage(websocket.TextMessage, finalData) != nil {
				//处理用户离开消息
				//subscribe <- Subscriber{Name: user, Conn: ws, Room: room}
				//unsubscribe <- models.MsgLeave{Guid: RoomList[room].PLAYERS[i].GUID, Room: room}
			}
		}
	}
}



//==================================================客户端消息处理===============================================
//获取客户端消息类型
func Analysis(msg []byte,conn *websocket.Conn) {
	b := []byte{msg[0], msg[1], msg[2], msg[3]}
	mymsgtype := string(b)
	switch mymsgtype {
	case msgtype.MSG_CLIENT_U: //用户登录包头
		UserLoginRec(msg[4:], conn)
		break
	case msgtype.MSG_DETECTION_U: //后台请求查询用户信息
		UnameLoginRec(msg[4:])
		break
	case msgtype.MSG_REGISTER_U: //后台查询用户封禁信息
		ResClientMsgRec(msg[4:])
		break
	case msgtype.MSG_BANNED_U: //客户端请求封禁账户
		ClientReqThirdLogin(msg[4:])
		break
	case msgtype.MSG_DE_ARCHIVE_U: //后台请求解封用户账号
		RetConnGuid(msg[4:], conn)
		break
	case msgtype.MSG_DE_BPUSER_U: //客户端请求禁言账户
		JudgeValidatecode(msg[4:])
		break
	case msgtype.MSG_DE_BANNED_POST_U: //客户端请求禁言
		ClientSendUpdatePass(msg[4:])
		break
	case msgtype.MSG_DE_DE_BANNED_POST_U: //客户端请求解封禁言
		ClienReqRandNickName(msg[4:])
		break
	case msgtype.MSG_FIND_UNION_U: //客户端请求工会日志
		ClientReqJudgeNC(msg[4:])
		break
	case msgtype.MSG_CLIENT_U_GUID:
		SaveClient(string(msg[4:]), conn)
		break
	case msgtype.MSG_FIND_ROLESKIN_U:
		ClientReqThird_Find_RoleSkin(msg[4:])
		break
	case msgtype.MSG_FIND_ROLESKIN_NM_U:
		ClientReqThird_RoleSkin_NM(msg[4:])
		break
	case msgtype.MSG_FIND_IMITSTE_PAY:
		ClientReq_Imitate_Pay(msg[4:])
		break
	case msgtype.MSG_FIND_COLLECT:
		ClientReq_Collect(msg[4:])
		break
	case msgtype.MSG_FIND_MAIL: //MSG_REQ_ADD_ANN
		ClientReq_Send_Mail(msg[4:])
		break
	case msgtype.MSG_REQ_ADD_ANN: //后台请求添登录加公告
		ClientReqAnn(msg[4:])
		break
	case msgtype.MSG_REQ_SEL_ANN: //后台请求查看公告
		ClientReqAnn_select(msg[4:])
		break
	case msgtype.MSG_REQ_UPDATE_ANN: //后台修改登录公告
		ClientReqAnn_Update(msg[4:])
		break
	case msgtype.MSG_REQ_GAME_ADD_ANN: //后台请求添游戏内登录加公告
		ClientReq_game_Ann_ADD(msg[4:])
		break
	case msgtype.MSG_REQ_GAME_SEL_ANN: //后台请求查看游戏内公告
		ClientReq_Game_Ann_select(msg[4:])
		break
	case msgtype.MSG_REQ_GAME_UPDATE_ANN: //后台修改游戏内公告
		ClientReq_game_Ann_Update(msg[4:])
		break

	case msgtype.MSG_REQ_GAME_ADD_ACTIVITY: //后台请求添游戏内登录加公告
		ClientReq_Send_Activitv(msg[4:])
		break
	case msgtype.MSG_REQ_GAME_SEL_ACTIVITY: //后台请求查看游戏内公告
		ClientReq_Game__slelct_Avtivity(msg[4:])
		break
	case msgtype.MSG_REQ_GAME_UPDATE_ACTIVITY: //后台修改游戏内公告  MSG_REQ_GAME_SEL_VIP
		ClientReq_Send_UPDATE_Activitv(msg[4:])
		break
	case msgtype.MSG_REQ_GAME_SEL_VIP: //后台修改游戏内公告  MSG_REQ_GAME_SEL_VIP
		ClientReq_Game_VIP_select(msg[4:])
		break
	case msgtype.MSG_REQ_GAME_UPDATE_SHPPING: //后台修改游戏内公告  MSG_REQ_GAME_UPDATE_NUCLEARMSG
		ClientReq_Game_shpping_select(msg[4:])
		break
	case msgtype.MSG_REQ_GAME_UPDATE_NUCLEARMSG: //后台修改游戏内公告  MSG_REQ_GAME_UPDATE_pay
		ClientReq_Game_hedan_select(msg[4:])
		break
	case msgtype.MSG_REQ_GAME_UPDATE_pay: //后台修改游戏内公告  MSG_REQ_GAME_PLAYERDATA
		ClientReq_Game_hedan_select(msg[4:])
		break
	case msgtype.MSG_REQ_GAME_PLAYERDATA: //后台请求最高在线人数  MSG_REQ_GAME_ONLINEDATA
		ClientReq_Game_top_select(msg[4:])
		break
	case msgtype.MSG_REQ_GAME_ONLINEDATA: //后台查询在线数据  MSG_REQ_GAME_PAYDATA
		ClientReq_Game_hedan_inform(msg[4:])
		break
	case msgtype.MSG_REQ_GAME_PAYDATA: //后台查询在线数据  MSG_REQ_GAME_PAYDATA_01
		ClientReq_Game_hedan_inform(msg[4:])
		break
	case msgtype.MSG_REQ_GAME_PAYDATA_01: //后台查询在线数据  MSG_REQ_GAME_CREATECARDS
		ClientReq_Game_inform_pay_001(msg[4:])
		break
	case msgtype.MSG_REQ_GAME_CREATECARDS: //后台查询在线数据  MSG_REQ_GAME_CREATECARDS_COPY
		ClientReq_insert_CREATECARDS(msg[4:])
		break
	case msgtype.MSG_REQ_GAME_CREATECARDS_COPY: //后台查询在线数据  MSG_REQ_GAME_CREATECARDS_COPY
		ClientReq_insert_CARDSPAYUSE_inform(msg[4:])
		break
	case msgtype.MSG_GAME_CLIENT: //后台查询在线数据  MSG_REQ_GAME_CREATECARDS_COPY
		ClientReq_Update_CARDSPAYUSE_Game(msg[4:])
		break
	case msgtype.MSG_GAME_INFORME_USER: //后台查询在线数据
		ClientReq_Select_CARDSPAYUSE_Game(msg[4:], conn)
		break
	case msgtype.MSG_REQ_GAME_USER_PSZ:
		ClientReq_Select_user_Game(msg[4:])
		break
	case msgtype.MSG_REQ_GAME_USER_SHU:
		ClientReq_Select_user_Game_SHZ(msg[4:])
		break //MSG_REQ_GAME_USER_SHU

	case msgtype.MSG_REQ_GAME_BOMB:
		Select_Bomb_inform(msg[4:])
		break
	case msgtype.MSG_REQ_GAME_USER:
		SelectUser_inform(msg[4:])
		break
	case msgtype.B_SET_USER_ROSE_BACK:
		Bomb_inform_0000001(msg[4:])
		break
	case msgtype.B_SEA_USER_BOMB_BACK:
		Bomb_inform_0000001(msg[4:])
		break
	case msgtype.MSG_REQ_SLWH_INFORM:
		Slinwuhui_inform(msg[4:])
		break
	case msgtype.B_SEA_USER_VIP_HTML:
		Select_Html_table(msg[4:])
		break
	case msgtype.B_SEA_SELECT_USER_VIP_HTML:
		Select_Html_VIP(msg[4:])
		break
	case msgtype.B_SEA_SELECT_USER_GENERAL_HTML:
		Select_Html_SHOP(msg[4:])
		break
	case msgtype.B_SEA_SELECT_USER_DETAILS_HTML:
		Select_Html_SHOPDetailed(msg[4:])
		break
	case msgtype.B_SEA_SELECT_USER_PAY_HTML:
		Select_Html_PAY(msg[4:])
		break
	default:
		break
	}

}







//后台请求拼三张 服务器 数据信息  返回页面数据
func ClientReq_Select_user_Game(data []byte) bool{
	var msg msgtype.BACK_SEA_BACK_PSZ_GAME
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	//PSZNUMBER =  msg.RM


	 roomlist  := Faction_PSZ_INFORM_USER(msg.RM)

	 var msg_01 msgtype.BACKGROUNDRECORD_NN_copy

	msg_01.RM = roomlist
	carddata, err := json.Marshal(msg_01)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_USER_PSZ, carddata)
	fmt.Println(msg.UG,"========Get_PSZ_Game_inform_count=========",string(finalData))
	SendMsgInClient(msg.UG,finalData)

	return true
}


//后台请求水浒传服务器信息
func ClientReq_Select_user_Game_SHZ(data []byte) bool{
	var msg msgtype.BACK_SEA_BACK_PSZ_GAME
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	PSZNUMBER =  msg.RM
	//Insert_BACK_all_SHZ(msg.UG,msg.RM)
	Get_SHZ_Game_inform_count(msg.UG,msg.RM)
	return true
}



//页面请求核弹查询
func Select_Bomb_inform(data []byte) bool{

	var msg msgtype.BACK_SEA_SELECT_BOMB_USER
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	if  msg.St == 1 {
		Select_Bomb_count(msg.UG)
	}else {
		Select_Bomb_count_rose(msg.UG)

	}
	return true
}



//页面请求玩家排行榜
func SelectUser_inform(data []byte) bool{

	var msg msgtype.Back_SEA_User_back
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	Select_User_inform(msg)
	return true
}

//页面请求图表数据函数
func Select_Html_table(data []byte) bool{
	var msg msgtype.BACK_SEA_VIP_PROPS_HTML
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	Select_table_inform(msg.UG)
	return true

}

//页面请求Vip数据 根据id或者昵称
func Select_Html_VIP(data []byte) bool{
	var msg msgtype.BACK_SEA_VIP_UID_AND_NAME_HTML
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	Select_vip_inform_name(msg.UG,msg.NAME,msg.UID)
	return true

}

//页面请求销售总况数据
func Select_Html_SHOP(data []byte) bool{
	var msg msgtype.BACK_SEA_SHOP_UID_AND_NAME_HTML
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	Select_shop_inform_name(msg.UG,msg.NAME,msg.UID,msg.CT,msg.SN,msg.NUM)
	return true

}

//页面请求销售明细数据
func Select_Html_SHOPDetailed(data []byte) bool{
	var msg msgtype.BACK_SEA_SHOPD_UID_AND_NAME_HTML
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	Select_shopDetailed_inform_name(msg.UG,msg.NAME,msg.UID)
	return true

}

//页面请求支付查询数据
func Select_Html_PAY(data []byte) bool{
	var msg msgtype.BACK_SEA_PAY_GENERAL
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}
	Select_pay_inform_name(msg.UG,msg.NAME,msg.UID,msg.ST,msg.SN,msg.NUM)
	return true

}


//页面 请求 核弹数据详情

func Bomb_inform_0000001(data []byte)bool{
	var msg msgtype.BACK_SEA_SPECIAL_PROPS
	err := json.Unmarshal(data,&msg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return false
	}

	Back_Bomb_the(msg)

	return true
}












//用户登录包头处理
func UserLoginRec(data []byte,conn *websocket.Conn){
	var userlogin msgtype.Back_Req_GM_Login
	err := json.Unmarshal(data, &userlogin)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	UpdaConnMsg_copy(userlogin.UN,conn)
	if DisposeClientMsg(userlogin){
		fmt.Println("send UserLoginRec message success!")
	}
}



//后台请求查询用户信息
func UnameLoginRec(data []byte){
	var userName msgtype.Back_Req_UserInfo
	err := json.Unmarshal(data, &userName)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	uid := strings.Split(userName.NN,"，")
	var Uid  []string
	for i:= 0;i<len(uid) ;i++  {
		uids := strings.Split(uid[i],",")
		for j:= 0;j<len(uids) ; j++ {
			Uid = append(Uid,uids[j])
		}
	}


	if Select_User(userName.UG,userName.SN,userName.NUM,userName.SID,userName.UID,userName.NN){
		fmt.Println("send UnameLoginRec message success!")
	}
}
//后台查询用户封禁信息
func ResClientMsgRec(data []byte){
	var userregister msgtype.Back_Req_Banned_NN
	err := json.Unmarshal(data, &userregister)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	if Select_User_Banned_NN(userregister.UG,userregister.NN,userregister.SN,userregister.NUM,userregister.SID) {
		fmt.Println("send 后台查询用户封禁信息 message success!")
	}
}


//客户端连接的guid请求
func RetConnGuid(data []byte,conn *websocket.Conn){
	var connguid msgtype.Back_Req_De_Archive
	err := json.Unmarshal(data, &connguid)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	if Select_User_De_Archive(connguid.UG,connguid.ST,connguid.ID){
		fmt.Println("send RetConnGuid message success!")
	}
}



































//获得逻辑服消息函数
func ServerGameMsg(msg []byte){
	b := []byte{msg[0], msg[1], msg[2], msg[3]}
	mymsgtype := string(b)

	switch mymsgtype {
	case msgtype.CONSOLE_REC_R: //后台请求记录的包头
		ResGameLoginMsg(msg[4:])
		break
	case msgtype.CONSOLE_RECCOUNT_R: //后台请求记录长度的包头
		ResGamcountinMsg(msg[4:])
		break
	case msgtype.CONSOLE_MODIFY_RATE_R: //返回后台修改概率  CONSOLE_GLOBAL_REC_R
		ResDGameMsg(msg[4:])
		break
	case msgtype.CONSOLE_RECCOUNT_R_DZ:  ///德州  请求长度包头
		ResGamcountinMsg(msg[4:])
		break
	case msgtype.CONSOLE_REC_R_ZD:  ///德州  请求记录包头
		Dezhou_inform(msg[4:])
		break
	case msgtype.CONSOLE_MODIFY_RATE_R_DZ:  ///德州  返回修改  概率
		ResDGameMsg(msg[4:])
		break
	case msgtype.CONSOLE_RECCOUNT_R_HHMF:  ///黑红梅方  请求长度包头
		ResGameGameMsg_HHMF(msg[4:])
		break
	case msgtype.CONSOLE_REC_R_HHMF:  ///黑红梅方  请求记录包头
		ResGame_hhmf_Msg(msg[4:])
		break
	case msgtype.CONSOLE_MODIFY_RATE_R_HHMF:  ///黑红梅方  返回修改  概率
		ResDGameMsg(msg[4:])
		break

	case msgtype.CONSOLE_RECCOUNT_R_NN:  ///牛牛  请求长度包头
		ResGameGameMsg_HHMF(msg[4:])
		break
	case msgtype.CONSOLE_REC_R_NN:  ///牛牛  请求记录包头
		ResGame_NN_Msg(msg[4:])
		break
	case msgtype.CONSOLE_MODIFY_RATE_R_NN:  ///牛牛  返回修改  概率
		ResDGameMsg(msg[4:])
		break

	case msgtype.CONSOLE_RECCOUNT_R_PSZ:  ///拼三张  请求长度包头
		ResGameGameMsg_PSZ(msg[4:])
		break
	case msgtype.CONSOLE_REC_R_PSZ:  ///拼三张  请求记录包头
		ResGame_PSZ_Msg(msg[4:])
		break
	case msgtype.CONSOLE_MODIFY_RATE_R_PSZ:  ///拼三张  返回修改  概率
		ResDGameMsg(msg[4:])
		break


	case msgtype.CONSOLE_RECCOUNT_R_SH:  //水浒传  请求长度包头
		ResGameGameMsg_SHZ(msg[4:])
		break
	case msgtype.CONSOLE_REC_R_SH:  //水浒传  请求记录包头
		ResGame_SHZ_Msg(msg[4:])
		break
	case msgtype.CONSOLE_MODIFY_RATE_R_SH:  //水浒传  返回修改  概率
		ResDGameMsg(msg[4:])
		break


	case msgtype.CONSOLE_RECCOUNT_R_S://森林舞会 请求长度包头
		ResGameGameMsg_SLWH(msg[4:])
		break
	case msgtype.CONSOLE_REC_R_S:
		ResGame_slwh_Msg(msg[4:])
		break
	case msgtype.CONSOLE_GETROOMCOUNT_R:
		SLWH_room_inform(msg[4:])
		break


		break
	default:
		break
	}

}



//逻辑服返回修改档次成功与否
func ResDGameMsg(data []byte) bool{
	//var loginretmsg msgtype.PLAYERDROPDOWNDEALER_R
	//err := json.Unmarshal(data, &loginretmsg)
	//if err != nil{
	//	fmt.Println("Json Parsing error!")
	//	return false
	//}
	//var loginretmsgs msgtype.PLAYERDROPDOWNDEALER_R
	//
	//loginretmsgs.Err =  loginretmsg.Err
	//
	//inserdata, err := json.Marshal(loginretmsgs)
	//if err != nil {
	//	log.Println(err)
	//	return false
	//}
	//finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_CLIENT, inserdata)
	//
	////finalData := msgtype.CombinationData(msgtype.MSG_RET_CLIENT_U, data)
	//for i:= 0; i<len(UserConn) ;  i++ {
	//	if UserConn[i].GUID ==  loginretmsg.UG {
	//		if UserConn[i].Conn.WriteMessage(websocket.TextMessage, finalData) != nil {
	//			//处理用户离开消息
	//			//subscribe <- Subscriber{Name: user, Conn: ws, Room: room}
	//			//unsubscribe <- models.MsgLeave{Guid: RoomList[room].PLAYERS[i].GUID, Room: room}
	//		}
	//	}
	//}
	return false
}








//后台请求记录的包头
func ResGameLoginMsg(data []byte){
	var loginretmsg msgtype.BACKGROUNDRECORD_R
	err := json.Unmarshal(data, &loginretmsg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}



	//INFORM

	INFORM =append(INFORM,loginretmsg.Rec...)

	fmt.Println(INFORM,loginretmsg.Rec,"=======ResGameLoginMsg=====",len(loginretmsg.Rec))
	//if MAX_NUM >= num_00001{
	//	return true
	//}
	Get_Game_inform_count()
	//finalData := msgtype.CombinationData(msgtype.MSG_RET_CLIENT_U, data)
	//for i:= 0; i<len(UserConn) ;  i++ {
	//	if UserConn[i].GUID ==  loginretmsg.UN {
	//		if UserConn[i].Conn.WriteMessage(websocket.TextMessage, finalData) != nil {
	//			//处理用户离开消息
	//			//subscribe <- Subscriber{Name: user, Conn: ws, Room: room}
	//			//unsubscribe <- models.MsgLeave{Guid: RoomList[room].PLAYERS[i].GUID, Room: room}
	//		}
	//	}
	//}
	//if loginretmsg.UG != "" {
	//	for i:= 0; i<len(UserConn) ;  i++ {
	//		if UserConn[i].GUID ==  loginretmsg.UN {
	//			UserConn[i].GUID = loginretmsg.UG
	//			UserConn[i].Username = loginretmsg.UN
	//		}
	//	}
	//}
}
//请求德州逻辑服数据
func Dezhou_inform(data []byte){//DEZHOU

	var loginretmsg msgtype.BACKGROUNDRECORD_R_DZ
	err := json.Unmarshal(data, &loginretmsg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	//INFORM
	DEZHOU =append(DEZHOU,loginretmsg.Rec...)

	fmt.Println(DEZHOU,loginretmsg.Rec,"======1=ResGameLoginMsg=====",len(loginretmsg.Rec))
	//if MAX_NUM >= num_00001{
	//	return true
	//}
	Get_DZ_Game_inform_count()
	//finalData := msgtype.CombinationData(msgtype.MSG_RET_CLIENT_U, data)
	//for i:= 0; i<len(UserConn) ;  i++ {
	//	if UserConn[i].GUID ==  loginretmsg.UN {
	//		if UserConn[i].Conn.WriteMessage(websocket.TextMessage, finalData) != nil {
	//			//处理用户离开消息
	//			//subscribe <- Subscriber{Name: user, Conn: ws, Room: room}
	//			//unsubscribe <- models.MsgLeave{Guid: RoomList[room].PLAYERS[i].GUID, Room: room}
	//		}
	//	}
	//}
	//if loginretmsg.UG != "" {
	//	for i:= 0; i<len(UserConn) ;  i++ {
	//		if UserConn[i].GUID ==  loginretmsg.UN {
	//			UserConn[i].GUID = loginretmsg.UG
	//			UserConn[i].Username = loginretmsg.UN
	//		}
	//	}
	//}

}




//后台请求记录长度的包头
func ResGamcountinMsg(data []byte){

	var loginretmsg msgtype.BACKGROUNDRECORDCOUNT_R
	err := json.Unmarshal(data, &loginretmsg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	if  loginretmsg.Ct != 0{
		models.Num_00001_DZ = loginretmsg.Ct
		fmt.Println(models.Num_00001_DZ,"====1===ResGameLoginMsg=====",loginretmsg)
		Get_Game_inform()
	}

	//finalData := msgtype.CombinationData(msgtype.MSG_RET_CLIENT_U, data)
	//for i:= 0; i<len(UserConn) ;  i++ {
	//	if UserConn[i].GUID ==  loginretmsg.UN {
	//		if UserConn[i].Conn.WriteMessage(websocket.TextMessage, finalData) != nil {
	//			//处理用户离开消息
	//			//subscribe <- Subscriber{Name: user, Conn: ws, Room: room}
	//			//unsubscribe <- models.MsgLeave{Guid: RoomList[room].PLAYERS[i].GUID, Room: room}
	//		}
	//	}
	//}
	//if loginretmsg.UG != "" {
	//	for i:= 0; i<len(UserConn) ;  i++ {
	//		if UserConn[i].GUID ==  loginretmsg.UN {
	//			UserConn[i].GUID = loginretmsg.UG
	//			UserConn[i].Username = loginretmsg.UN
	//		}
	//	}
	//}
}


//后台请求记录的包头
func ResGameGameMsg_(data []byte){
	var loginretmsg msgtype.BACKGROUNDGLOBALRECORD_R_JS
	err := json.Unmarshal(data, &loginretmsg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	fmt.Println("==============123======",loginretmsg)


	//INFORM

	//INFORM =append(INFORM,loginretmsg.Rec...)
	//
	//fmt.Println(INFORM,loginretmsg.Rec,"=======ResGameLoginMsg=====",len(loginretmsg.Rec))
	//if MAX_NUM >= num_00001{
	//	return true
	//}
	//Get_Game_inform_count()
	//finalData := msgtype.CombinationData(msgtype.MSG_RET_CLIENT_U, data)
	//for i:= 0; i<len(UserConn) ;  i++ {
	//	if UserConn[i].GUID ==  loginretmsg.UN {
	//		if UserConn[i].Conn.WriteMessage(websocket.TextMessage, finalData) != nil {
	//			//处理用户离开消息
	//			//subscribe <- Subscriber{Name: user, Conn: ws, Room: room}
	//			//unsubscribe <- models.MsgLeave{Guid: RoomList[room].PLAYERS[i].GUID, Room: room}
	//		}
	//	}
	//}
	//if loginretmsg.UG != "" {
	//	for i:= 0; i<len(UserConn) ;  i++ {
	//		if UserConn[i].GUID ==  loginretmsg.UN {
	//			UserConn[i].GUID = loginretmsg.UG
	//			UserConn[i].Username = loginretmsg.UN
	//		}
	//	}
	//}
}



//后台请求记录的包头  黑红梅方
func ResGameGameMsg_HHMF(data []byte){
	var loginretmsg msgtype.BACKGROUNDRECORDCOUNT_R
	err := json.Unmarshal(data, &loginretmsg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	if  loginretmsg.Ct != 0{
		models.Num_00001_NN = loginretmsg.Ct
		Get_NN_Game_inform_count()
	}

}




//HHMFLIST

//黑红梅方
//后台请求记录的包头
func ResGame_hhmf_Msg(data []byte){
	var loginretmsg msgtype.BACKGROUNDRECORD_R_DZ
	err := json.Unmarshal(data, &loginretmsg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	HHMFLIST =append(HHMFLIST,loginretmsg.Rec...)
	fmt.Println(HHMFLIST,loginretmsg.Rec,"=======ResGameLoginMsg=====",len(loginretmsg.Rec))
	Get_HHMF_Game_inform_count()

}








//斗牛
//后台请求记录的包头
func ResGame_NN_Msg(data []byte){
	var loginretmsg msgtype.BACKGROUNDRECORD_NN
	err := json.Unmarshal(data, &loginretmsg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	HLDNLIST =append(HLDNLIST,loginretmsg.Rec...)
	fmt.Println(HLDNLIST,loginretmsg.Rec,"=======ResGameLoginMsg=====",len(loginretmsg.Rec))
	Get_NN_Game_inform_count()

}






//拼三张函数

//后台请求记录的包头  黑红梅方
func ResGameGameMsg_PSZ(data []byte){
	var loginretmsg msgtype.BACKGROUNDRECORDCOUNT_R
	err := json.Unmarshal(data, &loginretmsg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	//fmt.Println("===ResGameGameMsg_PSZ=2==",loginretmsg)
	if  loginretmsg.Ct != 0{
		models.Num_00001_PSZ= loginretmsg.Ct
		Get_PSZ_Game_inform_count(loginretmsg.Mgd)
	}
}

//后台请求记录的包头
func ResGame_PSZ_Msg(data []byte){
	var loginretmsg msgtype.BACKGROUNDRECORD_NN
	err := json.Unmarshal(data, &loginretmsg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	PSZINFORM =append(PSZINFORM,loginretmsg.Rec...)
	fmt.Println(PSZINFORM,"=======ResGameLoginMsg=1====",len(loginretmsg.Rec))
	Get_PSZ_Game_inform_count(loginretmsg.Mgd)

}










//水浒传函数

//后台请求记录的包头
func ResGameGameMsg_SHZ(data []byte){
	//var loginretmsg msgtype.BACKGROUNDRECORDCOUNT_SHZ
	//err := json.Unmarshal(data, &loginretmsg)
	//if err != nil{
	//	fmt.Println("Json Parsing error!")
	//	return
	//}
	//fmt.Println(loginretmsg.Mgd,"===ResGameGameMsg_PSZ===",loginretmsg)
	//if  loginretmsg.Ct != 0{
	//	models.Num_00001_SHZ= loginretmsg.Ct
	//	//Get_SHZ_Game_inform_count(loginretmsg.Mgd)
	//}

}

//后台请求记录的包头
func ResGame_SHZ_Msg(data []byte){
	//fmt.Println(string(data),"===ResGame_SHZ_Msg==123==ResGameLoginMsg=====")
	var loginretmsg msgtype.BACKGROUNDGLOBALRECORD_R_SH
	err := json.Unmarshal(data, &loginretmsg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	//PSZINFORM =append(PSZINFORM,loginretmsg.Rec...)
	fmt.Println(loginretmsg.Rec,"===ResGame_SHZ_Msg====ResGameLoginMsg=====")
	//Get_PSZ_Game_inform_count(loginretmsg.Mgd)

	//var  msg_0001   msgtype.BACK_GEA_BACK_PSZ_GAME
	//msg_0001.Err = -1
	//msg_0001.RM = Faction_PSZ_INFORM(PSZNUMBER)
	//carddata, err := json.Marshal(msg_0001)
	//if err != nil {
	//	fmt.Println("carddata err ")
	//}
	finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_USER_PSZ, data)
	//fmt.Println(guid,"========Get_PSZ_Game_inform_count=========",string(finalData))
	SendMsgInClient(loginretmsg.Mgd,finalData)


}








//森林舞会函数

//逻辑服返回森林舞会长度包头
func ResGameGameMsg_SLWH(data []byte){
	fmt.Println("===============")
	var loginretmsg msgtype.BACKGROUNDRECORDCOUNT_R
	err := json.Unmarshal(data, &loginretmsg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	fmt.Println(loginretmsg.Ct,"===ResGameGameMsg_PSZ===",loginretmsg)
	if  loginretmsg.Ct != 0{
		models.Num_00001_SLWH= loginretmsg.Ct
		Get_PSZ_Game_inform_SLWH(0)
	}
}

//后台请求森林舞会记录的包头
func ResGame_slwh_Msg(data []byte){
	//fmt.Println(string(data),"===ResGame_SHZ_Msg==123==ResGameLoginMsg==ResGame_slwh_Msg===")
	var loginretmsg msgtype.BACKGROUNDRECORD_R
	err := json.Unmarshal(data, &loginretmsg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
	////PSZINFORM =append(PSZINFORM,loginretmsg.Rec...)
	//fmt.Println(loginretmsg.Rec,"===ResGame_SHZ_Msg====ResGameLoginMsg=====")
	////Get_PSZ_Game_inform_count(loginretmsg.Mgd)
	//
	////var  msg_0001   msgtype.BACK_GEA_BACK_PSZ_GAME
	////msg_0001.Err = -1
	////msg_0001.RM = Faction_PSZ_INFORM(PSZNUMBER)
	////carddata, err := json.Marshal(msg_0001)
	////if err != nil {
	////	fmt.Println("carddata err ")
	////}
	////finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_USER_PSZ, data)
	////fmt.Println(guid,"========Get_PSZ_Game_inform_count=========",string(finalData))
	//Get_PSZ_Game_inform_SLWH()
	var  num   = 0

	//SLWHINFORM =append(SLWHINFORM,loginretmsg.Da...)
	for i:= 0 ; i<len(loginretmsg.Rec) ; i++ {

		//Room int//房间号
		//Trm  int//目标房间号
		//Win int64//赢的值
		//Los int64//输的值
		//Tm string//时间戳


		var  msg msgtype.BACKGROUNDDATA
		msg.Room = loginretmsg.Rec[i].Room
		msg.Trm = loginretmsg.Rec[i].Trm
		msg.Win = loginretmsg.Rec[i].Win
		msg.Los = loginretmsg.Rec[i].Los
		msg.Tm = loginretmsg.Rec[i].Tm
		num =  loginretmsg.Rec[i].Room
		SLWHINFORM[loginretmsg.Rec[i].Room].Rec = append(SLWHINFORM[loginretmsg.Rec[i].Room].Rec,msg)
	}



	//fmt.Println(SLWHINFORM,loginretmsg.Mgd,"=======ResGameLoginMsg=====",len(loginretmsg.Rec))
	Get_PSZ_Game_inform_SLWH(num)


}









//获得逻辑服消息函数
func ServerlobyMsg(msg []byte){
	b := []byte{msg[0], msg[1], msg[2], msg[3]}
	mymsgtype := string(b)

	switch mymsgtype {
	case msgtype.LC_RET_BACK_ALLIPORT: //后台请求记录的包头
		ReslobyLoginMsg(msg[4:])
		break
	case msgtype.LC_RET_BACK_SENDIPORT: //后台请求记录长度的包头
		ReslobyinMsg(msg[4:])
		break

	default:
		break
	}

}




//后台大厅服务器数据返回函数
func ReslobyLoginMsg(data []byte) {
	var loginretmsg msgtype.LOBBY_RET_LOGICPORT
	err := json.Unmarshal(data, &loginretmsg)
	if err != nil {
		fmt.Println("Json Parsing error!")
		return
	}

	fmt.Println("=======ReslobyLoginMsg====", loginretmsg.LogicList)

	IPprot_list = append(IPprot_list, loginretmsg.LogicList...)
	//			GHOST_Login_LinkString = "ws://"+GHOST_DB_IP+":"+GHOST_DB_PORT+"/ws/join?"+"stype="+GHOST_Login_Ctype+"&lport="+GHOST_Login_PORT+"&guid="+GHOST_Login_GUID
	//GAMEGHOST_HREF_PORT = "ws://"+GAMEGHOST_DB_IP+":"+GAMEGHOST_DB_PORT+"/ws/join?"+"uname=Shark&room=100&guid="+GAMEGHOST_Login_PORT+"&gd=300&nc=Shark&vip=0&cp=-1&hd=0"
	for i := 0; i < len(IPprot_list); i++ {
		if IPprot_list[i].Port != "7041" && IPprot_list[i].Ctype != 23 {
			//GHOST_GameLinkStrings := "ws://" + IPprot_list[i].Ip + ":" + IPprot_list[i].Port + "/ws/join?" + "stype=" + common.GHOST_Login_Ctype + "&lport=" + common.GHOST_Login_PORT + "&guid=" + common.GHOST_Login_GUID
			GHOST_GameLinkStrings := "ws://" + IPprot_list[i].Ip + ":" + IPprot_list[i].Port + "/ws/join?" + "uname=Shark&room=29&guid=" + common.GHOST_UG + "&gd=300&nc=Shark&vip=0&cp=-1&hd=0"

			go ServerStart_ToServer_Game__123(GHOST_GameLinkStrings, IPprot_list[i].Ip, IPprot_list[i].Port, IPprot_list[i].Ctype)
		}
	}

	Time_send()
}



//后台大厅最新服务器链接函数
func ReslobyinMsg(data []byte) {
	var loginretmsg msgtype.LOBBY_BET_LOGICIPORT
	err := json.Unmarshal(data, &loginretmsg)
	if err != nil {
		fmt.Println("Json Parsing error!")
		return
	}

	var  msg  msgtype.LogicIport
	msg.Ctype = loginretmsg.Ctype
	msg.Port = loginretmsg.Port
	msg.Ip = loginretmsg.Ip
	IPprot_list = append(IPprot_list,)

	if loginretmsg.Port != "7041" && loginretmsg.Ctype != 23  {
		GHOST_GameLinkStrings := "ws://" + loginretmsg.Ip + ":" + loginretmsg.Port + "/ws/join?" + "uname=Shark&room=29&guid=" + common.GHOST_UG + "&gd=300&nc=Shark&vip=0&cp=-1&hd=0"
		fmt.Println("=======ReslobyLoginMsg====", loginretmsg)
		go ServerStart_ToServer_Game__123(GHOST_GameLinkStrings, loginretmsg.Ip, loginretmsg.Port, loginretmsg.Ctype)
	}

}








//客户端吧请求服务器数据

