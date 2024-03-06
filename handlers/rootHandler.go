package handlers

import (
	"net/http"
	"os"
	"strconv"

	"github.com/abdoumh0/goth-app/views"
	"github.com/abdoumh0/goth-app/views/layout"
	"github.com/abdoumh0/goth-app/views/rootLayout"
	"github.com/labstack/echo/v4"
)



func (s *Service) RootHandler(c echo.Context) error {
	perpage := 10

	pages := s.getPagesCount(perpage)
	page , err := strconv.Atoi(c.QueryParam("page"))
	if err != nil || page < 1{
		c.Redirect(http.StatusSeeOther, os.Getenv("DOMAIN") + "?page=1")
		return render(c, layout.NotFound())
	} else if page > pages{
		c.Redirect(http.StatusSeeOther, os.Getenv("DOMAIN") + "?page=" + strconv.Itoa(pages))
		return render(c, layout.NotFound())
	}

	data := s.getData(page, perpage)
	table := views.Table(data)
	pagination := views.Pagination(pages, os.Getenv("DOMAIN"), "page", 6, page)
	return render(c, rootLayout.Index(table, pagination))
}