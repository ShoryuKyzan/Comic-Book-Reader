# run me with context as frontend app dir
FROM node AS build

WORKDIR /app
COPY . .

RUN npm run build

FROM nginx:stable

COPY --from=build /app/build/ /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx -g 'daemon off;'"]
