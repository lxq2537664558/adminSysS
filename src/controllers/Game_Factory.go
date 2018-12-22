package controllers

import (
	"msgtype"
	"strconv"
)

var  INFORM []msgtype.BACKGROUNDDATA


//德州数据
var  DEZHOU []msgtype.BACKGROUNDDATA_DZ
//黑红梅方
var  HHMFLIST []msgtype.BACKGROUNDDATA_DZ
//牛牛数组
var  HLDNLIST []msgtype.BACKGROUNDDATA_NN

//拼三张数组
var  PSZINFORM []msgtype.BACKGROUNDDATA_NN
var PSZNUMBER  int
//拼三张数组
var  SHZINFORM []msgtype.BACKGROUNDDATA_NN
var SHZNUMBER  int

//森林舞会数组
var  SLWHINFORM []BACKGROUNDRECORD_R_COPY
var SLWHUMBER  int
var  SLWHROOMCOUNT int  //森林舞会 房间数

type BACKGROUNDRECORD_R_COPY struct{
	Err int
	Room int//私有GUID
	Rec []msgtype.BACKGROUNDDATA
}





//处理拼三张返回客户端数据函数
func Faction_PSZ_INFORM(room int) []msgtype.BACKGROUNDDATA_NN {

	var pszinform_copt []msgtype.BACKGROUNDDATA_NN
	var psz msgtype.BACKGROUNDDATA_NN
	for i := 0; i < len(PSZINFORM); i++ {
		if PSZINFORM[i].Room == room {
			psz.Room = PSZINFORM[i].Room
			psz.Win = PSZINFORM[i].Win
			psz.Los = PSZINFORM[i].Los
			psz.Tm = PSZINFORM[i].Tm
			psz.Tp = PSZINFORM[i].Tp
			psz.Px = PSZINFORM[i].Px
			pszinform_copt = append(pszinform_copt, psz)
		}
	}
	return pszinform_copt
}


//处理拼三张返回客户端数据函数
func Faction_SLWH_INFORM(room int) []msgtype.BACKGROUNDROOMDETAILDATA {
	var pszinform_copt []msgtype.BACKGROUNDROOMDETAILDATA
	var psz msgtype.BACKGROUNDROOMDETAILDATA
	for i := 0; i < len(SLWHINFORM); i++ {
		if SLWHINFORM[i].Room == room {
			for j:= 0 ;j <len(SLWHINFORM[i].Rec) ;j++  {
				mag01 := strconv.FormatInt(SLWHINFORM[i].Rec[j].Los,10)
				mun02,_ := strconv.Atoi(mag01)

				mag02 := strconv.FormatInt(SLWHINFORM[i].Rec[j].Win,10)
				num01,_ := strconv.Atoi(mag02)

				psz.Rm = SLWHINFORM[i].Room
				psz.Um = mun02
				psz.Wg = SLWHINFORM[i].Rec[j].Trm
				psz.Lg = num01
				//psz.Tp = SLWHINFORM[i].Tp
				//psz.Px = SLWHINFORM[i].Px
				pszinform_copt = append(pszinform_copt, psz)
			}

		}
	}
	return pszinform_copt
}

//处理拼三张返回客户端数据函数
func Faction_PSZ_INFORM_USER(room int) []msgtype.BACKGROUNDDATA_NN {
	var pszinform_copt []msgtype.BACKGROUNDDATA_NN
	var psz msgtype.BACKGROUNDDATA_NN
	for i := 0; i < len(PSZINFORM); i++ {
		if PSZINFORM[i].Room == room {
			psz.Room = PSZINFORM[i].Room
			psz.Win = PSZINFORM[i].Win
			psz.Los = PSZINFORM[i].Los
			psz.Tm = PSZINFORM[i].Tm
			psz.Tp = PSZINFORM[i].Tp
			psz.Px = PSZINFORM[i].Px
			pszinform_copt = append(pszinform_copt, psz)
		}
	}
	return pszinform_copt
}


