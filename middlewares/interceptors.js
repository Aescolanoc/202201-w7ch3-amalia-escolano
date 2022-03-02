import { verifyToken } from '../services/auth.js';
import { Task } from '../index.js';

export const loginRequired = (req, res, next) => {
    const authorization = req.get('authorization');
    let token;
    const tokenError = new Error('token missing or invalid');
    tokenError.status = 401;
    let decodedToken;
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7);
        decodedToken = verifyToken(token);
        if (typeof decodedToken === 'string') {
            next(tokenError);
        } else {
            req.tokenPayload = decodedToken;
            next();
        }
    } else {
        next(tokenError);
    }
};

// eslint-disable-next-line no-unused-vars
export const userRequired = async (req, res, next) => {
    const taskId = req.params.id;
    const userId = req.tokenPayload.id;
    const task = await Task.findById(taskId);
    console.log(task, userId);
    if (task.responsible.toString() === userId) {
        next();
    } else {
        const userError = new Error('not authorized user');
        userError.status = 401;
        next(userError);
    }
};
