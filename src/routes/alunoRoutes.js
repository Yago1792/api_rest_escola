import { Router } from 'express'; // import express from 'express';
import alunoController from '../controllers/AlunoController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router(); // const router = new express.router();

router.get('/', alunoController.index);
router.post('/', loginRequired, alunoController.store);
router.delete('/:id', loginRequired, alunoController.delete);
router.get('/:id', alunoController.show);
router.put('/:id', loginRequired, alunoController.update);

export default router;
