const { exec } = require('child_process');

// Set the directory path of your Git repository
const repoPath = './';

// Set the commit message prefix
const commitMessagePrefix = 'Batch commit:';

// Array of file paths to be committed
const filesToCommit = [
  'file1.txt',
  'file2.js',
  'directory/file3.md',
];
const numFiles = 20

// Function to execute the Git commands
function commitFiles(fileName, date) {
  const fileList = filesToCommit.join(' ');
  const commitMessage = `${commitMessagePrefix} ${fileList}`;

  

    // for (let i = 3; i <= numFiles; i++) {
        // const fileName = `t${100 + i}.txt`;
    exec(`git add ${fileName} && GIT_COMMITTER_DATE="Jun ${date} 14:00 2023 +0800" git commit ${fileName} --date="Jun ${date} 10:05:20 2023 +0800" --amend  git commit -m "${commitMessage}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        console.log('Files committed successfully!');
        });
        // createFile(fileName);
        // console.log(`File "${fileName}" created.`);
    // }
//   exec(`cd ${repoPath} && git add ${fileList} && git commit -m "${commitMessage}"`, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);
//     console.log('Files committed successfully!');
//   });
}
for (let i = 1; i <= numFiles; i++) {
    var j = 100;
    commitFiles(`t${100 + i+j}.txt`, i);
}



// function simulateTask(delay, data) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(`Completed task with data: ${data}`);
//         resolve(data);
//       }, delay);
//     });
//   }
  
//   // Array of tasks to be executed
//   const tasks = [
//     { delay: 2000, data: 'Task 1' },
//     { delay: 1500, data: 'Task 2' },
//     { delay: 3000, data: 'Task 3' },
//     { delay: 1000, data: 'Task 4' },
//     { delay: 2500, data: 'Task 5' },
//   ];
  
//   // Function to execute the batch of tasks
//   async function executeTasks() {
//     try {
//       const results = await Promise.all(
//         tasks.map((task) => simulateTask(task.delay, task.data))

//       );
//       console.log('All tasks completed:', results);
//     } catch (error) {
//       console.error('Error executing tasks:', error);
//     }
//   }
  
//   executeTasks();