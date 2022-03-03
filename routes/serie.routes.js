import express from 'express';

import {
    deleteSerie,
    getAllSeries,
    insertSerie,
} from '../controllers/serie.controller.js';
import { loginRequired } from '../middlewares/interceptors.js';
const router = express.Router();

router.get('/', loginRequired, getAllSeries);
router.post('/', insertSerie);
router.delete('/:id', deleteSerie);

export default router;
