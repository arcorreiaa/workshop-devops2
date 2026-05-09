const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Mini Game</title>

    <style>
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        cursor:none;
      }

      body{
        overflow:hidden;
        background:#0f172a;
        font-family:Arial, sans-serif;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        color:white;
      }

      h1{
        font-size:60px;
        z-index:2;
        position:relative;
      }

      .cursor{
        width:22px;
        height:22px;
        border:2px solid #fff;
        border-radius:50%;
        position:fixed;
        pointer-events:none;
        transform:translate(-50%, -50%);
        transition:transform .08s linear;
        z-index:9999;
      }

      .cursor::after{
        content:'';
        width:8px;
        height:8px;
        background:#fff;
        border-radius:50%;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
      }

      .ball{
        width:50px;
        height:50px;
        background:#38bdf8;
        border-radius:50%;
        position:absolute;
        animation:float 2s infinite alternate ease-in-out;
        box-shadow:0 0 30px #38bdf8;
      }

      @keyframes float{
        from{
          transform:translateY(-10px);
        }
        to{
          transform:translateY(10px);
        }
      }

      .score{
        position:absolute;
        top:20px;
        left:20px;
        font-size:24px;
      }
    </style>
  </head>

  <body>

    <div class="score">
      Score: <span id="score">0</span>
    </div>

    <h1>Catch Me 🎯</h1>

    <div class="ball" id="ball"></div>

    <div class="cursor"></div>

    <script>
      const cursor = document.querySelector('.cursor');

      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });

      const ball = document.getElementById('ball');
      const scoreText = document.getElementById('score');

      let score = 0;

      function randomPosition(){
        const x = Math.random() * (window.innerWidth - 60);
        const y = Math.random() * (window.innerHeight - 60);

        ball.style.left = x + 'px';
        ball.style.top = y + 'px';
      }

      ball.addEventListener('mouseenter', () => {
        score++;
        scoreText.innerText = score;
        randomPosition();

        ball.style.transform = 'scale(1.3)';

        setTimeout(() => {
          ball.style.transform = 'scale(1)';
        }, 150);
      });

      randomPosition();
    </script>

  </body>
  </html>
  `);
});

app.listen(port, () => {
  console.log(\`Servidor rodando na porta \${port}\`);
});
