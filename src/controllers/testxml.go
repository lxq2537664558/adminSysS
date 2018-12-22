package controllers



import (
	"encoding/xml"
	"fmt"
	"io/ioutil"
	"os"
)




type StringResources struct {
	XMLName        xml.Name         `xml:"resources"`
	ResourceString []ResourceString `xml:"string"`
}

type ResourceString struct {
	XMLName    xml.Name `xml:"string"`
	StringName string   `xml:"name,attr"`
	InnerText  string   `xml:",innerxml"`
}





type Servers struct {
	XMLName xml.Name `xml:"servers"`
	Version string   `xml:"version,attr"`
	Svs     []server `xml:"server"`
}

type server struct {
	ServerName string `xml:"serverName"`
	ServerIP   string `xml:"serverIP"`
}



// 为了少敲几个字符，声明了attrmap类型和start函数
type attrmap map[string]string  // 属性的键值对容器

// start()用来构建开始节点
func start(tag string, attrs attrmap) xml.StartElement {
	var a []xml.Attr
	for k, v := range attrs {
		a = append(a, xml.Attr{xml.Name{"", k}, v})
	}
	return xml.StartElement{xml.Name{"", tag}, a}
}


func Test_xml_001 (){





	//// 创建编码器
	//buffer := new(bytes.Buffer)
	//enc := xml.NewEncoder(buffer)
	//
	//// 设置缩进，这里为4个空格
	//enc.Indent("", "    ")
	//
	//// 开始生成XML
	//startExtension := start("extension", attrmap{"name": "rtp_multicast_page"})
	//enc.EncodeToken(startExtension)
	//startCondition := start("condition", attrmap{"field": "destination_number",
	//	"expression": "^pagegroup$|^7243$"})
	//enc.EncodeToken(startCondition)
	//startAction := start("action", attrmap{"application": "answer"})
	//enc.EncodeToken(startAction)
	//enc.EncodeToken(xml.CharData("raw text"))
	//enc.EncodeToken(startAction.End())
	//startAction = start("action", attrmap{"application": "esf_page_group"})
	//enc.EncodeToken(startAction)
	//enc.EncodeToken(startAction.End())
	//enc.EncodeToken(startCondition.End())
	//enc.EncodeToken(startExtension.End())
	//
	//// 写入XML
	//enc.Flush()
	//
	//// 打印结果
	//fmt.Println(buffer)













	//content, err := ioutil.ReadFile("studygolang.xml")
	//if err != nil {
	//	log.Fatal(err)
	//}
	//var result StringResources
	//err = xml.Unmarshal(content, &result)
	//if err != nil {
	//	log.Fatal(err)
	//}
	//log.Println(result)
	//log.Println(result.ResourceString)
	//for _, o := range result.ResourceString {
	//	log.Println(o.StringName + "===" + o.InnerText)
	//}



	//v := &Servers{Version: "1"}
	//v.Svs = append(v.Svs, server{"Shanghai_VPN", "127.0.0.1"})
	//v.Svs = append(v.Svs, server{"Beijing_VPN", "127.0.0.2"})
	//output, err := xml.MarshalIndent(v, "  ", "    ")
	//if err != nil {
	//	fmt.Printf("error: %v\n", err)
	//}
	// os.Stdout.Write([]byte(xml.Header))
	//
	// os.Stdout.Write(output)
	////将字节流转换成string输出
	//fmt.Println("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"+string(output))



	//
	//content, err := ioutil.ReadFile("studygolang.xml")
	//if err != nil {
	//	log.Fatal(err)
	//}
	//var result StringResources
	//err = xml.Unmarshal(content, &result)
	//if err != nil {
	//	log.Fatal(err)
	//}
	//log.Println(result)
	//log.Println(result.ResourceString)
	//for i, line := range result.ResourceString {
	//	log.Println(line.StringName + "===" + line.InnerText)
	//
	//	//修改ApplicationName节点的内部文本innerText
	//	if strings.EqualFold(line.StringName, "ApplicationName") {
	//		fmt.Println("change innerText")
	//
	//		//注意修改的不是line对象，而是直接使用result中的真实对象
	//		result.ResourceString[i].InnerText = "这是新的ApplicationName"
	//	}
	//}

	//result.ResourceString[len(result.ResourceString)].InnerText = "这是新添加的数据1"


	//生成xml文件
	var result StringResources
	var msg ResourceString
	msg.InnerText = "这是新添加的数据5"
	msg.StringName = "ApplicationName"
	result.ResourceString = append(result.ResourceString,msg)

	msg.InnerText = "这是新添加的数据62"
	msg.StringName = "ApplicationName"
	result.ResourceString = append(result.ResourceString,msg)
	msg.InnerText = "这是新添加的数据53"
	msg.StringName = "ApplicationName"
	result.ResourceString = append(result.ResourceString,msg)
	msg.InnerText = "这是新添加的数据44"
	msg.StringName = "ApplicationName"
	result.ResourceString = append(result.ResourceString,msg)
	msg.InnerText = "这是新添加的数据25"
	msg.StringName = "ApplicationName"
	result.ResourceString = append(result.ResourceString,msg)
	msg.InnerText = "这是新添加的数据46"
	msg.StringName = "ApplicationName"
	result.ResourceString = append(result.ResourceString,msg)


	//保存修改后的内容
	xmlOutPut, outPutErr := xml.MarshalIndent(result, "", "")
	if outPutErr == nil {
		//加入XML头
		headerBytes := []byte(xml.Header)
		//拼接XML头和实际XML内容
		xmlOutPutData := append(headerBytes, xmlOutPut...)
		//写入文件
		ioutil.WriteFile("studygolang.xml", xmlOutPutData, os.ModeAppend)

		fmt.Println("OK~")
	} else {
		fmt.Println(outPutErr)
	}
}
