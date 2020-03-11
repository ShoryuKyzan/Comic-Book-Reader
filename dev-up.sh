#!/bin/bash

docker-compose -f docker-compose-dev.yaml up -d
pip install -r requirements.txt
cd comicsite
echo 'waiting for db to come up'
sleep 15

python manage.py makemigrations
python manage.py migrate
python manage.py runserver