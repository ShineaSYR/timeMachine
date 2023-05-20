const { exec } = require('child_process');

// Set the directory path of your Git repository
const repoPath = './';

// Set the commit message prefix
const commitMessagePrefix = 'Batch commit:';

// Number of files to commit
const numFiles = 10;

// Function to generate a timestamp for the file name
function getTimestamp() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

// Function to execute the Git commands
function commitFiles() {
  let fileList = '';
  let commitMessage = `${commitMessagePrefix}`;

  for (let i = 0; i < numFiles; i++) {
    const fileName = `file-${getTimestamp()}.txt`;
    fileList += fileName + ' ';
    commitMessage += fileName + ' ';
  }

  exec(`cd ${repoPath} && touch ${fileList} && git add ${fileList} && git commit -m "${commitMessage}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    console.log('Files committed successfully!');
  });
}

commitFiles();

