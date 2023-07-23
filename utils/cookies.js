import { cookies } from 'next/headers';

export const setCookie = (name, value) => {
    cookies().set(name, value, { 
        secure: true,
        httpOnly: true,
        sameSite: "strict",
        path: '/',
        maxAge: 14400
    });
}

export const getCookie = (name) => {
    return cookies().get(name);
}

export const destroyCookie = (name) => {
    cookies().set({
        name,
        value: '',
        maxAge: 0
    });
}
