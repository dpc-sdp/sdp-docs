# Local development environment

## Drupal tools setup
We are using [Dev Tools](https://github.com/dpc-sdp/dev-tools) for Drupal module 
and  site development.   

### Prerequisites
1. Make sure that you have latest versions of all required software installed:   
  - [Docker](https://www.docker.com/) 
  - [Pygmy](https://docs.amazee.io/local_docker_development/pygmy.html)
  - [Ahoy](https://github.com/ahoy-cli/ahoy) 
2. Make sure that all local web development services are shut down (`apache/nginx`, `mysql`, `MAMP` etc).

### Setup
1. `curl https://raw.githubusercontent.com/dpc-sdp/dev-tools/master/install | bash`
2. `pygmy up`
3. `ahoy build` 

Find more information about Dev Tools at https://github.com/dpc-sdp/dev-tools. 
