//forEach() loop:

let numbers = [1,2,3,2.3,2];
numbers.forEach(myFunction);

function myFunction(x){
    console.log(x);
}


let y = ["Murshid", "Mahmud", "Khairul"];
y.forEach(function(x){                         //anonymouse function
    console.log(x);
})



//square.push():

let num = [1,3,5,4,3,6];
let squareNumber = [];

num.forEach(function(x){
    squareNumber.push(x*x);
})
console.log(squareNumber);
