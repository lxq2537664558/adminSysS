package msgtype


const (
	MSG_CLIENT            = "9001"  //客户端发送的登录包头
	MSG_RET_CLIENT        = "9002"  //登录服返回给客户端"8000"的处理结果
	MSG_DETECTION	      = "9003"  //注册账号检测
	MSG_RET_DETECTION     = "9004"  //登录服返回给客户端"8003"的处理结果
	MSG_REGISTER          = "9005"  //用户注册的包头
	MSG_RET_REGISTER      = "9006"  //登录服返回给客户端"8005"的处理结果
	MSG_VALICODE          = "9007"  //请求短信验证码
	MSG_RET_VALICODE      = "9008"  //登录服返回给客户端"8007"的处理结果
	MSG_THIRDLOGIN        = "9009"  //第三方登录（注册）
	MSG_RET_THIRDREGISTER = "9010"  //登录服返回给客户端"8009"的处理结果
	MSG_CONNGUID          = "9013"  //客户端连接后，返回给客户端的唯一标识
	MSG_RET_CONNGUID      = "9014"  //登录服返回给客户端"8013"的处理结果
	MSG_VC		          = "9015"  //客户端请求验证手机验证码
	MSG_RET_VC	          = "9016"  //Login返回给客户端"8015"的处理结果
	MSG_UPPASS	          = "9017"  //客户端请求修改密码
	MSG_RET_UPPASS	      = "9018"  //Login返回给客户端"8017"的处理结果
	MSG_NICKN	          = "9019"	//客户端请求随机昵称
	MSG_RET_NICKN	      = "9020"	//Login返回给客户端"9019"的处理结果
	MSG_JNC		          = "9021"	//客户端请求修改昵称
	MSG_RET_JNC	          = "9022"	//login返回给客户端"9021"的处理结果
	L_MSG_LOGIN           = "24000" //登录时，请求个人数据
	L_MSG_RET_LOGIN       = "24001" //返回"10000"的处理结果
	L_MSG_UNAME           = "24004" //请求账号是否存在
	L_MSG_RET_UNAME       = "24005" //返回"10004"的处理结果
	L_MSG_ZHUC            = "24006" //请求注册
	L_MSG_RET_ZHUC        = "24007" //返回"10006"的处理结果
	L_MSG_THZC            = "24008" //第三方登陆
	L_MSG_RET_THZC        = "24009" //返回"10008"的处理结果
	L_MSG_UPPASS	      = "24012" //请求修改密码
	L_MSG_RET_UPPASS      = "24013" //返回"10012"的处理结果
	L_MSG_JNC	          = "24014"	//login请求修改用户的昵称
	L_MSG_RET_JNC	      = "24015" //sharemem返回"10014"的处理结果
	L_MSG_SU	          = "24016" //login请求封禁玩家账号
	L_MSG_RET_SU	      = "24017"	//sharemem返回"10016"的处理结果



	//逻辑服交互信息  豪车竞技   修改 只修改  中高级场   不按房间修改
	CONSOLE_REC_S = "9400"//后台请求记录的包头
	CONSOLE_REC_R = "9401"//后台请求记录的包头
	CONSOLE_RECCOUNT_S = "9402"//后台请求记录长度的包头
	CONSOLE_RECCOUNT_R = "9403" //后台请求记录长度的包头
	CONSOLE_MODIFY_RATE_S = "9404"//后台修改概率
	CONSOLE_MODIFY_RATE_R = "9405"//返回后台修改概率


	//逻辑服交互信息  森林舞会   修改 只修改  中高级场   不按房间修改
	CONSOLE_REC_S_S = "9431"//后台请求记录的包头
	CONSOLE_REC_R_S = "9432"//后台请求记录的包头
	CONSOLE_RECCOUNT_S_S = "9433"//后台请求记录长度的包头
	CONSOLE_RECCOUNT_R_S = "9434" //返回请求记录长度的包头
	CONSOLE_MODIFY_RATE_S_S = "9435"//后台修改概率
	CONSOLE_MODIFY_RATE_R_S = "9436"//返回后台修改概率
	CONSOLE_GETROOMCOUNT_S = "9439"//后台请求房间总数
	CONSOLE_GETROOMCOUNT_R = "9440"//后台请求房间总数



	//CONSOLE_REC_S = "9431"//后台请求记录的包头
	//CONSOLE_REC_R = "9432"//后台请求记录的包头
	//CONSOLE_RECCOUNT_S = "9433"//后台请求记录长度的包头
	//CONSOLE_RECCOUNT_R = "9434"//后台请求记录长度的包头
	//CONSOLE_MODIFY_RATE_S = "9435"//后台修改概率
	//CONSOLE_MODIFY_RATE_R = "9436"//返回后台修改概率
	//CONSOLE_GLOBAL_REC_S = "9437" //后台请求全局记录
	//CONSOLE_GLOBAL_REC_R = "9438"//发送后台全局记录



	//逻辑服交互信息  骰宝   修改 只修改  中高级场   不按房间修改
	CONSOLE_REC_S_SB 			= "9461"//后台请求记录的包头
	CONSOLE_REC_R_SB 			= "9462"//后台请求记录的包头
	CONSOLE_RECCOUNT_S_SB 		= "9463"//后台请求记录长度的包头
	CONSOLE_RECCOUNT_R_SB 		= "9464" //后台请求记录长度的包头
	CONSOLE_MODIFY_RATE_S_SB	= "9465"//后台修改概率
	CONSOLE_MODIFY_RATE_R_SB 	= "9466"//返回后台修改概率


	//逻辑服交互信息  水浒   修改 只修改  中高级场   不按房间修改
	CONSOLE_REC_S_SH 			= "9521"//后台请求记录的包头
	CONSOLE_REC_R_SH 			= "9522"//后台请求记录的包头
	CONSOLE_RECCOUNT_S_SH 		= "9523"//后台请求记录长度的包头
	CONSOLE_RECCOUNT_R_SH 		= "9524" //后台请求记录长度的包头
	CONSOLE_MODIFY_RATE_S_SH	= "9525"//后台修改概率
	CONSOLE_MODIFY_RATE_R_SH 	= "9526"//返回后台修改概率


	//逻辑服交互信息  旺宝   修改 只修改  中高级场   不按房间修改
	CONSOLE_REC_S_WB 			= "9551"//后台请求记录的包头
	CONSOLE_REC_R_WB 			= "9552"//后台请求记录的包头
	CONSOLE_RECCOUNT_S_WB 		= "9553"//后台请求记录长度的包头
	CONSOLE_RECCOUNT_R_WB 		= "9554" //后台请求记录长度的包头
	CONSOLE_MODIFY_RATE_S_WB	= "9555"//后台修改概率
	CONSOLE_MODIFY_RATE_R_WB 	= "9556"//返回后台修改概率


	//逻辑服交互信息  百人轮盘   修改 只修改  中高级场   不按房间修改
	CONSOLE_REC_S_LP 			= "9791"//后台请求记录的包头
	CONSOLE_REC_R_LP 			= "9792"//后台请求记录的包头
	CONSOLE_RECCOUNT_S_LP 		= "9793"//后台请求记录长度的包头
	CONSOLE_RECCOUNT_R_LP 		= "9794" //后台请求记录长度的包头
	CONSOLE_MODIFY_RATE_S_LP	= "9795"//后台修改概率
	CONSOLE_MODIFY_RATE_R_LP 	= "9796"//返回后台修改概率



	//逻辑服交互信息  百人铃铛(水果机)    修改 只修改  中高级场   不按房间修改
	CONSOLE_REC_S_LL 			= "9721"//后台请求记录的包头
	CONSOLE_REC_R_LL 			= "9722"//后台请求记录的包头
	CONSOLE_RECCOUNT_S_LL 		= "9723"//后台请求记录长度的包头
	CONSOLE_RECCOUNT_R_LL 		= "9724" //后台请求记录长度的包头
	CONSOLE_MODIFY_RATE_S_LL	= "9725"//后台修改概率
	CONSOLE_MODIFY_RATE_R_LL 	= "9726"//返回后台修改概率


	//逻辑服交互信息  金鲨银鲨   修改 只修改  中高级场   不按房间修改
	CONSOLE_REC_S_JY 			= "9751"//后台请求记录的包头
	CONSOLE_REC_R_JY 			= "9752"//后台请求记录的包头
	CONSOLE_RECCOUNT_S_JY 		= "9753"//后台请求记录长度的包头
	CONSOLE_RECCOUNT_R_JY 		= "9754" //后台请求记录长度的包头
	CONSOLE_MODIFY_RATE_S_JY	= "9755"//后台修改概率
	CONSOLE_MODIFY_RATE_R_JY 	= "9756"//返回后台修改概率


	//逻辑服交互信息  百家乐   修改 只修改  中高级场   不按房间修改
	CONSOLE_REC_S_BJ 			= "9700"//后台请求记录的包头
	CONSOLE_REC_R_BJ 			= "9701"//后台请求记录的包头
	CONSOLE_RECCOUNT_S_BJ 		= "9702"//后台请求记录长度的包头
	CONSOLE_RECCOUNT_R_BJ 		= "9703" //后台请求记录长度的包头
	CONSOLE_MODIFY_RATE_S_BJ	= "9704"//后台修改概率
	CONSOLE_MODIFY_RATE_R_BJ 	= "9705"//返回后台修改概率


	//逻辑服交互信息  黑红梅方   修改 只修改  中高级场   不按房间修改
	CONSOLE_REC_S_HHMF			= "9491"//后台请求记录的包头
	CONSOLE_REC_R_HHMF 			= "9492"//后台请求记录的包头
	CONSOLE_RECCOUNT_S_HHMF 	= "9493"//后台请求记录长度的包头
	CONSOLE_RECCOUNT_R_HHMF 	= "9494" //后台请求记录长度的包头
	CONSOLE_MODIFY_RATE_S_HHMF	= "9495"//后台修改概率
	CONSOLE_MODIFY_RATE_R_HHMF 	= "9496"//返回后台修改概率


	//逻辑服交互信息  百人牛牛   修改 只修改  中高级场   不按房间修改
	CONSOLE_REC_S_NN			= "9761"//后台请求记录的包头
	CONSOLE_REC_R_NN 			= "9762"//后台请求记录的包头
	CONSOLE_RECCOUNT_S_NN 		= "9763"//后台请求记录长度的包头
	CONSOLE_RECCOUNT_R_NN 		= "9764" //后台请求记录长度的包头
	CONSOLE_MODIFY_RATE_S_NN	= "9765"//后台修改概率
	CONSOLE_MODIFY_RATE_R_NN 	= "9766"//返回后台修改概率


	//逻辑服交互信息  德州   修改 只修改  中高级场   不按房间修改
	CONSOLE_REC_S_DZ			= "9581"//后台请求记录的包头
	CONSOLE_REC_R_ZD 			= "9582"//后台请求记录的包头
	CONSOLE_RECCOUNT_S_DZ 		= "9583"//后台请求记录长度的包头
	CONSOLE_RECCOUNT_R_DZ 		= "9584" //后台请求记录长度的包头
	CONSOLE_MODIFY_RATE_S_DZ	= "9585"//后台修改概率
	CONSOLE_MODIFY_RATE_R_DZ 	= "9586"//返回后台修改概率



	//逻辑服交互信息  拼三张   修改 只修改  中高级场   不按房间修改
	CONSOLE_REC_S_PSZ			= "9641"//后台请求记录的包头
	CONSOLE_REC_R_PSZ 			= "9642"//后台请求记录的包头
	CONSOLE_RECCOUNT_S_PSZ 		= "9643"//后台请求记录长度的包头
	CONSOLE_RECCOUNT_R_PSZ 		= "9644" //后台请求记录长度的包头
	CONSOLE_MODIFY_RATE_S_PSZ	= "9645"//后台修改概率
	CONSOLE_MODIFY_RATE_R_PSZ 	= "9646"//返回后台修改概率


	//牌机   修改 只修改  中高级场   不按房间修改
	CONSOLE_GLOBAL_REC_S = "9731" //后台请求全局记录
	CONSOLE_GLOBAL_REC_R = "9732"//发送后台全局记录
	CONSOLE_MODIFY_RATE_S_P = "9404"//后台修改概率
	CONSOLE_MODIFY_RATE_R_P = "9405"//返回后台修改概率





)


