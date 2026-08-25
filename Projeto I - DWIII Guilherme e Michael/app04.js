const url = require('url');
const http = require('http');
const fs = require('fs');

function readFile(response, file){
    fs.readFile(file, function(err, data){
        if(err){
            console.log("ERRO AO LER ARQUIVO:", file);
            console.log(err);

            response.writeHead(500, {"Content-Type":"text/plain"});
            response.end("Erro ao ler o arquivo: " + file);
            return;
        }

        console.log("Arquivo lido com sucesso:", file);
        response.end(data);
    });
}

var callback = function(request,response){

    var parts = url.parse(request.url);

    console.log("URL recebida:", request.url);
    console.log("PATH:", parts.path);


    if(parts.path == "/"){
            response.writeHead(200, {"Content-type":"text/html"});

        readFile(response, 'index.html')
    }
    // Servidor Guilherme
    else if(parts.path == "/guilherme"){
            response.writeHead(200, {"Content-type":"text/html"});

        readFile(response, 'guilherme/guilherme.html')
    }
        // Imagem Guilherme
    else if(parts.path == '/guilherme/imagem'){
            response.writeHead(200, {"Content-type":"image/png"});
        readFile(response, 'guilherme/guilherme.jpg')}

        //Curriculo Guilherme

    else if(parts.path == '/guilherme/curriculo'){
        response.writeHead(200, {"Content-type":"application/pdf"})
        readFile(response, 'guilherme/guilherme.pdf')
    }
    // Servidor Michael
    else if(parts.path == "/michael"){
            response.writeHead(200, {"Content-type":"text/html"});

        readFile(response, 'michael/michael.html')
    }
        // Imagem Michael
    else if(parts.path == '/michael/imagem'){
            response.writeHead(200, {"Content-type":"image/webp"});

        readFile(response, 'michael/michael.webp')
    }
        // Curriculo Michael
    else if(parts.path == '/michael/curriculo'){
        response.writeHead(200, {"Content-type":"application/pdf"})
        readFile(response, 'michael/michael.pdf')
    }

    //Pagina erro
    else{
       response.writeHead(404, {"Content-type":"text/html"});
       readFile(response, 'erro404.html') 
        }
        
}


var server = http.createServer(callback)
server.listen(3000);
console.log("Servidor Iniciado em http://localhost:3000/");
