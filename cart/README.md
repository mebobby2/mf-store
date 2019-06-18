# Cart microservice

## Build
docker build . -t cart

## Run
docker run -t -d -e PORT=8082 -p 8082:8082 cart
