import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const getAllUsers = async (req, res) => {
    const resp = await User.find({});
    res.json(resp);
};

export const insertUser = async (req, res) => {
    const encryptedPasswd = bcrypt.hashSync(req.body.passwd);
    const userData = { ...req.body, passwd: encryptedPasswd };
    const newUser = new User(userData);
    const result = await newUser.save();
    res.json(result);
};
