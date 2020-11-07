var http = require("http");

const httpServer = http.createServer(handleServer);
 

function handleServer(rq, rs) {
   
    if(rq.url !== "/welcome" && rq.url !== "/contact"  )
    {
        rs.write('404 - file not found');
    }
    
    if(rq.url ==="/welcome")
    {   
        rs.writeHead(200, { 'Content-Type': 'text/plain' });
        rs.write("Welcome to Dominos!");
        rs.end();
    } 
    if(rq.url ==="/contact")
    {
        rs.writeHead(200, { 'Content-Type': 'application/json' });
        rs.write(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
            }));
        rs.end();
    }
    
  



}
httpServer.listen(8081);
module.exports = httpServer;
