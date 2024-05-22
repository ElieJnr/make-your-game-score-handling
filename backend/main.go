package main

import (
	"fmt"
	"log"
	"net/http"
	"scorehandling/backend/datamod"
	"scorehandling/backend/models"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

func reader(conn *websocket.Conn) {
	defer conn.Close()

	for {
		var player models.Player
		//on transforme le message en json directement dans la structure player
		err := conn.ReadJSON(&player)
		if err != nil {
			log.Println(err)
			return
		}
		datamod.WriteData(player)
	}
}

func wsEndpoint(w http.ResponseWriter, r *http.Request) {
	upgrader.CheckOrigin = func(r *http.Request) bool { return true }
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}
	log.Println("Client successfully connected")
	reader(ws)
}

func renderTemplate(file string, w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, file)
}

func launchGame(w http.ResponseWriter, r *http.Request) {
	renderTemplate("../frontend/index.html", w, r)
}

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
