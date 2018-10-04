# Create a site

## Semi independent site

### Tide setup

Before we start in front-end development, we need the site to be setup first in Tide. Ask Tide manager to add your site in "/admin/structure/taxonomy/manage/sites/overview".

### Create a github repo for site

Create a new empty project repository in github. It need to be under `dpc-sdp` org and be private.

### Clone code from vic gov au

At this stage, we don't have a start kit to start the site project automatically. However, it's the on the road map.

So for now, need to copy the code from vic-gov-au into your project as a base template. Create `develop`, then push both `develop` and `master` to remote.

#### repo settings

Go to repo settings, change defualt branch to `develop`.

Add protection to `production`, `master` and `develop` branchs.

### Custom env config

In all `.env` and `.lagoon.env...` files, replace the `SITE_ID` to the right site id.

In all docs and configs, replace all `vic-gov-au` to your site name.
