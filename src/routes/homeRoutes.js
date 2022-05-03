import { Router } from 'express'; // import express from 'express';
import homeController from '../controllers/HomeController';

const router = new Router(); // const router = new express.router();

router.get('/', homeController.index);

export default router;
