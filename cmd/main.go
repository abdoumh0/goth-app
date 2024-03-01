package main

import (
	"log"
	"os"

	"github.com/abdoumh0/goth-app/handlers"
	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
)

func main() {
	if err := godotenv.Load(); err!= nil {
		log.Fatal("Error loading .env")
	}

	e := echo.New()

	e.GET("/", handlers.RootHandler)

	e.Start(":" + os.Getenv("PORT"))
}