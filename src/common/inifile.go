package common

import (
	"github.com/larspensjo/config"
	"flag"
	"fmt"
)
var configfile = flag.String("loginconfig","loginconfig.ini","Config Connect to Login Server")

func OpenLoginConfig() bool{
	flag.Parse()
	//set config file std
	fmt.Println("OpenLoginConfig -------------------------")
	cfg,err := config.ReadDefault(*configfile)
	if err != nil{
		fmt.Print("Read lobby config file failed")
		return false
	}
	if cfg.HasSection("loginserver"){
		section, err := cfg.SectionOptions("loginserver")
		if err == nil{
			for _, v := range section{
				options,err := cfg.String("loginserver",v)
				if err == nil{
					fmt.Println("v = ",v)
					fmt.Println("TOPIC[v] = ",options)
					switch v {
					case "addr":
						GHOST_DB_IP = options
						break
					case "port":
						GHOST_DB_PORT = options
						break
					case "myport":
						GHOST_Login_PORT = options
						break
					case "guid":
						GHOST_Login_GUID = options
						break
					case "ctype":
						GHOST_Login_Ctype = options
						break
					case "num":
						GHOST_VN = options
						break
					case "UG":
						GHOST_UG = options
						break
					}

				}
			}
			fmt.Println("GHOST_UG = ",GHOST_UG)
			//fmt.Println("GHOST_DB_IP = ",GHOST_DB_IP)
			//fmt.Println("GHOST_DB_PORT = ",GHOST_DB_PORT)
			//fmt.Println("GHOST_Login_PORT = ",GHOST_Login_PORT)
			//fmt.Println("GHOST_Login_GUID = ",GHOST_Login_GUID)
			//fmt.Println("GHOST_Login_Ctype = ",GHOST_Login_Ctype)
			//fmt.Println("GHOST_VN = ",GHOST_VN)
			//拼接连接字符串
			GHOST_Login_LinkString = "ws://"+GHOST_DB_IP+":"+GHOST_DB_PORT+"/ws/join?"+"stype="+GHOST_Login_Ctype+"&lport="+GHOST_Login_PORT+"&guid="+GHOST_Login_GUID
			fmt.Println("GHOST_Login_LinkString = ",GHOST_Login_LinkString)
			return true
		}
	}
	fmt.Println("OpenLoginConfig=========================")
	return false
}



func OpengameConfig() bool{
	flag.Parse()
	//set config file std
	fmt.Println("OpenLoginConfig -------------------------")
	cfg,err := config.ReadDefault(*configfile)
	if err != nil{
		fmt.Print("Read lobby config file failed")
		return false
	}
	if cfg.HasSection("gameserver"){
		section, err := cfg.SectionOptions("gameserver")
		if err == nil{
			for _, v := range section{
				options,err := cfg.String("gameserver",v)
				if err == nil{
					fmt.Println("v = ",v)
					fmt.Println("TOPIC[v] = ",options)
					switch v {
					case "gameaddr":
						GAMEGHOST_DB_IP = options
						break
					case "gameport":
						GAMEGHOST_DB_PORT = options
						break
					case "gameguid":
						GAMEGHOST_Login_PORT = options
						break

					}

				}
			}
			//fmt.Println("GHOST_UG = ",GHOST_UG)
			//fmt.Println("GHOST_DB_IP = ",GHOST_DB_IP)
			//fmt.Println("GHOST_DB_PORT = ",GHOST_DB_PORT)
			//fmt.Println("GHOST_Login_PORT = ",GHOST_Login_PORT)
			//fmt.Println("GHOST_Login_GUID = ",GHOST_Login_GUID)
			//fmt.Println("GHOST_Login_Ctype = ",GHOST_Login_Ctype)
			//fmt.Println("GHOST_VN = ",GHOST_VN)
			//拼接连接字符串
			GAMEGHOST_HREF_PORT = "ws://"+GAMEGHOST_DB_IP+":"+GAMEGHOST_DB_PORT+"/ws/join?"+"uname=Shark&room=29&guid="+GAMEGHOST_Login_PORT+"&gd=300&nc=Shark&vip=0&cp=-1&hd=0"
			fmt.Println("GAMEGHOST_HREF_PORT = ",GAMEGHOST_HREF_PORT)
			return true
		}
	}
	//fmt.Println("OpenLoginConfig=========================  192.168.1.122:9160/ws/join?uname=Shark&room=0&guid=Shark&gd=3000000&nc=Shark&vip=0&cp=-1&hd=0")
	return false
}

func OpengameConfig_loby() bool{
	flag.Parse()
	//set config file std
	fmt.Println("OpenLoginConfig -------------------------")
	cfg,err := config.ReadDefault(*configfile)
	if err != nil{
		fmt.Print("Read lobby config file failed")
		return false
	}
	if cfg.HasSection("gameloby"){
		section, err := cfg.SectionOptions("gameloby")
		if err == nil{
			for _, v := range section{
				options,err := cfg.String("gameloby",v)
				if err == nil{
					fmt.Println("v = ",v)
					fmt.Println("TOPIC[v] = ",options)
					switch v {
					case "gameaddrloby":
						GAMEGHOST_DB_IP_LOBY = options
						break
					case "gameportloby":
						GAMEGHOST_DB_PORT_LOBY = options
						break
					case "gameguidloby":
						GAMEGHOST_Login_PORT_LOBY = options
						break

					}

				}
			}
			//fmt.Println("GHOST_UG = ",GHOST_UG)
			//fmt.Println("GHOST_DB_IP = ",GHOST_DB_IP)
			//fmt.Println("GHOST_DB_PORT = ",GHOST_DB_PORT)
			//fmt.Println("GHOST_Login_PORT = ",GHOST_Login_PORT)
			//fmt.Println("GHOST_Login_GUID = ",GHOST_Login_GUID)
			//fmt.Println("GHOST_Login_Ctype = ",GHOST_Login_Ctype)
			//fmt.Println("GHOST_VN = ",GHOST_VN)
			// ws://192.168.1.124:9000/ws/join?stype=2&lport=9020&guid=pokerlobby2018032
			//拼接连接字符串
			GAMEGHOST_HREF_PORT_LOBY = "ws://"+GAMEGHOST_DB_IP_LOBY+":"+GAMEGHOST_DB_PORT_LOBY+"/ws/join?"+"ctype=30&lport=7041&guid="+GHOST_Login_GUID
			fmt.Println("GAMEGHOST_HREF_PORT = ",GAMEGHOST_HREF_PORT_LOBY)
			return true
		}
	}
	//fmt.Println("OpenLoginConfig=========================  192.168.1.122:9160/ws/join?uname=Shark&room=0&guid=Shark&gd=3000000&nc=Shark&vip=0&cp=-1&hd=0")
	return false
}












