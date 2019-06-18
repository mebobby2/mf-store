# ProductsList microservice

## Build
docker build . -t products-list

## Run
docker run -t -d -e PORT=8081 -p 8081:8081 products-list
