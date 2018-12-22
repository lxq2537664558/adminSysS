package msgtype



const (
	B_REQ_USER_INFO		=	"22000"	//后台请求查询用户信息
	S_RET_USER_INFO		=	"22001"	//sharemem返回用户信息
	B_REQ_BDUSER_NN		=	"22002"	//后台查询用户封禁信息
	S_RET_BDUSER_NN		=	"22003"	//sharemem返回用户封禁信息
	B_REQ_BANNED_USER	= 	"22004"	//后台请求封禁用户账号
	S_RET_BANNED_USER	=	"22005"	//sharemem返回封禁结果
	B_REQ_DE_ARCHIVE	=	"22006"	//后台请求解封用户账号
	S_RET_DE_ARCHIVE	=	"22007"	//sharemem返回解封用户账号的结果
	B_REQ_BPUSER_NN		= 	"22008"	//后台查询用户禁言信息
	S_RET_BPUSER_NN		=	"22009"	//sharemem返回禁言用户信息
	B_REQ_BANNED_TO_POST	=	"22010"	//后台请求将用户禁言
	S_RET_BANNED_TO_POST	=	"22011"	//sharemem返回禁言用户的结果
	B_REQ_DE_BANNED_POST	=	"22012"	//后台请求解禁用户禁言
	S_RET_DE_BANNED_POST	=	"22013"	//sharemem返回解禁用户禁言的结果

	B_REQ_FIND_UNION	=	"22014"	//后台请求查询工会日志信息
	S_RET_FIND_UNION	=	"22015"	//sharemem返回工会日志信息
	B_REQ_GM_LOGIN		=	"22016"	//后台请求登录
	S_RET_GM_LOGIN		= 	"22017"	//sharemem返回登录结果

	B_REQ_FIND_ROLESKIN	=	"22018"	//后台请求查询用户角色信息
	S_RET_FIND_ROLESKIN	=	"22019"	//sharemem返回用户角色信息
	B_REQ_ROLE_NM		=	"22020"	//后台请求查询用户角色信息根据角色名称
	S_RET_ROLE_NM		=	"22021"	//sharemem返回用户角色信息

	B_REQ_IMITATE_PAY	=	"22022"	//后台请求给用户充值（金币和钻石）
	S_RET_IMITATE_PAY	=	"22023"	//sharemem返回充值结果
	B_REQ_COLLECT		=	"22024"	//后台请求大区汇总信息
	S_RET_COLLECT		=	"22025"	//sharemem返回大区汇总信息


	B_REQ_SEND_MAIL		=	"22026"	//后台请求给用户发送邮件
	S_RET_SEND_MAIL		=	"22027"	//sharemem返回发送邮件的结果
	B_REQ_SET_NOTICE	=	"22028"	//后台请求修改公告信息
	S_RET_SET_NOTICE	=	"22029"	//sharemem返回修改公告的结果


	//最新包头

	B_SEA_ADMIN   =    "8500" //后台超级登录
	B_RSE_ADMIN      =    "8501" //后台登录返回
	B_SEA_ADDADMIN  ="8502"    //后台添加管理员
	B_RSE_ADDADMIN =""    //返回给后台添加管理员信息
	B_SEA_USERMSG = "8503"  //后台请求用户信息
	B_RSE_USERMSG = "8504" //返回给后台用户信息

	B_SEA_USERCLOSE	="8505"	//后台封禁与解封用户
	B_RSE_USERCLOSE ="8506"	//返回给后台封禁与解封用户
	B_RSE_USERTALK	="8507"	//后台禁言
	B_SEA_USERTALK	="8508"	//返回给后台禁言结果
	B_RSE_FINDUSERCLOSE	="8509"	//后台查询封禁结果
	B_SEA_FINDUSERCLOSE	="8510"	//返回给后台查询封禁结果
	B_RSE_FINDUSERTALKCLOSE ="8511"    //后台查询禁言
	B_SEA_FINDUSERTALKCLOSE    ="8512"    //返回给后台查询禁言结果

	B_RSE_USERPAY	="8513"	//后台支付查询
	B_SEA_USERPAY	="8514"	//返回给后台支付查询

	B_RSE_MAIL		="8519"	//后台发送邮件
	B_SEA_MAIL		="8520"	//返回给后台发送邮件结果

	B_RSE_NOTICE	="8521"	//后台发送登录公告
	B_SEA_NOTICE	="8522"	//返回给发送登录公告结果

	B_RSE_SEANOTICE = "8523" //后台查看公告
	R_RSE_SEANOTICE = "8524" //返回给后台查看公告结果


	B_RSE_AMENDNOTICE	="8525"	//后台修改公告
	B_SEA_AMENDNOTICE	="8526"	//返回给修改公告结果



	B_RSE_GAME			= "8527"	//后台发送游戏内公告
	B_SEA_GAME			= "8528"	//返回游戏内公告的结果

	B_RSE_GAMENOTICE	="8529"	//后台查看游戏内公告
	B_SEA_GAMENOTICE	="8530"	//返回给后台查看游戏公告结果

	B_RSE_AMEDNOGAMENOTICE = "8531"	//后台修改游戏内公告
	B_SEA_AMEDNOGAMENOTICE = "8532"	//返回给后台修改游戏内公告的结果

	B_RSE_ACTIVITY 	= "8533"	//后台发送游戏内活动
	B_SEA_ACTIVITY 	= "8534"	//返回给查看后台发送游戏内活动的结果

	B_RSE_ACTIVITYNOTICE = "8535" //后台查看游戏内公告
	B_SEA_ACTIVITYNOTICE = "8536" //返回给后台查看游戏内公告的结果

	B_SEA_AMEDNOACTIVITYNOTICE = "8537"	//后台修改游戏内公告
	B_RSE_AMEDNOACTIVITYNOTICE = "8538"	//返回给后台修改游戏内公告的结果


	B_SEA_VIP 		= "8541"	//后台查询vip情况
	B_RSE_VIP		= "8542"	//返回给后台查询vip情况

	B_SEA_SHOPDETAIL = "8543"	//后台查询商城情况
	B_RSE_SHOPDETAIL = "8544"	//返回给后台商城情况

	B_SEA_NUCLEARMSG = "8539"	//后台查询核弹使用情况
	B_RSE_NUCLEARMSG = "8540"	//返回给后台查询核弹使用情况的结果

	B_SEA_ONLINEDATA = "8545"	//后台查询在线数据
	B_RSE_ONLINEDATA = "8546"	//返回给后台在线数据

	B_SEA_PLAYERDATA = "8547"	//后台请求最高在线人数
	B_RSE_PLAYERDATA = "8548"	//返回给后台最高在线人数

	B_SEA_PAYDATA 	 = "8549"	//后台请求收入日报
	B_RSE_PAYDATA	 = "8550"	//返回给后台收入日报

	B_SEA_CARDSPAY   = "8551"	// 后台请求生成卡密
	B_RSE_CARDSPAY	 = "8552"	// 返回生成卡密情况


	B_SEA_CARDSPAYUSE = "8553" //后台请求充值卡卡密
	B_RSE_CARDSPAYUSE  = "8554" //返回值卡卡密情况

	B_SEA_CREATECARDS = "8555"	// 后台请求充值卡使用情况
	B_RSE_CREATECARDS = "8556"  // 返回给后台充值卡使用情况

	B_SEA_USERCARDS		= "8557" //后台请求充值卡兑换
	B_RSE_USERCARDS		= "8558"	//返回给后台充值卡兑换

	B_SEA_GENERALIZE	= "8559"	//后台请求查看推广情况
	B_RSE_GENERALIZE	= "8560"	//返回给后台推广情况


	B_SEA_USER_ROSE 	="8567"	//后台请求玫瑰数据汇总
	B_GET_USER_ROSE  	="8568"	//返回后台请求玫瑰数据汇总


	B_SEA_USER_BOMB 	="8569"	//后台请求核弹数据汇总
	B_GET_USER_BOMB  	="8570"	//返回后台请求核弹数据汇总

	B_SEA_USER_MONEY 	="8565"	//后台请求查询个人金币排行榜
	B_GET_USER_MONEY 	="8566"	//返回后台请求查询卡密使用情况的结果


	B_SET_USER_ROSE_USER 	="8571"	//后台请求个人玫瑰花数据详情
	B_GET_USER_ROSE_USER  	="8572"	//返回后台请求个人玫瑰花数据详情


	B_SEA_USER_BOMB_USER 	="8573"	//后台请求个人核弹花数据详情
	B_GET_USER_BOMB_USER  	="8574"	//返回后台请求个人核弹花数据详情



	B_SEA_SPECIAL_PROPS	=	"8575"	//后台请求查询特殊道具记录
	B_GET_SPECIAL_PROPS  	="8576"	//返回后台请求查询特殊道具记录





	B_SEA_SHOWMETHEMONEY = "8888"   //后台请求ShowMeTheMoney(Demo测试，后期上线删除)
	B_RSE_SHOWMETHEMONEY = "8889"  //ShowMeTheMoney

	//B_SEA_USER_ROSE 	="8567"	//后台请求玫瑰数据汇总
	//B_GET_USER_ROSE  	="8568"	//返回后台请求玫瑰数据汇总
	//
	//
	//B_SEA_USER_BOMB 	="8569"	//后台请求核弹数据汇总
	//B_GET_USER_BOMB  	="8570"	//返回后台请求核弹数据汇总


	B_SEA_USER_INSERT_USER = "8581" //后台请求添加管理员
	B_GET_USER_INSERT_USER = "8582" //返回后台添加管理员是否成功

	B_SEA_USER_DELECT_USER = "8585" //后台请求删除管理员
	B_GET_USER_DELECT_USER = "8586" //返回后台删除管理员是否成功

	B_REQ_RECHARGEWITH = "8577" //请求后台充值退分
	B_RET_RECHARGEWITH = "8578" //返回后台充值退分

	B_SEA_SELECT_USER = "8583" //后台请求查询用户信息
	B_GET_SELECT_USER = "8584" //返回后台用户信息是否成功

	B_REQ_GAMEDRAW = "8579" //后台请求查询逻辑服比赛详情
	B_RET_GAMEDRAW = "8580" //返回查询逻辑服比赛详情

	B_SEA_SELECT_USER_ADMIN = "8587" //后台请求查询用户信息
	B_GET_SELECT_USER_ADMIN = "8588" //返回后台用户信息是否成


	B_SEA_USER_VIP = "8589" //后台请求查询VIP图表数据
	B_GET_USER_VIP = "8590" //返回后台VIP图表数据

	B_SEA_SELECT_USER_VIP = "8591" //后台 根据昵称或者id请求查询VIP 数据
	B_GET_SELECT_USER_VIP  = "8592" //返回后台查询VIP 数据

	B_SEA_SELECT_USER_GENERAL = "8593" //后台请求销售总况
	B_GET_SELECT_USER_GENERAL = "8594" //返回后台销售总况详情

	B_SEA_SELECT_USER_DETAILS = "8595" //后台请求销售明细
	B_GET_SELECT_USER_DETAILS = "8596" //返回后台销售明细

	B_SEA_SELECT_USER_PAY = "8597" //后台请求支付查询
	B_GET_SELECT_USER_PAY = "8598" //返回后台支付查询


	B_SEA_SELECT_LARGE_PAY = "8599" //后台请求大区充值查询
	B_GET_SELECT_LARGE_PAY = "8600" //返回后台大区充值查询


)


