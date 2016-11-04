FROM nginx

RUN mkdir /etc/nginx/logs && touch /etc/nginx/logs/static.log

ADD nginx.conf /etc/nginx/conf.d/default.conf
ADD index.html /www/
ADD 404.html /www/

RUN mkdir /www/css
ADD css/ /www/css

EXPOSE 80
