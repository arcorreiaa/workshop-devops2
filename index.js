const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Hello World</title>
      <style>
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
        }
        h1 {
          font-size: 4em;
          margin-bottom: 0.2em;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
        }
        p {
          font-size: 1.5em;
          margin-top: 0;
        }
        .btn {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 24px;
          background: #fff;
          color: #2575fc;
          border-radius: 25px;
          text-decoration: none;
          font-weight: bold;
          transition: 0.3s;
        }
        .btn:hover {
          background: #2575fc;
          color: #fff;
        }
      </style>
    </head>
    <body>
      <div>
        <h1>Hello, World2</h1>
         <h2>ALYSSON</h2>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
