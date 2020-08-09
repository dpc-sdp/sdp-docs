# Module development

## Developing contributed module

Development of the brand new contributed module (Tide or not) may take place
either in the separate repository or within an instance of the Content
Repository installation (followed by extraction into a separate module).

!!! note

    We are using `dpc-sdp` as an organisation and `tide_mymodule` in the
    examples below. Update these values to your real organisation and module
    name as required.

### Developing within an instance of Content Repository.
1. Create a local vendor directory `dpc-sdp` in the root of your project.
2. Create a module `tide_mymodule` in `dpc-sdp` directory with required 
   functionality.
3. Add repository information to your `composer.json`:
    ```
    "repositories": {
        "dpc-sdp/tide_mymodule": {
            "type": "path",
            "url": "dpc-sdp/tide_mymodule"
        }
    }
    ```
4. Require this new module as a standard Composer package:
    ```
    composer require dpc-sdp/tide_mymodule
    ```
5. Commit the changes to `composer.json` and `composer.lock`.
6. Enable module in Drupal.

### Extracting contributed module into a separate repository
1. Create a repository on GitHub with the name of yor module: `dpc-sdp/tide_mymodule`
2. Copy the contents from one of the existing tide repositories (for example,
   [Tide Page](https://github.com/dpc-sdp/tide_page) or use 
   (Dev-Tools)[https://github.com/dpc-sdp/dev-tools] for scaffolding.
3. Commit required files and push to remote.
4. Configure CircleCI to run tests for your module. Note that you must be an
   administrator of the repository to setup CircleCI.
5. Update `README.md` file with relevant information, including CircleCI build 
   status badge. 
6. Depending if this module becomes a part of the Tide profile after being 
   extracted:
   - If this module becomes a part of Tide profile and your Content Repository 
     instance uses Tide profile, open a new PR to Tide profile repository and add the code below:
      ```
      "dpc-sdp/tide_mymodule": {
          "type": "vcs",
          "no-api": true,
          "url": "https://github.com/dpc-sdp/tide_mymodule.git"
      },
      ```
      Once added, reference this module in the Tide profile's `composer.json`.  
   
   - If this module is not going to be a part of the Tide profile or going
     to be included in your Content Repository instance directly, replace 
     configuration with the following:
      ```
      "dpc-sdp/tide_mymodule": {
       "type": "vcs",
       "no-api": true,
       "url": "https://github.com/dpc-sdp/tide_mymodule.git"
      },
      ```   
         
7. Run `composer update --lock` to update version information and references.
8. Commit the changes to `composer.json` and `composer.lock`.

## Releasing a contributed module
Once the contributed module is ready to be released as a stable version, make 
sure that release versioning follows [semantic versioning](https://semver.org/). 
See [Versions](http://sdp-docs.docker.amazee.io:8000/tide/modules/#versions) for 
more information about version increments. 

### Patching modules

During development of Content Repository instance or one of the Tide modules, 
there may become a need to apply a patch to one or more of the Tide modules. 
The patching process is similar to patching any other Composer dependency:
1. Create a PR with required change in the `dpc-sdp/tide_mymodule` GitHub page
2. Add `.patch` to the URL of the PR and go to that page in the browser.
3. Copy resulting redirected URL to the "patches" section of `composer.json`:
   ```
   "patches": {
       "dpc-sdp/tide_mymodule": {
           "Descritoipn of the PR": "https://patch-diff.githubusercontent.com/raw/dpc-sdp/tide_mymodule/pull/123.patch"
       },
   }
   ```
4. For Content repository instance, run `composer update --lock`
5. Commit changed `composer.json` and `composer.lock`.

## Working with dependent modules 

!!! tip

    Before proceeding further, make sure that you are familiar with Tide modules 
    [dependency tree and versioning](../../../tide/modules/#tide-profile-vs-tide-core-module)

In Tide ecosystem, there are modules that contain shared configuration (e.g. `tide_core`)
and configuration based on that shared one (e.g. `tide_page`). The simplest 
example is a field storage and field instance - fields may be re-used across
content types (each of which is a separate module), but the configuration for a 
field instance is shipped with a relevant module.

In this case, `tide_core` is a _dependent_ and `tide_page` is a _dependee_ module 
from the point of configuration hierarchy (field instance cannot exist without
filed storage),

!!! note

    In the explanation below we are using field storage and field instance as 
    an example of configuration that has one shared parent and many unique 
    children: a single field storage may be shared accross multiple content 
    types and therefore have multiple field instances.

### Updating _dependee_ module
Updating _dependee_ module is no different then updating any other modules when
updates do not require adding a new shared fields: create a PR with a change,
QA it, merge and release. 

But updating _dependee_ to add a shared storage to _dependant_ module requires
additional coordination.

!!! note

    We are using `tide_core` as an example of the shared configuration storage 
    module and `tide_page` as an example of the unique configuration sotrage 
    module. But these can be any modules with similar configuration dependency 
    hierarchy.
    
!!! note

    The steps below assume that change always triggers a release. Obvously, 
    multiple changes can be bundled before publishing a new release.
    
    The "_absolutely must_" is used in context "to immidiately apply the 
    change". If the changes needs to be bundled, the  "_absolutely must_" is 
    used to the last applied change only.    

1. Add field storage configuration to `tide_core`, commit it, push to remote and 
   open new PR. 
2. Add field instance configuration to `tide_page`, commit it.
3. Add a patch from `tide_core` PR (see 
   [Patching modules](#releasing-a-contributed-module) above) to the `tide_page`
   `composer.json`, commit it, push to remote and open a new PR.
4. Assuming that QA/UAT process happens within an instance of the Content 
   repository, create a new branch, add both patches to `composer.json` and 
   create a PR that will allow to QA/UAT this change within fully installed site.

    !!! info
        
        At this point, there are 3 PRs opened and waiting for QA/UAT to approve 
        changes.  

5. Once QA approved, perform a PR merge starting from the most deepest 
   _dependent_ - `tide_core`. This is because field storage configuration may
   exist by itself, while field instance cannot.
   - Once merged, `tide_core` absolutely must increment it's version (see 
     [dependency tree and versioning](../../../tide/modules/#tide-profile-vs-tide-core-module))
   - The _dependee_ `tide_page` PR has to now replace patch with a version
     constraint for `tide_core` to make sure that the latest version is used.
     Once this change is made, a PR should pass the CI checks and should be 
     merged to the main branch.
   - Once merged, the _dependee_ `tide_page` absolutely must increment it's 
     release version.
6. If changed modules were required by `tide` profile, a new PR should be 
   created with new version constraints updated. Note that this step is required 
   only with constraints needs to be updated. I.e., `tide_page` would have it's
   `MAJOR` version incremented (due to an added field which is an API breaking 
   change), so the `tide` profile has to adjust it's version constraints 
   accordingly, if required. <br/>
   When PR passes CI, it may be merged to a `master` branch of the `tide` 
   profile. <br/>
   Once there are enough updates (according to release cycle or other release 
   schedule), a new release of the `tide` profile must be created. <br/>   
7. All consumer sites will receive the updated code once they run 
   `composer update`.
      
    !!! info
            
        At this point, there will be 2 releases in Tide modules, 1 release 
        in Tide  profile and 1 release in consumer site.
        
### Conclusion
Although this change management process seemed over-complicated and cumbersome,
it provides:

- ability to QA and UAT every change independently
- flexibility for consumer sites to include not-yet-merged changes as patches
- utilise granular versioning for a large number of consumer websites 
- bundle changes before making a release        
