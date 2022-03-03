import * as crud from '../services/platforms-crud.js';
import { Platform } from '../models/platform.model.js';

export const getAllPlatforms = async (req, res, next) => {
    try {
        const resp = await crud.getAllPlatforms(Platform);
        res.json(resp);
    } catch (err) {
        next(err);
    }
};

export const insertPlatform = (req, res, next) => {
    try {
        const resp = crud.insertPlatform(req.body, Platform);
        res.json(resp);
    } catch (error) {
        next(error);
    }
};

export const deletePlatform = (req, res) => {
    crud.deletePlatform(req.params.id, Platform).then((resp) => {
        if (resp) {
            res.status(202);
            res.json(resp);
        } else {
            res.status(204);
            res.json({ message: 'Platform not found' });
        }
    });
};
