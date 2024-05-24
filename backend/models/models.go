package models

type Player struct {
	Name  string `json:"name"`
	Time  int `json:"time"`
	Score int    `json:"score"`
}
type Response struct {
	Message []interface{} `json:"message"`
}

var FileServices = []string{"Script", "Web", "assets"}

var DataFile = "./backend/datamod/score.json"
