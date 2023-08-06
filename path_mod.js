const path = require('path');
const os = require('os')
const process = require("process");


//Path Module

// 1. Write a program to do the following using, path, os and process modules:
// Print out the current working directory
// Print out the separator of a given file path
// Print out the extension name of a file path



 // Print out the current working directory
 const cwd = path.resolve();
 console.log(cwd)

 // Print out the separator of a given file path
 const separator = path.sep;
 console.log(separator);

// Print out the extension name of a file path
const ext = path.extname('C:\Users\HP\Desktop\AltSchoolAfrica\NodeJs\First_Assignment\path_mod.js');
console.log(ext)




//OS Module

// 1. Write a program to do the following using, path, os and process modules:

// Print out the user information of the os


const userInfo = os.userInfo();
console.log(userInfo)

// Print out the platform of an operating system
const plat = os.platform();
console.log(plat);

const mem = os.freemem();
console.log(mem)



//Process Module


// 1. Write a program to do the following using, path, os and process modules:

// Print out the process id of the current running process
console.log('Process identification:', process.pid);
