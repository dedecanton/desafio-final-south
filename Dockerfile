FROM node:alpine AS client
WORKDIR /app
COPY frontend/package.json .
RUN npm i
COPY frontend .
RUN npm run build

FROM node:alpine
WORKDIR /app
COPY server/package.json .
RUN npm i
RUN npm i -g nodemon
COPY server .
COPY --from=client /app/build ./build
RUN ls
RUN pwd
EXPOSE 3001
CMD ["nodemon", "index.js"]
