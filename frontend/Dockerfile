FROM node:16.13.2-bullseye

WORKDIR /usr/src/app

ADD entrypoint.sh /
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]