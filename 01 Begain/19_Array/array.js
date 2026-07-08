//Array declaration:

const num = [1,4,3,5,6,22,55,333];
const nam = ["Murshid", " Shakil", " Oli", " Ayat"];

console.log(num);
console.log(nam);
//document.write("<h1>",num, "</br>", nam)
//document.write("<h1>",nam)

//added Css file: 
document.write(`<h1 style="color:red;">${num},</br>${nam}</h1>`)


//array length:
let person = ["Mahmud","Ayat","Shakil","Ashiqul","Emon","Maruf","Zahid"];

let length = person.length;
document.write("<h1></br>Array length is: ", length);

//array push() and pop():
const number = [10,20,30,40,50,60];

const push = number.push(70);
document.write("</br>After push array is: ", number);

const pop = number.pop();
document.write("</br>After pop array is: ", number);


//Array concat(): দুইটা array কে একত্রে যুক্ত করার জন্য Concatenition Use করা হয়।
const country1 = ["Bangladesh","India","Japan","Srilanka"];
const country2 = ["China","Brazil","Argenteina"];

const concat = country1.concat(country2);
//document.write("</br>",concat);

//added css :
document.write(`
    <h2 style="
    color:red ; 
    background:orange;
    padding:20px;
    margin:20px;
    text-align: center;
    border-radius: 108px;">
    ${concat}</h2>`)


