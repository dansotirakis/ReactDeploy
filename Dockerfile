# define context "homepage" in package.json
# npm run build --production

FROM node:8.10.0-alpine
 
RUN mkdir -p /src/app
WORKDIR /src/app
 
COPY /build /src/app/build/
COPY server.js /src/app/
 
RUN npm install express -s --no-progress
RUN npm install path -s --no-progress
 
EXPOSE 3000
 
# defined in package.json
CMD [ "node", "server.js" ]

# docker build -t zallpy/simulador-mle-app:1.0.0-SNAPSHOT .
# docker run -dit -p 3000:3000 --name simulador-mle-app zallpy/simulador-mle-app:1.0.0-SNAPSHOT