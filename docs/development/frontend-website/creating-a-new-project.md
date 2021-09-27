# Creating a new Ripple project

## Scaffolding a new site

### For SDP supported clients

For clients who have signed an Memorandum of Understanding (MOU) with SDP, new SDP sites are generally scaffolded by the SDP ops team using an internal Ansible based tool. Usually this involves creating a a Tide backend and Ripple frontend projects and setting up the hosting environment in Bay our hosting environment. You should have a working private Github repo ready to get started working with Ripple.

### For non supported users

For those wanting to use Ripple without support from SDP we have a tool called `create-ripple-app`. We also use this internally to scaffold new sites and perform upgrades. It is heavily based on `create-nuxt-app`. Instructions for use are in package [README](https://github.com/dpc-sdp/ripple/tree/develop/packages/create-ripple-app)

