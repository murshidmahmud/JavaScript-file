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

document.write(`<h2 style = "color: #000000; background: #09ffde;border-radius:108px;padding: 4px; text-align: center;">${"Math Object"}</h2>`);
document.write("<h2>")

//Math Object: 


