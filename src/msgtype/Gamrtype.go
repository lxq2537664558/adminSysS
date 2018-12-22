package msgtype


const (
	MSG_GAME_CLIENT           		 	= "9500"  //客户端发送修改档位包头
	MSG_RET_GAME_CLIENT      	 		= "9501"  //逻辑服返回给客户端修改档位的处理结果
	MSG_GAME_INFORME_USER          		= "9502"  //客户端发送请求数据包头
	MSG_RET_GAME_INFORME_USER        	= "9503"  //逻辑服返回给客户端数据结果
)


//百家乐              9110
//牌机              9540
//百人牛牛              9130
//百人轮盘              9140
//百人铃铛(水果机)         9150
//金鲨银鲨          9160
//豪车竞技          9170
//森林舞会          9180
//骰宝               9190
//黑红梅方                  9200
//水浒                      9210
//旺宝                      9220
//德州 9230
//捕鱼                      9300




//后台获取房间数量
type BACKGROUNDROOMCOUNT_S struct{
	Guid string
}
//后台返回房间数量
type BACKGROUNDROOMCOUNT_R struct{
	Rct int //房间数量
}

//得到房间的详细数据
type BACKGROUNDROOMDEATIL_S struct{
	Rmin int//最小房间号
	Rmax int//最大房间号
	Guid string
}
//得到房间的详细数据
type BACKGROUNDROOMDEATIL_R struct{
	Err int
	Da []BACKGROUNDROOMDETAILDATA
}

//房间详细数据基础结构
type BACKGROUNDROOMDETAILDATA struct{
	Cl   int//场次级别 （）
	Rm   int//机台号码
	Um   int//用户数量
	Wg   int//进币数量
	Lg   int//出币数量
}





//返回后台修改概率的数据结构
type BACKGROUDRATEREBACK_S struct{
	Err int
	Mgd string//私有GUID
}

//后台全局记录
type BACKGROUNDGLOBALRECORD_S struct{
	Guid string
	Mgd string//私有GUID
	Room int //所在房间号
	Trm  int//目标房间号
}
//返回后台全局记录
type BACKGROUNDGLOBALRECORD_R struct{
	Err int
	Rec []ROOMROUNDCARD_RECORD
	Sr  []ROOMROUNDCARD_RECORD//小游戏的记录
}

//房间后台数据结构
type BACKGROUNDDATA struct{
	Room int//房间号
	Trm  int//目标房间号
	Win int64//赢的值
	Los int64//输的值
	Tm string//时间戳
}
//后台请求数据的数据结构
type BACKGROUNDRECORD_S struct{
	Guid string
	Mgd string//私有GUID
	Room int
	Trm  int//目标房间号
	Mi   int//索引起始值
	Mx   int//索引结束值
}

//返回后台请求数据的数据结构 1831  1847  1903  1919
type BACKGROUNDRECORD_R struct{
	Err int
	Mgd string//私有GUID
	Rec []BACKGROUNDDATA
}

//返回房间数据请求总量
type BACKGROUNDRECORDCOUNT_R struct{
	Err int
	Ct int
	Mgd string//私有GUID
}

type BACKGROUNDMODIFYRATE_S struct{
	Room int
	Mm  int//修改的房间号
	Guid string
	Mgd string//私有GUID
	Rt  int//概率值
}
//后台请求记录长度的数据结构
type BACKGROUNDROOMDATALENGTH_R struct{
	Room int
	Trm  int//目标房间号
	Guid string
	Mgd string//私有GUID
}



