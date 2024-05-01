const http=require('http');
const fs=require('fs');
const url=require('url');
const port=3000;
const server=http.createServer((req,res)=>{
    let path=url.parse(req.url,true);
  if(path.pathname=='/products'){
     let data=fs.readFileSync(__dirname+"/products.json",'utf-8');
     let newdata=JSON.parse(data);
     let queryData=path.query;
     let return1=newdata.filter((prod)=>{

        return prod.Category==queryData.Category;
     })
     
     res.writeHead(200,{'content-type':'application/json'});
     res.write(JSON.stringify(return1));
  }
  else if(path.pathname=='/filterproducts'){

    let data=fs.readFileSync(__dirname+"/products.json");
    let newdata=JSON.parse(data);
    let Pricefilter=parseFloat(path.query.Price);
    let return1 = newdata.filter((prod)=>{
      return (prod.Category==path.query.Category)&&(prod.Price>Pricefilter); 
    })
    res.writeHead(200,{'content-type':'application/json'})
    res.write(JSON.stringify(return1));

  }
  else{
    res.writeHead(404,{'content-type':'text/plain'})
    res.write("not found anything");
  }
  res.end();
})

server.listen(port,(err)=>{
    if(err){
        console.log("server is not connected")}
    else
console.log(`server is running at ${port}`);
})