package handlers

import (
	"strconv"

	"github.com/abdoumh0/goth-app/views"
	"github.com/labstack/echo/v4"
)

func (s *Service) RestoreHandler(c echo.Context) error{
	id := c.FormValue("id")

	_ , err := strconv.Atoi(id)
	if err != nil {
		return render(c, views.RestoreResponse(id, "name", "surname", "class", false))	
	} else {
		p, succ := s.updatePerson(id, false)
		return render(c, views.RestoreResponse(p.Id, p.Name, p.Surname, p.Class, succ))
	}
	
}