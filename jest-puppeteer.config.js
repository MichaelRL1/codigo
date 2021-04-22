
// https://medium.com/touch4it/end-to-end-testing-with-puppeteer-and-jest-ec8198145321
module.exports = {
    launch: {
<<<<<<< HEAD
        headless: false,
=======
        headless: process.env.HEADLESS !== 'false',
>>>>>>> e3b4b75d1ff4b6c505d9752a69b0e386abd49789
        slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
        devtools: true,
        timeout: 3000000, //  5 minute timeout
        args: ["--no-sandbox","--headless"],   // don't use a sandbox
    },
}
