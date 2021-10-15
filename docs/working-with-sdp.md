# Getting started

!!! info
    
    You are viewing a version of the documentation that is currently under 
    active development.
 
## Before you start

Welcome to the Single Digital Presence (SDP). Before you start working
with the DPC team there are a few tasks to complete.

- Request access to JIRA
    
    For issues needing more than a quick helping hand, having access to JIRA
    will allow you to raise tickets with the SDP team in [JIRA Service Desk](https://support.sdp.vic.gov.au/).

- Request access to Slack, Lagoon and GitHub

    Now that you can create tickets in JIRA Service Desk, send us a ticket with name, email and GitHub handle
    and ask for access to the following:

    - The [Lagoon Dashboard](https://dashboard.amazeeio.cloud/projects/) allows you to check the status of your
    builds in Lagoon.
    - DPC uses Slack for ad-hoc help. Ask for help here, but if it is complex we will probably get you to raise a
    ticket.
    - There are GitHub repositories for both the front-end and back-end applications that you will be working on.

## Install dependencies

### Create SSH key pair

- [Generate new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) will guide you on how to generate, test and also add your key to your GitHub [*(Add a new SSH key)*](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

- Setup key in the Lagoon Dashboard

    > Once you have access to the [Lagoon Dashboard](https://dashboard.amazeeio.cloud/projects/) make sure to add your SSH
key at https://dashboard.amazeeio.cloud/settings. This will be required for a local build so you can pull down a
copy of the production database!

### Setup Lagoon CLI
Download and setup Lagoon CLI. Latest [*(releases)*](https://github.com/uselagoon/lagoon-cli/releases)
   
```
    wget https://github.com/uselagoon/lagoon-cli/releases/download/v0.11.6/lagoon-cli-v0.11.6-linux-amd64

    sudo cp lagoon-cli-v0.11.6-linux-amd64 /usr/local/bin/lagoon

    sudo chmod +x /usr/local/bin/lagoon

    # To test your installation
    lagoon list projects
```

### Setup Pygmy-Go

- Drop-in replacement using latest [release](https://github.com/fubarhouse/pygmy-go/releases/tag/v0.7.1)
- After installation, run:

    ```
    pygmy-go up
    ```

### Setup Docker
- Download and Install Docker Desktop (https://www.docker.com/get-started).
- After installation, run:

    ```
    1. ahoy build
    2. ahoy up
    ```

## Build Tide and Ripple
- Current version: 
```
    npm > 6.14.13
    node > v14.17.2
```

You're now ready to build projects locally. There are instructions in the `README.md` files of each project.