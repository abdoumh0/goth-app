package handlers

import (
	"net/http"
	"os"
	"strconv"

	"github.com/abdoumh0/goth-app/types"
	"github.com/abdoumh0/goth-app/views"
	"github.com/abdoumh0/goth-app/views/root"
	"github.com/labstack/echo/v4"
)



func (s *Service) RootHandler(c echo.Context) error {

	pages := s.getPagesCount(1)
	page , err := strconv.Atoi(c.QueryParam("page"))
	if err != nil || page < 1{
		c.Redirect(http.StatusSeeOther, os.Getenv("DOMAIN") + "?page=1")
		return render(c, root.Index(views.Table(make([]types.Person, 0))))
	} else if page > pages{
		c.Redirect(http.StatusSeeOther, os.Getenv("DOMAIN") + "?page=" + strconv.Itoa(pages))
		return render(c, root.Index(views.Table(make([]types.Person, 0))))
	}

	print("\npage: ", page)
	data := s.getData(page, 1)
	table := views.Table(data)
	return render(c, root.Index(table))
}