/*
    Zippy - get computer info, fast!
*/

const os = require('os');

function zippy() {
    console.log("Zippy's getting to work...\n")
    try {
        return {
            "name": os.type(),
            "total-memory": os.totalmem(),
            "free-memory": os.freemem(),
            "user-info": os.userInfo(),
            "network-int": os.networkInterfaces(),
            "os-info": {
                "hostname": os.hostname(),
                "type": os.type(),
                "constants": os.constants,
                "EOL": os.EOL,
                "platform": os.platform(),
                "release": os.release(),
                "homedir": os.cpus(),
                "load-avg": os.loadavg(),
                "uptime": os.uptime(),
                "version": os.version(),
            },
            "cpu-info": {
                "arch": os.arch(),
                "cpus": os.cpus(),
            },
        }
    } catch (err) {
        return console.log(`Something went wrong! Error:\n${err.stack}`)
    }
}

module.exports = { zippy }
