package msgtype



const (
	MSG_CLIENT_U_GUID       =   "1000"
	MSG_CLIENT_U            = "9001"  //客户端发送的登录包头
	MSG_RET_CLIENT_U        = "9002"  //登录服返回给客户端"8000"的处理结果
	MSG_DETECTION_U	          = "9003"  //后台请求查询用户信息
	MSG_RET_DETECTION_U        = "9004"  //后台返回用户信息
	MSG_REGISTER_U          = "9005"  //客户端请求封禁账户信息
	MSG_RET_REGISTER_U      = "9006"  //后台返回页面封禁账户信息
	MSG_BANNED_U          = "9007"  //客户端请求封禁账户
	MSG_RET_BANNED_U      = "9008"  //后台返回页面封禁账户信息
	MSG_DE_ARCHIVE_U          = "9009"  //客户端请求封禁账户
	MSG_RET_DE_ARCHIVE_U      = "9010"  //后台返回页面封禁账户信息
	MSG_DE_BPUSER_U          = "9011"  //客户端请求禁言账户
	MSG_RET_DE_BPUSER_U      = "9012"  //后台返回页面禁言账户信息
	MSG_DE_BANNED_POST_U          = "9013"  //客户端请求禁言
	MSG_RET_BANNED_POST_U      = "9014"  //后台返回页面禁言账户信息
	MSG_DE_DE_BANNED_POST_U          = "9015"  //客户端请求解封禁言
	MSG_RET_DE_BANNED_POST_U      = "9016"  //后台返回页面禁言账户信息
	MSG_FIND_UNION_U          = "9017"  //客户端请求工会日志
	MSG_RET_FIND_UNION_U      = "9018"  //后台返回页面工会日志信息
	MSG_FIND_ROLESKIN_U          = "9019"  //后台请求查询用户角色信息
	MSG_RET_FIND_ROLESKIN_U      = "9020"  //后台返回页面工会日志9025信息
	MSG_FIND_ROLESKIN_NM_U          = "9021"  //后台请求查询用户角色信息
	MSG_RET_FIND_ROLESKIN_NM_U      = "9022"  //后台返回页面工会日志信息
	MSG_FIND_IMITSTE_PAY          = "9025" //后台请求给用户充值（金币和钻石）
	MSG_RET_IMITSTE_PAY      = "9026"  //sharemem返回充值结果
	MSG_FIND_COLLECT          = "9027" //后台请求大区汇总信息
	MSG_RET_COLLECT     = "9028"  	//sharemem返回大区汇总信息
	MSG_FIND_MAIL          = "9029" //后台请求给用户发送邮件
	MSG_RET_MAIL     = "9030"  	//sharemem返回发送邮件的结果
	MSG_REQ_ADD_ANN					= "9023"  //后台请求添登录加公告
	MSG_RET_ANN						= "9024"  //后台增加登录公告信息成功与否
	MSG_REQ_SEL_ANN					= "9031"  //后台请求查看公告
	MSG_RET_SRL_ANN					= "9032"  //后台公告信息
	MSG_REQ_UPDATE_ANN					= "9033"  //后台修改登录公告
	MSG_RET_UPDATE_ANN					= "9034"  //后台返回登录公告修改成功与否

	MSG_REQ_GAME_ADD_ANN					= "9035"  //后台请求添登录加公告
	MSG_RET_GAME_ANN						= "9036"  //后台增加登录公告信息成功与否
	MSG_REQ_GAME_SEL_ANN					= "9037"  //后台请求查看公告
	MSG_RET_GAME_SRL_ANN					= "9038"  //后台公告信息
	MSG_REQ_GAME_UPDATE_ANN					= "9039"  //后台修改登录公告
	MSG_RET_GAME_UPDATE_ANN					= "9040"  //后台返回登录公告修改成功与否


	MSG_REQ_GAME_ADD_ACTIVITY					= "9041"  //后台请求添游戏活动
	MSG_RET_GAME_ACTIVITY						= "9042"  //后台增加游戏活动成功与否
	MSG_REQ_GAME_SEL_ACTIVITY					= "9043"  //后台请求查看游戏活动
	MSG_RET_GAME_SRL_ACTIVITY					= "9044"  //后台返回游戏活动信息
	MSG_REQ_GAME_UPDATE_ACTIVITY					= "9045"  //后台修改游戏活动
	MSG_RET_GAME_UPDATE_ACTIVITY					= "9046"  //后台返回游戏活动修改成功与否

	MSG_REQ_GAME_SEL_VIP					= "9047"  //后台请求查看VIP信息
	MSG_RET_GAME_SRL_VIP					= "9048"  //后台返回VIP信息
	MSG_REQ_GAME_UPDATE_SHPPING					= "9049"  //后台请求商城消费记录
	MSG_RET_GAME_UPDATE_SHPPING					= "9050"  //后台返回游戏活动修改成功与否
	MSG_REQ_GAME_UPDATE_NUCLEARMSG					= "9051"  //后台修改游戏活动
	MSG_RET_GAME_UPDATE_NUCLEARMSG					= "9052"  //后台返回游戏活动修改成功与否
	MSG_REQ_GAME_UPDATE_pay					= "9053"  //后台请求支付内容
	MSG_RET_GAME_UPDATE_pay					= "9054"  //后台返回支付日志内容
	MSG_REQ_GAME_ONLINEDATA					= "9055"  //后台请求在线数据
	MSG_RET_GAME_ONLINEDATA					= "9056"  //后台返回在线数据
	MSG_REQ_GAME_PLAYERDATA					= "9057"  //后台请最高人数
	MSG_RET_GAME_PLAYERDATA					= "9058"  //后台返回返回最高人数
	MSG_REQ_GAME_PAYDATA					= "9059"  //后台请求最高人数
	MSG_RET_GAME_PAYDATA					= "9060"  //后台返回返回最高人数
	MSG_REQ_GAME_PAYDATA_01					= "9061"  //后台请求收入日报
	MSG_RET_GAME_PAYDATA_01					= "9062"  //后台返回返回收入日报
	MSG_REQ_GAME_CREATECARDS				= "9063"  //后台请求添加充值卡
	MSG_RET_GAME_CREATECARDS				= "9064"  //后台返回添加充值卡
	MSG_REQ_GAME_CREATECARDS_COPY			= "9065"  //后台加充值卡详情
	MSG_RET_GAME_CREATECARDS_COPY			= "9066"  //后台返回充值卡详情

	MSG_REQ_GAME_CR							= "9067"  //后台加充值卡详情 推广
	MSG_RET_GAME_CR							= "9068"  //后台返回充值卡详情 推广
	MSG_REQ_GAME_PAY						= "9069"  //后台加充值卡详情 推广
	MSG_RET_GAME_PAY						= "9070"  //后台返回充值卡详情 推广


	LY_RET_BACK_ALLIPORT			=		"8777"	//后台向大厅请求所有已链接逻辑服ip和端口
	LC_RET_BACK_ALLIPORT			=		"8778"	//大厅向后台返回所有已链接逻辑服ip和端口

	LC_RET_BACK_SENDIPORT			=		"8779"	//大厅向后台推送后续已链接逻辑服ip和端口


	MSG_REQ_GAME_USER_PSZ					= "9071"  //后台请求拼三张服务器信息
	MSG_RET_GAME_USER_PSZ					= "9072"  //后台给客户端请求拼三张服务器信息

	MSG_REQ_GAME_USER_SHU					= "9073"  //后台请求水浒转服务器信息
	MSG_RET_GAME_USER_SHU					= "9074"  //后台给客户端请求水浒转服务器信息


	MSG_REQ_GAME_BOMB					= "9075"  //后台请求核弹使用详情
	MSG_RET_GAME_BOMB					= "9076"  //后台返回客户端核弹使用详情

	MSG_REQ_GAME_USER					= "9077"  //页面请求玩家排行榜
	MSG_RET_GAME_USER					= "9078"  //后台返回玩家排行榜



	B_SET_USER_ROSE_BACK 	="9079"	//后台请求个人玫瑰花数据详情
	B_GET_USER_ROSE_BACK  	="9080"	//返回后台请求个人玫瑰花数据详情


	B_SEA_USER_BOMB_BACK 	="9081"	//后台请求个人核弹花数据详情
	B_GET_USER_BOMB_BACK  	="9082"	//返回后台请求个人核弹花数据详情


	//MSG_REQ_GAME_USER_SLWH					= "9083"  //后台请求森林舞会服务器信息
	//MSG_RET_GAME_USER_SLWH					= "9084"  //后台给客户端请求森林舞会服务器信息

	MSG_REQ_SLWH_INFORM  	= "9083" //后台请求森林舞会服务器信息
	MSG_RET_SLWH_INFORM 	= "9084"  //后台给客户端请求森林舞会服务器信息

	B_SEA_USER_VIP_HTML = "8589" //后台请求查询VIP图表数据
	B_GET_USER_VIP_HTML = "8590" //返回后台VIP图表数据

	B_SEA_SELECT_USER_VIP_HTML = "8591" //后台 根据昵称或者id请求查询VIP 数据
	B_GET_SELECT_USER_VIP_HTML  = "8592" //返回后台查询VIP 数据

	B_SEA_SELECT_USER_GENERAL_HTML = "9085" //后台请求销售总况
	B_GET_SELECT_USER_GENERAL_HTML = "9086" //返回后台销售总况详情

	B_SEA_SELECT_USER_DETAILS_HTML = "9087" //后台请求销售明细
	B_GET_SELECT_USER_DETAILS_HTML = "9088" //返回后台销售明细

	B_SEA_SELECT_USER_PAY_HTML = "9099" //后台请求支付查询
	B_GET_SELECT_USER_PAY_HTML = "9100" //返回后台支付查询

	B_SEA_SELECT_LARGE_PAY_HTML = "9101" //后台请求大区充值查询
	B_GET_SELECT_LARGE_PAY_HTML = "9102" //返回后台大区充值查询

)

