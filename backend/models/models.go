package models

type Player struct {
	Name  string `json:"name"`
	Time  int    `json:"time"`
	Score string `json:"score"`
}

var FileServices = []string{"Script", "Web", "assets"}