//后台请求大区充值查询
type BACK_SEA_ALLP_LARGE struct {
	BG string //后台的guid
	UG string //管理员的guid
	CTM int //开始时间
	LTM int //开始时间
}


//返回后台大区充值查询
type BACK_SET_ALL_XSMX_LARGE struct {
	UG  string                    //管理员的guid
	NUM []BACK_SEQ_ALLP_LARGE_list //大区充值数组
	Err int
}

type BACK_SEQ_ALLP_LARGE_list struct {
	DQID   int //大区ID
	CBSL   int //出币数量
	JBSL   int //金币数量
	RS   int //盈收
}


//后台请求支付查询
type BACK_SEA_PAY_GENERAL struct {
	BG   string //后台的guid
	UG   string //管理员的guid
	NAME string //查询昵称
	UID  int    // 查询ID
	ST   int    //1 为充值卡  2 为微信  3 为支付宝
	SN  int //开始下标
	NUM int //每页显示的个数
}

//返回后台支付查询数据
type BACK_SET_PAY_GENERAL struct {
	UG  string                      //管理员的guid
	CT   int     //数组长度
	BL  []BACK_SET_PAY_GENERAL_LIST //查询数据
	Err int                         //-1 为成功
}

type BACK_SET_PAY_GENERAL_LIST struct {
	NAME  string //查询昵称
	UID   int    // 查询ID
	NNAME string //用户账户
	DQ    int    //大区
	DL    int    //代理号
	CTIME string    //充值时间
	CZJE  int    //充值金额
	CYBSL int    //充值元宝数量
	ZYBSL int    //赠送元宝数量
	YBTJ  string    //赠送元宝途径
	DDH   string    //交易订单号
	VIPDJ int    //VIP等级
	DJ    int    //等级
	QD    int    //渠道
	//ST    int    //1 为充值卡  2 为微信  3 为支付宝
}


