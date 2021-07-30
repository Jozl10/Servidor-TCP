FROM node 
MAINTAINER Jesus Zambrano 
ENV HOME /root
COPY . /app
EXPOSE 4000
CMD cd /app;node servidorTCP.js