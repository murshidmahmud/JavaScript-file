//Arrow function:

//with parantheses or first bracket() and parameter:
const multiply = (a,b) => a+b;

console.log(multiply(20,30));


//without parantheses()
const square = x => x*x;

console.log(square(20))


//with curle bracket{}
let num = (a,b) => {a*b};     //Undefined , return না ব্যবহার করলে undefined হবে।

console.log(num(30,30))


// //with return:   error / undifined
// let num2 = (a,b) =>return a+b;

// console.log(num2(4,5))

const message = () =>{
    return "Hi I am Murshid";
}
console.log(message());


const sum = (a,b,c) =>{
    return a+b+c;
}
console.log(sum(30,40,50));


