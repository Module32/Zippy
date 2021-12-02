/*
    Zippy - get computer info, fast!
*/

const os = require('os');

function zippy() {
    console.log("Zippy's getting to work...\n")
    try {
        return {
            "hostname": os.hostname(),
            "name": os.type(),
            "os-info": {
                "release": os.release(),
                "homedir": JSON.stringify(os.cpus()),
                "freememory": os.freemem(),
                "loadavg": os.loadavg(),
            },
            "cpu-info": {
                "arch": os.arch(),
                "cpus": JSON.stringify(os.cpus()),
            },
        }
    } catch (err) {
        return console.log(`Something went wrong! Error:\n${err.stack}`)
    }
}

module.exports = { zippy }
