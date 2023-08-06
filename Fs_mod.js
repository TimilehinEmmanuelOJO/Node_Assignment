const fs = require('fs')
const path = require('path')

// Using the FS module:
// Create directory/folder named: “Students”

// Path to the directory you want to create
const directoryPath = '\Students';
const fileName = 'user.js';
const filePath = path.join(directoryPath, fileName);
const oldDirName = "Students"
const newDirName = "Names"
const myName = 'Emmanuel Timilehin Ojo'
const userInfo = {
    name: 'Timi Ojo',
    age: 30,
    sex: 'Male',
    nationality: 'Nigerian',
    phoneNumber: '08163393738'
};

const oldFileName = 'user.js';
const newFileName = 'timi_ojo.js';

const oldFilePath = path.join(newDirName, oldFileName);
const newFilePath = path.join(newDirName, newFileName);





 if(!fs.existsSync(directoryPath)){
     fs.mkdirSync(directoryPath)
     console.log("folder created successfully")
 }else{console.log('Directory already exists.')}



// // In the Students directory, create a file named user.js
if (!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, '', 'utf-8',)
    console.log('File created successfully.');
}else{
    console.log('File already exists.');
}


// // Update the Students directory to “Names”
//  

  if (fs.existsSync(oldDirName)){
      fs.renameSync(oldDirName, newDirName)
          console.log("Successfully renamed to Names")
  }else{
      console.log('Dir not found')
  }

 // Add your name as content to the file user.js
  
 if (!fs.existsSync(newDirName)) {
    console.log('Directory not found.');
} else {
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, myName, 'utf-8');
        console.log('File created and content added successfully.');
    } else {
        fs.writeFileSync(filePath, myName, 'utf-8');
        console.log('Content added to existing file successfully.');
    }
}


// // Update the file and add your age, sex, nationality, phone number and any other information about yourself


// Check if the directory exists
if (!fs.existsSync(newDirName)) {
    console.log('Directory not found.');
} else {
    // Write the user information to the file
    fs.writeFileSync(filePath, userInfo, 'utf-8');
    console.log('User info added successfully.');
}



// // Update the file user.js to {your_name}.js eg daniel_adesoji.js



// Check if the directory exists
if (!fs.existsSync(directoryPath)) {
    console.log('Directory not found.');
} else {
    // Check if the old file exists
    if (fs.existsSync(oldFilePath)) {
        // Rename the file
        fs.renameSync(oldFilePath, newFilePath);
        console.log('File renamed successfully.');
    } else {
        console.log('File not found.');
    }
}


// // Read the contents from {your_name}.js. User fs.open or fs.readFile
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
    } else {
        console.log('File content:');
        console.log(data);
    }
});


// // Delete the file {your_name}.js
fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting the file:', err);
    } else {
        console.log('File deleted successfully.');
    }
});

// // Delete the directory “Names”

