import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const getAllUsers = async (req, res, next) => {
    try {
        const resp = await User.find({});
        res.json(resp);
    } catch (err) {
        next(err);
    }
};

export const getAllUserSeries = async (req, res, next) => {
    const userName = req.tokenPayload.name;
    try {
        const resp = await User.find({ name: userName })
            .select({ name: 0, isAdmin: 0 })
            .populate('watchedSeries', { name: 1, _id: 0 })
            .populate('unWatchedSeries', { name: 1, _id: 0 });
        res.json(resp);
    } catch (err) {
        next(err);
    }
};

export const getWatchedSeries = async (req, res, next) => {
    const userName = req.tokenPayload.name;
    try {
        const resp = await User.find({ name: userName })
            .select('watchedSeries')
            .populate('watchedSeries', { name: 1, _id: 0 });
        res.json(resp);
    } catch (err) {
        next(err);
    }
};

export const getUnWatchedSeries = async (req, res, next) => {
    const userName = req.tokenPayload.name;
    try {
        const resp = await User.find({ name: userName })
            .select('unWatchedSeries')
            .populate('unWatchedSeries', { name: 1, _id: 0 });
        res.json(resp);
    } catch (err) {
        next(err);
    }
};

// export const addToWatchedSeries = async (req, res, next) => {
//     const user = await User.find(req.tokenPayload.name);
//     let userWatchedSeries = user.watchedSeries;
//     console.log(userWatchedSeries);
//     const filter = req.tokenPayload.name;
//     const update = { watchedSeries: req.params.id };

//     try {
//         const resp = await User.findOneAndUpdate(filter, update, {
//             new: true,
//         });
//         res.json(resp);
//     } catch (error) {
//         next(error);
//     }
// };

export const insertUser = async (req, res, next) => {
    try {
        const encryptedPasswd = bcrypt.hashSync(req.body.passwd);
        const userData = { ...req.body, passwd: encryptedPasswd };
        const newUser = new User(userData);
        const result = await newUser.save();
        res.json(result);
    } catch (err) {
        next(err);
    }
};
