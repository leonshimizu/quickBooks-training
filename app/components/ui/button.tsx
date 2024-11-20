import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // Ensures `children` is typed
  variant?: "default" | "ghost" | "white"; // Define allowed variants
  className?: string; // Allow additional custom classes
  size?: "sm" | "md" | "lg"; // Optional size prop
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyle = "rounded font-semibold";
  const variantStyles = {
    default: "bg-green-600 text-white hover:bg-green-700",
    ghost: "bg-transparent text-gray-900 hover:bg-gray-200",
    white: "bg-white text-green-600 hover:bg-green-50",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button {...props} className={buttonStyle}>
      {children}
    </button>
  );
};
