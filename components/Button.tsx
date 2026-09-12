import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'glow' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium tracking-tight transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none active:scale-[0.98]";
  
  const variants = {
    primary: "bg-brand hover:bg-brand-600 text-white shadow-md shadow-brand/25 hover:shadow-lg hover:shadow-brand/35 focus:ring-brand border border-brand/40",
    secondary: "bg-brand-dark hover:bg-brand-darker text-white shadow-md shadow-brand-darker/20 focus:ring-brand-dark",
    glow: "bg-gradient-to-r from-brand to-brand-dark text-white shadow-glow hover:shadow-glow-lg focus:ring-brand border border-white/20",
    outline: "border border-brand/30 bg-transparent text-brand-dark hover:bg-brand-50/70 hover:border-brand focus:ring-brand",
    glass: "bg-white/80 hover:bg-white text-gray-800 backdrop-blur-md border border-gray-200/80 shadow-sm hover:shadow focus:ring-brand",
    white: "bg-white hover:bg-gray-50 text-brand-dark font-semibold shadow-md hover:shadow-lg focus:ring-white border border-gray-100"
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-xl gap-2",
    lg: "px-7 py-3.5 text-base rounded-xl gap-2.5 shadow-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <i className="fa-solid fa-circle-notch fa-spin text-sm"></i>
          <span>Processando...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="inline-flex shrink-0 items-center">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="inline-flex shrink-0 items-center transition-transform group-hover:translate-x-1">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};