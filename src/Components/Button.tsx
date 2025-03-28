import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset"; // Add type prop
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
  disabled = false,
  type = "button", // Default type as "button"
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type} // Apply the type prop
      className={`px-4 py-2 text-white rounded-md bg-[#1e40af] hover:bg-[#1e3a8a] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
