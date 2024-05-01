const http=require('http');
const fs=require("fs");
const url=require('url');

const server=http.createServer((req,res)=>{
    let path=url.parse(req.url,true);
if(path.pathname=='/'){
   // res.statusCode=200;
    res.statusMessage='ok';
    let data=fs.readFileSync(__dirname+'/product.json','utf-8');

    let products=JSON.parse(data);
    let return1= products.filter((prod)=>{
        return prod.category=="six";
    })
   // res.setHeader('Content-Type', 'application/json');
   res.writeHead(200,{'Content-Type':'text/plain'});
res.write(JSON.stringify(return1));
res.end();
}
else
{
//res.setHeader('content-type','text/plain');
//res.statusCode=404;
//res.statusMessage='not found';

res.writeHead(404,{'Content-Type':'text/plain'})
res.end();
}
})




server.listen(3001,(err)=>{
    if(err){
        console.log("unable to start the server");
    }
    else
    console.log("server started on 3001");
})