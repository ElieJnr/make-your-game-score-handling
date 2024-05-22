package datamod

import (
	"encoding/json"
	"fmt"
	"os"
	"scorehandling/backend/models"
)

// TODO: WriteData doit update les données du fichier score.json et ne pas les écraser
func WriteData(player models.Player) {
	filePath := models.DataFile
	data, err := GetAllDataFromJSON(filePath)
	if err != nil {
		fmt.Println("Error getting data from JSON:", err)
		return
	}

	data = append(data, player)

	file, err := os.OpenFile(filePath, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, 0644)
	if err != nil {
		fmt.Println("Error opening file:", err)
		return
	}
	defer file.Close()

	playerData, err := json.Marshal(data)
	if err != nil {
		fmt.Println("Error marshaling data:", err)
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
		if os.IsNotExist(err) {
			return []interface{}{}, nil
		}
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
		fmt.Println("test00")
		return nil, err
	}

	var data []interface{}
	err = json.Unmarshal(buffer, &data)
	if err != nil && len(data) != 0 {
		return nil, err
	}

	return data, nil
}
