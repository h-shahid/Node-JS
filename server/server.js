const path = require('path')
const fs = require('fs')
let dataPath = path.join(__dirname, '../chirps.json')


const chirps = [
    {
      name: "Jackie",
      message: "Hi! I'm from Mobile",
    },
    { name: "Eddie", message: "I was born in Seattle!" },
    { name: "Rajeeyah", message: "My favorite color is red!" },
    {name: "Zarinah", message: "Skiing is fun!"},
    {name: "Ayanna", message: "I love my family!"}
  ]

  const chirpsData = JSON.stringify(chirps) // stringify json when sending data to someone
  fs.writeFileSync("./chirps.json",chirpsData, () => console.log('done')); //created new file, grabbed data from chirps, "done"

  fs.readFile(dataPath,{
    encoding:"UTF-8", 
    }, (err, data) => {
    console.log(data)
    }  //read file created & showed data from chirps.json in console 
  )
