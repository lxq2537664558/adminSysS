/**
 * Created by Administrator on 2018/5/24.
 */
var IPconf = "192.168.1.124" ;//IP地址
var prot = "7041";
var title_name = "游戏管理后台";
window.accounttype = 0;
// window.name='测试';





//解析josn数据函数
//处理Josn
function toJson(str){
    var json = (new Function("return " + str))();
    return json;
}


//清除Cookie
function DelCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = GetCookie(name);
    if (cval != null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    };
}
