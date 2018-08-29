FROM nginx
COPY ./tmp/dist/*  /usr/share/nginx/html/
