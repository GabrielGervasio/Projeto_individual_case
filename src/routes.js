import { Router } from 'express';

import {
  insertFuncionario,
  updateFuncionario,
  selectFuncionarios,
  selectFuncionario,
  deleteFuncionario,
} from './Controllers/Funcionarios.js';



//Import CRUD da entidade Prato Principal
import {
  selectJoias,
  selectJoia,
  insertJoia,
  updateJoia,
  deleteJoia 
} from './Controllers/Joias.js';



const router = Router();

router.get('/', (req, res) => {
  res.json({
    statusCode: 200,
    msg: 'Api Rodando',
  });
});
// Funcionarios
router.get('/funcionarios', selectFuncionarios);
router.get('/funcionario', selectFuncionario);
router.post('/funcionario', insertFuncionario);
router.put('/funcionario', updateFuncionario);
router.delete('/funcionario', deleteFuncionario);
// Funcionarios


//Joias
router.get('/joias', selectJoias);
router.get('/joia', selectJoia);
router.post('/joia', insertJoia);
router.put('/joia', updateJoia);
router.delete('/joia', deleteJoia);
//Joias

export default router;
