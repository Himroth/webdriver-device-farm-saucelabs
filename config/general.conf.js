const { hooksConf } = require("./hooks.conf")
const { reporterConf } = require("./reports.conf")
const { specsConf } = require("./specs.conf")

let generalConf = {
    path: '/wd/hub',
    framework: 'mocha',
    waitforTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
    maxInstances: 1,
    ...hooksConf,    //importando hooks conf com spreadd sintax importando tudo para o general conf juntando os dois objetos
    ...reporterConf,
    ...specsConf
}

module.exports = { generalConf }