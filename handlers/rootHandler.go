package handlers

import (
	"github.com/abdoumh0/goth-app/views/root"
	"github.com/labstack/echo/v4"
)

func RootHandler(c echo.Context) error {
	return render(c, root.Index())
}