//后台请求销售总况
type BACK_SEA_ALLP_GENERAL struct {
	CT   int     //数组长度
	BG string //后台的guid
	UG string //管理员的guid
	SN  int //开始下标
	NUM int //每页显示的个数
}

//后台返回销售总况信息
type BACK_SEQ_ALLP_GENERAL struct {
	UG   string                       //管理员的guid
	CSDJ int                          //出售道具数量
	XSDJ int                          //销售总额数量
	GMRS int                          //购买人数数量
	CT int
	NUM  []BACK_SEQ_ALLP_GENERAL_list //商城总况数组
	Err  int                          //-1 为成功
}

type BACK_SEQ_ALLP_GENERAL_list struct {
	NC    string //用户昵称
	UID   int //用户ID
	UNAME string //用户账号
	GM    int    //服务器
	XTIME string //销售日期
	FTIME string //发货日期
	CPLB  int  //产品类别
	ST    string //产品名称
	CT    int    //产品数量
	CTD   string //产品销售单价
	CB    string //产品成本价
	DBGM  string //单笔购买人数
	DBXS  string //单笔销售总额
	DBCB  string //单笔成本总额
	DBLR  string //单笔利润总额
}

//后台请求销售明细
type BACK_SEA_ALL_XSMX_GENERAL struct {
	BG string //后台的guid
	UG string //管理员的guid
}

//返回后台请求
type BACK_SET_ALL_XSMX_GENERAL struct {
	UG  string                    //管理员的guid
	CT   int
	NUM []BACK_SEQ_ALLP_XSMX_list //销售明细数组
	Err int
}

type BACK_SEQ_ALLP_XSMX_list struct {
	NC   int    //大区编号ID
	UID  int    // 服务器ID
	CSRQ string //出售日期
	DJDL int    //道具大类
	DJMC string //道具名称
	GMRS int    //产品购买人数
	CPGM int    //产品购买数
	CPXS int    //产品销售数
	CPKC int    //产品库存数
	XSZE int    //产销售总额
	CPZE int    //产品成本总额
	CPLR int    //产品利润
}



//后台 根据昵称或者id请求查询VIP 数据
type BACK_SEA_VIP_UID_AND_NAME struct {
	BG string //后台的guid
	UG string //管理员的guid
	UID  int  //用户uid
	NAME string //用户昵称
}

//返回后台查询VIP 数据
type BACK_SET_VIP_UID_AND_NAME struct {
	UG      string //管理员的guid
	Viplist []VipStruct
	Err     int     //错误标识（-1正常，15失败)
}


//后台请求VIP 图表数据详情
type BACK_SEA_VIP_PROPS struct {
	BG string //后台的guid
	UG string //管理员的guid
}

//后台请求VIP 图表数据详情
type BACK_SET_VIP_PROPS struct {
	UG  string  //管理员的guid
	VF  [11]int //vip分布数据
	VH  [2]int  //VIP活跃度
	ERR int     //-1 成功
}




//后台请求核弹查询
type BACK_SEA_SELECT_BOMB struct {
	BG string //后台的guid
	UG string //管理员的guid
}

type BACK_DET_SELECT_BOMB struct {
	UG      string               //管理员的guid
	BbCt1 int    //核弹初级扭蛋数量	/ 玫瑰
	BbCt2 int    //核弹中级扭蛋数量
	BbCt3 int    //核弹高级扭蛋数量
	BbShop1 int  //核弹初级购买数量	/ 玫瑰
	BbShop2 int  //核弹中级购买数量
	BbShop3 int  //核弹高级购买数量
	BbGv1 int    //核弹初级赠送数量	/ 玫瑰
	BbGv2 int    //核弹中级赠送数量
	BbGv3 int    //核弹高级赠送数量
	BbUe1 int    //核弹初级使用总数	/ 玫瑰
	BbUe2 int    //核弹中级使用总数
	BbUe3 int    //核弹高级使用总数
	BbUT1 int    //核弹初级剩余数量	/ 玫瑰
	BbUT2 int    //核弹中级剩余数量
	BbUT3 int    //核弹高级剩余数量
	Err  int
}

//type BACK_SEA_SELECT_BOMB struct {
//	BG string //后台的guid
//	UG string //管理员的guid
//}
//
//type BACK_DET_SELECT_BOMB struct {
//	BbCt1 int    //核弹初级扭蛋数量	/ 玫瑰
//	BbCt2 int    //核弹中级扭蛋数量
//	BbCt3 int    //核弹高级扭蛋数量
//	BbShop1 int  //核弹初级购买数量	/ 玫瑰
//	BbShop2 int  //核弹中级购买数量
//	BbShop3 int  //核弹高级购买数量
//	BbGv1 int    //核弹初级赠送数量	/ 玫瑰
//	BbGv2 int    //核弹中级赠送数量
//	BbGv3 int    //核弹高级赠送数量
//	BbUe1 int    //核弹初级使用总数	/ 玫瑰
//	BbUe2 int    //核弹中级使用总数
//	BbUe3 int    //核弹高级使用总数
//	BbUT1 int    //核弹初级剩余数量	/ 玫瑰
//	BbUT2 int    //核弹中级剩余数量
//	BbUT3 int    //核弹高级剩余数量
//	Err  int
//}






//后台请求特殊道具详情
type BACK_SEA_SPECIAL_PROPS struct {
	BG      string //后台的guid
	UG      string //管理员的guid
	ST      int    //1 为核弹查询   2 为玫瑰花查询
	QueType int    //1获取，2赠送，3使用，4剩 余
	SN      int    //开始下标
	NUM     int    //每页显示的个数
	SidUName string //玩家的SID或昵称
}

