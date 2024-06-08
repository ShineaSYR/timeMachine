import { ToadScheduler } from 'toad-scheduler'

// export const scheduler = new ToadScheduler()

// export function stopAll() {
//   scheduler.stop()
// }


let count = 1 // 记录提交了多少次
const config = {
  taskName: 'commit_task', // 任务名称
//   schedule: { hours: 10, runImmediately: true } // 提交的间隔 周期
  schedule: { seconds: 20, runImmediately: true } // 提交的间隔 周期
}
const task = new AsyncTask(config.taskName, work) // 异步提交任务
export const job = new SimpleIntervalJob(config.schedule, task)

// 文件写入
async function read2write() {
    let data = await fs.readFileSync(path.resolve(__dirname, '../test.txt'), {
        encoding: 'utf-8'
    })
    data += `this is my ${count++} commit --->  ${new Date()} \r\n`
    await fs.writeFileSync(path.resolve(__dirname, '../test.txt'), data)
}

// git处理
async function handleGit() {
    await $`git add .`
    await $`git commit -m 'This is a meaningless submission at ${count}'`
    await $`git pull`
    await $`git push`
    console.log('done')
}


async function work() {
    await read2write() // 文件的读写 让git检测文件的变动
    await handleGit() // 处理 git 的提交
}