//后台获取房间数量
type BACKGROUNDROOMCOUNT_S_room struct{
	Guid string
	Room int
}
//后台返回房间数量
type BACKGROUNDROOMCOUNT_R_room struct{
	Err int
	Rct int //房间数量
}





/*
牌机结构
*/


//后台全局记录
type BACKGROUNDGLOBALRECORD_S_PJ struct{
	Guid string
	Mgd string//私有GUID
	Room int
	Trm  int//目标房间号
}
//返回后台全局记录
type BACKGROUNDGLOBALRECORD_R_PJ struct {
	Err int
	Rec CARD_RECORD
}

type CARD_RECORD struct{
	CARDS_5K int
	CARDS_R5 int
	CARDS_SF int
	CARDS_4K int
	CARDS_FH int
	CARDS_FL int
	CARDS_ST int
	CARDS_3K int
	CARDS_2P int
	CARDS_1P int
	CARDS_NULL int
	Mtm		string//时间戳
}







/*
金鲨银鲨   水果机
*/

const JSYS_BIRD = 0//飞禽
const JSYS_BEAST = 1//走兽
const JSYS_SWALLOW = 2//燕子
const JSYS_RABBIT = 3 //兔子
const JSYS_PIGEON = 4 //鸽子
const JSYS_PEACOCK = 5 //孔雀
const JSYS_PANDA = 6 //熊猫
const JSYS_MONKEY = 7 //猴子
const JSYS_EAGLE = 8 //鹰
const JSYS_LION = 9 //狮子
const JSYS_SSHARK = 10 //银鲨
const JSYS_GSHARK = 11 //金鲨


