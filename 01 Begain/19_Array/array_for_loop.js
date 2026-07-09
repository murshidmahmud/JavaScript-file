//Array print for loop:

const array = [10,20,50,40,8,80,90];

let sum = 0;

for(let i=0; i<=6; i++){

    document.write("<h2>",array[i]," ");

    sum +=array[i];
}
document.write(`<h2 style ="color:red;">The sum is: ${sum}</h2>`);


//User input array and add,sub,mult,div this array element:

const array2 = new Array();

for(let i=0; i<3; i++){
    array2[i] = parseInt(prompt("Enter the element: "));
}

let add=0,sub=0,mult=2,div=1;

for(let i=0; i<3; i++){
    document.write("<h2>",array2[i], " ");

    add +=array2[i];
    sub -=array2[i];
    mult *=array2[i];
    div /=array2[i];
}
document.write(`<h2 style = "color:blue;">The add is: ${add}</h2>`);
document.write(`<h2 style = "color:green;">The sub is: ${sub}</h2>`);
document.write(`<h2 style = "color:orange;">The mult is: ${mult}</h2>`);
document.write(`<h2 style = "color:red;">The div is: ${div}</h2>`);



//Array for___of :

const cars = ["BMW","Volvo","Hundai","Heno"];

let text=" ";

for(let x of cars){
    text += x + "</br>";
}
document.write("<h1>",text);



