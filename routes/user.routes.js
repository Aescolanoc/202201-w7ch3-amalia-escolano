import express from 'express';
const router = express.Router();
import { login } from '../controllers/login.controller.js';
import { insertUser } from '../controllers/user.controller.js';

router.post('/login', login);
router.post('/register', insertUser);

export default router;
