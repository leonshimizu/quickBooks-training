import React, { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string; // Allow additional custom classes
}

export const Textarea: React.FC<TextareaProps> = ({ className = "", ...props }) => {
  return <textarea {...props} className={`w-full px-4 py-2 border rounded ${className}`} />;
};
