//alert('Hello World'); // Do not use for debugging. Stops the script! 
 //console.log('Hello World');
//console.error('This is an error');
// console.warn('This is a warning');
// console.log(prompt("age"))

/* Variable */

//var name = "loay"
//console.log(name)
//var name = "instructor"
//console.log(name)


 //if (2 == 2) {
 //    var age = 18
 //    console.log(age)
// }
// console.log(age)

/** Data Type */

 //var name = "5"
 //console.log(typeof(name))
 //var age = 26
//console.log(typeof(age))
// var tallness = 1.75
// console.log(typeof(tallness))
// console.log(typeof(tallness))
// var isPerson = true
// console.log(typeof(isPerson))
// var x = null 
// console.log(x)
// var z;
 //console.log(typeof(z))


// ************ ARRAYS - Store multiple values in a variable
// var numbers = [1, 2, 3, 4, 5];
// var fruits = ['apples', 'oranges', 'pears', 'grapes'];
// var hobbies = ["sleep", 33, true];

// console.log(numbers);
 //console.log(fruits);
 //console.log(hobbies);

// ************ OBJECTS LITERALS
 //var person = {
   //  name: "Eve",
   //  age: 5000,
    // isPerson: true,
    // hobbies: ["eating", "sleeping"]
   // };
 //console.log(person);

// ************ FUNCTIONS (as a type)
//function dummyFunc(){}

// Check type
//console.log(typeof dummyFunc);


/****** String concatination **** */
// var name = "louay"
//var age = 24

//console.log('My name is ' + name + ' and I am ' + age);
 //console.log('je m\'appelle wtvr')

/****** String methods & properties **** */
//var s = 'Hello World';
//var val;

// Get length
 //val = s.length;
//console.log(val)

// String Index
// console.log(s[9]);

// Change case
// val = s.toUpperCase();
// val = s.toLowerCase();

// Get sub string
// val = s.substring(0, 5);

// Split into array
// val = s.split('');
//val = val.join('+');

 //console.log(s)
//console.log(val)

/******* Array methods & properties *****/
//var colors = ['black', 'white', 'red', 'blue'];
// console.log(colors)

// Get length
 //console.log(colors.length)

// Get one value (!: Arrays start at 0)
// console.log(colors[1]);

// Add value using push()
 //colors.push('yellow');

// Add to beginning
// colors.unshift('purple');

// Remove last value
// colors.pop();

// Remove first value
 //colors.shift();

// Check if array
// console.log(Array.isArray(colors));

// Get index
// console.log(colors.indexOf('blue'));

// console.log(colors);


/****** Arithmetic Operators */
// + , - , * , / , % , ++ , -- , **

// console.log(13-2)
// console.log('3'*'2')
// console.log(3*'TEXT')
// console.log('10'/'2')
 //console.log(10%2)
// console.log(10%3)
// console.log('3'**'2')

 //console.log(5+3)
 //console.log(5+'a')

// var y = 5
 //console.log(y)
// console.log(++y)
 //console.log(--y)

/****** Object Literals *********/

 //const person = { 
    // an object is a collection of key-value pairS 
   // firstName: 'Adam',
   // age: 30,
   // hobbies: ['music', 'movies', 'sports'],
   // address: { street: '66 Main st',city: 'wtvr',state: 'over there'}
   //  };
    
    // Get single value (obj.key)
     //console.log(person.firstName)
    
    // Add property
    // person.email = 'adam@gmail.com';
     //person.hobbies.push('singing');
    // console.log(person);
    
    // // ************ /!\ Array of objects
     //const users = [
     //{
      //  name: "person",
       // age: 23,
       // email: "p1@gmail.com",
    // },
     //{
       // name: "person 2",
       // age: 31,
       // email: "p2@gmail.com",
    // },
     //{
        // name: "person 3",
        // age: 155,
        // email: "p3@gmail.com",
     //},
     //];
    
    // console.table(users)
    // console.log(users)

// // *** Objects
// var person = {
//     name: 'foulan',
//     age:27,
//     adresse:'tunis'}
    
// Change a property
// person.name = 'mohamed'
    
// Delete a property
// delete(person.age)
    
// Add a property
// person.email = 'm@gmail.com';
    
// console.log(person)
    
// // *** Tables
// var numbers = [1,2,3]
    
// Still an assignment ! (with a new table)
// numbers = [2,3]
    
// numbers[1] = 'hello'
    
// console.log(numbers)

/******* Truthy & Falsy ********/
// false, undefined, null, 0, "", NaN

// var test=null;
// var title=""
 //var y
 //var a = 0

 //console.log(test)
// console.log(Boolean(test))
// console.log(Boolean(title))
// console.log(Boolean(y))
// console.log(Boolean(a))

/******* Comparison operators *******/
// = assigns a value to a variable*

// == compares the value of the variables

// === compares the value and type of the variables

//  /! returns the opposite boolean
 //var x= true;
// console.log(!x)

// /!= compares the inequality based on value

// /!== compares the inequality based on value and type

/*     Conditional     */
// var val = 5;
// if (val === 10) {
// console.log('val is 10');
// } else if (val > 10) {
// console.log('val is greater than 10');
// } else {
// console.log('val is less than 10');
// }

/*     Switch (/!\break)    */
 //var color = 'black';
// switch (color) {
// case 'red':
// console.log('color is red');
// break;
// case 'blue':
// console.log('color is blue');
 //break;
// default:
 //console.log('color is neither red nor blue');
// }
// reproducing the conditional with if else
// if (color === 'red') {
//     console.log('color is red')
// } else if (color === 'blue') {
//     console.log('color is blue')
// } else {
//     console.log("color is neither red nor blue")
// }

/*      for loop      */
// var tab = [1, "k", "hello"]
 //for (var i = 0; i < tab.length; i++) {     //var i = tab.length-1; i >= 0 ; i--
   //  console.log(tab[i]);
// }
/*    for ... of  element */
// for (var el of tab) {
  //   console.log(el)
// }
/*       for ... in indice table      */
// for (let i in tab) {
 //    console.log(tab[i])
// }


/*      while loop  si seulemnt si condition true    */
// var l = 1;
// while (l < 5) {
  //   console.log("hola")
  //   l++
// }

/*      Functions       */
// function greeting(n) {
 //    return ("Hello, my name is " + n)
 //}
// console.log(greeting("Nessrine")) ; 
// console.log(greeting("Wissem")) ;
// console.log(greeting(5)) 

// function sub(g,h) {
 //   return (g-h);
// }
// console.log(sub(4,3))
// console.log(sub(600,326587));

 //function add(g,h) {
 //    return g+h
 //}
 //console.log(add("4","3"))
 //console.log(add(4,3));