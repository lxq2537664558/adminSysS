
/**

 获取本周、本季度、本月、上月的开端日期、停止日期
 */
var now = new Date(); //当前日期
var nowDayOfWeek = now.getDay(); //今天本周的第几天
var nowDay = now.getDate(); //当前日
var nowMonth = now.getMonth(); //当前月
var nowYear = now.getYear(); //当前年
nowYear += (nowYear < 2000) ? 1900 : 0; //
var lastMonthDate = new Date(); //上月日期
lastMonthDate.setDate(1);
lastMonthDate.setMonth(lastMonthDate.getMonth()-1);
var lastYear = lastMonthDate.getYear();
var lastMonth = lastMonthDate.getMonth();

//格局化日期：yyyy-MM-dd
function formatDate(date) {
    var myyear = date.getFullYear();
    var mymonth = date.getMonth()+1;
    var myweekday = date.getDate();

    if(mymonth < 10){
        mymonth = "0" + mymonth;
    }
    if(myweekday < 10){
        myweekday = "0" + myweekday;
    }
    return (myyear+"-"+mymonth + "-" + myweekday);
}

//获得某月的天数
function getMonthDays(myMonth){
    var monthStartDate = new Date(nowYear, myMonth, 1);
    var monthEndDate = new Date(nowYear, myMonth + 1, 1);
    var days = (monthEndDate - monthStartDate)/(1000* 60* 60 * 24);
    return days;
}

//获得本季度的开端月份
function getQuarterStartMonth(){
    var quarterStartMonth = 0;
    if(nowMonth<3){
        quarterStartMonth = 0;
    }
    if(2<nowMonth && nowMonth<6){
        quarterStartMonth = 3;
    }
    if(5<nowMonth && nowMonth<9){
        quarterStartMonth = 6;
    }
    if(nowMonth>8){
        quarterStartMonth = 9;
    }
    return quarterStartMonth;
}

//获得本周的开端日期
function getWeekStartDate() {
    var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
    return formatDate(weekStartDate);
}

//获得本周的停止日期
function getWeekEndDate() {
    var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
    return formatDate(weekEndDate);
}

//获得本月的开端日期
function getMonthStartDate(){
    var monthStartDate = new Date(nowYear, nowMonth, 1);
    return formatDate(monthStartDate);
}

//获得本月的停止日期
function getMonthEndDate(){
    var monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
    return formatDate(monthEndDate);
}

//获得上月开端时候
function getLastMonthStartDate(){
    var lastMonthStartDate = new Date(nowYear, lastMonth, 1);
    return formatDate(lastMonthStartDate);
}

//获得上月停止时候
function getLastMonthEndDate(){
    var lastMonthEndDate = new Date(nowYear, lastMonth, getMonthDays(lastMonth));
    return formatDate(lastMonthEndDate);
}

//获得本季度的开端日期
function getQuarterStartDate(){

    var quarterStartDate = new Date(nowYear, getQuarterStartMonth(), 1);
    return formatDate(quarterStartDate);
}

//获得本季度的停止日期
function getQuarterEndDate(){
    var quarterEndMonth = getQuarterStartMonth() + 2;
    var quarterStartDate = new Date(nowYear, quarterEndMonth, getMonthDays(quarterEndMonth));
    return formatDate(quarterStartDate);
}





/**
 * 得到上季度的起始日期
 * year 这个年应该是运算后得到的当前本季度的年份
 * month 这个应该是运算后得到的当前季度的开始月份
 * */
this.getPriorSeasonFirstDay = function (year, month) {
    var quarterMonthStart = 0;
    var spring = 0; //春
    var summer = 3; //夏
    var fall = 6;   //秋
    var winter = 9; //冬
    //月份从0-11
    switch (month) {//季度的其实月份
        case spring:
            //如果是第一季度则应该到去年的冬季
            year--;
            month = winter;
            break;
        case summer:
            month = spring;
            break;
        case fall:
            month = summer;
            break;
        case winter:
            month = fall;
            break;


    };


    return new Date(year, month, 1);
};


/**
 * 得到上季度的起止日期
 * **/
this.getPreviousSeason = function () {
    //起止日期数组
    var startStop = new Array();
    //获取当前时间
    var currentDate = this.getCurrentDate();
    //获得当前月份0-11
    var currentMonth = currentDate.getMonth();
    //获得当前年份4位年
    var currentYear = currentDate.getFullYear();
    //上季度的第一天
    var priorSeasonFirstDay = this.getPriorSeasonFirstDay(currentYear, currentMonth);
    //上季度的最后一天
    var priorSeasonLastDay = new Date(priorSeasonFirstDay.getFullYear(), priorSeasonFirstDay.getMonth() + 2, this.getMonthDays(priorSeasonFirstDay.getFullYear(), priorSeasonFirstDay.getMonth() + 2));
    //添加至数组
    startStop.push(priorSeasonFirstDay);
    startStop.push(priorSeasonLastDay);
    return startStop;
};




function getCurrentDate() {
    return new Date();
};



function getPriorSeasonFirstDay( year, month) {

    var quarterMonthStart = 0;
    var spring = 0; //春
    var summer = 3; //夏
    var fall = 6;   //秋
    var winter = 9; //冬
    //月份从0-11
    switch (month) {//季度的其实月份
        case spring:
            //如果是第一季度则应该到去年的冬季
            year--;
            month = winter;
            break;
        case summer:
            month = spring;
            break;
        case fall:
            month = summer;
            break;
        case winter:
            month = fall;
            break;


    };


    return new Date(year, month, 1);
}



function getPreviousSeason() {
    //起止日期数组
    var startStop = new Array();
    //获取当前时间
    var currentDate = getCurrentDate();
    //获得当前月份0-11
    var currentMonth = currentDate.getMonth();
    //获得当前年份4位年
    var currentYear = currentDate.getFullYear();
    //上季度的第一天
    var priorSeasonFirstDay = this.getPriorSeasonFirstDay(currentYear, currentMonth);
    //上季度的最后一天
    var priorSeasonLastDay = new Date(priorSeasonFirstDay.getFullYear(), priorSeasonFirstDay.getMonth() + 2, getMonthDays(priorSeasonFirstDay.getFullYear(), priorSeasonFirstDay.getMonth() + 2));
    //添加至数组
    startStop.push(priorSeasonFirstDay);
    startStop.push(priorSeasonLastDay);
    return startStop;
}


function getPreviousSeasonnext() {
    //起止日期数组
    var startStop = new Array();
    //获取当前时间
    var currentDate = getCurrentDate();
    //获得当前月份0-11
    var currentMonth = currentDate.getMonth();
    //获得当前年份4位年
    var currentYear = currentDate.getFullYear();
    //上季度的第一天
    var priorSeasonFirstDay = this.getPriorSeasonFirstDay(currentYear, 1);
    //上季度的最后一天
    var priorSeasonLastDay = new Date(priorSeasonFirstDay.getFullYear(), priorSeasonFirstDay.getMonth() + 2, getMonthDays(priorSeasonFirstDay.getFullYear(), priorSeasonFirstDay.getMonth() + 2));
    //添加至数组
    startStop.push(priorSeasonFirstDay);
    startStop.push(priorSeasonLastDay);
    return startStop;
}


