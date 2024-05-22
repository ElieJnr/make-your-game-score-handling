package datamod

import (
	"encoding/json"
	"fmt"
	"os"
	"scorehandling/backend/models"
)
//TODO: WriteData doit update les données du fichier score.json et ne pas les écraser
func WriteData(player models.Player) {
	file, err := os.OpenFile("./data/score.json", os.O_WRONLY|os.O_CREATE, 0644)
	if err != nil {
		fmt.Println("Error opening file:", err)
		return
	}
	defer file.Close()
	//on transforme la structure player en json pour l'écrire dans le fichier score.json
	playerData, err := json.Marshal(player)
	if err != nil {
		return 
	}
	_, err = file.Write(playerData)
	if err != nil {
		fmt.Println("Error writing JSON:", err)
		return
	}

}

func GetAllDataFromJSON(filePath string) ([]interface{}, error) {
	file, err := os.Open(filePath)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	fileInfo, err := file.Stat()
	if err != nil {
		return nil, err
	}
	fileSize := fileInfo.Size()
	buffer := make([]byte, fileSize)
	_, err = file.Read(buffer)
	if err != nil {
		return nil, err
	}

	var data []interface{}
	err = json.Unmarshal(buffer, &data)
	if err != nil {
		return nil, err
	}

	return data, nil
}