//后台发送特殊道具详情详情
type BACK_DET_SPECIAL_PROPS struct {
	UG      string               //管理员的guid
	ST      int                  //1 为核弹查询 2 为玫瑰花查询
	QueType int                  //1获取，2赠送，3使用，4剩余
	SN      int                  //开始下标
	NUM     int                  //每页显示的个数
	CT      int
	USERS   []BACK_SPECIAL_PROPS //查询玩家详情
	Err     int                  //错误
}

//核弹使用情况
type BACK_SPECIAL_PROPS struct {
	User        string //获取者、赠送人、使用人、玩家背包剩余
	NUM         int    // 获取数量、赠送数量、使用数量、背包剩余数量
	GoodsType   int    // 5玫瑰，678初中高核弹
	TIME        string //获取时间、赠送时间
	GETTYPE     int    // 获取方式 1扭蛋、2商店
	GetNickname string //获取人
}












//后台请求玩家金币排行列表
type Back_SEA_User struct {
	BG     string //后台的guid
	UG      string  //管理员的guid
	//UID    []string   //用户sid和用户名
	ST    int    //查询排行榜 标识 （1 个人金币排行榜 2 元宝排行榜 3玫瑰排行榜 4 核弹排行榜 5  充值排行榜 6 游戏内赢取排行榜 7  在线时间排行榜 ）
	SID    int    //大区id
	SN     int    //开始下标
	NUM    int    //每页显示的个数
}
//sharemem返回h后台金币列表
type Sha_RSE_User struct {
	UG      string    //管理员的guid
	CT     int   //总长
	UMG     []UserMsg //用户信息
	Errcode int       //错误标识（-1查询成功，15没有此用户)  154  第一页  155 为最后一页
}













//
////后台请求核弹查询
//type BACK_SEA_SELECT_BOMB struct {
//	BG string //后台的guid
//	UG string //管理员的guid
//	st int    //1 为核弹查询 2 为玫瑰花查询
//}
//
//
////服务返回核弹查询信息  核弹  nuclear  玫瑰 persrntorse
//type BACK_DET_SELECT_BOMB struct {
//	UG   string //管理员的guid
//	BbCt int    //核弹已兑换数量
//	BbGv int    //核弹赠送数量
//	BbUe int    //核弹使用总数
//	BbUT int    //核弹总剩余数量
//	Err  int
//}
//







//9700 - 9800 //后台服务器统计逻辑服
//9800 - 9900 //后台服务器统计逻辑服








//后台请求推广信息
type BACK_RSE_GENERALIZE struct {
	BG string //后台的guid
	UG string //管理员的guid
}
//返回给后台推广信息
type BACK_SEA_GENERALIZE struct {
	UG       string //管理员的guid
	GeList []GeneralizeList
}
type GeneralizeList struct {
	GePlayer string //被推广人名
	GeTime   string //被推广时间
	GeGold   string //被推广人充值元宝
}
















//后台请求ShowMeTheMoney
type BACK_SEA_SHOWMONEY struct {
	BG string //后台的guid
	UG string //管理员的guid
	Sid int //用户的sid
	Golds int64 //ShowMeTheMoney
	Diamonds int //钻石
}
//返回给后台ShowMeTheMoney
type BACK_RSE_SHOWMONEY struct {
	UG  string //管理员的guid
	Err int    //错误标识（—1正常，15失败)
}






//后台请求兑换充值卡
type BACK_SEA_USECARDS struct {
	BG    string //后台的guid
	UG    string //管理员的guid
	Cards string //所要兑换的卡密
	User  string //兑换人
}
//返回给后台兑换充值卡的结果
type BACK_RSE_USECARDS struct {
	UG string //管理员的guid
	Err int //错误标识（—1正常，15失败)
}




//后台请求收入日报
type BACK_SEA_PAYDATA struct {
	BG    string //后台的guid
	UG    string //管理员的guid
	UDate string    //查询的首天
	DUate string    //查询的末天
}
//返回给后台收入日报
type BACK_RSE_PAYDATA struct {
	UG    string //管理员的guid
	Get      int //总收入
	PayUser  int //总付费用户数
	AUser int //登录账户数
	RpayUser int //成功付费用户数
	FUser int //首次登陆账户数
	NUserPay int //新增用户收入
	NUser    int //新增用户付费
	DUser    int //一天中首次付费的账户数
	DUserPay int //一天中首次付费金额
	HUser	int //活跃账户数
	WayPay   int //渠道收入
	SidPay   int //区服收入
	Err      int //错误标识（-1正常，15失败)
}




//后台请求生成充值卡卡密
type BACK_SEA_CREATEPAYCARDS struct {
	BG    string //后台的guid
	UG    string //管理员的guid
	CardsN int // 生成的充值卡数量
	Ctype int //(1，60钻，2，300钻，3,700钻，4,1000钻，5，2000钻，6,3000钻，7,7000钻，8,10000钻)
}
//返回给后台请求充值卡卡密
type BACK_RSE_CREATEPAYCARDS struct {
	UG          string //管理员的guid
	Err int //错误标识（—1正常，15失败)
}



type DPayCards struct {
	Cards string //充值卡卡密
}


//后台请求充值卡使用情况
type BACK_SEA_PAYCARDSUSE struct {
	BG    string //后台的guid
	UG    string //管理员的guid
	UCards int //充值卡上限
	DCards int //充值卡下限
	Cards string  //为空查所有   有值查该充值卡
}
//返回给后台充值卡使用情况
type BAKC_RSE_PAYCARDSUSE struct {
	UG          string //管理员的guid
	PayCardsUse []PayCardsUse
	Err         int //错误标识(-1正常，15失败)
}
type PayCardsUse struct {
	Cards      string //充值卡
	User       string //使用人
	UserTime   string //使用时间
	CreateTime string //生成时间
}



//后台请求充值卡卡密
type BACK_SEA_PAYCARDS struct {
	BG    string //后台的guid
	UG    string //管理员的guid
	UCards int //充值卡上限
	DCards int //充值卡下限
}
//返回给后台充值卡卡密
type BACK_RSE_PAYCARDS struct {
	UG string //管理员的guid
	Cards []DPayCards//充值卡卡密
}
type PayCards struct {
	Cards string //充值卡卡密
}



//后台请求最高在线人数
type BACK_SEA_PLAYERLV struct {
	BG   string //后台的guid
	UG   string //管理员的guid
	Type int    //1为日最高，2为周最高，3为月最高
}
//返回给后台最高在线人数
type BACK_RSE_PLAYER struct {
	UG     string //管理员的guid
	BL    []BACK_RET_LIST
}

