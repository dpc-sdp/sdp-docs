# Preview environments

Preview (*dynamic*/*temporary*/*disposable*/*ephemeral*) environments are environments
identical to production and created to test features or demo functionality.

Bay provides up to 10 preview environments for each Content Repository or 
Frontend Website. 

New environments created automatically once a pull-request is created in the 
GitHub repository. If messenger notifications enabled, a new message about 
deployment will be posted there.

Once pull request is closed, the environment automatically destroyed and all 
environment data is removed. If messenger notifications enabled, a new 
message about environment removal will be posted there.     
