docker run -t -d -e PORT=8080 -p 8080:8080 header
docker run -t -d -e PORT=8082 -p 8082:8082 cart
docker run -t -d -e PORT=8081 -p 8081:8081 products-list
