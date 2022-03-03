import express from 'express';
import { loginRequired } from '../middlewares/interceptors.js';
import {
    deletePlatform,
    getAllPlatforms,
    insertPlatform,
} from '../controllers/platform.controller.js';
const router = express.Router();

router.get('/', loginRequired, getAllPlatforms);
router.post('/', insertPlatform);
router.delete('/:id', deletePlatform);

// router.post('/', loginRequired, adminRequired, insertPlatform);
// router.delete('/:id', loginRequired, adminRequired, deletePlatform);

export default router;
