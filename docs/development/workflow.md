# Development workflow

This workflow describes working on features as a developer on Content Repository
and Frontend Website projects. 

1. Pick a ticket in your issue tracker:
    1. Make sure that all requirements, solution direction and acceptance criteria
       are clear. If not, address issues with Technical Lead or Product Owner.
    2. Assign the ticket to yourself.
2. Create a new feature branch named `feature/CODE123-short-hyphenated-description`. 
3. Work on the ticket functionality:
    1. Install new contributed modules or packages as required.
    2. For Content Repository - configure and export configuration changes; write 
       `hook_update_N()` implementations (but be mindful that Drupal 8 does not 
       require many of these).
    3. For Frontend Website - identify and use existing or create new Ripple
       components; update styles according to style guide as required; make sure 
       that style guide has been updated and new components were added (it is 
       important to always have style guide up to date).
4. Add tests:
     1. For Content Repository - identify required Behat tests (only test your custom 
     configuration, and critical user journeys; do not test Drupal's standard
     behaviour); identify and implement PHPUnit tests.
     2. For Frontend Website - identify required tests and mocks, and implement 
     them; add unit tests for any custom Nuxt functionality.  
5. Commit all changed and added files. Pay special attention to configuration 
   files and their counterparts (`composer.json`, `composer.lock`, 
   `package.json`,  `package-lock.json`). 
6. Create a pull request in your issue tracker - see [Preparing code for code
   review](/development/code-review/#preparing-code-for-code-review)
7. If you are using a messenger to communicate with your development team - 
   copy and paste the link to the created pull request into the messenger 
   and ask for a review.
8. Move the ticket in your issue tracker to `In code review` state (create this 
   state if it does not exist to help identify tickets pending review).
9. Once pull request is approved - merge it to the mainline branch and make
   sure that automated tests passed after the merge.
