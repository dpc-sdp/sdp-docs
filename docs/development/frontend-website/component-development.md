# Component development

## Developing custom component
!!! todo "This content has not been developed yet"
    
    How to develop custom component and contribute it back.

## API mocking 

We need to develop Frontend Websites against stable API. When Content Repository
is still being developed alongside with Frontend Website, it is very hard for 
front-end developers to develop against non-stable API.

Below is extensive explanation how to use different ways of mocking. Frontend
Websites may choose the most suitable method for their development.

### 3 ways of mocking

1. Internal mocking inside of Nuxt<br/>
   Inject mock HTTP client inside of Nuxt application and use it to read JSON
   responses from generated responses as a part of the test.
2. Automated mock generation<br/>
   Generate API response mocks using automatically generated API schema and 
   serve it to FE framework as a predictable and stable alternative API 
   endpoint.
3. Manual mock generation<br/>
   Generate dummy data on API side and store responses as JSON files to serve it 
   to the FE framework as a predictable and stable alternative API endpoint.
   
### Internal mocking inside of Nuxt

Inject mock HTTP client inside of Nuxt application and use it to read JSON
responses from generated responses as a part of the test.

#### How it would look like for a developer (DX)

*Initial setup*

1. Write a test that would test specific functionality.
2. Write a mock generation code within a test.
3. Repeat 1-2 for each test.
4. Commit code to the codebase

*When API is updated (for example, new field is added to a content type)*

1. Update mock generation and assertions for all relevant tests.
2. Commit code to the codebase

#### Problems

1. Writing mock generation code is complex and tiresome. When/if API changes, 
   there may need to be a change to a lot of mock generation code.
2. These mocks will not be used to browse fullFrontend Website. I.e., it will not be
   possible to browse homepage using these mocks.
3. Changes to API require manual update of files.

### Automated mock generation

Generate API response mocks using automatically generated API schema and serve
it to FE framework as a predictable and stable alternative API endpoint.

#### How it would look like for a developer (DX)

*Initial setup*

1. Drupal exposes API schema.
2. Fake generator reads the schema and generates response JSON files.
3. Files committed to FE repository.
4. Mock server serves JSON files.

*When API is updated (for example, new field is added to a content type)*

1. Re-genearate JSON response files (same as step 2 above).
2. Commit updated JSON files to FE repo (same as step 1 above).

#### Problems
1. The biggest problem is that current Drupal schema, provided by Schemata module,
does not provide enough context to allow automated generation and relationships
linking. For example, while descibing 'UUID' field, it says that the type is
'string', but says nothing about the format of such string. As a result -
generated UUID is a random string in incorrect format. And this goes on for all
fields.
2. Even if p.1 is resolved, the generated content uses random apporach to fill
fields. This has 2 issues: 
    1. the content will be constantly changing making a lot of changes in 
      committed files and confusing developers that expect specific data to be 
      shown
    2. optional fields will be randomly filled-in (which is what we want), but 
      there is no guarantee that _all_ optional fields are used in a set of 
      produced mocks. In other words, we need not just content with some 
      randomised fields, but a full content set of permutations of all fields.
3. Changes to API require manual update of files.


### Manual mock generation

Generate dummy data on API side and store responses as JSON files to serve it to
the FE framework as a predictable and stable alternative API endpoint.

#### How it would look like for a developer (DX)

*Initial setup*

1. API has some dummy content generated in predictable way that covers all permutations.
2. Manually ran script (or drush command) downloads all JSON responses as files.
3. Files committed to FE repository.
4. Mock server serves JSON files.

*When API is updated (for example, new field is added to a content type)*

1. Re-genearate JSON response files (same as step 2 above).
2. Commit updated JSON files to FE repo (same as step 1 above).

### Problems
1. Requires dummy content to exist on API site.
2. Changes to API require manual update of files.

