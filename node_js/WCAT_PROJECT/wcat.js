// 1) node wcat.js filepath => displays the content of a file in terminal
//    node wcat.js f1.txt
// 2) node wcat.js filepath1 filepath2 filepath3 => displays the content of all files in terminal
//    node wcat.js f1.txt f2.txt f3.txt
const fs = require('fs');
let inputArr = process.argv.slice(2);
//console.log(inputArr);

let filesArr = [];
let optionsArr = [];
// placed files path in filesArr
for(let i=0;i<inputArr.length;i++){
    let firstChar = inputArr[i].charAt(0);
    if(firstChar=='-'){
        optionsArr.push(inputArr[i]);
    }else{
         filesArr.push(inputArr[i]);
    }
}
console.log("file to be read are " + filesArr);

// check if all files are present 
for(let i=0;i<filesArr.length;i++){
    let doesExist = fs.existsSync(filesArr[i]);
    if(!doesExist){
        console.log("files doesn't exists"); 
        return;
    }
}

// content read and appending starts
let content = "";
for(let i=0;i<filesArr.length;i++){
    let fileContent = fs.readFileSync(filesArr[i]);
    content+=fileContent+'\n';
}
console.log(content);

let contentArr =content.split("\n");
console.log(contentArr);