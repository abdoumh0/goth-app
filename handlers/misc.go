package handlers

import (
	"time"

	"github.com/abdoumh0/goth-app/views"
	"github.com/labstack/echo/v4"
)

func AddForm(c echo.Context) error {
	time.Sleep(time.Second)
	return render(c, views.AddForm())
}