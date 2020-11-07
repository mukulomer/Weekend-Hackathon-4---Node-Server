var http = require("http");

const httpServer = http.createServer(handleServer);
 
let obj= {
    phone: '18602100000',
    email: 'guestcaredominos@jublfood.com'
    };

function handleServer(req, res) {

    
    if(rq.url ==="/welcome")
    {
        rs.write("Welcome to Dominos!");
        rs.end();
    } 
    if(rq.url ==="/contact")
    {
        rs.write(json.strigify(obj));
        rs.end();
    }
    
    if(rq.url !== "/welcome" && rq.url !== "/contact"  )
    {
    rs.status(404).send(` not found!`);
    }



}
server.listen(8081);
module.exports = httpServer;
