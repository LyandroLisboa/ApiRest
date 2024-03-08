import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();
// nao deveria existir
// router.get('/', userController.index); // Lista usuarios
// router.get('/:id', userController.show); // lista usuario

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/**
 * index > lista todos os usuarios > GET
 * store/create > cria um novo usuario >POST
 * delete > apara um usuario > DELETE
 * show > mostra um usuario > GET
 * update > atualiza um usuario > PATH ou PUT
 */
