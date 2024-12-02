const http = require('http');
const database = require('./database');

http.createServer(async (req,res)=> {

    //CORS ERROR
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Max-Age', 2592000); 
    
    if(req.url == '/api/employees'){        
        try {
            res.writeHead(200, {'Content-Type':'application/json'});
            const dataset = await database.employees();
            res.write(dataset); 
        }
        finally {
            res.end(); 
        }
    }
}).listen(4000);