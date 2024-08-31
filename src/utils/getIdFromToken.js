import { jwtDecode } from 'jwt-decode';

export const getIdFromToken = () => {
    const token = localStorage.getItem("token");

    if (token) {
        const decode = jwtDecode(token);

        return decode.jti;
    }

    return null;
};

