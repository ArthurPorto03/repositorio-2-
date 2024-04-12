const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  if (req.url === '/') {

    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
       
        console.error('Erro ao ler o arquivo JSON:', err);
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ error: 'Erro ao ler o arquivo JSON' }));
        return;
      }
   
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(data);
    });
  } else {
    
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Rota não encontrada');
  }
});
const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
