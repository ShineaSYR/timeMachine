const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

// Specify the directory where you want to create the files
const directoryPath = './';

// Specify the number of files to create
const numFiles = 20;

// Function to create a single file
function createFile(fileName, txtData, dateDay) {
    
  const filePath = path.join(directoryPath, fileName);
  fs.writeFileSync(filePath, txtData); // Create an empty file

  console.log(`-------${fileName}===${txtData}***${dateDay}`)
  exec(`git add ${fileName} && GIT_COMMITTER_DATE="Jan ${dateDay} 10:00 2023 +0800" git commit --date="Jan ${dateDay} 10:00:00 2023 +0800" --amend`, (error, stdout, stderr) => {
      if (error) {
          console.error(`exec error: ${error}`);
          return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      console.log('Files committed successfully!');
  });

}

// Loop to create multiple files
for (let i = 1; i <= numFiles; i++) {
  const fileName = `jan-${100 + i}.txt`;
  createFile(fileName, `2023-1-${i}`, i);
  console.log(`File "${fileName}" created.`);
}