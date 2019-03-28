# Modules

The standalone modules are split based on the features or functionality they 
provide. Modules can be installed as a part of the profile as well as a 
standalone (provided that other dependency modules installed as well).
 
- Every module implements a well-defined feature set.  
- Modules are versioned.<br/>
  This allows for more granular approach when picking modules for particular 
  site needs.
- Every module has a minimal dependency on other modules. 
- Every module has a set of relevant automated tests.  

## List of modules

| Name              | Machine name      | Category              | Repository                                   | Description                                                                                                   | 
|-------------------|-------------------|-----------------------|----------------------------------------------|---------------------------------------------------------------------------------------------------------------| 
| Tide API          | tide_api          | Utility               | https://github.com/dpc-sdp/tide_api          | Exposes content entities to API endpoints. it is required for sites running headless.                         | 
| Tide Core         | tide_core         | Utility               | https://github.com/dpc-sdp/tide_core         | Configurations and settings for Tide distribution. Dependency module for any other Tide module.               | 
| Tide Event        | tide_event        | Content type          | https://github.com/dpc-sdp/tide_event        | Event content type and fields.                                                                                | 
| Tide Landing Page | tide_landing_page | Content type          | https://github.com/dpc-sdp/tide_landing_page | "Landing page content type with fields. Based on paragrpahs, it allows to create pages with complex layouts." | 
| Tide Media        | tide_media        | Utility               | https://github.com/dpc-sdp/tide_media        | Media types and configurations.                                                                               | 
| Tide Monsido      | tide_monsido      | 3rd party integration | https://github.com/dpc-sdp/tide_monsido      | Integration with Monsido platform.                                                                            | 
| Tide News         | tide_news         | Content type          | https://github.com/dpc-sdp/tide_news         | Event content type and fields.                                                                                | 
| Tide Page         | tide_page         | Content type          | https://github.com/dpc-sdp/tide_page         | Page content type and fields.                                                                                 | 
| Tide Search       | tide_search       | Utility               | https://github.com/dpc-sdp/tide_search       | Search configurations and settings.                                                                           | 
| Tide Site         | tide_site         | Utility               | https://github.com/dpc-sdp/tide_site         | Multi-site and multi-section content sharing.                                                                 | 
| Tide Test         | tide_test         | Utility               | https://github.com/dpc-sdp/tide_test         | Test content type and helpers used to test other modules.                                                     | 
| Tide Webform      | tide_webform      | Utility               | https://github.com/dpc-sdp/tide_webform      | Forms supports such as Content Rating form.                                                                   |  

## Automated testing

Tide modules use PHPUnit and Behat for unit and integration/behavioural 
testing. The tests are running inside of the Continuous Integration pipeline 
provided by [CircleCI](https://circleci.com). 

For every change pushed to the repository, CircleCI starts the build, where 
tests are running in 2 modes: `normal` and `suggested`. 

In `normal` mode the module is installed with it's required dependencies into
freshly built Drupal site. Once installed, the tests will run and check that 
the configuration shipped with the module indeed works.

In `suggested` mode, the module is installed with it's requires and **optional**
dependencies. Once installed, the tests will run and check that the  
configuration shipped with the module indeed works and that it does not conflict
with other optional modules.

This "double-testing" is very powerful tool to keep configuration in 
releasable state.

## Versions
Modules versions follow [semantic versioning](https://semver.org/):

!!! quote
    
    Given a version number `MAJOR.MINOR.PATCH`, increment the:<br/>
    `MAJOR` version when you make incompatible API changes,<br/>
    `MINOR` version when you add functionality in a backwards-compatible 
    manner, and<br/>
    `PATCH` version when you make backwards-compatible bug fixes.<br/>
    
    Additional labels for pre-release and build metadata are available as 
    extensions to the `MAJOR.MINOR.PATCH` format.

With some Tide functionality heavily relying on specific Drupal core 
version, when features added and changed in `MINOR` Drupal core 
versions (like moving Media into Drupal core), Tide modules increment 
their `MAJOR` version when Drupal core or dependent contributed modules change 
their API.

Since Tide modules functionality is built on top of Drupal core and contributed 
modules, it has to "tighten" versioning rules.

Every Tide module has to increment the:

- `MAJOR` version when Drupal core or contrib module has an API change. An 
  example of this is moving Media into Drupal core in version `8.5`.
- `MINOR` version when Tide module functionality is enhanced or when other 
  dependent Tide module has it's API change (that would trigger own release).   
- `PATCH` version when there is a backwards-compatible bug fixes (no change 
  from SemVer).

## Maintenance 
SDP development team is committed to support development, maintain all 
Tide modules and follow versioning rules.

## Developing modules
See [Module development](../../development/content-repository/module-development) chapter.
