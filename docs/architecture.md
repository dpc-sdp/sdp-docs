# Architecture

Single Digital Presence (SDP) is a distribution that consists of:
- a content repository with exposed API (headless [Drupal](https://www.drupal.org) distribution called
**[Tide](../tide)**)
- a front-end components library ([Vue.js](https://vuejs.org/) with [Nuxt](https://nuxtjs.org/) server rendering framework called 
**[Ripple](../ripple)**),
- hosted on the latest generation hosting platform([Kubernetes](https://kubernetes.io/)-based [Docker](https://www.docker.com/)
container platform called **[Bay](../bay)**). 

## Application system components

At the application layer, there are 2 main components of the system:

- **[Tide](../tide)** - Drupal 8 headless distribution that serves as a content 
  repository.
- **[Ripple](../ripple)** - Vue.js-based library of front-end components. Each 
  instance of Ripple serves as a standalone front-end application for a website.

!!! note

    Two main requirements had a significant effect on the SDP architecture:  
    
    - Content sharing across multiple sites.
    
    - Content syndication via API.
      
    [Content sharing](#content-sharing) is a common requirement in larger
    organisations, however the solutions are highly complex and the publicly
    available options are not mature enough for immediate use.

## System components inheritance

There are 3 layers of components in the distribution. The features provided by
every layer contribute to a final particular website feature set.

Each of the layers is owned, supported and maintained by a distinct community:

- Open Source - provides Drupal core and contributed modules. It is maintained
  by a worldwide Drupal community.
- Distribution - provides content types, multi-channel and API features. It is 
  maintained by SDP development team. 
- Specific website - provides unique site features and design components. It is
  maintained by a particular website development team.

![System componets inheritance](assets/system-components-inheritance.png)

See [Tide](../tide) and [Ripple](../ripple) for more information about architecture.

## Content sharing

Content editors create content and select content sharing targets such as 
frontend websites and site sections for each content piece. Drupal 
then serves this content as data through an API to each frontend website,
implemented as a separate front-end application.

The content repository site has only a basic frontend and its IP is restricted to a
list of allowed IP addresses. This allows content editors from designated offices
access to the editorial interface.

The API endpoints for the content repository site are accessible to the world
over the same predefined domain (e.g., https://api.agency.gov.au). There is no
authentication for content consumers.

Content editing for all sites is performed through the central content
repository instance (e.g. https://content.agency.gov.au).

There are no restrictions on editing content between various sites,
allowing content editors to be used across sites to better utilise limited
resources.

Content approvals are still restricted to ensure content is only published upon
approval by relevant users. This ensures cross site changes do not go public
without proper approval. All content changes are tracked, so users making
changes to the wrong site can receive further training to prevent future
mistakes.
