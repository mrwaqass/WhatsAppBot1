const puppeteer = require('puppeteer')
let url = 'https://web.whatsapp.com/'
let target = 'Waqas Jazz 1' //exact contact name from chat

const start = async (url, target) => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized'],
    })
    const page = await browser.newPage()
    await page.goto(url, {
        waitUntil: 'networkidle2',
        timeout: 0,
    })
    await page.waitForNavigation({
        waitUntil: 'networkidle2',
        timeout: 0,
    })
    await page.waitForSelector(`span[title='${target}']`)
    await page.click(`span[title='${target}']`)

    let input = await page.$(
        '#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div'
    )
    let messages = [
        'Spam',
        'Its a spam attack',
        'Have a great time',
        '💚💚💚',
        '🐱‍🚀🐱‍🚀🐱‍🚀',
        '👾👾👾',
        '🤖🤖🤖',
        '🤡🤡🤡',
    ]
    const wait = time => new Promise(resolve => setTimeout(resolve, time))

    const sendMessages = async () => {
        for (const a of [...Array(30)]) {
            let message = messages[Math.floor(Math.random() * messages.length)]
            await input.type(message)
            await page.keyboard.press('Enter')
            await wait(5000)
        }
    }
    sendMessages()

    // for (let i = 0; i < 30; i++) {
    //     let message = messages[Math.floor(Math.random() * messages.length)]
    //     await input.type(message)
    //     await page.keyboard.press('Enter')
    // }

    // await browser.close()
}
start(url, target)
