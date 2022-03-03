import express from 'express';

import { deleteSerie, insertSerie } from '../controllers/serie.controller.js';
import {
    addToWatchedSeries,
    getAllUserSeries,
    getUnWatchedSeries,
    getWatchedSeries,
} from '../controllers/user.controller.js';
import { adminRequired, loginRequired } from '../middlewares/interceptors.js';
import { updateSerie } from '../controllers/serie.controller.js';
const router = express.Router();

router.get('/', loginRequired, getAllUserSeries);
router.post('/', loginRequired, adminRequired, insertSerie);
router.delete('/:id', loginRequired, adminRequired, deleteSerie);
router.get('/viewed', loginRequired, getWatchedSeries);
router.get('/pending', loginRequired, getUnWatchedSeries);
router.put('/:id', loginRequired, adminRequired, updateSerie);
router.patch('/view/:id', loginRequired, addToWatchedSeries);

export default router;
