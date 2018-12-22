package mescontroller

import (
	"encoding/json"
	"fmt"
)

func Testjson() {
	m := Message{"测试", "测试序列化", false}
	b, _ := json.Marshal(m) //将json对象序列化为byte[]
	var ki Message
	json.Unmarshal(b, &ki) //将序列化的byte[]重写反序列化为对象。
	fmt.Println(b)         //打印序列化的byte[]
	fmt.Println(ki)        //打印对象的信息
	fmt.Println(ki.Name)   //打印具体的信息
}

type Message struct {
	Name  string
	Body  string
	State bool
}
