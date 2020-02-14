FROM python:3

# context must be root dir of this project

# need this for some reason
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
VOLUME /code
WORKDIR /code
COPY ./requirements.txt /code/
RUN pip install -r requirements.txt
