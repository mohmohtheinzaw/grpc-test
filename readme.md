// nest js microservice
// using grpc

// use @GrpcMethod

------------installation steps--------------------------

nest 
prisma

----------dependencies------------------------------

$ npm i --save @grpc/grpc-js @grpc/proto-loader

----------recommended vs code extension------

vscode-proto3

-----------note---------------------

need to refactor --> net-cli.json file
--->
{
  "compilerOptions": {
    "assets": ["**/*.proto"],
    "watchAssets": true
  }
}



