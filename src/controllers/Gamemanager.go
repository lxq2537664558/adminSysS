package controllers

import (
	"msgtype"
	"common"
	"encoding/json"
	"fmt"
	"models"
)


//请求每个逻辑服 房间号
func SLWH_room_GET_inform(ctype int ) {

	var msg msgtype.BACKGROUNDROOMCOUNT_S_room
	msg.Guid = common.GAMEGHOST_Login_PORT
	msg.Room = 29


	carddata, err := json.Marshal(msg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_GETROOMCOUNT_S, carddata)
	Send_Game_001(ctype,finalData)

	//SendMsgInCtype_Game(finalData,ctype)


}






//逻辑服返回房间数量
func SLWH_room_inform(data []byte)  {


	var loginretmsg msgtype.BACKGROUNDROOMCOUNT_R
	err := json.Unmarshal(data, &loginretmsg)
	if err != nil{
		fmt.Println("Json Parsing error!")
		return
	}
		//fmt.Println("======SLWH_room_inform=====",loginretmsg)
	SLWHROOMCOUNT = loginretmsg.Rct
	for i:= 0; i< loginretmsg.Rct ;  i++ {
		var  msg BACKGROUNDRECORD_R_COPY
		msg.Room = i
		SLWHINFORM =append(SLWHINFORM,msg)
	}







}


//后台请求森林舞会房间数据
func Get_Game_senlinwuhui_count(ctype  int ) bool{


	var sendUserMsg msgtype.BACKGROUNDGLOBALRECORD_S_PJ
	sendUserMsg.Guid = common.GAMEGHOST_Login_PORT
	sendUserMsg.Room = 29
	sendUserMsg.Mgd =  common.GAMEGHOST_Login_PORT
	sendUserMsg.Trm = 29
	//fmt.Println("=========Get_Game_senlinwuhui_count==========",SLWHROOMCOUNT)
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_RECCOUNT_S_S, carddata)
	//var msgs models.MsgSInfo
	//msgs.Data = finalData
	//Msg_in_Game_server <- msgs
	SendMsgInCtype_Game(finalData,ctype)
	return true
}



//获取逻辑服5

//循环获取拼三张逻辑服数据

var num_01_SLWH = 50
var MIN_NUM_SLWH =0
var MAX_NUM_SLWH = 50

func Get_PSZ_Game_inform_SLWH(room  int ) bool {
	//fmt.Println(SLWHINFORM[0].Rec,"===66666=====123====123123",len(SLWHINFORM[0].Rec))
	var sendUserMsg msgtype.BACKGROUNDRECORD_S
	if MAX_NUM_SLWH >= models.Num_00001_SLWH {
		sendUserMsg.Mx = models.Num_00001_SLWH
		sendUserMsg.Mi = MIN_NUM_SLWH
		if sendUserMsg.Mi <= 0 {
			sendUserMsg.Mi = 0
		}
	} else {
		sendUserMsg.Mx = MAX_NUM_SLWH
		sendUserMsg.Mi = MIN_NUM_SLWH
	}
	if sendUserMsg.Mi > models.Num_00001_SLWH {
		fmt.Println("===1=发送用户信息")

		for as := room; as < SLWHROOMCOUNT; as ++ {

			num_01_SLWH = 50
			MIN_NUM_SLWH = 0
			MAX_NUM_SLWH = 50

			Get_PSZ_Game_inform_SLWH(as)
		}

		////发送客户端消息
		//
		//var  msg_0001   msgtype.BACK_GEA_BACK_PSZ_GAME
		//msg_0001.Err = -1
		//msg_0001.RM = Faction_PSZ_INFORM(SLWHUMBER)
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
	finalData := msgtype.CombinationData(msgtype.CONSOLE_REC_S_S, carddata)

	Send_Game_001(18,finalData)

	//var seat = 0
	//for i := 0; i < len(Game_list); i++ {
	//	if Game_list[i].Ctype == 18 {
	//		seat = i
	//	}
	//
	//}
	//
	//var playerdata PLAYERCHANNEL
	//playerdata.Mydata = finalData
	//playerdata.Room = 18
	//Game_list[seat].Channel <- playerdata

	//SendMsgInCtype_Game(finalData,18)
	MIN_NUM_SLWH += num_01_PSZ
	MAX_NUM_SLWH += num_01_PSZ
	if MAX_NUM_SLWH >= models.Num_00001_SLWH {
		fmt.Println("=2===发送用户信息")
		//fmt.Println("==========不给逻辑服发送请求信息数据了  因为不够50条")
		//处理返回给客户端的数据
		for as := room; as < SLWHROOMCOUNT; as ++ {

			num_01_SLWH = 50
			MIN_NUM_SLWH = 0
			MAX_NUM_SLWH = 50

			Get_PSZ_Game_inform_SLWH(as)
		}

		////发送客户端消息
		//
		//var  msg_0001   msgtype.BACK_GEA_BACK_PSZ_GAME
		//msg_0001.Err = -1
		//msg_0001.RM = Faction_PSZ_INFORM(SLWHUMBER)
		//carddata, err := json.Marshal(msg_0001)
		//if err != nil {
		//	fmt.Println("carddata err ")
		//}
		//finalData := msgtype.CombinationData(msgtype.MSG_RET_GAME_USER_PSZ, carddata)
		//fmt.Println(guid,"========Get_PSZ_Game_inform_count=========",string(finalData))
		//SendMsgInClient(guid,finalData)

		return true
	}
	return true
}


//逻辑服请求拼三张数组长度包头
func ResGameGameMsg_PSZ_game(cype  int ){
	//fmt.Println("======123213=========")
	var sendUserMsg msgtype.BACKGROUNDGLOBALRECORD_S_PJ
	sendUserMsg.Guid =   "123213123"
	sendUserMsg.Room = 29
	sendUserMsg.Mgd = common.GAMEGHOST_Login_PORT
	sendUserMsg.Trm = 0
	carddata, err := json.Marshal(sendUserMsg)
	if err != nil {
		fmt.Println("carddata err ")
	}
	finalData := msgtype.CombinationData(msgtype.CONSOLE_RECCOUNT_S_PSZ, carddata)
	//SendMsgInCtype_Game(finalData,cype)


	Send_Game_001(cype,finalData)
	//err := json.Unmarshal(data, &loginretmsg)
	//if err != nil{
	//	fmt.Println("Json Parsing error!")
	//	return
	//}
	//fmt.Println(loginretmsg.Ct,"===ResGameGameMsg_PSZ===",loginretmsg)
	//if  loginretmsg.Ct != 0{
	//	models.Num_00001_SLWH= loginretmsg.Ct
	//	Get_PSZ_Game_inform_SLWH(0)
	//}
}



//发送逻辑服数据
func Send_Game_001(ctype  int ,finalData []byte){
	var seat = -1
	for i := 0; i < len(Game_list); i++ {
		if Game_list[i].Ctype == 18 {
			seat = i
		}

	}
	if seat  != -1 {
		var playerdata PLAYERCHANNEL
		playerdata.Mydata = finalData
		playerdata.Room = ctype
		Game_list[seat].Channel <- playerdata
	}
}

