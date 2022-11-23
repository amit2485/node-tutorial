
const http = require("http");

const server = http.createServer((req,res) => {
    //res.write("My first server created");
    //res.end();
    if(req.url === "/"){
        res.end("We are in the home page");
        return;
    }
    if(req.url === "/about"){
        res.end("We are in the about page");
        return;
    }
    
        res.end(`<h1>OOPS !</h1>
    <p>We don't have the page you are requesting for</p>
    <a href="/">back home</a>`);
    
})

server.listen(5000,  () => {
    console.log("server running on port 5000");
})