FROM nginx
COPY ./dist/dist/*  /usr/share/nginx/html/
