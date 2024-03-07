package handlers

import (
	"github.com/abdoumh0/goth-app/views"
	"github.com/labstack/echo/v4"
)

func (s *Service) PostHandler(c echo.Context) error {
	name := c.FormValue("name")
	surname := c.FormValue("surname")
	class := c.FormValue("class")

	if name == "" || surname == "" || class == "" {
		print("shites\n")
		return render(c, views.PostResponse("id", name, surname, class, false))	
	}


	p, err := s.postPerson(name, surname, class)

	if err != nil {
		return render(c, views.PostResponse("id", name, surname, class, false))		
	} else {
		return render(c, views.PostResponse(p.Id, p.Name, p.Surname, p.Class, true))		
	}

}