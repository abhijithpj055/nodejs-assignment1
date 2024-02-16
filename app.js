
const http =require('http')
const URL =require('url')
const fs =require('fs')

const server =http.createServer((req,res)=>{

    const endpoint =URL.parse(req.url,true).pathname
    if(endpoint==='/'){
        res.write("This is a home page")
        res.end()
    }
    else if(endpoint==='/about'){
        res.write('This is about page')
        res.end()
    }else{
        res.write('404 page')
        res.end()
    }

})
server.listen(5000)


const server2 =http.createServer((req,res)=>{
    fs.readFile('./index.html',(err,page)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(page)
    res.end()
    })
})
server2.listen(7000)