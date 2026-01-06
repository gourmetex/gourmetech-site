import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand hover:bg-brand-dark text-white focus:ring-brand",
    secondary: "bg-brand-dark hover:bg-brand-darker text-white focus:ring-brand-dark",
    outline: "border-2 border-brand text-brand hover:bg-brand-light/10 focus:ring-brand",
    white: "bg-white text-brand hover:bg-gray-100 focus:ring-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <i className="fa-solid fa-circle-notch fa-spin mr-2"></i>
          Processando...
        </>
      ) : children}
    </button>
  );
};