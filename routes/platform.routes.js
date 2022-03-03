import express from 'express';
import { adminRequired, loginRequired } from '../middlewares/interceptors.js';
import {
    deletePlatform,
    getAllPlatforms,
    insertPlatform,
} from '../controllers/platform.controller.js';
import { updatePlatform } from '../controllers/platform.controller.js';
const router = express.Router();

router.get('/', loginRequired, getAllPlatforms);
router.post('/', loginRequired, adminRequired, insertPlatform);
router.delete('/:id', loginRequired, adminRequired, deletePlatform);
router.put('/:id', loginRequired, adminRequired, updatePlatform);

export default router;
