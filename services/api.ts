import { ContactFormData } from '../types';

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log('API call to /api/contact with payload:', data);

  // Simulate success
  return {
    success: true,
    message: 'Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.'
  };
};