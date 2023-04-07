import express from 'express';

const router = express.Router();

import {createUser, loginController} from '../controller/userController.js';

router.post('/register',createUser)
router.post('/login',loginController)

export default router;