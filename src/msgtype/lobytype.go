package msgtype

const (
	LY_RET_BACK_ONLINEUSERS = "8780" //后台向大厅请求玩家在线人数
	LC_RET_BACK_ONLINEUSERS = "8781" //大厅向后台返回玩家在线人数

	LY_RET_BACK_PLAYERLIST = "8782" //后台向大厅请求玩家列表
	LC_RET_BACK_PLAYERLIST = "8783" //大厅向后台返回玩家列表


)





//后台向大厅请求各个逻辑服的人数
type BACK_REQ_ONLINEUSERS struct {
	LG string //后台guid
	UG string //后台UG
}

//大厅向后台服务器发送各个逻辑服的人数
type LOBBY_RET_ONLINEUSERS struct {
	LOnlines []LogicOnlines
	UG       string //后台UG
	Err      int    //错误标识
}
type LogicOnlines struct {
	Ctype int //逻辑服ctype
	Count int //逻辑服的人数
}




//后台向大厅请求逻辑服的成员列表信息
type BACK_REQ_PLAYERLIST struct {
	LG  string //后台guid
	UG  string //后台UG
	CT  int    // 逻辑服ctype
	NP  int    //查询第几页
	NUM int    //每页多少个
}

//大厅向后台服务器发送玩家信息
type LOBBY_RET_PLAYERLIST struct {
	UPL []UserPlayList
	UG  string //后台UG
	Err int    //错误标识
}
type UserPlayList struct {
	Gold          int64  //金币
	Dia           int    //钻石
	Username      string //用户账号
	Nickname      string //用户昵称
	PhoneNum      string //用户绑定手机号
	Sid           int    //客户端显示id
	Heading       int    //用户头像
	Signature     string //用户个性签名
	Register_time string //用户注册时间
	Logintime     string //用户上次登陆时间
	LoginUnix     int64  //登陆时间戳
}
