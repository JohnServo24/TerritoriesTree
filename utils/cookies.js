import { cookies } from 'next/headers';

export const setCookie = (name, value) => {
    cookies().set(name, value, { secure: true });
}

export const getCookie = (name) => {
    return cookies().get(name);
}
