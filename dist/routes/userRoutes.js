"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Rotas que nao deveriam existir por segurança
// router.get('/', userController.index); // Nao queremos listar os usuarios da aplicacao
// router.get('/:id', userController.show); // Nao queremos mostrar 1 usuario da aplicacao

// Rotas que deveriam existir
router.post('/', _loginRequired2.default, _UserController2.default.store); // Precisamos sim de uma rota para criar um usuario
router.put('/', _loginRequired2.default, _UserController2.default.update); // Precisamos sim de uma rota para editar um usuario
router.delete('/', _loginRequired2.default, _UserController2.default.delete); // Precisamos sim de uma rota para deletar um usuario
exports. default = router;

/*
Metodos que geralmente sao usados no mercado de trabalho:
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH ou PUT
*/
