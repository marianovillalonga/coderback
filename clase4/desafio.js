const fs = require('fs'); // File System

const date = Date().toLocaleString(); // Data atual
try{

    fs.writeFileSync("./fyh.txt", date) 

    const data = fs.readFileSync('./fyh.txt', 'utf-8') 
    console.log(data);
}catch{
    console.log('Error al leer el archivo');
}
