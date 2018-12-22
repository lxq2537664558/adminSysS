package routers

import (
	"Beego/controllers"
	//"fmt"
	"github.com/astaxie/beego"
	"github.com/beego/i18n"
)

const (
	APP_VER = "0.1"
)

func init() {
	// beego.Info(beego.BConfig.AppName, APP_VER)
	// // Register routers.
	// beego.Router("/", &controllers.AppController{})
	// // Indicate AppController.Join method to handle POST requests.
	// beego.Router("/join", &controllers.AppController{}, "post:Join")

	// // // // Long polling.
	// // beego.Router("/lp", &controllers.LongPollingController{}, "get:Join")
	// // beego.Router("/lp/post", &controllers.LongPollingController{})
	// // beego.Router("/lp/fetch", &controllers.LongPollingController{}, "get:Fetch")

	// // WebSocket.
	// beego.Router("/ws", &controllers.WebSocketController{})
	// beego.Router("/ws/join", &controllers.WebSocketController{}, "get:Join")

	// // Register template functions.
	// beego.AddFuncMap("i18n", i18n.Tr)
}
