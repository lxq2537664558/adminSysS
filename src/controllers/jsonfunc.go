package controllers
import (
	"strings"
)

//从json获取json
func MyGetDataJson(data string, s string) string {
	index := strings.Index(s, data)
	if index == -1 {
		return ""
	}
	slen := len(s)
	res := "{"
	jsonerr := true
	for i := index; i < slen-2; i++ {
		if s[i] == '{' {
			index = i
			jsonerr = false
			break
		}
	}
	if jsonerr {
		return ""
	}
	leftindex := 1
	for i := index + 1; i < slen-1; i++ {
		if s[i] == '}' {
			leftindex--
		} else if s[i] == '{' {
			leftindex++
		}
		res += string(s[i])
		if leftindex == 0 {
			return res
		}
	}
	return ""
}
