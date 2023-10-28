const http = require("http")


// req= what we send to server
// res= what we recieve from server

http.createServer((req,res)=>{
//   res.writeHead(200, { "Hi charlie": "text/plain" });
//   res.write("Hello Everyone");
  res.end();
})

.listen(5000)