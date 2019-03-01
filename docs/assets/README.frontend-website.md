# _name_
Frontend Website Nuxt client for _name_.

[![CircleCI](https://circleci.com/gh/_org_machine_name_/_machine_name_.svg?style=svg)](https://circleci.com/gh/_org_machine_name_/_machine_name_)
![Release](https://img.shields.io/github/release/dpc-sdp/_machine_name_.svg)

## Prerequisites
1. Make sure that you have latest versions of all required software installed:   
  - [NodeJS](https://nodejs.org/) 
  - [NPM](https://www.npmjs.com/) 
2. Make sure that all local web development services are shut down
   (`apache/nginx`, `mysql`, `MAMP` etc).

## Prerequisites - using Docker
1. Make sure that you have latest versions of all required software installed:   
  - [Docker](https://www.docker.com/) 
  - [Pygmy](https://docs.amazee.io/local_docker_development/pygmy.html)
  - [Ahoy](https://github.com/ahoy-cli/ahoy) 
2. Make sure that all local web development services are shut down (`apache/nginx`, `mysql`, `MAMP` etc).

## Setting up `SITE_ID`
In order to connect to the Content Repository, a `SITE_ID` must be issued.  

1. Contact your Content Repository administrators and ask them for a `SITE_ID`.
2. Add `SITE_ID` to `.env` file.

## Local environment setup

``` bash
npm install
npm run dev
```

Local URL -- [http://localhost:3000](http://localhost:3000)

Without content in your site, you may see 404 in homepage, but you should able
to visit path `/demo-landing-page` to start with a demo content page.

## Local environment setup (with Docker)
Run `npm run bay:start`

Local URL -- http://_machine_name_.docker.amazee.io/

### Available workflow commands

- `npm run bay:start` - start local development environment without build.
- `npm run bay:rebuild-full` - rebuild local development environment and start.
- `npm run bay:stop` - stop all Bay containers.
- `npm run bay:destroy` - stop and remove all Bay containers.
- `npm run bay:logs` - get logs from all running Bay containers.
- `npm run bay:cli` - run a command in `node` container. Example: `npm run bay:cli -- ls -al`.
- `npm run bay:pull` - pull latest Bay containers.

### Logs

Using the npm run helper script you can get logs from any running container.

`npm run bay:logs`

To continue streaming logs, use `--follow`.
`npm run bay:logs -- --follow`

You can also filter the output to show only logs from a particular service.
For example `npm run bay:logs -- app` will show the log output from the node container.
The full list of services can be found in the `docker-compose.yml`

### SSHing into container

SSH into app service
`docker-compose exec app sh`

SSH into test service
`docker-compose exec test sh`

## Lint code

``` bash
npm run lint
```

## Test
We uses [Jest](https://jestjs.io/) for unit test and end-to-end test.

``` bash
npm test
```
