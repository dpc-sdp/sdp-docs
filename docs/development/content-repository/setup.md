# Setting up a new Content Repository 

!!! note

    This chapter describes how to setup Content Repository using whole Tide
    distribution with all Tide modules included. It does not cover setting up
    of Tide modules outside of the  distribution. 

## Setup
Setting up Content Repository is similar to setting up a Drupal site from
any other contributed profile.

1. Create drupal project. <br/>
   Using [drupal-project](https://github.com/drupal-composer/drupal-project) 
    ```
    composer create-project drupal-composer/drupal-project:8.x-dev some-dir --no-interaction
    ```      
2. Add Tide profile:
    ```
    composer require dpc-sdp/tide
    ```    
3. Commit scaffolding files.
4. Install a site using `drush site-install`:  
    ```
    drush site-install tide --db-url=mysql://user:pwd@localhost/db_name --site-name=Example --account-name=admin --account-pass=pwd
    ```
5. Export the database and import it into your production database.     

## Hosting on Bay
Content Repository can be hosted on Bay. See
[Onboarding to Bay](../../../bay/onboarding/) chapter.

## Environments
The diagram below describes recommended environments for efficient front-end and
back-end development:

- Production front-end sites are connected to production Content Repository
  where API is stable and content is live.<br/>
  This is standard environments for production sites.
- UAT front-end sites are connected to UAT Content Repository, where API is
  stable and content is live, but changes are not public.<br/>
  These environments allow to work with a copy of the live content without
  exposing it to public, which is useful during new feature testing.
- Local, CI and Preview (per branch) front-end environments are connected to API-DEV
  Content Repository, where the latest API is still being developed and
  demonstrative-only but consistent content.<br/>
  This provides access to the latest API changes while developing new front-end 
  or back-end functionality.
- Other content consumers under active development may connect to the API 
  Content Repository with stable API and demonstrative-only but consistent 
  content.<br/>
  This allows predictable API behaviour and data, but without access to change 
  it. 

??? details "Expand to see the diagram"
  
    [ ![](../../assets/tide-setup-environments.png) ](../../assets/tide-setup-environments.png)  

