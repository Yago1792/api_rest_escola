import { Router } from 'express'; // import express from 'express';

import fotoController from '../controllers/FotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router(); // const router = new express.router();

router.post('/', loginRequired, fotoController.store);

export default router;
