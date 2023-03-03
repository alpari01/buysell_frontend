## What's this?
**Frontend** project for a http://buysell.hopto.org where people can sell and buy products. \

NB! This is only front-end part, there is a separate repository for back-end which is found here https://github.com/alpari01/buysell_backend

## Technologies used
- **Npm**, to download, install modules required for the project and also to start the project itself
- **Vue.js** as a framework for development
- Development environment suitable for the Vue.js project (for example, **IntelliJ IDEA**)

## Local setup for development
1. Clone the project to the development environment.
2. Install npm if not already installed.
3. In the console, go to the folder with the cloned project and run:```npm install```*
4. In the same folder type ```npm run serve```
5. In a browser go to http://localhost:8080

*when cloning from git for the first time

## Deploying
 Build docker image for deployment
 ```
 docker build -t ${tag_name} .
 ```
