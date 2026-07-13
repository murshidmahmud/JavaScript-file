document.write(`<h2 style = "color: #000000; background: #f8b200;border-radius:108px;padding: 4px; text-align: center;">${"1D Array"}</h2>`);


//1D array: 

let num1 = [10,2,20,30,40,50,10];
document.write("<h2>",num1);

// let num2 = new Array(10,20,30,40,50,60);
// document.write(num2);

// let num3 = [10,50,80,88,99,55];

// // console.log(num3[0]);
// // console.log(num3[1]);
// // console.log(num3[2]);

//For loop use: 

let number1 = [2,3,4,5,4,3,2];

for(let i=0; i<number1.length; i++){
    document.write("<br/>",number1[i]);
} 


//For....of loop use:

document.write("<br>");

let number2 = [222,333,666,58,888,88852];

for(let value of number2){
    document.write(value,  " ");
}


//User input 1D array:

// let user1= prompt("Enter the array: ");

// for(let print of user1){
//     document.write("<br/>",print);
// }


// document.write("<br>");

// let user2 = prompt("Enter the array user2: ");

// for(let i=0; i<user2.length; i++){
//     document.write(user2[i] + " ");
// }