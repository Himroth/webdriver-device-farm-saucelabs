require('dotenv').config()

const allure = require('allure-commandline')
const video = require('wdio-video-reporter');
//let teste = true == true ? true : true //Expressão ternária, primeira as validações dos trues, depois as ações, se true true se true true usada abaixo nas configs do report

let reporterConf = process.env.REPORT == 'true' ? {       //expressão ternária se env for true faz o report e o video, se não não faz nada
    reporters: ['spec',
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }],
    [video, {
        saveAllVideos: true,       // If true, also saves videos for successful test cases
        videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
    }]
],
onComplete: function () {
    const reportError = new Error('Could not generate Allure report')
    const generation = allure(['generate', 'allure-results', '--clean'])
    return new Promise((resolve, reject) => {
        const generationTimeout = setTimeout(
            () => reject(reportError),
            5000)

        generation.on('exit', function (exitCode) {
            clearTimeout(generationTimeout)

            if (exitCode !== 0) {
                return reject(reportError)
            }

            console.log('Allure report successfully generated')
            resolve()
            })
        })

    }
} : {} //se não não faz nada

module.exports = { reporterConf }