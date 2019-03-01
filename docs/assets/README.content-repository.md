# _name_
Drupal 8 implementation of Content Repository for _name_

[![CircleCI](https://circleci.com/gh/_org_machine_name_/_machine_name_.svg?style=shield)](https://circleci.com/gh/_org_machine_name_/_machine_name_)
![Release](https://img.shields.io/github/release/_org_machine_name_/_machine_name_.svg)

## Prerequisites
1. Make sure that you have latest versions of all required software installed:   
  - [Docker](https://www.docker.com/) 
  - [Pygmy](https://docs.amazee.io/local_docker_development/pygmy.html)
  - [Ahoy](https://github.com/ahoy-cli/ahoy) 
2. Make sure that all local web development services are shut down (`apache/nginx`, `mysql`, `MAMP` etc).

## Local environment setup
3. `curl https://raw.githubusercontent.com/dpc-sdp/dev-tools/master/install | bash`
4. `pygmy up`
5. `ahoy build` 

Local URL -- http://_machine_name_.docker.amazee.io/

## Available `ahoy` commands
Run each command as `ahoy <command>`.
```
 build                Build or rebuild project.
   clean                Remove all build files.
   clean-full           Remove all development files.
   cli                  Start a shell inside CLI container or run a command.
   composer-merge       Merge composer files.
   deploy               Deploy or re-deploy a branch in Bay.
   doctor               Identify problems with current stack.
   down                 Stop Docker containers and remove container, images, volumes and networks.
   drush                Run drush commands in the CLI service container.
   flush-redis          Flush Redis cache.
   info                 Print information about this project.
   install-dev          Install dependencies.
   install-site         Install site.
   lint                 Lint code.
   login                Login to a website.
   logs                 Show Docker logs.
   pull                 Pull latest docker images.
   restart              Restart all stopped and running Docker containers.
   start                Start existing Docker containers.
   stop                 Stop running Docker containers.
   test-behat           Run Behat tests.
   up                   Build and start Docker containers.   
```

## SSHing into CLI container 
`ahoy cli`

## Running a command in CLI container 
`ahoy cli ls /app`

## Mailhog.
[Mailhog](https://github.com/mailhog/MailHog) is included with `pygmy` and is available at
http://mailhog.docker.amazee.io/ 

## Stage file proxy.

[Stage File Proxy](https://www.drupal.org/project/stage_file_proxy) is enabled
on all non production environments so files are automatically downloaded
directly from prod on demand.

## Adding Drupal modules
Modules needs to be added in 2 steps:
1. Require module code installation (through composer).
2. Enable module during site installation.

### Adding contrib modules
`composer require drupal/module_name`
or for specific versions
`composer require drupal/module_name:1.2`

### Adding modules as local packages
1. Add local package information to the root of `composer.json`:
    ```
    "repositories": {
        "dpc-sdp/tide_page": {
            "type": "path",
            "url": "dpc-sdp/tide_page"
        },
    }
    ```
2. `composer require tide_page` 
3. To make sure that Composer triggers dependency tree rebuild, run `ahoy clean`.
4. Run `composer update --lock`. This will install all dependencies and 
   update root `composer.lock` file with newly added module. 

## Adding patches for composer packages
1. Add `title` and `url` to patch on drupal.org to the `patches` array in
   `extra` section in `composer.json`.
    ```
    "extra": {
        "patches": {
            "drupal/core": {
                "Contextual links should not be added inside another link - https://www.drupal.org/node/2898875": "https://www.drupal.org/files/issues/contextual_links_should-2898875-3.patch"
            }
        }    
    }
    ```

2. `composer update --lock`

## Coding standards
PHP and JS code linting uses
[PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) with Drupal
rules from [Coder](https://www.drupal.org/project/coder) module and additional
local overrides in `phpcs.xml.dist` and `.eslintrc`.   

## Behat tests
Behat configuration uses multiple extensions: 
- [Drupal Behat Extension](https://github.com/jhedstrom/drupalextension) -
  Drupal integration layer. Allows to work with Drupal API from within step
  definitions.
- [Behat Screenshot Extension](https://github.com/integratedexperts/behat-screenshot) - Behat
  extension and a step definition to create HTML and image screenshots on demand
  or test fail.
- [Behat Progress Fail Output Extension](https://github.com/integratedexperts/behat-format-progress-fail) -
  Behat output formatter to show progress as TAP and fail messages inline. Useful
  to get feedback about failed tests while continuing test run.
- `YoursiteDrupalContext` - Site-specific Drupal context with custom step definitions.
- `YoursiteMinkContext` - Site-specific Mink context with custom step definitions.

### Run tests locally:
- Run Behat tests: `ahoy test-behat`
    - Run specific test feature: `ahoy test-behat tests/behat/features/homepage.feature`
    - Run specific test tag: `ahoy test-behat -- --tags=wip`

## Automated builds (Continuous Integration)
In software engineering, continuous integration (CI) is the practice of merging
all developer working copies to a shared mainline several times a day. Before
feature changes can be merged into a shared mainline, a complete build must run
and pass all tests on CI server.

This project uses [Circle CI](https://circleci.com/) as CI server: it imports
production backups into fully built codebase and runs code linting and tests.
When tests pass, a deployment process is triggered for nominated branches
(usually, `master` and `develop`).

Add `[skip ci]` to the commit subject to skip CI build. Useful for documentation
changes.

### SSH
Circle CI provides SSH access into the build for 120 minutes after the build is
finished. SSH can be enabled once the build is started with SSH support.

### Test artifacts
Test artifacts (screenshots etc.) are available under 'Artifacts' tab in
CircleCI UI.

## Debugging

### PHP application from browser 
1. Trigger xDebug from web browser (using one of the browser extensions) so that
PHPStorm recognises the server `yoursite.docker.amazee.io` and
configures the path mapping. Alternatively, you can create the server in
PHPStorm Settings.
  * Make sure `serverName` to be `yoursite.docker.amazee.io`
   
### PHP scripts
```
ahoy cli
xdebug.sh path/to/script
```

For example, to run a single Behat test: `xdebug.sh vendor/bin/behat path/to/test.feature`

### Drush commands
```
ahoy cli
`./xdebug.sh vendor/bin/drush <DRUSH_COMMAND>
```

### DB connection details
Run `ahoy info` to get the port number.

```
  Host:     127.0.0.1
  Username: drupal
  Password: drupal
  Database: drupal
  Port:     <get from "ahoy info">
```  
