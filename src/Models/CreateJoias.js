import { openDb } from '../configDB.js';


export async function createJoias() {
  openDb()
      .then(db => {
          db.exec('CREATE TABLE IF NOT EXISTS joias ( id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(50) NOT NULL,cor VARCHAR(15) NOT NULL, preco DOUBLE(4,2) NOT NULL, descricao VARCHAR(60) NOT NULL)');
      })
};