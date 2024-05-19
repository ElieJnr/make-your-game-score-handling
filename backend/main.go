package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"scorehandling/backend/models"

	"github.com/gorilla/websocket"
)

// var routes = []string{"game", "wsEndpoint"}

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

func reader(w http.ResponseWriter, conn *websocket.Conn) {
	defer conn.Close()

	for {
		messageType, message, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}
		log.Println(string(message))

		if messageType == websocket.TextMessage {
			saveScore(w, message)
		}
	}
}

// Gerer les requests post font enregistrement sur le fichier json pas encore implemente
func postScore(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "application/javascript")
	var score models.Player
	err := json.NewDecoder(r.Body).Decode(&score)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
	}
	// TODO: fonction qui save dans un fichier
	json.NewEncoder(w).Encode(score)
}

func saveScore(w http.ResponseWriter, message []byte) {
	w.Header().Set("content-type", "application/javascript")
	var score models.Player
	err := json.Unmarshal(message, &score)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	// TODO: fonctin qui le l'ecris dans le fichier
}



func wsEndpoint(w http.ResponseWriter, r *http.Request) {
	upgrader.CheckOrigin = func(r *http.Request) bool { return true }
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}
	log.Println("Client successfully connected")
	reader(w, ws)
}

func renderTemplate(file string, w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, file)
}

func launchGame(w http.ResponseWriter, r *http.Request) {
	renderTemplate("../frontend/index.html", w, r)
}

var clients []websocket.Conn

func main() {
	for _, service := range models.FileServices {
		fs := http.FileServer(http.Dir("../frontend/" + service))
		http.Handle("/"+service+"/", http.StripPrefix("/"+service+"/", fs))
	}

	http.HandleFunc("/", launchGame)
	http.HandleFunc("/get", wsEndpoint)
	fmt.Printf("Starting server at port 8080\n")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}

}
