package handlers

import (
	"github.com/abdoumh0/goth-app/views"
	"github.com/labstack/echo/v4"
)

func (s *Service) DeleteHandler(c echo.Context) error{
	id := c.FormValue("id")
	
	print(id)
	print("ss")

	return render(c, views.PostResponse(id, "name", "surname", "class", false))	
}