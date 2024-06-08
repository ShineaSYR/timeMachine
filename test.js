const schedule = require('node-schedule');
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

// 当前时间的秒值为 10 时执行任务，如：2018-7-8 13:25:10
// let job = schedule.scheduleJob('10 * * * * *', () => {
//   console.log(new Date());
// });
// const filePath = 'test.txt'
let count = 1
// 文件写入
async function read2write(indexNum) {
    const filePath = `test${indexNum}.txt`
    const fileContent = `this is my ${indexNum} commit  \r\n`
    fs.writeFileSync(filePath, fileContent);
    // let data = await fs.readFileSync(filePath, {
    //     encoding: 'utf-8'
    // })
    // data += `this is my ${count++} commit --->  ${new Date()} \r\n`
    console.log(`---commit-${count}--${indexNum}`)
    // await fs.writeFileSync(filePath, data)
    handleGit(filePath, indexNum)
}


// git处理
async function handleGit(filePath, dateDay) {
    console.log(`dateDay-${dateDay}`);
    exec(`git add ${filePath} && GIT_COMMITTER_DATE="Jan ${dateDay} 14:00 2023 +0800" git commit test.txt --date="Jan ${dateDay} 10:05:20 2023 +0800" --amend`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log('Files committed successfully!');
    });
}

let rule = new schedule.RecurrenceRule();
rule.second = [0, 10, 20, 30, 40, 50]; // 每隔 10 秒执行一次


// 启动任务
let job = schedule.scheduleJob(rule, (index) => {
    const indexNum = new Date(index).getSeconds() == 0 ? 1 : new Date(index).getSeconds()/10 + 1;
    console.log(new Date(), `----${new Date(index).getSeconds()}---${indexNum}`);
    read2write(indexNum)
});