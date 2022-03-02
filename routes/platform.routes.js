import express from 'express';
import { adminRequired, loginRequired } from '../middlewares/interceptors.js';
import {
    deletePlatform,
    getAllPlatform,
    insertPlatform,
} from '../services/platforms-crud.js';
const router = express.Router();

router.post('/', loginRequired, adminRequired, insertPlatform);
router.get('/', loginRequired, getAllPlatform);
router.delete('/:id', loginRequired, adminRequired, deletePlatform);

export default router;
