//IIFEs(Immediately Inovokeable Function Expression)

//Syntex:

(function display(){
    console.log("Hello world!");
}) ();


(function display(num1, num2){
    console.log("The sum is: ", num1+num2);
}) (50, 60);



//Function Expresion:

let display = function name (){
    document.write("Hi I am murshid!");
    console.log("Dhaka Internation University");
};
display();
