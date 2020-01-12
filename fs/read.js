var fs = require('fs');
var path = require('path');

// var filePath = path.join(__dirname, '../core')
// console.log(__dirname + '/write.txt')

// Use fs module for all operatins below.


// 1. Write script to read file theory.md and console the output buffer.
fs.readFile(filePath + '/tasks.md' ,(err, data)=>{
  if(err) return console.log(err)
  console.log(data)
})
// 2. Write script to read file theory.md and convert resulted buffer using toString
// method and console the result.
fs.readFile(filePath + '/tasks.md' ,(err, data)=>{
  if(err) return console.log(err)
  console.log(data.toString())
})
// 3. Write script to read file Synchronously and console the output.
var syncFile = fs.readFileSync(filePath + '/tasks.md')
console.log(syncFile.toString())
// 4. Write script to create a file 'write.js' and write content of read.js in there.
fs.readFile(__dirname + '/read.js', 'utf8', (err, data)=>{
  if (err) return console.log(err)
  fs.writeFile(__dirname + '/write.js', data, (err)=>{
    if (err) return console.log(err)
    console.log('file written!!!')
  })
})
// 5. Write script to update content of write.js. Update it with content of theory.md
//   Steps are
//   - open the file(write.js) using fs.open
//   - remove earlier content using fs.ftruncate
//   - add new content using fs.writeFile
//   - close the file at last using fs.close
fs.open(__dirname + '/writes.js', 'wx', (err, fd)=>{
  if (err) return console.log(err)
  fs.ftruncate(fd, (err)=>{
    if (err) return console.log(err)
    fs.readFile(filePath + '/theory.md', (err, data)=>{
      if (err) return console.log(err)
      fs.writeFile(__dirname + '/writes.js', data, (err)=>{
        if (err) return console.log(err)
        console.log('file write succcessful')
        fs.close(fd,(err)=>{
          if (err) return console.log(err)
        })
      })
    })
  })
})
// 6. Delete the content of write.js using fs.unlink or unlinkSync method
fs.unlink(__dirname + '/writes.js',(err)=>{
  if (err) return console.log(err)
  console.log('file content unlink')
})