package controllers

import (
	"log"
	"github.com/gorilla/websocket"
	"fmt"
	"common"
)

var ServerConn *websocket.Conn //DB服务器连接
var GameServerConn *websocket.Conn //逻辑服务起
var GameServerConn_loby *websocket.Conn //大厅服务器

var  Game_list   []Game_arr



//房间玩家的通讯通道数据结构
type PLAYERCHANNEL struct{
	Room 		int//房间号
	PlayerSeat 	int//座位号
	Mydata		[]byte//发送数据
	Pack		string//包头号

}




type Game_arr struct {
	Ip   string //逻辑服ip
	Port string //逻辑服端口
	Ctype  int  //游戏Ctype
	Conn   *websocket.Conn //大厅服务器
	Channel      chan PLAYERCHANNEL //通讯借口
}

func ServerStart_ToServer() { //与db服务器交互
	fmt.Println("执行中-------------------------------")
	c, _, err := websocket.DefaultDialer.Dial(common.GHOST_Login_LinkString, nil)
	if err != nil {
		ServerStart_ToServer()
		log.Fatal("dial:1", err)

	}
	defer c.Close()
	ServerConn = c
	for {
		_, message, err := c.ReadMessage()
		if err != nil {
			ServerStart_ToServer()
			log.Println("read:1", err)

			return
		}
		log.Printf("1收到一server条消息: %s", message)
		Msg_in_server <- newMsgSInfo(message)


	}
}


func ServerStart_ToServer_Game() { //与db服务器交互
	fmt.Println("执行中-----------6--------------------")
	c, _, err := websocket.DefaultDialer.Dial(common.GAMEGHOST_HREF_PORT, nil)
	if err != nil {
		//ServerStart_ToServer_Game()
		log.Fatal("dial:2", err)
	}
	defer c.Close()
	GameServerConn = c
	//Insert_BACK_all("123123213",1)  德州
	//Insert_BACK_all_HHMF("123123213",1) //黑红梅方
	//Insert_BACK_all_NN("123123213",1)//斗牛
	//Insert_BACK_all_PSZ("123123213",1)// 拼三张
	//Get_Game_count()
	for {
		_, message, err := c.ReadMessage()
		if err != nil {
			//ServerStart_ToServer_Game()
			log.Println("read:", err)
			return
		}
		log.Printf("2收到一server条消息: %s", message)
		Msg_in_Game_server <- newMsgSInfo(message)
	}
}
//www.029msg.com/static/Downloader/SJMClub-测试.apk

func ServerStart_ToServer_Game_loby() { //与db服务器交互
	fmt.Println("执行中-----------2--------------------")
	c, _, err := websocket.DefaultDialer.Dial(common.GAMEGHOST_HREF_PORT_LOBY, nil)
	if err != nil {
		ServerStart_ToServer_Game_loby()
		log.Fatal("dial:2", err)
	}
	defer c.Close()
	GameServerConn_loby = c
	Insert_loby_BACK_all()
	//Get_Game_count()
	for {
		_, message, err := c.ReadMessage()
		if err != nil {
			ServerStart_ToServer_Game_loby()
			log.Println("read:", err)
			return
		}
		log.Printf("3收到一server条消息: %s", message)
		Msg_in_loby_server <- newMsgSInfo(message)
	}
}


//Ip   string //逻辑服ip
//Port string //逻辑服端口
//Ctype int    //逻辑服ctype
func ServerStart_ToServer_Game__123(Url,ip,prot string , ctype  int)  { //与每个逻辑服链接缓存
	c, _, err := websocket.DefaultDialer.Dial(Url, nil)
	if err != nil {
		//ServerStart_ToServer_Game__123(Url,num)
		log.Fatal("dial:3", err)
		return
	}
	defer c.Close()
	//GameServerConn = c
	  num  := 0
	for  i := 0; i <len(Game_list) ;i++  {
		if  Game_list[i].Ctype == ctype{
			Game_list[i].Conn = c
			 num = 1
		}
	}

	if num == 0{
		var  msg Game_arr
		msg.Conn = c
		msg.Ctype = ctype
		msg.Ip = ip
		msg.Port = prot
		msg.Channel = make(chan PLAYERCHANNEL,5)
		go RoomPlayerMessageChanel(msg.Channel,ctype)
		Game_list = append(Game_list,msg)
	}

	//SLWH_room_GET_inform(ctype)


	ResGameGameMsg_PSZ_game(ctype)


	//Get_Game_count()
	for {
		_, message, err := c.ReadMessage()
		if err != nil {
			log.Println("read:", err)
			return
		}
		//log.Printf("4收到一server条消息: %s", message)
		Msg_in_Game_server <- newMsgSInfo(message)
	}
}



//针对channel的数据发送队列通道、
func RoomPlayerMessageChanel(cl chan PLAYERCHANNEL,room int){
	//if !CheckRoom(room){
	//	return
	//}
	//fmt.Println("RoomPlayerMessageChanel start")
	for{
		//fmt.Println("RoomPlayerMessageChanel for i := 0; i >= 10;{")
		select{
		case msgdata := <- cl:
			//fmt.Println("RoomPlayerMessageChanel msgdata room = ",room)
			//fmt.Println("RoomPlayerMessageChanel msgdata PlayerSeat = ",msgdata.PlayerSeat)
			if !SendMsgInCtype_Game(msgdata.Mydata,msgdata.Room){
				return
			}
			break
		}
	}
}




//
