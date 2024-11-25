const http = require("http")

const server = http.createServer((req,res)=>{

    res.writeHead(200,{"content-type" : "text/html"})
    res.end("<h1>Hello Node!!!!</h1>\n")
})


const PORT = 3000
server.listen(PORT,()=>{
    console.log(`console is running at http://localhost:${PORT}`)
})