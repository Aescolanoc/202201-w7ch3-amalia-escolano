import * as crud from '../services/series-crud.js';
import { Serie } from '../models/serie.model.js';

export const getAllSeries = async (req, res, next) => {
    try {
        const resp = await crud.getAllSeries(Serie);
        res.json(resp);
    } catch (err) {
        next(err);
    }
};

export const insertSerie = (req, res) => {
    crud.insertSerie(req.body, Serie).then((resp) => {
        res.json(resp);
    });
};

export const deleteSerie = (req, res) => {
    crud.deleteSerie(req.params.id, Serie).then((resp) => {
        if (resp) {
            res.status(202);
            res.json(resp);
        } else {
            res.status(204);
            res.json({ message: 'Serie not found' });
        }
    });
};
