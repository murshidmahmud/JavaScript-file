//map():

let num = [2,3,4,1,5];

let squareNumber = num.map(function(x){
    return x*x;
})
console.log(squareNumber);
console.log(num);


//filter():

let num1 = [4,3,5,22,66,55,88,12];

let newnum = num1.filter(function(x){
    return x>10;
})
console.log(newnum);
console.log(newnum.sort());              // .sort() funciton  