import axios from 'axios';
import { ContactFormData } from '../types';

const DEV_ENVIRONMENT = "http://192.168.15.8:3000/"; 
const TEST_ENVIRONMENT = "https://gourmetech-coreteste-5d758e07e0da.herokuapp.com/"; 
const PROD_ENVIRONMENT = "https://gourmetech-core-46715094ffeb.herokuapp.com/"; 

const getBaseUrl = (): string => {
    const hostname = window.location.hostname;

    if (hostname.includes("localhost") || hostname.includes("192.168")) {
        return DEV_ENVIRONMENT;
    } else if (hostname.includes("dev.") || hostname.includes("dev-")) {
        return TEST_ENVIRONMENT;
    } else {
        return PROD_ENVIRONMENT;
    }
};

const api = axios.create({
    baseURL: getBaseUrl(),
    headers: {
        'Content-Type': 'application/json'
    }
});

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
    try {
        const response = await api.post('/utils/contact', data);
        return {
            success: true,
            message: response.data.message || 'Mensagem enviada com sucesso!'
        };
    } catch (error: any) {
        console.error('Erro ao enviar contato:', error);
        
        const errorMessage = error.response?.data?.message || 'Não foi possível enviar sua mensagem. Tente novamente.';
        throw new Error(errorMessage);
    }
};

export default api;