import React from "react";

export const Button = ({
  children,
  variant = "default", // Default variant
  className = "",
  ...props
}) => {
  // Define button styles for different variants
  const baseStyle = "px-4 py-2 rounded font-semibold";
  const variantStyles = {
    default: "bg-green-600 text-white hover:bg-green-700",
    ghost: "bg-transparent text-gray-900 hover:bg-gray-200",
    white: "bg-white text-green-600 hover:bg-green-50",
  };

  // Combine styles
  const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${className}`;

  return (
    <button {...props} className={buttonStyle}>
      {children}
    </button>
  );
};