//后台返回支付查询数据
type BACK_SEA_PAY_UID_AND_NAME_HTML struct {
	BG string //后台的guid
	UG string //管理员的guid
	UID  int  //用户uid
	NAME string //用户昵称
	ST   int    //1 为充值卡  2 为微信  3 为支付宝
}



//后台返回商城概况的数据
type BACK_SEA_SHOP_UID_AND_NAME_HTML struct {
	CT int
	BG string //后台的guid
	UG string //管理员的guid
	UID  int  //用户uid
	NAME string //用户昵称
	SN  int //开始下标
	NUM int //每页显示的个数
}
//后台返回商城概况的数据
type BACK_SEA_SHOPD_UID_AND_NAME_HTML struct {
	BG string //后台的guid
	UG string //管理员的guid
	UID  int  //用户uid
	NAME string //用户昵称
}


//后台 根据昵称或者id请求查询VIP 数据
type BACK_SEA_VIP_UID_AND_NAME_HTML struct {
	BG string //后台的guid
	UG string //管理员的guid
	UID  int  //用户uid
	NAME string //用户昵称
}

//返回后台查询VIP 数据
type BACK_SET_VIP_UID_AND_NAME_HTML struct {
	UG      string //管理员的guid
	Viplist []VipStruct
	Err     int     //错误标识（-1正常，15失败)
}


