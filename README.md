# docker_node_mongoDriverTest
This is a project that test mongo driver node app.

## Usage
1. make a Dockerfile
2. prepear the node package.json and app.js file
3. create a jenkins job

docker build -t maiz9088/node-mongodriver-app .

if [docker ps -a | grep node-mongodriverApp != ""];
then
  docker rm node-mongodriverApp
fi

docker run --name node-mongodriverApp --link mongodb:myMongoDB -d maiz9088/node-mongodriver-app

docker attach node-mongodriverApp

RC=$(docker wait node-mongodriverAp)

docker rm node-mongodriverAp

exit $RC

4. check logs

docker logs node-mongodriverApp

"Connected successfully to server" means sucess.

## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Zou Deyi
