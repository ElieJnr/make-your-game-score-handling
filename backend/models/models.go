package models

type Player struct {
	Name  string `json:"name"`
	Time  string `json:"time"`
	Score int    `json:"score"`
}
type Response struct {
	Message []interface{} `json:"message"`
}

var FileServices = []string{"Script", "Web", "assets"}

var DataFile = "../data/score.json"
