import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string; // Allow additional custom classes
}

export const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return <input {...props} className={`w-full px-4 py-2 border rounded ${className}`} />;
};
