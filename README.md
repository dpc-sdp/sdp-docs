# Documentation for SDP
[![CircleCI](https://circleci.com/gh/dpc-sdp/sdp-docs.svg?style=shield&circle-token=0da7eab7e8846f957d1276d2da70258b81c8a1d3)](https://circleci.com/gh/dpc-sdp/sdp-docs)

https://dpc-sdp.github.io/sdp-docs/

## Requirements
- Docker
- [Ahoy](https://github.com/ahoy-cli/ahoy)

## Quickstart
To build locally: `ahoy build`

To serve locally: `ahoy deploy`

## Available commands
```
   build        Build site
   deploy       Deploy site
   serve        Serve site in browser
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
