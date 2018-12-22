package controllers

import (
	"github.com/robfig/cron"

	"time"
)

var crons *cron.Cron//定时任务








func Time_send(){
	//time := BackTime()
	//log.Print(time,"=====Time_send=======",time[3:5])
	//spec := "@every 1hour"


	//Get_Game_senlinwuhui_count(18)
	crons = cron.New()
	spec := "@every 60s"
	//spec := "@every 1hour"
	//spec := "*/"+time[0:1]+" * * * * ?"
	crons.AddFunc(spec,func() {
		//发送逻辑服请求数据定时器
		//Time_send()
		//Get_Game_count()

		//Get_Game_senlinwuhui_count(18)

		ResGameGameMsg_PSZ_game(25)

		  //Get_Game_senlinwuhui_count(18)
		//log.Print("=====Time_send=======")
	})
	crons.Start()
}


func GetTimeStamp()string{
	//获取本地location
	var t int64 = time.Now().Unix()
	var s string = time.Unix(t, 0).Format("2006-01-02 15:04:05")
	//println(s)
	//fmt.Println("s = ",s)
	return s
}