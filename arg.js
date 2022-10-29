



const fs = require ('fs');

fs.readFile('arg.txt', 'utf8', (err, buff) => {
  if(err){
    console.log(err);
    return;
  }
  console.log(buff)
})
