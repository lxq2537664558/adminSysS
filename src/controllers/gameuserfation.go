package controllers

import (
	"msgtype"
	"encoding/json"
	"fmt"
)

//客户端请求森林舞会服务器数据
func Slinwuhui_inform(data []byte) bool {

	var msg msgtype.BACK_SEA_BACK_PSZ_GAME
	err := json.Unmarshal(data, &msg)
	if err != nil {
		fmt.Println("Json Parsing error!")
		return false

		//发送客户端消息

		var msg_0001 msgtype.BACK_GEA_BACK_slwh_GAME
		msg_0001.Err = -1
		msg_0001.RM = Faction_SLWH_INFORM(msg.RM)
		carddata, err := json.Marshal(msg_0001)
		if err != nil {
			fmt.Println("carddata err ")
		}
		finalData := msgtype.CombinationData(msgtype.MSG_RET_SLWH_INFORM, carddata)
		fmt.Println(msg.UG, "========Get_PSZ_Game_inform_count=========", string(finalData))
		SendMsgInClient(msg.UG, finalData)
		return true
	}
	return false

}


////后台请求修改档位函数
//func ClientReq_Select_user_Game(data []byte) bool{
//	var msg msgtype.BACK_SEA_BACK_PSZ_GAME
//	err := json.Unmarshal(data,&msg)
//	if err != nil{
//		fmt.Println("Json Parsing error!")
//		return false
//	}
//	PSZNUMBER =  msg.RM
//	Insert_BACK_all_PSZ(msg.UG,msg.RM)
//	return true
//}