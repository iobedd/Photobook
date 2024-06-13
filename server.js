var http = require('http');  
var url = require('url');  
var fs = require('fs');

var server = http.createServer(function(request, response) {  
    var path = url.parse(request.url).pathname;  
    switch (path) {  
        case '/':  
            response.writeHead(200, {  
                'Content-Type': 'text/plain'  
            });  
            response.write("This is Test Message.");  
            response.end();  
            break;
        case '/Assets/Images/logan.png':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'image/png'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });
            break;
        case '/Assets/Images/triangle.png':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'image/png'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break; 
        case '/Assets/Images/star.png':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'image/png'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break; 
        case '/Assets/Images/moon.png':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'image/png'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;
        case '/Assets/Images/heart.png':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'image/png'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
        case '/Assets/Images/fulger.png':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'image/png'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break; 
        case '/Assets/Images/Eye.png':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'image/png'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;
        case '/Assets/Images/dog.png':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'image/png'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;
        case '/Assets/Images/bam.png':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'image/png'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;   
        case '/img/logan.png':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'image/png'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;
        case '/img/menu.png':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'image/png'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;
        case '/img/close.png':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'image/png'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;
        case '/img/conifer.jpg':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'image/jpg'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;
        case '/img/iza.JPG':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'image/JPG'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;
        case '/css/style.css':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/css'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;
        case '/css/xoxostyle.css':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/css'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break; 
        case '/js/xoxo.js':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/js'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break; 
        case '/xoxo.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;
            case '/css/stylememo.css':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/css'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break; 
        case '/js/memoscript.js':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/js'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break; 
        case '/memo.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break; 
        case '/index.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;   
        default:  
            response.writeHead(404);  
            response.write("opps this doesn't exist - 404");  
            response.end();  
            break;  
    }  
});  
server.listen(504);  
console.log("Server is runing at port 504");