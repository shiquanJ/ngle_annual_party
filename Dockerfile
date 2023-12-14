FROM node:16.14.0-alpine3.15
MAINTAINER YIN
ADD ngle_annual_party.tar.gz /
WORKDIR /ngle_annual_party
RUN chown -R root /ngle_annual_party && sed -i '/openBrowser/ d' ./server/server.js \
&& cd server && npm install \
&& cd ../product && npm install \
&& npm rebuild \
&& npm run build
EXPOSE 8880
WORKDIR /ngle_annual_party/product
CMD ["npm", "run", "serve"]