//后台请求VIP 图表数据详情
type BACK_SEA_VIP_PROPS_HTML struct {
	BG string //后台的guid
	UG string //管理员的guid
}

//后台请求VIP 图表数据详情
type BACK_SET_VIP_PROPS_HTML struct {
	UG  string  //管理员的guid
	VF  [10]int //vip分布数据
	VH  [2]int  //VIP活跃度
	ERR int     //-1 成功
}










//后台请求玩家金币排行列表
type Back_SEA_User_back struct {
	BG     string //后台的guid
	UG      string  //管理员的guid
	//UID    []string   //用户sid和用户名
	ST    int    //查询排行榜 标识 （1 个人金币排行榜 2 元宝排行榜 3玫瑰排行榜 4 核弹排行榜 5  充值排行榜 6 游戏内赢取排行榜 7  在线时间排行榜 ）
	SID    int    //大区id
	SN     int    //开始下标
	NUM    int    //每页显示的个数
}
//sharemem返回h后台金币列表
type Sha_RSE_User_back struct {
	CT     int   //总长
	UMG       []UserMsg  //用户信息
	Errcode  int   //错误标识（-1查询成功，15没有此用户)
}






//后台请求核弹查询
type BACK_SEA_SELECT_BOMB_USER struct {
	UG string //管理员的guid
	St int    //1 为核弹查询 2 为玫瑰花查询
}