type BACK_RET_LIST struct {
	Player int    //在线人数
	Date   string //时间(小时，天)
}


//后台请求在线数据
type BACK_SEA_ONLINEDATA struct {
	BG string //后台的guid
	UG string //管理员的guid
}
//返回给后台在线数据
type BACK_RSE_ONLINEDATA struct {
	UG string //管理员的guid
	NewUser int  //新增用户
	NewPlayer int //新增角色数
	NewPhone int //新增设备数
	DAU int //日活跃用户
	WAU int //周活跃用户
	MAU int //月活跃用户
	BackUser int //回流用户
	YUser int //第二天登陆的用户数量
	TUser int //第三天登录的用户数量
	SUser int //第七天登陆的用户数量
	OnlineUser int  //活跃账号在线时长
	LossUserData []Loss //流失用户
}


type Loss struct {
	LossUser int //流失用户数
	Date int //1为周流失，2为月流失
}




//后台核弹情况查询
type BACK_SEA_NUCLEARMSG struct {
	BG string //后台的guid
}
//返回给后台核弹使用情况
type BACK_RSE_NUCLEARMSG struct {
	UG string //管理员的guid
	NuMsg []BackNuClear
	Err int //错误标识（-1成功，15失败)
}
//核弹使用情况
type BackNuClear struct {
	User       string // 使用者
	Conversion string //核弹兑换时间
	Send       string //赠送时间
	SendU      string //赠送人
	Use        string //使用时间
}




//后台查询商城概况
type BACK_SEA_FINDSHOP struct {
	BG string //后台的guid
	UG string  //管理员GUID
}
//返回给后台商城概况
type BACK_RSE_FINDSHOP struct {
	UG        string   //管理员GUID
	AllPropN  int      //出售道具总数
	Buy       []AllBuy //消费明细
	Money     int      //销售总额
	BuyPeople int      //购买人数
}
type AllBuy struct {
	SellDate     string //出售日期
	Prop         int    //1钻石，2金币，3房卡
	PropNickName string //道具名称
	PropNum      int    //道具数量
}




//后台查询vip情况
type BACK_SEA_FINDVIP struct {
	CT int
	BG string //后台的guid
	UG string //后台的guid
	SN  int //开始下标
	NUM int //每页显示的个数
}
//返回给后台vip情况
type BACK_RSE_FINDVIP struct {
	UG string //管理员的guid
	Viplist []VipStruct
	NVip [11]int //vip数量
	Err int //错误标识（-1正常，15失败)
}
type VipStruct struct {
	NickName string //昵称
	VLvM  int //vip等级
	ZLv  int //账号等级
	ZlvD  int  //vip活跃度
}


//后台查看游戏内活动
type BACK_SEA_SEAGAMEINNOTICE struct {
	BG		string //后台的guid
	UG		string //管理员的guid
	SID		int		//大区ID
}
//返回给后台查看游戏内活动的结果
type BACK_RSE_SEAGAMEINNOTICE  struct {
	UG    string //管理员的guid
	Backnotice []BackGameInLoginotice//公告时间
	Errcode int	//错误标识（-1正常,15失败)
}
type BackGameInLoginotice struct {
	Id         int    //公告表Id
	Operator   string //操作人
	Sid        int    //大区Id
	BegainTime string //开始时间
	LastTime   string //结束时间
	Title      string //标题
	Word       string //内容
	Way        string //渠道
	Activty    string //活动类型
	Acce    []GameAccessory    //附件
}


//后台修改游戏内活动
type BACK_SEA_AMENDSEAGAMEINNOTICE  struct {
	BG    string //后台的guid
	UG    string //管理员的guid
	Id    int    //公告表Id
	SID   int    //大区ID
	BTime string //开始时间
	CTime string //结束时间
	Title string //标题
	Word  string //内容
	Way   string //渠道
	Activty string //活动类型
	Acce    []GameAccessory    //附件
}

type GameAccessory struct {
	Prop int //道具(1 元宝，2 核弹)
	Num  int //数量
}





//返回给后台修改游戏内活动结果
type BACK_RSE_AMENDSEAGAMEINNOTICE struct {
	UG		string //管理员的guid
	Errcode  int   //错误标识（-1修改成功，15修改失败)
}




//后台发送游戏内活动
type BACK_SEA_GAMEINNOTICE struct {
	BG      string //后台的guid
	UG      string //管理员的guid
	SID     int    //大区ID
	BTime   string //开始时间
	CTime   string //结束时间
	Title   string //标题
	Word    string //内容
	Way     string //渠道
	Activty string //活动类型
	Acce    []GameAccessory    //附件
}

//返回给后台发送游戏内活动结果
type BACK_RSE_GAMEINNOTICE struct {
	UG		string //管理员的guid
	Errcode  int   //错误标识（-1查询成功，15没有此渠道)
}


//
////后台发送邮件
//type BACK_SEA_MAIL struct {
//	BG		string //后台的guid
//	UG		string //管理员的guid
//	SID		int		//大区ID
//	NickName []string	//用户名
//	USid	int		//用户sid
//	Title	string	//标题
//	Word	string	//内容
//	Acce	[]SAccessory	//附件
//}



//后台发送邮件
type BACK_SEA_MAIL struct {
	BG    string //后台的guid
	UG    string //管理员的guid
	SID       int       //大区ID
	BTime   string //开始时间+
	CTime   string //结束时间
	NickName []string  //用户名
	USid   int       //用户sid
	Title  string //标题
	Word   string //内容
	Acce   []SAccessory   //附件
	UL    []string  //玩家VIP 等级发送
}
type SAccessory struct {
	Prop   int       //道具(1 元宝，2 核弹)
	Num       int       //数量
}



//返回给后台发送邮件的结果
type BACK_RSE_MAIL struct {
	UG       string //管理员的guid
	USid	int		//用户sid
	Closer	string		//操作人
	Errcode  int   //错误标识（-1查询成功，15没有此用户)
}







//后台发送游戏内公告
type BACK_SEA_GAMENOTICE struct {
	BG    string //后台的guid
	UG    string //管理员的guid
	SID   int    //大区ID
	BTime string //开始时间
	CTime string //结束时间
	Title string //标题
	Word  string //内容
	Way   string //渠道
	Photo string //图片
}
//返回给后台发送游戏内公告结果
type BACK_RSE_GAMENOTICE struct {
	UG		string //管理员的guid
	Errcode  int   //错误标识（-1查询成功，15没有此渠道)
}


