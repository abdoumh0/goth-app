package handlers

import (
	"strconv"

	"github.com/abdoumh0/goth-app/views"
	"github.com/labstack/echo/v4"
)

func (s *Service) DeleteHandler(c echo.Context) error{
	id := c.FormValue("id")

	_ , err := strconv.Atoi(id)
	if err != nil {
		return render(c, views.DeleteResponse(id, "name", "surname", "class", false))	
	} else {
		p, succ := s.updatePerson(id, true)
		return render(c, views.DeleteResponse(p.Id, p.Name, p.Surname, p.Class, succ))
	}
	
}