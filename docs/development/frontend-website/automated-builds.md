# Automated builds

SDP uses [CircleCI](https://circleci.com/gh/dpc-sdp) for all automated build
(CI) runs.   

## Build steps
- Build a site from supplied `package.json` file (dependencies are locked-in at 
  specific versions).<br/>
  This builds the site which is identical to the production site before running 
  tests.  
- Build style guide site
- Check coding standards in custom site code: JS, SCSS.
- Run unit tests (Jest), if any.

## Skipping CI builds

Add `[skip ci]` to the commit subject to skip CI build. Useful for documentation
changes.

## SSH into CI build
Circle CI provides SSH access into the build for 120 minutes after the build is
finished. SSH can be enabled once the build is started with SSH support.
1. Navigate to the job page
2. Click on the dropdown in the right top corner and select `Rebuild with SSH`.

## Test artifacts
Test artifacts (screenshots etc.) are available under 'Artifacts' tab in
CircleCI UI.
