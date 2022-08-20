require('dotenv').config()

let specsConf = process.env.PLATFORM == 'android' ? {   //se for android testa login
    specs: [
        './test/specs/login.spec.js',
    ]
} : {       //se não android teste products e search q são spec de iOS
    specs: [
        './test/specs/products.spec.js',
        './test/specs/search.spec.js'    
    ]
}
module.exports = { specsConf }