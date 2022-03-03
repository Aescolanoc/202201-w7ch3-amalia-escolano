import { verifyToken } from '../services/auth.js';

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

export const adminRequired = async (req, res, next) => {
    const authorization = req.get('authorization');
    let token;
    const tokenError = new Error('token missing or invalid');
    tokenError.status = 401;
    let decodedToken;
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7);
        decodedToken = verifyToken(token);
        if (!decodedToken.isAdmin) {
            next(tokenError);
        } else {
            req.tokenPayload = decodedToken;
            next();
        }
    } else {
        next(tokenError);
    }
    // const userRole = req.tokenPayload.isAdmin;
    // if (userRole) {
    //     next();
    // } else {
    //     const userError = new Error('not authorized user');
    //     userError.status = 401;
    //     next(userError);
    // }
};

export const protectRoute = (req, res, next) => {
    const authorization = req.get('authorization');
    let token;
    let decodedToken;
    try {
        if (authorization && authorization.toLowerCase().startsWith('bearer')) {
            token = authorization.substring(7);
            decodedToken = verifyToken(token);
            if (typeof decodedToken === 'string') {
                throw new Error();
            }
            next();
        } else {
            throw new Error();
        }
    } catch (error) {
        res.status(401).json({
            error: 'token missing or invalid',
        });
    }
};
