import { openDb } from '../configDB.js';

export async function selectJoias(req, res) {
    openDb()
        .then(db => {
            db.all('SELECT * FROM joias')
                .then(principal => res.json(principal))
        })
}

export async function selectJoia(req, res) {
    let id = req.body.id;
    openDb()
        .then(db => {
            db.get('SELECT * FROM joias WHERE id=?', [id])
                .then(principal => res.json(principal))
        })
}

export async function insertJoia(req, res) {
    let nome = req.body;
    openDb()
        .then(db => {
            db.run('INSERT INTO joias (nome,preco,cor,descricao) VALUES (?,?,?,?)', [nome.nome, nome.preco,nome.cor, nome.descricao]);
            res.json({
                "statusCode": 200
            })
        })
}

export async function updateJoia(req, res) {
    let nome = req.body;
    openDb()
        .then(db => {
            db.run('UPDATE joias SET nome=? ,preco=?, cor=? ,descricao=? WHERE id=?', [nome.nome, nome.preco,nome.cor , nome.descricao, nome.id]);
            res.json({
                "statusCode": 200
            })
        })
}



export async function deleteJoia(req, res) {
    let id = req.body.id;
    openDb()
        .then(db => {
            db.get('DELETE FROM joias WHERE id=?', [id]).then(res => res)
        })
    res.json({
        "statusCode": 200
    })
}