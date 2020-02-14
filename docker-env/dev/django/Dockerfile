# context must be root dir of this project
FROM python:3

# need this for some reason
ENV PYTHONUNBUFFERED 1

RUN mkdir /code
WORKDIR /code
COPY ./requirements.txt /code/
COPY ./comicsite /code/
RUN pip install -r requirements.txt

CMD ["bash", "-c", "cd comicsite/comicsite/ && python manage.py runserver"]