const JSYS__DASIXI = 18 //大四喜
const JSYS__XIAOSANYUAN  = 19//小三元
const JSYS__DASANYUAN  = 20//大三元
const JSYS__XIAOMANGUAN = 21//小满贯
const JSYS__DAMANGUAN = 22//大满贯
const JSYS__KAIHUOCHE = 23//开火车
const JSYS_SONGDENG = 24 //送灯


//后台全局记录
type BACKGROUNDGLOBALRECORD_S_JS struct{
	Guid string
	Mgd string//私有GUID
	Room int
	Trm  int//目标房间号·
}
//返回后台全局记录
type BACKGROUNDGLOBALRECORD_R_JS struct {
	Err int
	Rec GOODLUCKINFO_R
}



//特殊奖励数据结构
type GOODLUCKINFO_R struct{
	Err 	int
	GLT     int //中奖励后中的类型
	Bet     int //当GLT为开火车Bet代表几连 当GLT为翻N倍代表几倍
	Bl		[]int//连续数据数组
	Di      []int //位置的数组
	Mp		string //庄家昵称（如果为杨瓜怂 代表是服务器当庄)
	Tm		int//每局的时间长度
	Mw		int//庄家输赢（正数代表赢的 负数代表输的)
	Mtm		string//时间戳
}








