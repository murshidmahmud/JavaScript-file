const data2 = require("./json_data2.json");
const data1 = require("./json_data1.json");
//console.log(data,data2);

//Json_data1 data:
console.log(data1.friends[0]);
console.log(data1.friends[0].name);
console.log(data1.friends[1].age);

//Json_data2 data:
console.log(data2.Students[0].friends1[1]);
console.log(data2.Students[1].friends2[1]);


//modify:

data1.friends[0].name = "Murshid";
console.log(data1.friends[0].name);

//delete:
delete data1.friends[0].name;
console.log(data1);


//Convert JSON:

//Client to Server:
console.log(JSON.stringify(data1));

//Server to Client: 
console.log(JSON.parse('{"name" : "Mondol"}'));



