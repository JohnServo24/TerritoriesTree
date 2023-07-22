import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const setToken = (data) => {
    return jwt.sign(data, JWT_SECRET);
} 
