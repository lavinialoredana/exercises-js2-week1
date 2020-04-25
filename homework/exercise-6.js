/*

Objects very often contain other objects.

This exercise will give you practice in getting the keys of objects inside other objects.

Use the provided console.log statements below and follow the instructions above them.

*/

var storeBranches = {

  glasgow: {
    manager: 'Andrew',
    assistant: 'Laura',
    interns: {
      head_intern: 'Mozafar',
      intern: 'James'
    }
  },

  edinburgh: {
    director: 'Kelly',
    manager: 'Sally',
    assistant: 'Derek',
    interns: {
      head_intern: 'John',
      intern: 'Sarah'
    }
  }
};


// ONLY EDIT BELOW THIS LINE

// # 1
var stores = Object.keys(storeBranches);
// prints [ 'glasgow', 'edinburgh' ]
console.log(stores);

// # 2
var staffGlasgow = Object.keys(storeBranches.glasgow);
// prints [ 'manager', 'assistant', 'interns' ]
console.log(staffGlasgow);

// # 3
var interns = Object.keys(storeBranches.glasgow.interns);
// prints [ 'head_intern', 'intern' ]
console.log(interns);

// ONLY EDIT ABOVE THIS LINE
