# Environment variables
Environment variables are used to control various build and runtime functionality of applications running in Bay.

Environment variables are managed using the SDP Configuration Management Database (CMDB) which is an implementation of configuration as code.

>A centralised place to manage lagoon environment variables. The CMDB will be configured to run on a nightly schedule to enforce the values defined in this repository. This nightly run will also check for differences between actual values and CMDB, providing alerts on the diff before enforcing the values.

For local development environments `.env.local` files can be used to over-ride project values and should not be committed to the repository.

Environment variables should not be defined in a projects codebase repository.

CMDB is currently a private repository and is planned to be updated to public in the future.

If you need a custom variable implemented or an update submit a support request - http://support.sdp.vic.gov.au/ - and include the following information.

**nb:** If the variable is sensitive please do not include it in your support request. Instead use a password manager such as Lastpass to share the value.

```
branch: [ 'project' | 'branchName' ]
name: string
scope: [ 'GLOBAL' | 'BUILD' | 'RUNTIME' ]
sensitive: [ True | False ]
value: string
```

## Bay variables
Common project variables

### Shared - set in both

* BAY_IMAGE_VERSION - The version of the Docker images to use, either `edge` or
`latest`.
* ENABLE_BAY_INTEGRATION - Toggle for bay functionality. Currently only used in tide apps for generating drush aliases.
* JIRA_ENDPOINT - The URL to the JIRA API for the project.
* JIRA_PASSWORD - The password/auth token used to access the JIRA API.
* JIRA_USERNAME - The username used to access the JIRA API.
* SEARCH_AUTH_PASSWORD - The central Elasticsearch service authentication
password.
* SEARCH_AUTH_USERNAME - The central Elasticsearch service authentication
* SEARCH_HASH - The search hash to access the correct Elasticsearch index for
username.
this project. This is used as a prefix to the SEARCH_INDEX.
* SEARCH_URL - The URL for the Elasticsearch endpoint.

### Frontend

* BASIC_AUTH - this is used within the FE nodejs app to turn HTTP Basic
Authentication on or off
* CONTENT_API_AUTH_PASS - This is the HTTP Basic Authentication password used
for both frontend requests as well as the HTTP Basic Authentication password
used for requests to the BE API.
* CONTENT_API_AUTH_USER - This is the HTTP Basic Authentication username used
for both frontend requests as well as the HTTP Basic Authentication username
used for requests to the BE API.
* CONTENT_API_SERVER - The URL for the BE API. This should include a trailing
slash.
* DISPLAY_ERROR - Boolean to turn displaying errors withing the browser on or
off
* GTM_ID - The Google Tag Manager ID. This is normally blank outside of
production. However, if the project GTM has the configuration to handle different
environments by domain name, we can add it in all environments.
* NODE_ENV - If this is set to `production`, the project build the node project
ready for a production release. This should be the case for everything outside
of a users local environment.
* SEARCH_INDEX - The search index name for the Elasticsearch index. This is
prefixed by the SEARCH_HASH.
* SEARCH_LOG - Logging level for Elasticsearch queries - logged to client console
and server stdout. options: <empty> (default) | 'trace'.
* SEARCH_SERVICE - The search service to use, currently, this can only be
`elastic`.

### Backend

* BASIC_AUTH - This is the default variable from
[Lagoon for BASIC AUTH](https://lagoon.readthedocs.io/en/latest/using_lagoon/docker_images/nginx/#basic-authentication)
, used in the nginx-php container.
This should always be set to `0` as backend projects use the Drupal module
 [Shield](https://www.drupal.org/project/shield).
* COMPOSE_PROJECT_NAME - This is the same as `PROJECT_NAME` defined below.
* COMPOSER - The composer.json file to use.
* DRUPAL_MODULE_PREFIX - The name of the custom module in a consumer project.
The module name will be ${DRUPAL_MODULE_PREFIX}_core.
* DRUPAL_PROFILE - The Drupal profile used by this site.
* DRUPAL_REFRESH_SEARCHAPI - A boolean that determines if the search index should
be cleared and rebuilt during a deployment. This should always be `0` in `production`.
* ENABLE_REDIS - This is a boolean switch to turn redis on or off.
* FE_DOMAINS - This is a list of FE domains that are connected to the terms in the
sites taxonomy. This value is used to reset the value in this field to ensure
links that are modified via the API point to the correct FE environment.
* LAGOON_ROUTE - This is required for drush 9 integration on Lagoon.
https://github.com/amazeeio/lagoon/blob/3a99548f20275b85525b2909905df819680bbe1f/images/php/cli-drupal/drush.yml
https://github.com/dpc-sdp/content-vic-gov-au/pull/617
* PHP_MEMORY_LIMIT - The [PHP Memory Limit](https://www.php.net/manual/en/ini.core.php#ini.memory-limit) value, this will be injected into the PHP container.
* PROJECT_NAME - The name of the Lagoon Project.
* SECTION_IO_PASSWORD - This is the password used to authenticate cache invalidation 
requests to the [Section](https://section.io) API.
* ENABLE_SMTP - Global toggle for SMTP.
* SMTP_HOST - Hostname of SES SMTP endpoint.
* SMTP_PORT - Port of SES SMTP endpoint.
* SMTP_PROTOCOL - SMTP transmit protocol.
* SMTP_USERNAME - Username for authenticating with SMTP server.
* SMTP_PASSWORD - Password for authenticating with SMTP server.
* SMTP_TIMEOUT - Timeout for SMTP connections.
* SMTP_FROM - Email address to set as the From address.
* SMTP_REPLYTO - Email address to set as the Reply-To address.
* WEBROOT - This is normally set to `docroot` and is the location of the Drupal
root for this project.
