/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
let newID = 1000000000 + oldID;


function ageIsValid(currentAge){

  if (Number.isInteger(currentAge)){
    return true
  }
  else {return false}
}


let randomNumber = Math.random() *20 + 1;

let randomInteger = Math.floor(randomNumber);

let randomUserID = randomInteger + 1000000000;
