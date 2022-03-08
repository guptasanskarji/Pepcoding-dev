// OS MODULE :-->>
//     this module provides functions that you can use retrieve informations from the underlying OS, and interact with it.

const os = require("os");

let mySystemArch = os.arch();           // returns the underlying Architecture
console.log(mySystemArch);

let myCpuInfo = os.cpus();              // returns the information on the cpus
console.log(myCpuInfo);

let hostName = os.hostname();          // returns the host name of the operating system as a string
console.log(hostName);

let networkInfo = os.networkInterfaces();          // returns an objects containing network interfaces that have been assigned a network address
console.log(networkInfo);

console.log(os.release());                     // returns the operating system as a string

console.log(os.platform());                   // returns the platform  node js was compiled for

console.log(os.type());                         // returns the operating system name

console.log(os.totalmem());                   // returns the total amount of system memory in bytes as an integer

console.log(os.uptime());                           // returns the system uptime in number of seconds
let upTimeInMinutes = os.uptime()/3600;
console.log(upTimeInMinutes);

console.log(os.userInfo());                       // returns information about the currently effective user