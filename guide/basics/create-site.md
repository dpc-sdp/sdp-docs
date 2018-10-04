# Create a Semi independent site

## Tide setup

Before starting front-end development, you need the site to be setup in Drupal backend first. The Drupal admin path for add site is: "/admin/structure/taxonomy/manage/sites/overview". Ask SDP team to help if you don't have access to it.

## Create a github repo for site

Create a new empty project repository in github. It need to be under `dpc-sdp` org and be private.

## Clone code from vic gov au

At this stage, we don't have a start kit to start the site project automatically. However, it's the on the road map.

So for now, need to copy the code from vic-gov-au into your project as a base template. Create `develop`, then push both `develop` and `master` to remote.

## Github Repo settings

Go to repo settings, change defualt branch to `develop`.

Add protection to `production`, `master` and `develop` branchs.

## Custom `env` config

In all `.env` and `.lagoon.env...` files(you can find them in project root dir), replace the `SITE_ID` to the right site id. Ask SDP team to help if you don't know what SITE_ID is for your site.

In all docs and configs, replace all `vic-gov-au` and `vic.gov.au` to your site name.

You also will need to update search configs, contact SDP team for help on that part.

## Site theme settings

Basically, customise dev work only happens in two files:

- [assets/_theme.scss](assets/_theme.scss)
- [assets/_custom.scss](assets/_custom.scss)

### Custom scss variables

We are using Ripple pattern library [https://ripple.sdp.vic.gov.au/](https://ripple.sdp.vic.gov.au/) in this project.

You can override [Ripple](https://github.com/dpc-sdp/ripple) scss variables in
[assets/_theme.scss](assets/_theme.scss) such as colour.

Currently all scss variables with `!default` in Ripple can be overriden.
We will build a guide of variables in future. But for now, you can check [Ripple packages](https://github.com/dpc-sdp/ripple/blob/master/packages) scss files if you want to go deep.
