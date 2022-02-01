# Compras Comunitarias


## Run project
Install the mix archive installer from Hex:

    docker-compose -f local.yml up

## Paths:

App

`http://localhost:8000`

Admin

`http://localhost:8000/admin`

Mailhog

`http://localhost:8025`

## Run Django commands
Create super user

        docker-compose -f local.yml run --rm django python manage.py createsuperuser


Create migrations

        docker-compose -f local.yml run --rm django python manage.py makemigrations

Run migrations

        docker-compose -f local.yml run --rm django python manage.py makemigrations