//后台修改游戏内公告
type BACK_SEA_AMENDGAMENOTICE struct {
	BG    string //后台的guid
	UG    string //管理员的guid
	Id    int    //公告表Id
	SID   int    //大区ID
	BTime string //开始时间
	CTime string //结束时间
	Title string //标题
	Word  string //内容
	Way   string //渠道
	Photo string //图片
}
//返回给后台修改游戏内公告结果
type BACK_RSE_AMENDGAMENOTICE struct {
	UG		string //管理员的guid
	Errcode  int   //错误标识（-1修改成功，15修改失败)
}



//后台查看游戏内公告
type BACK_SEA_SEAGAMENOTICE struct {
	BG		string //后台的guid
	UG		string //管理员的guid
	SID		int		//大区ID
}
//返回给后台查看游戏内公告的结果
type BACK_RSE_SEAGAMENOTICE struct {
	UG    string //管理员的guid
	Backnotice []BackGameLoginotice//公告时间
	Errcode int	//错误标识（-1正常,15失败)
}

type BackGameLoginotice struct {
	Id         int    //公告表Id
	Operator   string //操作人
	Sid        int    //大区Id
	BegainTime string //开始时间
	LastTime   string //结束时间
	Title      string //标题
	Word       string //内容
	Way        string //渠道
	Photo      string //图片路径
}








//后台请求支付查询
type BACK_SEA_USEPAYMSG struct {
	BG		string //后台的guid
	UG		string //管理员的guid
	SID		int		//大区ID
	NickName string	//用户名
	USid	int		//用户sid
}
//sharemem返回给后台支付查询信息
type Sha_RSE_USERPAYMSG struct {
	Nickname string //用户名
	UG       string //管理员的guid
	USid	int		//用户sid
	PayTime string 	//充值时间
	WhichPay string	//支付方式
	Rmb		 string	//充值金额
	RGold	int 	//充值元宝数量
	NGold	int		//非充值元宝数量
	PayNum	string	//订单号
	Vip 	int		//VIP等级
	Lv		int		//等级
	PayLoad	string	//支付渠道
	Errcode  int   //错误标识（-1查询成功，15没有此用户)
}







//后台修改登录公告
type BACK_SEA_AMENDNOTICE struct {
	BG    string //后台的guid
	UG    string //管理员的guid
	Id    int    //公告表Id
	SID   int    //大区ID
	BTime string //开始时间
	CTime string //结束时间
	Title string //标题
	Word  string //内容
	Way   string //渠道
	Photo string //图片
}
//返回给后台修改登录公告结果
type BACK_RSE_AMENDNOTICE struct {
	UG		string //管理员的guid
	Errcode  int   //错误标识（-1修改成功，15修改失败)
}




//后台查看登录公告
type BACK_SEA_SEANOTICE struct {
	BG		string //后台的guid
	UG		string //管理员的guid
	SID		int		//大区ID
}
//返回给后台查看登录公告的结果
type BACK_RSE_SEANOTICE struct {
	UG  string
	backnotice []BackLoginotice//公告时间
	Errcode int	//错误标识（-1正常,15失败)
}
type BackLoginotice struct {
	Id   int
	Operator   string //操作人
	Sid        int    //大区Id
	BegainTime string //开始时间
	LastTime   string //结束时间
	Title      string //标题
	Word       string //内容
	Photo      string //图片
	Way        string //渠道
}









//后台发送登录公告
type BACK_SEA_NOTICE struct {
	BG		string //后台的guid
	UG		string //管理员的guid
	SID		int		//大区ID
	BTime	string	//开始时间
	CTime	string	//结束时间
	Title	string	//标题
	Word	string	//内容
	Way 	string  //渠道
}
//返回给后台发送登录公告结果
type BACK_RSE_NOTICE struct {
	UG		string //管理员的guid
	SID		int		//大区ID
	Errcode  int   //错误标识（-1查询成功，15没有此渠道)
}













//后台请求封禁与解封用户信息
type BACK_SEA_CLOSEANDOPEN struct {
	BG       string //后台的guid
	UG       string //管理员的guid
	SID		int		//大区ID
	Nickname string //用户名
	WhClose	string	//封禁原因
	Close    int    //封禁标识(0封禁7天,1封禁30天，2永久封禁,3解封)
}
//sharemem返回给后台封禁与解封用户信息
type Sha_RSE_CLOSEANDOPEN struct {
	Nickname string //用户名
	UG		string 	//用户的guid
	Errcode  int   //错误标识（-1封禁成功，15没有此用户)
}

//后台请求用户禁言（解封和禁言)
type BACK_SEA_CLOSEUMSG struct {
	BG		string //后台的guid
	UG		string //管理员的guid
	SID		int		//大区ID
	NickName string	//用户名
	WhClose	string	//封禁原因
	MC		int		 //封禁标识(0封禁1天,1封禁7天，2封禁30天,3解封)
}
//sharemem返回给后台封禁与解封用户信息
type Sha_RSE_CLOSEUMSG struct {
	Nickname string //用户名
	UG		string 	//用户的guid
	Errcode  int   //错误标识（-1封禁成功，15没有此用户)
}



//后台请求查询用户封禁信息
type BACK_SEA_USERCLOSEMSG struct {
	BG		string //后台的guid
	UG		string //管理员的guid
	SID		int		//大区ID
	NickName string	//用户名
}
//sharemem返回给后台封禁与解封用户信息
type Sha_RSE_USERCLOSEMSG struct {
	Nickname string //用户名
	UG		string 	//用户的guid
	Closer	string		//操作人
	WhClose	string	//封禁原因
	SID		int		//大区ID
	USid	int		//用户sid
	UserClose	string //封禁时间
	Errcode  int   //错误标识（-1查询成功，15没有此用户)
}





//后台请求查询用户禁言信息
type BACK_SEA_USERTALKCLOSE struct {
	BG		string //后台的guid
	UG		string //管理员的guid
	SID		int		//大区ID
	NickName string	//用户名
	USid	int		//用户sid
}
//sharemem返回给后台查询用户禁言信息
type Sha_RSE_USERTALKCLOSE struct {
	Nickname string //用户名
	UG       string //管理员的guid
	USid	int		//用户sid
	Closer	string		//操作人
	WhClose	string	//封禁原因
	SID		int		//大区ID
	CloseTime	int //封禁时间
	LstTime		int	//到期时间
	Errcode  int   //错误标识（-1查询成功，15没有此用户)
}








