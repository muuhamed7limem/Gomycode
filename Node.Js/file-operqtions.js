const fs = require("fs")

fs.writeFileSync("welcome.txt","Hello node",(err) => {

    if (err) throw err
    console.log("File created succefully!")

})


fs.readFile("welcome.txt","utf8",(err,data) => {

    if (err) throw err
    console.log(data)
})