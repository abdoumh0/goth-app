package handlers

import (
	"context"
	"log"

	"github.com/abdoumh0/goth-app/types"
	"github.com/jackc/pgx/v5/pgxpool"
)

type Service struct {
    store *pgxpool.Pool
}

func NewService(s *pgxpool.Pool) Service {
	return Service{store: s}
}

func (s *Service) getPagesCount(perpage int) (count int) {
	row := s.store.QueryRow(context.Background(), "select count(Id) from person;")
	err := row.Scan(&count)
	if err != nil {
		return 0
	}
	if count < perpage {
		return 1
	} else {
		return count / perpage
	}
}

func (s *Service) getData( page int, perpage int) (p []types.Person) {
	rows, err := s.store.Query(context.Background(), "select id, name, surname, class from person limit $1 offset $2", perpage, (page - 1) * perpage) // sql index >= 0
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	for rows.Next() {
		var person types.Person
		err := rows.Scan(&person.Id, &person.Name, &person.Surname, &person.Class)
		if err != nil {
			return
		}
		p = append(p, person)
	}
	if err := rows.Err(); err != nil {
		print(err.Error())
	}
	return
}