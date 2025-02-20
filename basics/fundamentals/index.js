// alert("Hi")

//$ and _ are allowed
// let $name = "John"

//let my-name = "John" //invalid

//reserved keywords are not allowed

//case-sensitive
// let name = "John"
let Name = "John"

// console.log(name);
// console.log(Name);

/* Task variables */
let admin;
let name = "John";

// admin = name;
// alert(admin); // "John"

let num = 42;
let price = 19.99;
let infinityValue = Infinity;
let bigNumber = 324567543245675432
let firstName = "John";
let lastName = 'Doe';   
let greeting = 'Hello ${firstName} ${lastName}!'; // "Hello John Doe!"
let isAvailable = true;
let isLoggedIn = false;

let user = {
    'name': "John",
    'age': 30,
    isAdmin: true
}
console.log(user.name)

let colors = ["red", "green", "blue"];
console.log(colors[2])

let name2 = "Ilya";

console.log( `hello ${1}` ); // ? hello 1

console.log( `hello ${"name2"}` ); // ? returns hello name2

console.log(`hello ${name2}`); // ? hello Ilya

let value = true;
console.log(typeof value); 
value = String(value);
console.log(typeof value);

let str = "123";
let num2 = Number(str);
console.log(num2); // 123

console.log('1' + 2)
console.log(2 + 2 + '1');
console.log('1' + 2 + 2);

console.log(1 + 2 * 2);
console.log((1 + 2) * 2);

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log( a ); // 3
console.log(c); // 0

let x = 1, y = 1;
let z = ++x;    //2
let z1 = y++;  // 1


let age = 2;
let message = age < 3 ? 'Hello bby!' : 
    age < 18 ? "Hello you are too young!" : 
        age < 100 ? " Greetings ! " :
            'What an unusal age!';
console.log(message);

let company = "Netscape";
(company == "Netscape") ? console.log("True") : console.log("False");

if ("0") console.log("0 is string");

// if (ECMAScript)
//     console.log("Rigth");
// else console.log("Wrong");

// Rewrite if using conditional operator '?'
let t = 6, t1 = 4;
let res = (t + t1 < 100) ? 'Below' : 'Over';
console.log(res);

let login = '';
let mess = (login == 'Employee') ?
    'Hello' : (login == 'Director') ?
        'Greetings' : (login == '') ?
            'No login' : '';    
console.log(mess);

let hr = 10
let isWekend = true;

if(hr > 11 || hr < 8 || isWekend) {
    console.log("Lunch time")
}

let day = 2;
if (day = 2 && day > 1) {
    console.log(day);
}

function showPrimes(n) {
    for (let i = 2; i < n; i++){
        if (!isPrime(i))
                console.log(i)
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++){
        if(n % i == 0) return false;
    }
}

showPrimes(10);


ask("Do you agree?", () => alert("You agreed."), () => {alert("You canceled the execution.")});