//服务返回核弹查询信息  核弹  nuclear  玫瑰 persrntorse
type BACK_DET_SELECT_BOMB_USER struct {
	BbCt int    //核弹已兑换数量
	BbGv int    //核弹赠送数量
	BbUe int    //核弹使用总数
	BbUT int    //核弹总剩余数量
	ERR   int   //
}












//后台向大厅请求逻辑服端口和ip
type BACK_REQ_LOGICPORT struct {
	LG string //后台guid
}
//大厅向后台服务器发送逻辑服端口和IP
type LOBBY_RET_LOGICPORT struct {
	LogicList []LogicIport //所有已链接逻辑服ip和端口
	Err int //错误标识
}
type LogicIport struct {
	Ip   string //逻辑服ip
	Port string //逻辑服端口
	Ctype int    //逻辑服ctype
}




//大厅返回新链接服务器IP  和端口
type LOBBY_BET_LOGICIPORT struct {
	Ip   string //逻辑服ip
	Port string //逻辑服端口
	Ctype int //逻辑服Ctype
}



//后台请求查询服务器数据
type Back_Req_Find_Union_User struct {
	UG 	string	//用户的guid
}




//后台返回请求查询服务器数据
type Back_Ret_Find_Union_User struct {
	Err   int
	AP    []BACK_RET_USER_GAME_INFORM  //按时间查询   如果是天的话就是每个小时  如果是月的话就是天  市州的话也是天
}

type BACK_RET_USER_GAME_INFORM struct {
	Win int//赢的值
	Los int//输的值
	Tm string//时间戳
}







//后台请求查询工会日志信息
type Back_Req_Find_Union_user struct {
	BG 	string	//后台的guid
	UG 	string	//用户的guid
	ST 	string	//开始时间戳
	ET 	string	//结束时间戳
	NM 	string	//工会名称
	SID 	int	//大区id
	SN 	int	//开始下标
	NUM 	int	//每页显示的个数
}


//后台请求大区汇总信息
type Back_Req_Collect_User struct {
	BG 	string	//后台的guid
	UG	string 	//用户的guid
	SID 	int	//大区id
	ST 	string	//开始时间戳
	ET 	string	//结束时间戳
}



//后台请求发送邮件
type Back_Req_Send_Mail_user struct {
	BG 	string 	//后台的guid
	UG 	string 	//用户的guid
	SID 	int	//大区id
	NN 	string	//收件人昵称
	TT 	string	//邮件标题
	MS 	string	//邮件文字内容
	PA 	[]string  //1 为 所有人  2 vip1   3 vip2  4 vip3  5 vip4  6 vip5  6 vip5  7 vip6  8 vip7  9 vip8  10 vip9  10 vip11
	SA  string	//用户名
	BTime string //开始时间
	CTime string //结束时间
	UL    []string  //玩家VIP 等级发送
}


//后台发送游戏内活动
type BACK_SEA_GAMEINNOTICE_back struct {
	BG      string //后台的guid
	UG      string //管理员的guid
	SID     int    //大区ID
	BTime   string //开始时间
	CTime   string //结束时间
	Title   string //标题
	Word    string //内容
	Way     string //渠道
	Activty string //活动类型
	PA 	[]string  //附件
}



//后台修改游戏内活动
type BACK_SEA_AMENDSEAGAMEINNOTICE_back  struct {
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
	PA 	[]string  //附件
}





//客户端请求拼三张服务器数据结构
type BACK_SEA_BACK_PSZ_GAME  struct {
	UG    string //管理员的guid
	RM    int  //请求拼三张房间号
}



//返回客户端请求服务器数据
type BACK_GEA_BACK_PSZ_GAME  struct {
	Err    int //处理成功与否
	RM    []BACKGROUNDDATA_NN  //返回客户端数据
}



//返回客户端请求服务器数据
type BACK_GEA_BACK_slwh_GAME  struct {
	Err    int //处理成功与否
	RM    []BACKGROUNDROOMDETAILDATA  //返回客户端数据
}
