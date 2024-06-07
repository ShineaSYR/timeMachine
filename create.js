const fs = require('fs');
const path = require('path');

// Specify the directory where you want to create the files
const directoryPath = './';

// Specify the number of files to create
const numFiles = 20;

// Function to create a single file
function createFile(fileName, txtData) {
    
  const filePath = path.join(directoryPath, fileName);
  fs.writeFileSync(filePath, txtData); // Create an empty file


}

// Loop to create multiple files
for (let i = 1; i <= numFiles; i++) {
  const fileName = `f-${100 + i}.txt`;
  createFile(fileName, `2023-1-${i}`);
  console.log(`File "${fileName}" created.`);
}