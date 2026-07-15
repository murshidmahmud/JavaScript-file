document.write(`<h2 style = "color: #ffffff; background: #ff0909;border-radius:108px;padding: 4px; text-align: center;">${"Create an Object"}</h2>`);
document.write("<h2>");


//Crete an Object: 
const student = {
    name : "Murshid",
    age  : "25",
    roll : "02",
    cgpa : "3.65",
    lang : ["Bnagla","English","Hindi"],
};

document.write(student.name," ");
document.write(student.age," ");
document.write(student.roll," ");
document.write(student.cgpa,"<br>");
document.write(student.lang," ");

//---------------------------//-------------------------------------

document.write(`<h2 style = "color: #000000; background: #09ffde;border-radius:108px;padding: 4px; text-align: center;">${"This keyword and Constructor and display"}</h2>`);
document.write("<h2>")

//This keyword and Constructor and display(Template):

function Student(name,age,roll,cgpa,lang){
    this.name = name;
    this.age = age;
    this.roll = roll;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function(){
        document.write(this.name," ");
        document.write(this.age," ");
        document.write(this.roll," ");
        document.write(this.cgpa," ");
        document.write(this.lang," ");

    }
}

let student1 = new Student("Murshid","25","02","3.75",["Bnagla","English","Hindi"],);


student1.display();

//-----------------------------------//----------------------------------

document.write(`<h2 style = "color: #ffffff; background: #432aff;border-radius:108px;padding: 4px; text-align: center;">${"Math Object"}</h2>`);
document.write("<h2>")

//Math Object: 

document.write("Math.pi: ", Math.PI,"<br>");
document.write("Math.Sqrt2: ", Math.SQRT2,"<br>");
document.write("Math.Ln10: ", Math.LN10, "<br>");
document.write("Math Ceil: ",Math.ceil(3.5),"<br>");
document.write("Math floor: ", Math.floor(5.8),"<br>");
document.write("Math round: ",Math.round(5.6),"<br>");
document.write("Math trunc: ", Math.trunc(5.8),"<br>");
document.write("Math max: ",Math.max(10,1,4,50,30,555),"<br>");
document.write("Math log2: ", Math.log2(100),"<br>");
document.write("Math random: ",Math.random(887855456652));

//---------------------------------//---------------------------------

document.write(`<h2 style = "color: #000000; background: #ff2aed;border-radius:108px;padding: 4px; text-align: center;">${"Date Object & Date Methods"}</h2>`);
document.write("<h2>");

//Date object and date methods:

//Date Get Methods:

let date = new Date();
document.write(date);

let year = date.getFullYear();
document.write("<br>",year);

let month = date.getMonth();
document.write("<br>",month);


//Set Date Methods:

let d = new Date("01-2-2026");
d.setFullYear(2027);
document.write("<br>", d);


d.setMonth("03");
document.write("<br>", d);