//后台请求查询用户角色信息
type  BACK_SEA_USERMSG struct {
	BG     string //后台的guid
	UG      string  //用户的guid
	UID    []string   //用户id
	SID    int    //大区id
	SN     int    //开始下标
	NUM    int    //每页显示的个数
}
//sharemem返回给后台用户信息
type Sha_RSE_USERMSG struct {
	UG      string  //用户的guid
	UMG       []UserMsg  //用户信息
	Errcode  int   //错误标识（-1查询成功，15没有此用户)
}
type UserMsg struct {
	Numbers   int    //玩家序号
	NickName string  //用户昵称
	Id       int     //用户Id
	Uid      int     //用户uid
	AddTime  string  //创建时间
	Lv       int     //等级
	Vip      int     //Vip等级
	GoldN    int     //元宝数量
	SendC    int     //赠送数量（金币 ） 1
	Coin     int64   //金币数量
	ZH       string  //玩家账号
	CallX    string  //设备型号
	MG       int     //玫瑰花数量
	HD       int     //核弹数量
	YXN      int     //游戏内赢取值
	ZXTM     int     //在线时间
	Rmb      float64 //玩家充值金额
}


//后台请求登录
type Back_SEA_GM_Login struct {
	BG     string //后台的guid
	UN     string     //用户名
	PW     string     //密码
}


//sharemem返回登录结果
type Sha_RSE_GM_Login struct {
	UN     string //用户账号
	AC     int    //权限（）
	UG      string  //用户guid
	Errcode int    //错误标识（-1登陆成功，2密码错误、0账号不存在、1BG有误、3没有权限）
}


//后台添加管理员
type Back_SEA_AddAdmin struct {
	BG    string //后台的guid
	AUN       string //超级管理员账号
	DUN       string //管理员账号
	DPS       string    //管理员密码
}
//sharemem返回添加结果
type Sha_RSE_AddAdmin struct {
	UN    string // 用户账号
	AC    int       //权限
	Errcode int    //错误标识（-1登陆成功，2密码错误、0账号不存在、1BG有误、3没有权限）
}










//后台请求给用户充值（金币和钻石）
type Back_Req_Imitate_Pay struct {
	BG 	string	//后台的guid
	UG	string 	//用户的guid
	SID 	int	//大区id
	NN 	string 	//用户的昵称
	GD 	int	//金币数量
	SN 	int	//钻石数量
}
//sharemem返回充值结果
type Sha_Ret_Imitate_Pay struct {
	UG 	string	//用户的guid
	Errcode int	//错误标识（-1正常、48后台传入数据出错）
}


//后台请求大区汇总信息
type Back_Req_Collect struct {
	BG 	string	//后台的guid
	UG	string 	//用户的guid
	SID 	int	//大区id
	ST 	int64	//开始时间戳
	ET 	int64	//结束时间戳
}
//sharemem返回大区汇总信息
type Sha_Ret_Collect struct {
	UG 	string	//用户的guid
	OLSUM 	int	//玩家的在线数量
	PSUM 	int	//平台充值总数
	SUM 	int	//全平台充值总数
}



//后台请求发送邮件
type Back_Req_Send_Mail struct {
	BG 	string 	//后台的guid
	UG 	string 	//用户的guid
	SID 	int	//大区id
	NN 	string	//收件人昵称
	TT 	string	//邮件标题
	MS 	string	//邮件文字内容
	PA 	[]PorpInfo
}
type PorpInfo struct {
	ID 	int64	//道具id
	CT 	int	//道具数量
}
//sharemem返回发送邮件的结果
type Sha_Ret_Send_Mail struct {
	UG string
	Errcode int	//错误标识（-1正常、48后台传入数据出错）
}



//后台请求修改公告信息
type Back_Req_Set_Notice struct {
	BG 	string 	//后台的guid
	UG 	string 	//用户的guid
	CM 	[]string//公告内容
}
//sharemem返回修改公告的结果
type Sha_Ret_Set_Notice struct {
	UG string
	Errcode int	//错误标识（-1正常、48后台传入数据出错）
}







//后台请求查询用户角色信息
type Back_Req_Find_RoleSkin struct {
	BG 	string	//后台的guid
	UG      string  //用户的guid
	UID 	int64	//用户id
	SID 	int	//大区id
	SN 	int	//开始下标
	NUM 	int	//每页显示的个数
}
//sharemem返回用户角色信息
type Sha_Ret_Find_RoleSkin struct {
	UG      string  //用户的guid
	RN 	int	//角色总数
	SN 	int	//皮肤总数
	RS 	[]RoleSkin 	//用户
}
type RoleSkin struct {
	NM 	string	// 角色/皮肤名称
	CT 	int	// 类型 （0 角色 1皮肤）
	PT 	int	//拥有状态（0未拥有、1拥有）
	RD 	int	//剩余时间（-1表示永久、其他值为表示多少天）
}




//后台请求查询用户角色信息（根据角色或皮肤名称）
type Back_Req_RoleSkin_NM struct {
	BG 	string	//后台的guid
	UG      string  //用户的guid
	UID 	int64	//用户id
	SID 	int	//大区id
	NM 	string	//角色/皮肤名称
}
//sharemem返回用户查询的角色或皮肤信息
type Sha_Ret_RoleSkin_NN struct {
	UG      string  //用户的guid
	RS 	RoleSkin
}





//后台请求查询用户信息
type Back_Req_UserInfo struct {
	BG 	string	//后台guid
	UG 	string	//用户的guid
	SID 	int	//大区id
	UID    []string   //用户sid和用户名
	NN 	string	//查询用户的昵称（昵称为空查询所有）
	SN 	int	//开始下标
	NUM 	int	//每页显示的个数
}
//sharemem返回用户信息
type Sha_Ret_UserInfo struct {
	UG 	string	//用户的guid
	UA 	[]UserInfo
}
type UserInfo struct {
	ID 	int64	//用户id
	NN 	string	//用户昵称
	RT 	int64	//注册时间
	LV 	int	//用户等级
	VIP 	int	//用户vip等级
	SN 	int	//充值钻石总数量
	SNT 	int	//非充值钻石总数量
	GD 	int	//用户当前金币数量
	ACC 	string	//用户账号
	FT 	int	//设备类型
	SA 	[]int64	//用户的英雄id
}




