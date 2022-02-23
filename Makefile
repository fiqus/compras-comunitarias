# DEV START/BUILD PROYECT
## START THE DJANGO BACKEND

up:
	@docker-compose -f local.yml up

stop:
	@docker-compose -f local.yml stop

down:
	@docker-compose -f local.yml down

### DJANGO DEV

superuser:
	@docker-compose -f local.yml run --rm django python manage.py createsuperuser

makemigrations:
	@docker-compose -f local.yml run --rm django python manage.py makemigrations

migrate:
	@docker-compose -f local.yml run --rm django python manage.py migrate

test:
	@docker-compose -f local.yml run --rm django python manage.py test

test-keepdb:
	@docker-compose -f local.yml run --rm django python manage.py test --keepdb

### REACT
## START FRONTEND

run-frontend:
	cd frontend/ && npm start
