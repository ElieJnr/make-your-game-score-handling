package datamod

import (
	"encoding/json"
	"fmt"
	"os"
	"scorehandling/backend/models"
)

func WriteData(player models.Player) {
	jsonData, err := json.MarshalIndent(player, "", "    ")
	if err != nil {
		fmt.Println("Error marshaling JSON:", err)
		return
	}

	file, err := os.OpenFile("../data/score.json", os.O_WRONLY|os.O_CREATE, 0644)
	if err != nil {
		fmt.Println("Error opening file:", err)
		return
	}
	defer file.Close()

	_, err = file.Write(jsonData)
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
