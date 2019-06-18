# Header microservice

## Build
docker build . -t header

## Run
docker run -t -d -e PORT=8080 -p 8080:8080 header
