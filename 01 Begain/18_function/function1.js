//add two number:
function add(num1, num2) {
    let sum = num1 + num2;
    document.write("<h1>The add result: " + sum, "</br>");
}
//function call:
add(50,80);


//Multiplication three number:
function mult(num1,num2,num3){
    let multi = num1*num2*num3;
    document.write("The mult result : " , multi , "</br>");
}
//function call:
mult(20,30,10);



//Return use:

function addition(a, b) {
    let sum = 0;
    sum = a + b;
    return sum;
}

let sum1 = addition(10, 20);

document.write("<b>The result1 is: ", "<i><b>" + sum1 + "</i></b></br>");
document.write("The result2 is: " + addition(20, 40),"</h1>");