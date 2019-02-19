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

## Openshift and Circle CI integration

Ask SDP operation team for add them.

## Custom `env` config

In all `.env` and `.lagoon.env...` files(you can find them in project root dir), replace the `SITE_ID` to the right site id. Ask SDP team to help if you don't know what SITE_ID is for your site.

In all docs and configs, replace all `vic-gov-au` and `vic.gov.au` to your site name.

You also will need to update search configs, contact SDP team for help on that part.

## Site specific settings

Basically, customise dev work only happens in three files:

- `/assets/_theme.scss`
- `/assets/_custom.scss`
- `/nuxt.config.js`

### Custom scss variables

We are using Ripple pattern library [https://ripple.sdp.vic.gov.au/](https://ripple.sdp.vic.gov.au/) in this project.

You can override [Ripple](https://github.com/dpc-sdp/ripple) scss variables in
`/assets/_theme.scss` such as colour.

Currently all scss variables with `!default` in Ripple can be overriden.
We will build a guide of variables in future. But for now, you can check [Ripple packages](https://github.com/dpc-sdp/ripple/blob/master/packages) scss files if you want to go deep.

### Custom static files

Each semi-independent site will have their own static files.

- Images(need to be exact same size and shape)
- `/static/img/header-pattern-bottom.png`
- `/static/img/header-pattern-shape.png`
- `/static/img/footer-shape.png`

- Javascript files. Open `/nuxt.config.js` file, in `head` config `script` setting, you should see:

``` Javascript
head: {
script: [
{ src: '//cdn.monsido.com/tool/javascripts/monsido.js', body: true, defer: true },
{ src: '/js/monsido.js', body: true, defer: true },
{ src: 'https://www.googletagmanager.com/gtag/js?id=UA-120824569-1', body: true, async: true },
{ src: '/js/gtag.js', body: true, defer: true },
{ src: '/js/hotjar.js', body: true, defer: true }
]
},
```

Remove or add the analytics JS if need. For local js files, find them in `/static/js/`, replace them as need.

### Ripple Options

Some default Ripple settings can be configured:

viclogo: true/false (setting to false will hide the primary vic.gov.au logo)
quickexit: true/false (whether the "Quick Exit" button should be displayed on the site)
quickexiturl: 'http://site.url' (sets the url that will be opened when the Quick Exit button is clicked)

These settings will need to be configured in the `/nuxt.config.js` file, under the `ripple` section in module.exports.
