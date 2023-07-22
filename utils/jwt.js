import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
const TOKEN_DURATION = 14400;

export const setToken = (data) => {
    return jwt.sign(data, JWT_SECRET, { expiresIn: TOKEN_DURATION });
} 

// Didn't use verify because I don't want it to
// throw an error if the token is not valid.
export const isTokenExpired = (token) => {
    if (!token) return null;

    const data = jwt.decode(token, JWT_SECRET);

    return new Date() > new Date(data.exp * 1000);
}