/*
森林舞会

	RED_ROBBIT = 0 //红兔子
	GREEN_ROBBIT = 1//绿兔子
	YELLOW_ROBBIT = 2//黄兔子

	RED_MONKEY = 3//红猴子
	GREEN_MONKEY = 4//绿猴子
	YELLOW_MONKEY = 5//黄猴子

	RED_PANDA = 6//红熊猫
	GREEN_PANDA = 7//绿熊猫
	YELLOW_PANDA = 8//黄熊猫

	RED_LION = 9//红狮子
	GREEN_LION = 10//绿狮子
	YELLOW_LION = 11//黄狮子

*/
//后台全局记录
type BACKGROUNDGLOBALRECORD_S_SL struct{
	Guid string
	Mgd string//私有GUID
	Room int
	Trm  int//目标房间号·
}
//返回后台全局记录
type BACKGROUNDGLOBALRECORD_R_SL struct {
	Err int
	Rec ROOMROUNDCARD_RECORD
}


type ROOMROUNDCARD_RECORD struct{
	Wt   int//赢得类型
	Tm   string//时间
}





/*
旺宝  水浒  多财多福
*/

const MAXSMALLGAMETYPECOUT = 11


//后台全局记录
type BACKGROUNDGLOBALRECORD_S_SH struct{
	Guid string
	Mgd string//私有GUID
	Room int
	Trm  int//目标房间号
}
//返回后台全局记录
type BACKGROUNDGLOBALRECORD_R_SH struct {
	Err int
	Mgd string//私有GUID
	Rec SH_RECORD_SH
	Sr  SH_SMALL_RECORD_SH
}

