/* Fatec 217 - Aula 19/08/2026 - 3 Sem - DSM
Nome: Guilherme Marinho - guilherme.pozati@gmail.com
Descricao primeiro programa de node.js ocm webserver (sem framework).
Objetivo ter o primeiro contato com node.js e webserver.
Versao 04: Abrir arquivos no end point.
Nela foi adicionado:
modulo url que trabalha com todos os recurso de url, inclusive end points (rotas).
adicionado os end points e tratamento de erro em caso de nao porta

*/
// Carregar os modulos


const url = require('url');
const http = require('http');
const fs = require('fs');

//Funcao para ler arquivo e enviar no http:
function readFile(response,file){

    fs.readFile(file, function(err, data){

        response.end(data);
    })
}

//Funcao Callback para utilizar nos server http:
var callback = function(request,response){

    var parts = url.parse(request.url);


    if(parts.path == "/"){
            response.writeHead(200, {"Content-type":"text/html"});

        readFile(response, 'index.html')
    }
    // Servidor Guilherme
    else if(parts.path == "/guilherme"){
            response.writeHead(200, {"Content-type":"text/html"});

        readFile(response, 'guilherme.html')
    }
        // Imagem Guilherme
    else if(parts.path == '/guilherme/imagem'){
            response.writeHead(200, {"Content-type":"image/png"});
        readFile(response, 'guilherme.png')}

        //Curriculo Guilherme

    else if(parts.path){
        response.writeHead(200, {"Content-type":"application/pdf"})
        readFile(response, 'guilherme.pdf')
    }
    // Servidor Michael
    else if(parts.path == "/michael"){
            response.writeHead(200, {"Content-type":"text/html"});

        readFile(response, 'michael.html')
    }
        // Imagem Michael
    else if(parts.path == '/michael/imagem'){
            response.writeHead(200, {"Content-type":"image/png"});

        readFile(response, 'michael.png')
    }
        // Curriculo Michael
    else if(parts.path){
        response.writeHead(200, {"Content-type":"application/pdf"})
        readFile(response, 'michael.pdf')
    }

    //Pagina erro
    else{
       response.writeHead(200, {"Content-type":"text.html"});
       readFile(response, 'erro404.html') 
        }
        
}


var server = http.createServer(callback)
server.listen(3000);
console.log("Servidor Iniciado em http://localhost:3000/");

