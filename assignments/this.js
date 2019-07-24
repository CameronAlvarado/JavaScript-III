/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 'this' refers to the context of the containing Object (window object), unless you are in 'strict mode'.
* 2. When using dot notation to call a function, the word to the left of the dot is what 'this' is refering to.
* 3. When using the 'new' keyword, 'this' can be used in an object constructor to assign an objects property to the new object.
* 4. When using either the 'call', 'bind' or 'apply' methods, the first argument sets what object 'this' ponints to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// let myGhost = {
//     name: 'Casper',
//     boo: 'booo 👻',
//     ghost: function (){
//       console.log(this.boo);
//     }
//   }
// // Principle 2

// // code example for Implicit Binding
// let myGhost = {
//     name: 'Casper',
//     boo: 'booo 👻',
//     ghost: function (){
//       console.log(this.boo);
//     }
//   }
  
//   myGhost.ghost(); //invoking function here
// // Principle 3

// // code example for New Binding
// function Ghost(saying){
//     this.thing = saying;
//   }
  
//   let myGhost = new Ghost('Casper the friendly 👻')
  
//   console.log(myGhost.thing); //function being invoked here.
// // Principle 4

// // code example for Explicit Binding
// function ghost(){
//     console.log(this.boo);
//   }
  
//   const myGhost = {
//     name: 'Casper',
//     boo: 'boooooo!'
//   }
  
//   ghost.call(myGhost); //invoke the function
//   ghost.apply(myGhost); // passes an array