const fs = require('fs')
const path = require('path')


//Create folder

 const newDirPath = path.join(__dirname, "Students") 
 console.log(newDirPath)

 fs.mkdir(newDirPath, (err) => {
     if(err){
         console.log(err)
     }else{
         console.log('folder created successfully')
     }
 })


 //Update the student folder to Names
 const newFold = path.join(__dirname, "Names")

 fs.rename(newDirPath, newFold, (err) => {
    if(err){
        console.log(err)
    return
    }else{console.log('file changed Successfully')}
 }
 ) 

// //In the Students directory, create a file named user.js

 const newFilePath = path.join(__dirname, 'Students', 'Users.js')

 console.log(newFilePath)
 const content = "This is another content"

 fs.writeFile(newFilePath, content,(err) => {
      if(err){
          console.log(`this is the error: ${err}`)
          return
      }else{
          console.log("File written")
      } 
  })

//Add my name

 const newFilePath2 = path.join(__dirname, 'Students', 'Users.js')
 const nameC = "Emmanuel Timilehin Ojo"

 fs.writeFile(newFilePath2, nameC, (err) => {
     if(err){
               console.log(`this is the error: ${err}`)
                 return
               }else{
                   console.log("File written")
               } 
 })

//Apend other details to file

 const details = '\nAge: 30\n Male\n Nigerian\n 08163393738\n I am a cool guy'
 const newFilePath3 = path.join(__dirname, 'Students', 'Users.js')

 fs.appendFile(newFilePath3, details, (err) => {
     if(err){
         console.log(err)
     }else{
         console.log('File Updated Successfully')
     }
 })


//rename file
const newFileName = path.join(__dirname, 'Emmanuel_ojo.js')

fs.rename(newFilePath, newFileName, (err) => {
    if(err){
        console.log(err)
        return
    }else{
        console.log('File renamed successfully')
    }
})

//read file
fs.readFile(newFilePath, "utf8", (err, data) => {
    if (err){
        console.log(`This is the error that was thrown: ${err}`)
        return
    }else{
        console.log(data)
    }
})

//Remove file
const newFile = path.join(__dirname, 'files', 'Emmanuel_ojo.js')

fs.rm(newFile, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("file removed successfully")
    }
})
