package common

import (
	"time"
)
//获取当前年份，月份，日期，时间，礼拜几
func GetNowTime()(year,date,day,tim,wek string){
	tim_copy :=  time.Now().Format("2006-01-02 15:04:05")
	return tim_copy[0:4],tim_copy[5:7],tim_copy[8:10],tim_copy[11:19],time.Now().Weekday().String()
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