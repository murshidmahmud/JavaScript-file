//for of loop:

const x = [1,2,3,4,5,8,6,8];
for(let y of x){
    console.log(y);
}

//for in loop:

const Students = {
    name : "Murshid",
    id : 23,
    cgpa: 4.40,
};

for (let a in Students){
    //console.log(a);
    //console.log(Students[a]);
    console.log(`${a} : ${Students[a]}`)
}