//后台请求封禁用户账号信息
type Back_Req_Banned_NN struct {
	BG 	string	//后台guid
	UG 	string	//用户的guid
	SID 	int	//大区id
	NN 	string	//昵称
	SN 	int	//开始下标
	NUM 	int	//每页显示的个数
}


//sharemem返回封禁用户账号信息
type Sha_Ret_Banned_NN struct {
	UG 	string	//用户的guid
	BUA	[]Banned_NN
}
type Banned_NN struct {
	ID 	int64	//用户id
	NN 	string	//昵称
	BS 	int	//封禁状态
	BT 	int64	//封禁时间
	BD 	int	//封禁期限
	ONN 	string	//操作人昵称
}
//后台请求封禁用户账号
type Back_Req_Banned_User struct {
	BG 	string	//后台guid
	UG 	string	//用户的guid
	ID 	int64	//封禁用户id
	BD 	int	//封禁期限
}
//sharemem返回封禁用户账号的结果
type Sha_Ret_Banned_User struct {
	UG 	string	//用户guid
	Errcode int	//错误标识（-1成功、102 没有权限）
}





//后台请求解封用户账号
type Back_Req_De_Archive struct {
	BG 	string	//后台的guid
	UG 	string	//用户的guid
	ID 	int64	//解封用户的id
	ST 	int	//解封状态
}
//sharemem返回解封用户账号的结果
type Sha_Ret_De_Archive struct {
	UG 	string	//用户的guid
	Errcode int	//错误标识（-1 成功、102 没有权限）
}




//后台请求查询禁言用户信息
type Back_Req_Bpuser_NN struct {
	BG 	string	//后台guid
	UG 	string	//用户的guid
	SID 	int	//大区id
	NN 	string	//昵称
	SN 	int	//开始下标
	NUM 	int	//每页显示的个数
}
//sharemem返回禁言用户信息
type Sha_Ret_Bpuser_NN struct {
	UG 	string	//用户的guid
	BUA	[]Banned_NN
}





//后台请求封禁用户聊天
type Back_Req_Banned_To_Post struct {
	BG 	string	//后台guid
	UG 	string	//用户的guid
	ID 	int64	//封禁用户id
	BD 	int	//封禁期限
}
//sharemem返回封禁用户聊天的结果
type Sha_Ret_Banned_To_Post struct {
	UG 	string	//用户guid
	Errcode int	//错误标识（-1成功、102 没有权限）
}




//后台请求解封用户聊天
type Back_Req_De_Banned_Post struct {
	BG 	string	//后台的guid
	UG 	string	//用户的guid
	ID 	int64	//解封用户的id
	ST 	int	//解封状态
}
//sharemem返回解封用户聊天的结果
type Sha_Ret_De_Banned_Post struct {
	UG 	string	//用户的guid
	Errcode int	//错误标识（-1 成功、102 没有权限）
}





//后台请求查询工会日志信息
type Back_Req_Find_Union struct {
	BG 	string	//后台的guid
	UG 	string	//用户的guid
	ST 	int64	//开始时间戳
	ET 	int64	//结束时间戳
	NM 	string	//工会名称
	SID 	int	//大区id
	SN 	int	//开始下标
	NUM 	int	//每页显示的个数
}
//sharemem返回工会日志信息
type Sha_Ret_Find_Union struct {
	UG 	string	//用户的guid
	UA 	[]UnionInfo
}
type UnionInfo struct {
	ID 	int64	//工会Id
	NM 	string	//工会名称
	NN 	string	//会长昵称
	NUM 	int	//工会成员人数
	BH 	string	//工会行为
	TM 	int64	//行为时间
	MF 	string	//工会宣言
}





//后台请求登录
type Back_Req_GM_Login struct {
	BG 	string	//后台的guid
	UN 	string 	//用户名
	PW 	string 	//密码
}
//sharemem返回登录结果
type Sha_Ret_GM_Login struct {
	UN 	string	//用户账号
	AC 	int	//权限（）
	UG      string  //用户guid
	Errcode int	//错误标识（-1登陆成功，2密码错误、0账号不存在、1BG有误、3没有权限）
}


//返回添加是否成功
type BACK_RSE_ADMAIN struct {
	UG  string //管理员的guid
	Err int    //错误标识（—1正常，15失败)
}


//返回添加是否成功
type BACK_RSE_ADMAIN_DELECT struct {
	UG  string //管理员的guid
	Err int    //错误标识（—1正常，15失败)
}


//返回请求充值退分
type BACK_RET_RECHARGEWITH struct {
	UG  string //管理员的guid
	Err int    //错误 -1 成功 1 失败
}


//sharemem返回给后台用户信息
type Sha_RSE_USERMSG_back struct {
	UG      string        //管理员的guid
	UMG     []UserMsgback //用户信息
	USZC    int           //玩家注册数量
	USZX    int           //在线数量
	USLX    int           //离线数量
	USYC    int           //在线数量
	Errcode int           //错误标识（-1查询成功，15没有此用户)
}
type UserMsgback struct {
	NickName string //用户昵称
	Id       int    //用户Id
	Uid      int    //用户uid
	AddTime  string //创建时间
	GoldN    int    //元宝数量
	Coin     int64  //游戏币金币数量
	ZH       string //账号
	CZ       int    //累计充值
	TF       int    //累计退分
	LGTM     string //最后登录时间
	ZCYQM    int    //注册邀请码
}

//返回查询逻辑服比赛详情
type BACK_RET_GAMEDRAW struct {
	UG  string //管理员的guid
	GDL []GameDrawItem
	Err int //错误
}
type GameDrawItem struct {
	Win      int    //玩家赢得分数
	Los      int    //玩家输掉的分数
	Rm       int    //房间号
	LGd      string //逻辑服guid
	Ct       int    //逻辑服ctype
	DrawTime int64  //获取分数的时间
}

//后台请求所有管理员信息
type RET_Select_Admini_INFORN struct {
	UG  string //后台的guid
	AS  []ADMINS
	Err int //-1 正常
}
type ADMINS struct {
	Id       int    //登录表Id
	Ad       string //超级管理员账号
	User     string //管理员账号
	PassWord string //密码
	Door     int    //权限
}







