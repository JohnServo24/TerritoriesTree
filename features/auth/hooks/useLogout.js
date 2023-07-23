import { useRouter } from "next/navigation";
import { SUCCESS } from "@/constants/httpStatuses";
import request from "@/utils/request";

const LOGOUT_URL = '/api/account/logout';

const useLogout = () => {
    const router = useRouter();

    return async () => {
        const { code } = await request.post(LOGOUT_URL);

        if (code === SUCCESS) {
            router.push('/account/login');
        }
    }
}

export default useLogout;
