// const http=require('http');
// const fs=require('fs');
// const port=5000;
// const server=http.createServer((req,res)=>{
//     console.log(req.url);
// if(req.url=='/about'){
//     res.writeHead(200,{'Content-type':'text.plain'})
//     res.write("about page");
//     res.end();
// }
// else if (req.url=='/home'){
//     res.writeHead(200,{'Content-type':'text/plain'});
//     res.write('home');
//     res.end();
// }
// else{

//     fs.readFile(__dirname+"/info.json",'utf-8',(err,data)=>{
//  if(err){
//     res.writeHead(302,{'content-type':'text/plain'})
//     res.write("not");
//  }
//  else{
//     const data1={"url":`${req.url}`,"time":`${new Date().toLocaleDateString()}`}
//     data=JSON.parse(data);
//       if(data.length==0){
//       data=[];
//       }

//       data.push(data1);

//       fs.write(__dirname+"/info.json",JSON.stringify(data),(err)=>{
//            if(err){
//             res.writeHead(302,{'content-type':'text/plain'})
//             res.write("not");
//            }
//            else{
//             res.writeHead(200,{'Content-type':'text/plain'});
//             res.write("added");
//            }
//            res.end();
//       })

//  }

//     })
// }
// })

// server.listen(port,(err)=>{
//     if (err){
//         console.log('error has occured and server is not running')
//     }
//     else
//     console.log(`server is runnig on ${port}`);
// }
// )


const http = require('http');
const fs = require('fs');
const port = 5000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'}); 
        res.write("About page");
        res.end();
    } 
    else if (req.url == '/home') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Home');
        res.end();
    } 
    else {
        fs.readFile((__dirname+"/info.json"), 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(302, {'Content-Type': 'text/plain'}); 
                res.write("Error reading file");
                res.end();
            } 
            else if(req.url!="/favicon.ico"){
                const data1 = {"url": `${req.url}`, "time": `${new Date().toLocaleDateString()}`};
                fs.appendFile((__dirname+"/info.json"), JSON.stringify(data1), (err) => { 
                    if (err) {
                        res.writeHead(302, {'Content-Type': 'text/plain'}); 
                        res.write("Error writing file");
                    } else {
                        res.writeHead(200, {'Content-Type': 'text/plain'});
                        res.write("Added");
                    }
                    res.end();
                });
            }
        });
    }
});

server.listen(port, (err) => {
    if (err) {
        console.log('Error has occurred and the server is not running');
    } else {
        console.log(`Server is running on port ${port}`);
    }
});
