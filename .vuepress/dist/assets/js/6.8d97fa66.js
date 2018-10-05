(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{166:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v('Before starting front-end development, you need the site to be setup in Drupal backend first. The Drupal admin path for add site is: "/admin/structure/taxonomy/manage/sites/overview". Ask SDP team to help if you don\'t have access to it.')]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("At this stage, we don't have a start kit to start the site project automatically. However, it's the on the road map.")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("Ask SDP operation team for add them.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("You also will need to update search configs, contact SDP team for help on that part.")]),t._v(" "),t._m(13),t._v(" "),e("p",[t._v("Basically, customise dev work only happens in two files:")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),e("p",[t._v("We are using Ripple pattern library "),e("a",{attrs:{href:"https://ripple.sdp.vic.gov.au/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ripple.sdp.vic.gov.au/"),e("OutboundLink")],1),t._v(" in this project.")]),t._v(" "),e("p",[t._v("You can override "),e("a",{attrs:{href:"https://github.com/dpc-sdp/ripple",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ripple"),e("OutboundLink")],1),t._v(" scss variables in\n"),e("code",[t._v("/assets/_theme.scss")]),t._v(" such as colour.")]),t._v(" "),e("p",[t._v("Currently all scss variables with "),e("code",[t._v("!default")]),t._v(" in Ripple can be overriden.\nWe will build a guide of variables in future. But for now, you can check "),e("a",{attrs:{href:"https://github.com/dpc-sdp/ripple/blob/master/packages",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ripple packages"),e("OutboundLink")],1),t._v(" scss files if you want to go deep.")]),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("Each semi-independent site will have their own static files.")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"create-a-semi-independent-site"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-semi-independent-site","aria-hidden":"true"}},[this._v("#")]),this._v(" Create a Semi independent site")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"tide-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tide-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Tide setup")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"create-a-github-repo-for-site"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-github-repo-for-site","aria-hidden":"true"}},[this._v("#")]),this._v(" Create a github repo for site")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Create a new empty project repository in github. It need to be under "),s("code",[this._v("dpc-sdp")]),this._v(" org and be private.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"clone-code-from-vic-gov-au"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clone-code-from-vic-gov-au","aria-hidden":"true"}},[this._v("#")]),this._v(" Clone code from vic gov au")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("So for now, need to copy the code from vic-gov-au into your project as a base template. Create "),s("code",[this._v("develop")]),this._v(", then push both "),s("code",[this._v("develop")]),this._v(" and "),s("code",[this._v("master")]),this._v(" to remote.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"github-repo-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-repo-settings","aria-hidden":"true"}},[this._v("#")]),this._v(" Github Repo settings")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Go to repo settings, change defualt branch to "),s("code",[this._v("develop")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Add protection to "),s("code",[this._v("production")]),this._v(", "),s("code",[this._v("master")]),this._v(" and "),s("code",[this._v("develop")]),this._v(" branchs.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"openshift-and-circle-ci-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openshift-and-circle-ci-integration","aria-hidden":"true"}},[this._v("#")]),this._v(" Openshift and Circle CI integration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"custom-env-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-env-config","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom "),s("code",[this._v("env")]),this._v(" config")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In all "),s("code",[this._v(".env")]),this._v(" and "),s("code",[this._v(".lagoon.env...")]),this._v(" files(you can find them in project root dir), replace the "),s("code",[this._v("SITE_ID")]),this._v(" to the right site id. Ask SDP team to help if you don't know what SITE_ID is for your site.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In all docs and configs, replace all "),s("code",[this._v("vic-gov-au")]),this._v(" and "),s("code",[this._v("vic.gov.au")]),this._v(" to your site name.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"site-theme-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#site-theme-settings","aria-hidden":"true"}},[this._v("#")]),this._v(" Site theme settings")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("/assets/_theme.scss")])]),this._v(" "),s("li",[s("code",[this._v("/assets/_custom.scss")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"custom-scss-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-scss-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom scss variables")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"custom-static-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-static-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom static files")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[t._v("Images(need to be exact same size and shape)")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("/static/img/header-pattern-bottom.png")])]),t._v(" "),e("li",[e("code",[t._v("/static/img/header-pattern-shape.png")])]),t._v(" "),e("li",[e("code",[t._v("/static/img/footer-shape.png")])])])]),t._v(" "),e("li",[e("p",[t._v("Javascript files. Open "),e("code",[t._v("/nuxt.config.js")]),t._v(" file, in "),e("code",[t._v("head")]),t._v(" config "),e("code",[t._v("script")]),t._v(" setting, you should see:")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-Javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("head"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  script"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" src"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'//cdn.monsido.com/tool/javascripts/monsido.js'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defer"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" src"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'/js/monsido.js'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defer"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" src"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'https://www.googletagmanager.com/gtag/js?id=UA-120824569-1'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("async")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" src"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'/js/gtag.js'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defer"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" src"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'/js/hotjar.js'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defer"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Remove or add the analytics JS if need. For local js files, find them in "),s("code",[this._v("/static/js/")]),this._v(", replace them as need.")])}],!1,null,null,null);n.options.__file="create-site.md";s.default=n.exports}}]);