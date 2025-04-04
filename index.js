console.log("Hello world")

//npm start : "node index.js"; convenient

//use npx nodemon / error using nodemon index.js

//***DONT USE DOUBLE QUOTES WHEN WRITING HTML INTO FILE WITH res.write method*** 

const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');  
    //res.write('<div style="width:400; height:60; background-color:grey; color:white; display:flex;">HI</div>');
    
    switch(req.url){
        case "/line":
            res.write('<div style="background-color:blue; width:1000px; height:20px;"></div>');
            break;
        case "/block":
            res.write('<div style="background-color:purple; width:500px; height:200px;"></div>');
            break;
        case "/circle":
            res.write('<div style="background-color:orange; width:100px; height:100px; border-radius: 100px;"></div>');
            break;
        default: //default is the same as calling "/" aka no path
            res.write('<div style="color:black">There are no shapes</div>')
            break;
    }
    res.end('Hello World!\n');
    
});
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})