run:
	@go run cmd/main.go

tmpl:
	@templ generate -watch

tw:
	npx tailwindcss -i ./src/styles/styles.css -o ./assets/css/styles.css --minify --watch

build:
	@npm run build
	@templ generate
	@go build cmd/main.go
