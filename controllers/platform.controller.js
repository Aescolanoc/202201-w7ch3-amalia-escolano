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

export const insertPlatform = async (req, res, next) => {
    try {
        const resp = await crud.insertPlatform(req.body, Platform);
        res.json(resp);
    } catch (error) {
        next(error);
    }
};

export const deletePlatform = async (req, res, next) => {
    try {
        const resp = await crud.deletePlatform(req.params.id, Platform);
        res.json(resp);
    } catch (error) {
        next(error);
    }
};

export const updatePlatform = async (req, res, next) => {
    try {
        const resp = crud.updatePlatform(req.params.id, req.body, Platform);

        res.json(resp);
    } catch (error) {
        next(error);
    }
};
