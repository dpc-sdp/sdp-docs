# Front-End Coding Standards

We use [JavaScript Standard Style](https://standardjs.com/) and 
[Official ESLint plugin for Vue.js](https://eslint.vuejs.org/) for all our [contributed](../../ripple/components.md) 
and custom components.

## Components styling agreements
- `rpl` prefix is used for all classes.
- Use hyphen `-` to separate words within class, use 2 hyphens `--` to separate
  class parts. For example, `.rpl-vertical-tabs--open`.
- Use underscore `_` to separate words within mixins, use 2 underscores `__` to 
  separate mixin parts. For example, `rpl_vertical_tabs__tabs()`.    
- Class names are based on hierarchy:
   - Component class name: `.rpl-[component-name]`
   - Element class name: `.rpl-[component-name]__[element-name]`
   - Modifier class name: `.rpl-[component-name]--[modifier-name]`
- Each component should define as variables:
   - colours 
   - font sizes
   - padding
   - margins (Not needed on margins if values are used for absolute placement, 
     e.g. `auto`, `0`).
- Variables should use `rpl` prefix.
- HTML elements can be defined by their tag (not just class) where suitable.


Component example:
```scss
// Core
// =====================================
// Variables.
$rpl-core-link-color: blue;
 
// Mixins.
@mixin rpl_core_link() {
  color: $rpl-core-link-color;
  text-decoration: underline;
}
```
