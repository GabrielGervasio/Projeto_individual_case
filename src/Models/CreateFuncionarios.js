import { openDb } from '../configDB.js';


export async function CreateFuncionarios() {
  openDb()
      .then(db => {
          db.exec('CREATE TABLE IF NOT EXISTS funcionarios ( id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(50) NOT NULL, sobrenome VARCHAR(40) NOT NULL, cargo VARCHAR(40) NOT NULL, descricao VARCHAR(60) NOT NULL)');
      })
};