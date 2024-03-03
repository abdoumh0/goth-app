package main

import (
	"context"
	"log"
	"os"

	"github.com/abdoumh0/goth-app/handlers"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
)

func main() {
	if err := godotenv.Load(); err!= nil {
		log.Fatal("Error loading .env")
	}

	e := echo.New()

	dbpool, err := pgxpool.New(context.Background(), os.Getenv("DATABASE_URL"))
	if err != nil {
		log.Fatal(os.Stderr, "Unable to connect to database: %v\n", err)
	}
	defer dbpool.Close()

	e.Use()

	s := handlers.NewService(dbpool)

	e.GET("/", s.RootHandler)

	e.Static("/", "assets")
	e.Start(":" + os.Getenv("PORT"))
}