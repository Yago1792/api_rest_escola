import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Rotas que nao deveriam existir por segurança
// router.get('/', userController.index); // Nao queremos listar os usuarios da aplicacao
// router.get('/:id', userController.show); // Nao queremos mostrar 1 usuario da aplicacao

// Rotas que deveriam existir
router.post('/', loginRequired, userController.store); // Precisamos sim de uma rota para criar um usuario
router.put('/', loginRequired, userController.update); // Precisamos sim de uma rota para editar um usuario
router.delete('/', loginRequired, userController.delete); // Precisamos sim de uma rota para deletar um usuario
export default router;

/*
Metodos que geralmente sao usados no mercado de trabalho:
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH ou PUT
*/
