# Usage

This is an overview of how Ripple can be used in different SDP projects.

See [development/frontend-website/setup](../../development/frontend-website/setup/) for more details on development with Ripple and getting started.

## Using with Nuxt

Most SDP websites use [Nuxt](https://nuxtjs.org/) for Server Side Rendering (SSR) and developer experience amongst other advantages. Read the Nuxt documentation for usage - [https://nuxtjs.org/docs/get-started/installation](https://nuxtjs.org/docs/get-started/installation)

### Using in a Nuxt SDP project with a Tide backend

See [Ripple Nuxt Tide](./packages/ripple-nuxt-tide.md) for using Nuxt with the Ripple Nuxt Tide package. This package adds data fetching capabilities via the the Tide Drupal JSON API as well as a module based system for extending content types and other functionality.

### Using in a Nuxt project without Tide

Ripple can be used in a Nuxt project without a Tide backend using the Ripple Nuxt UI package - See [documentation](./packages/index.md) for usage.

## Usage in a Vue JS Application (without Nuxt)

Currently Ripple mostly assumes a Nuxt environment, however it can be used without Nuxt in a Vue JS application - See https://github.com/dpc-sdp/ripple/tree/master/examples/vue-example-app for an example application setup.

## Usage in non Vue apps

*Currently Ripple is only usable in Vue JS environments*.

We are currently exploring options for using Ripple in other environments such as server rendered multi page apps. Drop us a feature request if you have a specific use case: 