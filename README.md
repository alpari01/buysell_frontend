## What's this?
**Frontend** project for a [website](http://buysell.hopto.org) where people can sell their own products, as well as buy, comment and rate other people's products.

## Technologies for development
- **Npm**, to download, install modules required for the project and also to start the project itself
- **Vue.js** as a framework for development
- Development environment suitable for the Vue.js project (for example, **IntelliJ IDEA**)

## Local setup for development
1. Clone the project to the development environment.
2. Install npm if not already installed.
3. In the console, go to the folder with the cloned project and run:```npm install```*
4. In the same folder type ```npm run serve```
5. In a browser go to http://localhost:8080

*when cloning from gitlab for the first time

## Deploying
1. Register on the [docker hub website](https://hub.docker.com) and create your project.
2. Launch docker desktop.
3. Build the project .jar file using Maven with ```clean```, ```package``` commands.
4. In the console in the folder with the cloned project enter ```docker build –t ${project_name} .``` to create docker image.
5. Enter ```docker tag ${image-name}:latest ${repo-name}/${image-name}:latest``` to tag image.
6. Enter ```docker login``` to log in to docker hub.
7. Enter ```docker push ${repo-name}/${image-name}:latest``` to push image.
8. Create on your computer or somewhere else **docker-compose.yml** file.
9. Add the following statement to it (configure relative to created docker image):
```
version: "3.7"
services:
        web-project:
                image: vue:latest
                container_name: vue
                restart: always
                ports:
                        - 8081:8080
```
10. Run the docker container through the console, in the folder with **docker-compose.yml** file enter ```docker-compose up -d```

## Website authors
- **Ilja Lastovko**. Discord: Ilja Lastovko#1870
- **Alan Parik**. Discord: APMeister#5717

