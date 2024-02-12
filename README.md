# coding-test-node-js


## Instructions

Please implement CRUD functionality for managing post.  

Implementation expectations:

1. Close to a production ready app as possible
1. Readme.md file for instructions on how to run
1. Containerised app ready to ship api to a Kubernetes/Docker cluster
1. Apply TDD
1. Respect RESTful
1. Favour clean code, Design Pattern, Functional approach
1. Must use Github and send a url to a public Github url of your solution
	1. Please use git,  make incremental code commits to allows a history of you iterations.


# Post-Manage-API

This is a sample application for post management using Nodejs Express server and sqLite databse.

# Dependency versions

| Nodejs | v18.14.2 |
| TypeScript | ^5.3.3 |
| express | ^4.18.2 |
| sqlite3 | ^5.1.7 |

# Application usage:

Application can be used for post management i.e.

1. Create a post
2. Get All posts
3. Update a post
4. Delete a post


# How to run application

Application can be build and dpeloyed to docker continers

## Run in local

```
npm run start:dev
```

## Run test 

```
npm run test
```

## Run docker

Using node:18-alpine image from docker hub.
This is a multistage docker image. 

Use **docker-compose.dev.yml** for development environment.
Use **docker-compose.yml** for production environment.

### dev cmd
```
docker-compose -f docker-compose.dev.yml up --build
```

### prod cmd
```
docker-compose -f docker-compose.yml up --build
```