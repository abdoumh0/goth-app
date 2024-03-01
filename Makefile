run:
	@go run cmd/main.go

tmpl:
	@templ generate -watch

tailwind:
	npx tailwindcss -i ./src/styles/styles.css -o ./assets/css/styles.min.css --minify --watch

build:
	@npm run build
	@templ generate
	@go build cmd/main.go