# Troubleshooting

## Docker Host container is full
If you're seeing errors like
```
Error processing tar file(exit status 1): write /app/docroot/themes/custom/governor/build/images/homepage-background.png: no space left on device`
```
run `docker image prune -a` to free-up space in your Docker.

## A branch is pushed into the repo, but no deployments are happening in Bay
CI passes, but nothing happening in the messenger build channel. 

The branch name might be too long. Please make sure that the name of your branch
is less then or equal to 40 characters.
