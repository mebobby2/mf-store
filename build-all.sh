pushd header
docker build . -t header
popd

pushd cart
docker build . -t cart
popd

pushd products-list
docker build . -t products-list
popd
