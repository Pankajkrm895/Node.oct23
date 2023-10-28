const os =require('os')

console.log("Free Memory", os.freemem()/1024/1024/1024)
console.log("Total Memory", os.totalmem() / 1024 / 1024 / 1024);
console.log("Platform:", os.platform());
console.log("Arch:", os.arch() );
console.log("Version", os.version());
console.log("UserInfo", os.userInfo());
console.log("Processor", os.cpus());
console.log("uptime", os.uptime());



