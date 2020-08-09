# Local development environment

## Vue.js tools setup 

The steps below describe how to setup IDE (PHPStorm/WebStorm) to work with 
Vue.js application.

### Setup JS version 
1. Install Vue.js plugin (follow the setup guide at  https://www.jetbrains.com/help/phpstorm/vue-js.html)
2. Set "JavaScript language version" to "ECMAScript 6" 
![Screenshot of PHPStorm settings window](../../assets/tools-phpstorm-js-version.png)

### Setup JS Debugging
1. Create a new JavaScript debug configuration
2. Specify the URL the app is running on (http://localhost:8000)
3. Set a breakpoint 
4. Start the debug session by pressing "Debug" button in WebStorm/PHPStorm.

Once the code where the breakpoint is has been triggered, the execution will
stop, and you’ll see the local and global variables, the call stack, and many
other things in the IDE debug tools window.

![Screecast of debugging session running in PHPStorm window](../../assets/tools-phpstorm-debugging-vue-app.gif)