type SH_RECORD_SH struct{
	AXE 	[4]int //斧子数量记录
	SPEAR 	[4]int //枪数量记录
	KNIFE 	[4]int //刀数量记录
	LOO 	[4]int//鲁智深数量记录
	LIN 	[4]int//林冲数量记录
	SONG 	[4]int//宋江数量记录
	FLAG 	[4]int//旗子数量记录
	ZHONG 	[4]int//忠义堂数量记录
	DRAGON 	[4]int//龙数量记录
	WEAPON 	[1]int//兵器数量记录
	PERSON 	[1]int//人物数量记录
	GAMECOUNT [1]int//总游戏次数
	GAMEWIN [1]int//获胜次数
	GAMEWINRATE [1]int//获胜比
	GAMEBET [1]int//总压分
	GAMEWINSCORE [1]int//总赢分
	GAMERETSCORE [1]int//返分比例
	SMALLGAME [1]int//小游戏次数
	SMALLROUND [1]int//小游戏转动次数
	SMALLSCORE [1]int//小游戏总得分
	SMALL4COUNT [1]int//小游戏4枚次数
	SMALL3COUNT [1]int//小游戏3枚次数
	SMALLZHONG [1]int//小游戏忠义堂次数
	SMALLFLAG [1]int//小游戏旗次数
	SMALLSONG [1]int//小游戏宋江次数
	SMALLLIN [1]int//小游戏林冲次数
	SMALLLOO [1]int//小游戏鲁智深次数
	SMALLKNIFE [1]int//小游戏刀次数
	SMALLSPEAR [1]int//小游戏枪次数
	SMALLAXE [1]int//小游戏斧头次数
}




type SH_SMALL_RECORD_SH struct{
	SMALLGAME [MAXSMALLGAMETYPECOUT]int//进入小游戏的次数 //小游戏四枚次数//小游戏三枚次数//小游戏忠义堂次数//小游戏旗次数//小游戏宋江次数//小游戏林冲次数//小游戏鲁智深次数//小游戏刀次数//小游戏枪次数//小游戏斧头次数
}


//房间后台数据结构
type BACKGROUNDDATA_SH struct{
	Room int//房间号
	Win int//赢的值
	Los int//输的值
	Tm string//时间戳
}





