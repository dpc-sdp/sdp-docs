# Setting up a new Frontend Website

## Preparation

Before starting front-end development, you need your site to be setup in Tide backend(Content Repository) first. The Drupal admin path for add site is: __"/admin/structure/taxonomy/manage/sites/overview"__. Ask SDP team to help if you don't have access to it.

### Create a Github repo for your site

Create a new empty project repository in github. If you are using our automation tool to start the project, you should not need to do this.

### Clone code from vic gov au

If you are using our automation tool to start the project, then it will handle it for you.

Otherwise, need to copy the code from vic-gov-au into your project as a base template.

### Github Repo settings

Go to repo settings, change default branch to `develop`.

Add protection to `production`, `master` and `develop` branches.

### Openshift and Circle CI integration

Ask SDP operation team for add them. If you are using our automation tool to start the project, then it will handle it for you.

### Connecting to Content Repository

See [Environments](./../../content-repository/setup#environments) for instructions how to connect to relevant Content Repository environment.

## Setup site

### Custom `env` config

In all `.env` and `.lagoon.env...` files(you can find them in project root dir):

- Replace the `SITE_ID` to the right site id. It's the term id of site in your backend. Ask SDP team to help if you don't know what SITE_ID is for your site.
- You also need to check `CONTENT_API_SERVER`, to make sure it is the correct backend server.
- Update `AUTH_USER`, `AUTH_PASS`, `CONTENT_API_AUTH_USER`, `CONTENT_API_AUTH_PASS` according to your backend setting.
- You also will need to update search configs, contact SDP team for help on that part.

In all docs and configs, replace all `vic-gov-au` and `vic.gov.au` to your site name.

### Site specific settings

Basically, customize dev work only happens in three files:

- `/assets/_theme.scss`
- `/assets/_custom.scss`
- `/nuxt.config.js`

#### Custom scss variables

We are using Ripple pattern library [https://ripple.sdp.vic.gov.au/](https://ripple.sdp.vic.gov.au/) in this project.

You can override [Ripple](https://github.com/dpc-sdp/ripple) scss variables in
`/assets/_theme.scss` such as colour.

Currently all scss variables with `!default` in Ripple can be overridden.
We will build a guide of variables in future. But for now, you can check [Ripple packages](https://github.com/dpc-sdp/ripple/blob/master/packages) scss files if you want to go deep.

#### Custom static files

Each semi-independent site will have their own static files.

- Images(You image need to be exact same dimensions and shape with the one you want to override)
  - `/static/img/header-pattern-bottom.png`
  - `/static/img/header-pattern-shape.png`
  - `/static/img/footer-shape.png`

- Javascript files. Open `/nuxt.config.js` file, in `head` config `script` setting, you should see:

``` Javascript
head: {
  script: [
    // The below monsido js load order can't be changed and we can't use defer on it, otherwise it won't work.
    { src: '/js/monsido.js', body: true },
    { src: '//cdn.monsido.com/tool/javascripts/monsido.js', body: true },
    { src: 'https://www.googletagmanager.com/gtag/js?id=' + process.env.GA_TOKEN, body: true, async: '' },
    { src: '/js/hotjar.js', body: true, defer: '' },
    { src: 'https://drwgdblqzrfiz.cloudfront.net/message.js', body: true, defer: '' }
  ]
},
```

Remove or add the analytics JS if need. For local js files, find them in `/static/js/`, replace them as need.

#### Ripple Options

Some default Ripple settings can be configured:

- viclogo: true/false (setting to false will hide the primary vic.gov.au logo)
- quickexit: true/false (whether the "Quick Exit" button should be displayed on the site)
- quickexiturl: 'http://site.url' (sets the url that will be opened when the Quick Exit button is clicked)

These settings will need to be configured in the `/nuxt.config.js` file, under the `ripple` section in module.exports.

#### Tide Options

This part is still experimental at this stage, the final doc will be added when it's stable. The basic config is in `nuxt.config.js`.

``` Javascript
  tide: {
    // nuxt-tide options
    baseUrl: 'https://your-tide-api-server/',
    auth: {
      username: 'yourUser',
      password: 'yourPass'
    },
    site: false, // Should be your own site ID in Tide, use false if site module is not enabled.
    // Custom tide filters
    customConfig: {
      include: {},
      mapping: {}
    },
    // Custom mapping filters
    customFilters: {},
    // Tide submodules, 1 for enable, 0 for disable.
    // Should match the Tide backend modules.
    modules: {
      site: 1,
      // Content types
      page: 1,
      landingPage: 1,
      event: 1,
      news: 1,
      grant: 1,
      profile: 1,
      // Other features
      media: 1,
      webform: 1,
      search: 1,
      monsido: 1,
      authenticatedContent: 0,
      dataDrivenComponent: 0
    }
  }
```
