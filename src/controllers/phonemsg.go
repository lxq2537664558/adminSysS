package controllers

import (
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
)

/**
 * account: 短信平台账号
 * pswd: 短信平台密码
 */
const ur = "http://sapi.253.com/msg/HttpBatchSendSM"
const account = "xandzy"   // 这里填写短信平台账号
const pswd = "_xa1825ndzy" // 这里填写短信平台密码

const smUrl = ur + "?account=" + account + "&pswd=" + pswd + "&mobile=%s&msg=%s"

/**
 * 发送验证码
 */
func SendMsgToMobile(mobile string, content string) bool {
	strUrl := fmt.Sprintf(smUrl, mobile, content)
	return RemoteCall(strUrl) != nil
}

/**
 * HTTP通信
 */
func RemoteCall(strUrl string) []byte {
	r, err := http.NewRequest("GET", strUrl, nil)
	if err != nil {
		fmt.Println("http.NewRequest: ", err.Error())
		return nil
	}

	// r.Proto = "HTTP/1.0"
	// r.ProtoMajor = 1
	// r.ProtoMinor = 0
	fmt.Println(r.Proto)

	resp, err := http.DefaultClient.Do(r)
	if err != nil {
		fmt.Println("http.DefaultClient.Do: ", err.Error())
		return nil
	}

	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		fmt.Println("resp.StatusCode!=http.StatusOK: ", resp.StatusCode)
		return nil
	}

	data, err := ioutil.ReadAll(resp.Body)
	if err != nil && err != io.EOF {
		fmt.Println("ioutil.ReadAll: ", err.Error())
		return nil
	}

	fmt.Println(string(data))
	return data
}

//短信验证
func Request3(mobile,number string) bool {
	var result = SendMsgToMobile(mobile, "【捉鬼者联盟】" +number+"(用户注册验证码)，请勿向任何人泄露。")
	//fmt.Println("----------------", result)
	return result
}
