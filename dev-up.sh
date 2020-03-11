#!/bin/bash

docker-compose -f docker-compose-dev.yaml up -d
pip install -r requirements.txt
cd comicsite

echo 'waiting for db to come up'
result=1
while [[ "$result" -eq "1" ]]
do
    nc -z -v -w5 db 3306
    result=$?
done

python manage.py makemigrations
python manage.py migrate
python manage.py runserver