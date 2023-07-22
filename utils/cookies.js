import { cookies } from 'next/dist/client/components/headers';

export const setCookie = (name, value) => {
    cookies().set(name, value, { secure: true })
}
