const http=require('http');
const fs=require('fs');
const url=require('url');


const server=http.createServer((req,res)=>{
let path=url.parse(req.url,true);

if(req.url=='/login.html'){
    fs.readFile(__dirname+"/login.html",'utf-8',(err,data)=>{
         if(err){
            console.log(err,"err");
            res.writeHead(302,{'Content-type':'text/plain'});
            res.write('not');
         }
         else
         {
            //console.log(data);
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data);
         }
         res.end();
    })
}
else if(req.url=='/signup.html'){
    fs.readFile(__dirname+"/signup.html",'utf-8',(err,data)=>{
        if(err){
            res.writeHead(302,{'Content-type':'text/plain'})
            res.write('not');
        }
        else{
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data);
        }
        res.end();
    })
}

else if(path.pathname=='/check'){
    fs.readFile(__dirname+"/data.json",'utf-8',(err,data)=>{
        if(err){
            res.writeHead(302,{'content-type':'text/plain'});
            res.write('not');
        }
        else{
            let newdata=JSON.parse(data);
            if(newdata.length==0){
                newdata=[];
            }

            let flag=false;
            newdata.forEach((val)=>{
                if(val.email==path.query.email && val.password==path.query.password)  
                flag=true;
            })
            if(flag==true){
                res.write('user exist');
            }
            else{
                res.write("user does not exist or your password or email is wrong please check then try again");
            }
        }
        res.end();
    });
}
else if(path.pathname=='/add'){
    fs.readFile(__dirname+"/data.json",'utf-8',(err,data)=>{
       if(err){
        res.writeHead(302,{'content-type':'text/plain'})
        res.write('not');
       }
       else{
        data=JSON.parse(data);
        if(data.length==0){
            data=[];
        }
        let flag=false;
        data.forEach((val)=>{
            if(val.email==path.query.email)
            flag=true;
        })
        if (flag){
             res.writeHead(302,{'content-type':'text/plain'})
            res.write('User already exists');
          }
        else{
            data.push(path.query);
             fs.writeFile(__dirname+"/data.json",JSON.stringify(data),(err)=>{
            if(err){
            res.writeHead(302,{'Content-type':'text/plain'});
            res.statusMessage="not ok";
            res.write('error');
            }
        else
        res.writeHead(200,{'Content-type':'text/plain'});
        res.write('user Created succcessfully');
    }
     )
     }
}
   res.end();
       })
}
else{
    res.writeHead(404,{'content-type':'text/plain'})
    res.write('page not found');
    res.end();
    }



});

server.listen(3000,(err)=>{
    if(err){
         console.log("server cant run");
     }
     else
     {
         console.log("server is runnning on 3000");
     }
 })





 

