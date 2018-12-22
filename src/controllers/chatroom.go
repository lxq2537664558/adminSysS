// Copyright 2013 Beego Samples authors
//
// Licensed under the Apache License, Version 2.0 (the "License"): you may
// not use this file except in compliance with the License. You may obtain
// a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations
// under the License.
//101.247.50.254
//101.247.50.119

package controllers

import (
	"container/list"
	"fmt"
	"models"

	"github.com/gorilla/websocket"
	//"strconv"
	"time"
	"github.com/astaxie/beego"
	"log"
)
var count int32

var (
	// Channel for new join users.
	subscribe = make(chan Subscriber, 10)
	// Channel for exit users.
	unsubscribe = make(chan models.MsgLeave, 10)
	// Send events here to publish them.

	Msg_in_client = make(chan models.MsgInfo, 1)    //接收到客户端的消息
	Msg_in_server = make(chan models.MsgSInfo, 1)    //接收到服务器端的消息
	Msg_out_sha = make(chan models.MsgSInfo,1)
	Msg_out_list = make(chan models.MsgSInfo,1)
	Msg_in_Game_server = make(chan models.MsgSInfo,1)
	Msg_in_loby_server = make(chan models.MsgSInfo,1)
	// Long polling waiting list.
	Msg_list = list.New()                             //消息队列
	subscribers = list.New()
)

type Subscription struct {
	Archive []models.Event      // All the events from the archive.
	New     <-chan models.Event // New events coming in.
}

func newEvent(ep models.EventType, user, msg string) models.Event {
	return models.Event{ep, user, int(time.Now().Unix()), msg}
}

func newMsgInfo(mydata []byte,conn *websocket.Conn) models.MsgInfo {
	return models.MsgInfo{mydata,conn}
}
func newMsgSInfo(mydata []byte) models.MsgSInfo {
	return models.MsgSInfo{mydata}
}

func JoinChat(user string, ws *websocket.Conn) {
	fmt.Println("ChatRoom Join")
	count++
	subscribe <- Subscriber{GUID: user, Conn: ws}
	fmt.Println("subscribe <- Subscriber{GUID: user, Conn: ws}")
}

func Leave(user *websocket.Conn) {
	unsubscribe <- models.MsgLeave{Conn: user}
}

type Subscriber struct {
	GUID string
	Conn *websocket.Conn // Only for WebSocket users; otherwise nil.
}


func init() {
	fmt.Println("go Msg")
	go RecClientMsg()
	go RecDBServerMsg()
	go SendMsgInHall()
	go RecGameServerMsg()//接收逻辑服消息
	go RecLobyServerMsg()
}

//接受客户端消息
func RecClientMsg(){
	for {
		select {
		case sub := <-subscribe: //处理新进入玩家的消息
			fmt.Println("case sub := <-subscribe:")
			if !SaveClient(sub.GUID, sub.Conn){
				fmt.Println("储存连接失败！")
			}
			fmt.Print("用户 = %s 与服务器建立连接 = %d", sub.GUID, count)
			beego.Info("New user:", sub.GUID, ";WebSocket:", sub.Conn != nil)
		case se_msg_client := <-Msg_in_client: //接收到的客户端消息
			log.Println("client msg:", string(se_msg_client.Data))
			Analysis(se_msg_client.Data,se_msg_client.Conn)
		case unsub := <-unsubscribe: //处理离开的消息
			count--
			go DelUserConn(unsub.Conn)
		case <- time.After(time.Second*3):
			break
		}
	}
}
//接受DB服务器消息
func RecDBServerMsg(){
	for {
		select {
		case se_msg_server := <-Msg_in_server: //接收到的服务器端的消息
			//log.Println("server msg", string(se_msg_server.Data))
			ServerDBMsg(se_msg_server.Data)
		}
	}
}

//通过channel发送消息到对应服务器
func SendMsgInHall(){
	for  {
		select {
		case send_msg_lobby := <-Msg_out_sha: //向lobby发送的消息不为空
			log.Println("send msg:", string(send_msg_lobby.Data))
			mutex.Lock()
			SendMsgInSha(send_msg_lobby.Data)
			mutex.Unlock()
		}
	}
}



//给逻辑服服务器发送消息 Game_list
func SendMsgInCtype_Game(msg []byte,ctype  int) bool{
	//fmt.Println("======SendMsgInCtype_Game======",Game_list)

	for i := 0; i<len(Game_list) ; i++ {

		if Game_list[i].Ctype == ctype{

			//log.Println("123213",Game_list[i].conn)
			if  Game_list[i].Conn == nil {
				fmt.Println("与逻辑服链接为空")
				return false
			}

		//	fmt.Println(Game_list[i].Ctype,"======SendMsgInCtype_Game=======",ctype,string(msg))
			if Game_list[i].Conn.WriteMessage(websocket.TextMessage,msg) != nil{
				fmt.Println("与1Game服务器的连接为空")
				fmt.Println(ctype,"==456====",Game_list[i])
				return false
			}else{
				fmt.Println("发送逻辑服成功",string(msg))
				fmt.Println(ctype,"==123====",Game_list[i])
				return  true
			}

		}
	}
	//fmt.Println("与2Game123服务器的连接为空")
	return false
}



//给逻辑服服务器发送消息
func SendMsgInSha_Game(msg []byte ) bool{
	if GameServerConn != nil{
		log.Println("=====SendMsgIn_Game====",string(msg))
		if GameServerConn.WriteMessage(websocket.TextMessage, msg) != nil{
			fmt.Println("向DB服务器发送成功！")
			return false
		}
		//return true
	}
	//fmt.Println("与Game服务器的连接为空")
	return false
}



//接收逻辑服消息
func RecGameServerMsg(){
	for {
		select {
		case se_msg_server := <-Msg_in_Game_server: //接收到的服务器端的消息
			log.Println("server msg1", string(se_msg_server.Data))
			ServerGameMsg(se_msg_server.Data)
		}
	}
}


//给逻辑服服务器发送消息
func SendLobyInSha_Game(msg []byte) bool{
	if GameServerConn_loby != nil{
		log.Println("=====Loby====",string(msg))
		if GameServerConn_loby.WriteMessage(websocket.TextMessage, msg) != nil{
			fmt.Println("向DB服务器发送成功！")
			return false
		}
		return true
	}
	fmt.Println("与Game服务器的连接为空")
	return false
}



//接收逻辑服消息
func RecLobyServerMsg(){
	for {
		select {
		case se_msg_server := <-Msg_in_loby_server: //接收到的服务器端的消息
			//log.Println("1server msg", string(se_msg_server.Data))
			ServerlobyMsg(se_msg_server.Data)
		}
	}
}


