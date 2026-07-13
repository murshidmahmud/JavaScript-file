document.write(`<h2 style = "color: #fca400; background: #5709ff;border-radius:108px;padding: 4px; text-align: center;">${"2D Array"}</h2>`);
document.write("<h2>");

//2D array: 

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
document.write(matrix + " "+"<br><br>");

//Nested for loop: 

for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
        document.write(matrix[i][j]+" ");
    }
    document.write("<br>");
}

document.write("<br>");

//for....of loop:

let matrix2 = [
    [10,11,12],
    [13,14,15],
    [16,17,18],
];

for(let row of matrix2){
    for(let value of row){
        document.write(value," ");
    }
    document.write("<br>");
}