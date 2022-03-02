import express from 'express';
import { adminRequired, loginRequired } from '../middlewares/interceptors.js';

import {
    deleteSerie,
    getAllSeries,
    insertSerie,
} from '../services/series-crud.js';
const router = express.Router();

router.get('/', loginRequired, getAllSeries);
router.post('/', loginRequired, adminRequired, insertSerie);
router.delete('/:id', loginRequired, adminRequired, deleteSerie);

export default router;
