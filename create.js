const fs = require('fs');
const path = require('path');

// Specify the directory where you want to create the files
const directoryPath = './';

// Specify the number of files to create
const numFiles = 200;

// Function to create a single file
function createFile(fileName) {
    
  const filePath = path.join(directoryPath, fileName);
  fs.writeFileSync(filePath, ''); // Create an empty file
}

// Loop to create multiple files
for (let i = 120; i <= numFiles; i++) {
  const fileName = `t${100 + i}.txt`;
  createFile(fileName);
  console.log(`File "${fileName}" created.`);
}