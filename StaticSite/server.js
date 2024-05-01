const http=require('http');
const fs=require('fs');


const server=http.createServer((req,res)=>{
    console.log(`the url is ${req.url}`);
    if(req.url=="/home.html"){
         fs.readFile(__dirname+"/home.html",'utf-8',(err,data)=>{
            if(err){
            res.writeHead(302,{'Content-type':'text/plain'});
            res.write("not found");
            }
            else{
            res.writeHead(200,{'Content-type':'text/html'});
            res.write(data);
            }
            res.end();
         })

         }
        else if(req.url=="/style.css"){
            fs.readFile(__dirname+"/style.css",'utf-8',(err,data)=>{
                if(err){
                    res.writeHead(302,{'Content-type':'text/plain'})
                    res.write("not found");
                }
                else{
                res.writeHead(200,{'Contnet-type':'text/html'})
            res.write(data);}
            res.end();
            })
        }
        else if(req.url=="/photo.jpg"){
            fs.readFile(__dirname+"/photo.jpg",(err,data)=>{
                if(err){
                    res.writeHead(302,{'Content-type':'text/plain'})
                    res.write("not found");
                }
                else{
                res.writeHead(200,{'Contnet-type':'text/html'})
            res.write(data);}
            res.end();
            })
        }
        else if(req.url=="/index.js"){
            fs.readFile(__dirname+"/index.js",'utf-8',(err,data)=>{
                if(err){
                    res.writeHead(302,{'Content-type':'text/plain'})
                    res.write("not found");
                }
                else{
                res.writeHead(200,{'Contnet-type':'text/html'})
            res.write(data);}
            res.end();
            })
        }





})

server.listen(3000,(err)=>{
    if(err){
        console.log("error");
    }
    else
    console.log("running at port 3000");
})