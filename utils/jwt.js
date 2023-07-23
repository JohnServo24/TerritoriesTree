import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
const TOKEN_DURATION = 14400;

export const setToken = (data) => {
    return jwt.sign(data, JWT_SECRET, { expiresIn: TOKEN_DURATION });
} 

// Returns null instead of throwing an error for flexibility
export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET, () => null);
}
