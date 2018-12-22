


function Game_User_onil  () {

alert(213)



    u14



}



 function showhide() {
     //绑定a链接的点击事件
     //点击a链接的时候将id写进cookie
     var arrSubNav = document.getElementsByClassName('subNav');
     for (var i = 0; i < arrSubNav.length; i++) {
         var arrHref = arrSubNav[i].getElementsByTagName('a');
         for (var j = 0; j < arrHref.length; j++) {
             arrHref[j].onclick = function () {
                 var nodeParent = this.parentNode; //获取a链接所在的那个div块儿的id,注意,此处用this
                 var idParent = nodeParent.getAttribute('id');
                 document.cookie = "userCheck=" + idParent + ";domain=***.***.com;path=/***"; //用cookie记录下用户当前的选择
             }
         }
     }

     //从cookie里取值,展开指定div
     userCheck = getUserCheckInfo();
     if (userCheck > 0) {
         for (var i = 0; i < arrSubNav.length; i++) {
             arrSubNav[i].style.display = 'none';
         }
         document.getElementById(userCheck).style.display = 'block';
     } else {
         document.getElementById('3').style.display = 'block';
     }

     //点击标题时展开其下的菜单
     var arrTitle = document.getElementsByClassName('titleH3');
     for (var i = 0; i < arrTitle.length; i++) {
         arrTitle[i].onclick = function () {
             var idTitle = this.getAttribute('id');
             var idSubNav = idTitle % 100; //根据title的id获取子菜单div的id

             for (var i = 0; i < arrSubNav.length; i++) {
                 arrSubNav[i].style.display = 'none';
             }
             document.getElementById(idSubNav).style.display = 'block';

         }
     }
 }

 function getUserCheckInfo() {
     var strCookie = document.cookie;
     //将多cookie切割为多个名/值对
     var arrCookie = strCookie.split("; ");
     var userCheck = '0';
     //遍历cookie数组，处理每个cookie对
     for (var i = 0; i < arrCookie.length; i++) {
         var arr = arrCookie[i].split("=");
         if ("userCheck" == arr[0]) {
             userCheck = arr[1];
             break;
         }
     }
     return userCheck;
 }
