
/*
### Exercises - Module 1 ###

    Tip:  
    use console.log('your string');  
    or  console.log(yourVariable);

1. Sum up each number of your age with your name (in this order)
2. Sum up your name with each number of your age (in this order)
3. Convert String to number and show the result of '3' + 2 * 4.
4. Print a character by line from example string: "JavaScript String".
5. For each character print if they are even, odd or not a number: 
```
   String: "0,1,2,3,4,5"
   
   result: 
   "0 is even"
   "1 is odd"
   ", is not a number"
   .
   .
   .
   "5 is odd"
```
*/

//Exercicio 1
console.log(' <<<< EXERCICIO 1 INICIO >>>>');
console.log('Sum up each number of your age with your name (in this order)\n');

console.log(3 + 2 + 'Willian');

console.log(' <<<< EXERCICIO 1 FIM >>>>\n\n');


//Exercicio 2
console.log(' <<<< EXERCICIO 2 INICIO >>>>');
console.log('Sum up your name with each number of your age (in this order)\n');

console.log('Willian' + 3 + 2);

console.log(' <<<< EXERCICIO 2 FIM >>>>\n\n');


//Exercicio 3 
console.log(' <<<< EXERCICIO 3 INICIO >>>>');
console.log('Convert String to number and show the result of \'3\' + 2 * 4.\n');

console.log(parseInt("3", 10) + (2 * 4));

console.log(' <<<< EXERCICIO 3 FIM >>>>');


//Exercicio 4
console.log(' <<<< EXERCICIO 4 INICIO >>>>');
console.log('Print a character by line from example string: "JavaScript String".\n');

function verticalText(text) {
  for (var i = 0; i <= text.length; i++) {
    console.log(text.charAt(i) + "\n");

  }
}
verticalText("JavaScript String");

console.log(' <<<< EXERCICIO 4 FIM >>>>');


//Exercicio 5 
console.log(' <<<< EXERCICIO 5 INICIO >>>>');
console.log('For each character print if they are even, odd or not a number:\n ' +  
   'String: "0,1,2,3,4,5"\n' +   
   'result: \n' +
   '"0 is even"\n' +
   '"1 is odd"\n' +
   '", is not a number"\n' +
   '.\n' +
   '.\n' +
   '.\n' +
   '"5 is odd"\n');

function evenOdd(text) {
  for (var i = 0; i <= text.length; i++) {
     if (!isNaN(text.charAt(i))) {
       if (text.charAt(i) % 2) {
         console.log(text.charAt(i) + ' is even\n')
       }
       else {
         console.log(text.charAt(i) + ' is odd\n')
       }
     }
     else {
       console.log(text.charAt(i) + ' is not a number\n')
     }
  }
}

evenOdd('0,1,2,3,4,5');

console.log(' <<<< EXERCICIO 5 FIM >>>>');