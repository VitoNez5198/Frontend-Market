import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

// Función para obtener los users desde el backend
export const getUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        throw error;
    }
};