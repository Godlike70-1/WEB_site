// let height= prompt("enter number:");
let height;
height= 5
for(let i=0; i<height; i++){
    let row='';
    for(let j=0; j<i; j++){
        row+='* ';
    }
    console.log(row);
}