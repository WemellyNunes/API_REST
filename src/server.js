import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './Routes/routes.js';
import db from './db.js';

dotenv.config({ path: 'variaveis.env' });

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({title:"Bem-vindo à API de Cadastro Civil"});
});



db.sync().then(() => {
  console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
}).catch(err => {
  console.error('Erro ao conectar ao banco de dados:', err);
});


app.listen(process.env.PORT, () => {
  console.log(`Servidor iniciado com sucesso na porta: ${process.env.PORT}`);
});
