# Introduction on Javascript
## What is Javascript?

Javascript was initially creating to make webpages alive. Program in this language is called `scripts`.

It does not require any compilation to run. JS runs directly in the browser as plain text. Browser interprets JS code line by line and executes it. Today, Javascript executes on Browser and servers or any device which has `Javascript Engine`

Different browser engines have different codenames:
- Chrome : V8
- Firefox : Spidermonkey
- Safari : SquirrelFish
- ID: Chakra

How do engines work?
- The engine reads/parse the scripts
- Converts/compiles the script to machine code
- Machine code runs fast

### Environment based Javascript:
 - In Browser
 - Node JS

**In Browser JS can do the following:** 
 - Add new content to HTML page, change existing content, modify styles
 - React to user's action, run on mouse click, pointer movements, key presses
 - Send request over network to servers `(AJAX requests)`
 - Get and set cookies
 - Store data on client side in `Local Storage`

**In Browser JS cannot do the following**:
- Does not read any arbitrary file on hard disk, copy them or execute programs. No access to OS
- Modern browser has access to files but only if user drops in browser window or select via <input> tag
- They require user's explicit permission to enable web camera and work with it
- Different tabs or windows don't know each other unless they are opened via JS events. But if they come from different website/domain/protocol still different window or tab are unaware of each other. This is `Same Origin Policy` . 
- A page from http://anysite.com should not access another browser tab with url http://gmail.com. But it can easily communicate to web server but not other sites.
- This limitation does not exists if JS is run outside browser for example on server. Modern browsers allow plugins/extensions to ask for extended permissions

## JS Fundamentals
The `<script>`tag contains JS code which can be automatically executed when browser processes the tag.

Inside script we can specify JS modules. Simple scripts are wriiten html whereas complex scripts reside in separate file. Browser can download it and cache it so whenever other pages reference the same script it will take from cache instead of downloading it again. This reduces traffic and makes pages faster

Below is invalid :

```
<script src="file.js">
  alert(1); // the content is ignored, because src is set
</script>
```

In JS line break implicitly considers it as semicolon. Even if there is no semicolon but a line break it will terminate the sentence

To enable modern JS programming rules .which prevent common mistakes put **use strict** in the code. It helps catch silent errors and enforces best practices. Example:

```
"use strict";
x = 5; // Error: x is not defined

```
### Should we use use strict?
Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.

## Variables:

A variable is named storage for data.

Create or declare a variable by:
```
let message;
```

Put some data into it:
```
message = "hello"
```

Access it :
```
alert(message);
```

Declare multiple variable in one line:
```
let user = 'John', age = 5, message = 'Hello';
```
![alt](/variable.png)

Declaring variable twice triggers an error:
```
let message = 'This'
let message = 'That'
```
Gives error that message is already declared.

Functions are classified as pure or impure based on behavior. A pure function produce same output for the same input. Does not modify external state

Example of pure function:
```
    function add(a,b){
        return a + b;
    }
```

Impure functions relies on external state and return different results based on same input

Example for impure functions:
```
let sum = 0;
function addToSum(val){
    sum += val;
    return sum;
}
```
## Limitation on variable naming
- Name must contain letters, digits, symbols
- First character must not be a digit
- '$' and '_' can be used in names
- Hyphens not allowed
- case sensitive so 'name' and 'Name' are two different things
- Reserved keywords not allowed


```
//Without use strict
num = 5;   // will create num variable

// With use strict
"use strict";
num = 5   ❌ Error:  // will give error to declare it or num is not defined
```

```
let x; // Declares a variable 'x' without assigning a value
var y; // Declares a variable 'y' without assigning a value
const z; // ❌ Error: 'const' variables must be assigned a value at declaration
```

```
let a = 10; // Declares and assigns → Definition
var b = "Hello"; // Declares and assigns → Definition
const c = true; // Declares and assigns → Definition
```

## Constant

To declare a constant variable use `const` instead of `let`

const myBD = '12.07';
myBD = 23432 // ❌ Error: 'const' variables cannot be reassigned


`alert()` is browser specific and not node