/*
百家乐数据结构

向逻辑服请求每个房间信息的长度  以每个为50条数据传输  拉取到后台服务器

	逻辑服记录 该房间 这一局输了 多少  赢了多少  还需要记录时间戳和 本局赢得牌型


9400 - 9700 //后台服务器统计逻辑服
9700 - 9800 //后台服务器统计逻辑服
9800 - 9900 //后台服务器统计逻辑服

豪车竞技        		  9170    9400 - 9430
森林舞会        	  		9180   9431 - 9460
骰宝           	  	  9190	9461 - 9490
捕鱼                      9300	9611 - 9640
水浒                      9210   9521 - 9550
旺宝                      9220	9551 - 9580
百人轮盘              9140	9791 - 9820
百人铃铛(水果机)         9150		9721 - 9850
牌机              	9540    9731 - 9760
金鲨银鲨         		 9160	9751 - 9900
百家乐              9110  9700 - 9730


黑红梅方                  9200	9491 - 9520
百人牛牛              9130	9761 - 9890
德州 					9230	9581 - 9610
拼三张 					9240	9641 - 9670

*/







//
//
//type BACKGROUNDMODIFYRATE_S struct {
//	Room int
//	Guid string
//	Mm  int//修改的房间号
//	Mgd  string //私有GUID
//	Rt   int    //概率值
//}
//
//
////返回后台修改概率
//type PLAYERDROPDOWNDEALER_R struct{
//	UG  string
//	Err int
//}
//
////后台请求数据的数据结构
//type BACKGROUNDRECORD_S struct{
//	Guid string
//	Mgd string//私有GUID
//	Room int
//	Trm  int//目标房间号
//	Mi   int//索引起始值
//	Mx   int//索引结束值
//}
//
////返回后台请求数据的数据结构
//type BACKGROUNDRECORD_R struct{
//	Mgd string//私有GUID
//	Err int
//	Rec []BACKGROUNDDATA
//}
//
//
////房间后台数据结构
//type BACKGROUNDDATA struct {
//	Room int    //房间号
//	Win  int    //赢的值
//	Los  int    //输的值
//	Tm   string //时间戳
//	Tp   [7]int //牌型
//}

//返回房间数据请求总量
type PLAYERGETMATCHRECORD_R struct {
	Room int
	Trm  int //目标房间号
	Guid string
	Mgd  string //私有GUID
}



////返回房间数据请求总量
//type BACKGROUNDRECORDCOUNT_R struct{
//	Guid string
//	Err int
//	Ct int
//}
//
////后台请求记录长度的数据结构
//type BACKGROUNDROOMDATALENGTH_R struct{
//	Room int
//	Guid string
//	Mgd string//私有GUID
//}
//
//
////返回房间数据请求总量
//type BACKGROUNDRECORDCOUNT_SHZ struct{
//	Mgd string
//	Err int
//	Ct int
//}








//德州
//后台请求数据的数据结构
type BACKGROUNDRECORD_S_DZ struct{
	Guid string
	Mgd string//私有GUID
	Room int
	Trm  int//目标房间号
	Mi   int//索引起始值
	Mx   int//索引结束值
}

//返回后台请求数据的数据结构
type BACKGROUNDRECORD_R_DZ struct{
	Mgd string//私有GUID
	Err int
	Rec []BACKGROUNDDATA_DZ
}


//房间后台数据结构
type BACKGROUNDDATA_DZ struct{
	Room int//房间号
	Win int//赢的值
	Los int//输的值
	Tm string//时间戳
	Tp 	int//牌型    输赢平 1 为红赢 2 为平  3 为蓝赢
	Cp  int  //赢得牌型  //这一局赢得牌型
}







//牛牛数据结构
//后台请求数据的数据结构
type BACKGROUNDRECORD_S_NN struct{
	Guid string
	Mgd string//私有GUID
	Room int
	Trm  int//目标房间号
	Mi   int//索引起始值
	Mx   int//索引结束值
}

//返回后台请求数据的数据结构
type BACKGROUNDRECORD_R_NN struct{
	Mgd string//私有GUID
	Err int
	Rec []BACKGROUNDDATA_NN
}


