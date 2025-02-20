# learn-js-basics
Basics of Javascript.

What is JS?
- JS can help to build web and mob application, chat and cli, games, video streaming services

Where does JS code run? What provides run time env for execution?
- Browser: JS Engine which can execute JS code: Firefox:Spidermonkey and Chrome: V8
- Node(C++ program): Include google's v8 engine. It can execute JS code

JS vs ECMAScript:
- ECMAScript is a specification. ECMA helps in defining standards.
- JS is a programming lang which conforms to ecmascript

To write JS code we need script element: Two places where we can add:
- head
- body

Best practice: at the end in the body 
**Since browser parses the file from top to bottom and if we put it in the beginning then browser will get busy parsing and executing JS code and won't be able to render content of page!**
**Code in the script needs to talk to element in webpage.**

## Separation of concern
- Seperate JS from HTML
  ```
  <script src="index.js"></script>     // write this inside index.html to point to js file
  ```
### Learn JS code
```
node index.js
```
### Variables
We use variable to store data temporarily in computer's memory

Before ES6 we used var keyword to declare a variable

From ES6 we use <code>let</code> keyword

```
let name;
console.log(name);    // we see undefined by default
```
- No hyphen or space
- Dont start with number
- Use camelcase
- case-sensitive
- Declare each var on single line

Value of 'let' can change but for 'const' doesn't change.

Primitive data type
- string
- number
- boolean
- undefined
- null

Language:
Statically-typed: In static language when we declare a variable the type is set and cannot be changed in future

Dynamically-typed: Type can be changed

***JS is dynamically typed***

To check the type of variable use:
```
typeof name
```

In JS we dont have different type of numbers like floating or double

Two types:
Primitive type:
- string
- number
- boolean
- undefined
- null

```
string name = null;     // typeof name = object
```

Reference Types:
- objects
- array
- functions

## Objects

let person = {
    name: 'Mosh',
    age: 30
}
