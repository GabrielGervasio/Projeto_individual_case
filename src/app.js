import { openDb } from './configDB.js';

import express from 'express';
import router from './routes.js';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import { createJoias } from './Models/CreateJoias.js';
import { CreateFuncionarios } from './Models/CreateFuncionarios.js';



const app = express();
app.use(express.json());
app.use(cors());

app.use(router);
openDb()


createJoias();
CreateFuncionarios();


app.listen(8088, () => console.log('API Rodando'));

https
  .createServer(
    {
      cert: fs.readFileSync('src/SSL/code.crt'),
      key: fs.readFileSync('src/SSL/code.key'),
    },
    app
  )
  .listen(3001, () => console.log('Rodando em https'));