////房间后台数据结构
//type BACKGROUNDDATA_NN struct{
//	Room int//房间号
//	Win int//赢的值
//	Los int//输的值
//	Tm string//时间戳
//	Tp 	int//牌型    输赢平 1 为红赢 2 为平  3 为蓝赢
//	Cp  int  //赢得牌型  //这一局赢得牌型
//}








//返回后台请求数据的数据结构
type BACKGROUNDRECORD_NN struct{
	Mgd string//私有GUID
	Err int
	Rec []BACKGROUNDDATA_NN
}


type BACKGROUNDRECORD_NN_copy struct{
	Err int
	RM []BACKGROUNDDATA_NN
}


//房间后台数据结构
type BACKGROUNDDATA_NN struct{
	Room int//房间号
	Win int//赢的值 2
	Los int//输的值 1
	Tm string//时间戳
	Tp [4]int//此局输赢  1 为赢 2 为输
	Px [5]int//此局牌型
}








//拼三张数据结构
//后台请求数据的数据结构
type BACKGROUNDRECORD_S_PSZ struct{
	Guid string
	Mgd string//私有GUID
	Room int
	Trm  int//目标房间号
	Mi   int//索引起始值
	Mx   int//索引结束值
}

//返回后台请求数据的数据结构
type BACKGROUNDRECORD_R_PSZ struct{
	Mgd string//私有GUID
	Err int
	Rec []BACKGROUNDDATA_PSZ
}


//房间后台数据结构
type BACKGROUNDDATA_PSZ struct{
	Room int//房间号
	Win int//赢的值 2
	Los int//输的值 1
	Tm string//时间戳
	Tp [4]int//此局输赢  1 为赢 2 为输
	Px [5]int//此局牌型
}























//login请求封禁用户的账号
type LReqSUuser struct {
	LG 	string	//login服务器的guid
	CG 	string 	//客户端连接login的guid
	UN 	string	//被封账号
	SS 	int	//封禁状态（0正常、1封禁）
}
//sharemem返回封禁结果
type ShaRetSU struct {
	CG 	string 	//客户端连接login的guid
	Errcode int	//错误标识 -1封禁成功、40修改失败
}

//客户端请求修改昵称
type CReqJudgeNC struct {
	GUID 	string 	//服务器分配的GUID(标识连接)
	UN 	string	//用户名
	NC 	string	//昵称
}
//login服务器请求修改昵称
type LReqJudgeNC struct {
	LG 	string 	//login服务器的guid
	GUID 	string 	//服务器分配的GUID(标识连接)
	UN 	string	//用户名
	NC 	string	//昵称
}
//sharemem返回给login昵称修改的结果
type ShaRetJudgeNC struct {
	GUID 	string 	//服务器分配的GUID(标识连接)
	Errcode int	//错误标识（-1正常、7含有敏感字符、37昵称已存在、38修改失败）
}
//login返回给客户端昵称修改的结果
type LoginRetJudgeNC struct {
	Errcode int	//错误标识（-1正常、7含有敏感字符、37昵称已存在）
}

//客户端发送验证短信验证码数据结构
type JudgeVcode struct {
	GUID 	string 	//服务器分配的GUID(标识连接)
	VC 	string  //短信验证码
}

//客户端请求修改密码的数据结构
type UpPassWord struct {
	GUID 	string //连接的guid
	UN 	string //用户名
	PW 	string //密码
}
//登陆服务器发送给sharemem服务器请求修改密码
type LreqUppass struct {
	LG 	string //登陆服务器连接sharemem的guid
	UG 	string //客户端连接Login的guid
	UN 	string //用户名
	PW 	string //密码
}
//sharemem服务器返回给Login修改密码的结果
type ShaRetResult struct {
	UG     	string //客户端连接登录服的连接guid
	Errcode int    //错误标识
}
//login服务器返回给客户端的数据结构
type RetResult struct {
	Errcode 	int //返回的错误标识（-1标识正常或者成功，可以进行下一步）
}
//返回给客户端的连接GUID
type ConnectGuid struct {
	GUID      string //服务器分配的GUID（标识连接）
	ConnState int    //连接状态 -1 成功 登录服发送连接
}
//
type RetConnectGuid struct {
	GUID      string //服务器分配的GUID（标识连接）
	VN 	  string //版本号
	ConnState int    //连接状态 -1 成功 登录服发送连接
}

