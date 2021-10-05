# Documentation for SDP
[![CircleCI](https://circleci.com/gh/dpc-sdp/sdp-docs.svg?style=shield&circle-token=0da7eab7e8846f957d1276d2da70258b81c8a1d3)](https://circleci.com/gh/dpc-sdp/sdp-docs)

https://dpc-sdp.github.io/sdp-docs/


## Checklists
1. Before starting with the *"Requirements"* section, please ensure you have the following done:
- A completed ticket request *(email)* for Open Workspace/Local Admin rights for elevated permissions to run/install softwares.
- WSL2 and Linux distro installed.
- Development Tools i.e Visual Studio Code
- [GitHub](https://github.com/) account created and username sent to your manager for project invites.
- [Lagoon](https://dashboard.amazeeio.cloud/projects/) account created.
- SSH key pair created. If not, follow these [*(instructions)*](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and add the SSH key to your GitHub [*(instructions)*](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account). Start cloning your GitHub project using 'SSH' link provided in the page.
- Add SSH key to Lagoon settings.


## Requirements
- [Lagoon CLI](https://github.com/uselagoon/lagoon-cli/releases)
- [Pygmy](https://pygmy.readthedocs.io/en/master/installation/)
- Docker Desktop from [Docker](https://www.docker.com/get-started).
- [Ahoy](https://github.com/ahoy-cli/ahoy)

## Quickstart
To build and serve locally: `ahoy build`

## Available commands
```
   build        Build site
   deploy       Deploy site
   version      MkDocs version   
```

## Automated deployment
CircleCI is configured to perform automated deployments for the main branch.
The built site is automatically pushed to `gh-pages` branch.

Also note that built site is available in CircleCI build artifacts tab. 

**Important! Do not commit to `gh-pages` branch manually. Also, try to avoid
using `ahoy deploy` command manually (it is used by CI).**

## Maintenance
[SDP development team](https://github.com/dpc-sdp/sdp-docs) is a main maintainer of this documentation.

We welcome contributions to this documentation! Please [open an
issue](https://github.com/dpc-sdp/sdp-docs/issues/new) or submit a pull request.

## Known issues and resolutions
- GitHub and Lagoon CLI [SSH connections](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection).
- Unable to resolve host/hostname for Linux or UNIX OS.
```
# Retrieved your default gateway IP address (ipconfig) and replace the IP address in /etc/resolv.conf

   sudo vi /etc/resolv.conf
```

- Windows/Citrix *requires elevated permissions*. Issue related to Open Workspace not fully set up while working remotely.
   1. Logoff from Citrix Gateway. Close the app from Task Manager if taking too long.
   2. Open GO Connect from Windows. It will open Internet Explorer and ask to log into Citrix Web Connect with your workstation credentials. Note: This only works in Internet Explorer.
   3. The process might take longer than expected (1 - 2 hours) to complete until it loads the DPC Intranet page.
   4. Retry the software installation that requires elevated permission again. If this fails, restart your laptop and repeat step 1-3.
