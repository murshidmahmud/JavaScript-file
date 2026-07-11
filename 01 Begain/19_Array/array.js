//Array declaration:

const num = [1,4,3,5,6,22,55,333];
const nam = ["Murshid", " Shakil", " Oli", " Ayat"];

console.log(num);
console.log(nam);
//document.write("<h1>",num, "</br>", nam)
//document.write("<h1>",nam)

//------------------------------//------------------------------

//added Css file: 
document.write(`<h1 style="color:red;">${num}</br>${nam}</h1>`)

//--------------------------------------//-------------------------------

//array length:
let person = ["Mahmud","Ayat","Shakil","Ashiqul","Emon","Maruf","Zahid"];

let length = person.length;
document.write("<h1></br>Array length is: ", length);

//--------------------------------------//-------------------------------

//array push() and pop():
const number = [10,20,30,40,50,60];

const push = number.push(70);
document.write("</br>After push array is: ", number);

const pop = number.pop();
document.write("</br>After pop array is: ", number);

//----------------------------------------//-----------------------------------

//Array concat(): দুইটা array কে একত্রে যুক্ত করার জন্য Concatenition Use করা হয়।
const country1 = ["Bangladesh","India","Japan","Srilanka"];
const country2 = ["China","Brazil","Argenteina"];

const concat = country1.concat(country2);
//document.write("</br>",concat);

//added css :
document.write(`
    <h2 style="
    color:black ; 
    background:orange;
    padding:20px;
    margin:20px;
    text-align: center;
    border-radius: 108px;">
    ${concat}</h2>`)

//--------------------------------------//---------------------------------

document.write(`<h2 style = "color: white; background: blue;border-radius:108px;padding: 4px; text-align: center;">${"Shift & Unshift"}</h2>`)

//array Shift() and unshift(): প্রথম থেকে element বাদ দেয়
const fruites = ["Apple","Orange","Mango","Guava","Jack-fruit"];
document.write("<h3>Before shift: " + fruites + "<br>");

fruites.shift();
document.write("<h2>After shift: " +fruites);


//array UnShift(): প্রথমে element add করে।
const roll = [1,2,3,5,40,88,90];
document.write("<h3>Before shift rool: "+roll);

roll.unshift(0,1);
document.write("<h2>After shift roll: " + roll);

//-------------------------------------------//--------------------------------

document.write(`<h2 style = "color: ; background: skyblue;border-radius:108px;padding: 4px; text-align: center;">${"Splice"}</h2>`);

//array splice(): Array position ধরে 0 থাকলে element add হবে।
//                Array position ধরে 1/2/3/4..... থাকলে শেষ থেকে element remove হবে।
const nam2 = ["Murshid", "Ayat","Shakil"];
document.write("<h3>Before Splice: " + nam2);

nam2.splice(2,0,"Oli","Emon");
document.write("<h2>After Splice: ", nam2);

nam2.splice(3,1,"Mahmud");
document.write("<br> After splice for 3, 1: ", nam2);

//--------------------------------------//-------------------------------------

document.write(`<h2 style = "color: white; background: red;border-radius:108px;padding: 4px; text-align: center;">${"Slice"}</h2>`);

//array slice(): element remove 
const university = ["DIU","NUB","NSU","SEU"];
document.write("<h3> Before Slice: ", university);

let slice = university.slice(3);
document.write("<h2>After slice: ", slice);

//---------------------------------//---------------------------------

document.write(`<h2 style = "color: #162456; background: #E12AFB;border-radius:108px;padding: 4px; text-align: center;">${"Array Sort"}</h2>`);

//array sort: 
const district = ["Dhaka","Gaibandha","Rangpur","Dinajpur"];
document.write("<h3> Before array sort: ", district);

district.sort();
document.write("<h2>After array sort: ", district);


//-------------------------------//-----------------------------------

document.write(`<h2 style = "color: #ffffff; background: #7b4ad6;border-radius:108px;padding: 4px; text-align: center;">${"Array reverse"}</h2>`);

//array reverse():
const num2 =["one","two","three","four"];
document.write("<h3>Before reverse: ", num2);

num2.reverse();
document.write("<h3>After reverse: ", num2);


//-----------------------------------//--------------------------------

document.write(`<h2 style = "color: #72fc00; background: #ff0909;border-radius:108px;padding: 4px; text-align: center;">${"Numeric Sort"}</h2>`);

//Numeric Sort:
const num3 = [400,50,2,8,0,1,6,88,66,20];
document.write("<h3>Before numeric sort: ", num3);

num3.sort(function(a,b){
    return a-b;
});
document.write("<h2>After numeric sort: ", num3);