//消息信息
type Msg_conn struct {
	Msg  []byte	//消息
}
//请求登录用户的数据结构
type UserLogin struct {
	GUID     string //连接的guid
	Username string //登录的用户名
	Password string //登录的密码
}

//注册时的数据结构
type UserRegister struct {
	GUID         string //连接的guid
	Username     string //注册用户名
	Password     string //注册密码
	Validatecode string //手机验证码
}

//登录请求的数据结构(请求用户的guid)
type LoginMsg struct {
	Cguid     string //客户端连接登录服的连接guid
	Lguid     string //登录服务器的guid
	UserName  string //用户名
	Password  string //密码
}

//登录时sharemem服务器返回的数据结构
type LoginRetMsg struct {
	GUID      string //连接的guid
	Errcode   int    //错误标识 0没有该用户 2密码不正确  -1正常、49多次密码错误，账号被封
	Guid      string //用户guid
	Hall_ip   string //大厅服务器ip
	Hall_port string //大厅服务器端口
}

//注册时，账号检测返回的数据结构(Register注册数据保存返回结果)
type CheckUName struct {
	Cguid     string //客户端连接登录服的连接guid
	Errcode   int    //错误标识
}

//注册的数据结构（login发送给sharemem）
type RegisterMsg struct {
	Cguid     string //客户端连接登录服的连接guid
	Lguid     string //登录服务器的guid
	UserName  string //用户名
	Password  string //用户的密码
}

//注册时，返回给客户端的数据结构
type Register_Re struct {
	GUID    string //连接的guid
	Errcode int    //-1 短信验证码已发送或注册成功，3用户名已存在 6注册失败,7昵称中有敏感字符
}
//请求验证码，返回的数据结构
type Validatecode_Re struct {
	GUID         string //连接的guid
	Errcode      int    //-1 短信验证码已发送或注册成功， 4 验证码错误 5 验证码超时
	Validatecode string //返回给客户端的验证码
}


//客户端发送第三方登陆的数据结构
type CThirdLogin struct {
	UG  	string 	//连接的guid
	UN 	string 	//用户名
	TN	int 	//账号标识（0注册、1QQ、2微信、3你的主意、4游客）
}
//第三方注册结果返回的数据结构（Login服务器发送）
type LThirdLogin struct {
	LG 	string	//login服务器的guid
	UG      string 	//用户连接的guid
	UN	string 	//用户的用户名
	TN	int 	//账号标识（0注册、1QQ、2微信、3你的主意、4游客）
}
//sharemem返回第三方登陆的数据结构
type RetThirdLogin struct {
	UG	string	//用户连接的guid
	UN 	string	//用户名
	PW 	string 	//密码
	Errcode int	//错误标识（-1正常、1）
}

//客户端请求随机昵称的数据结构
type ClientReqNU struct {
	GUID 	string 	//连接的guid
}
//返回给客户端随机昵称的数据结构
type RretNickName struct {
	NN 	string 	//昵称
	Errcode int	//错误标识 -1正常、1guid有误
}

func CombinationData(msgtype string, msgdata []byte) []byte {
	mybyte := []byte(msgtype)
	finalstr := CombinationByte(mybyte, msgdata) //[]byte(msgtype) + msgdata
	return finalstr
}

func CombinationByte(data1 []byte, data2 []byte) []byte {
	for i := 0; i < len(data2); i++ {
		data1 = append(data1, data2[i])
	}
	return data1
}
