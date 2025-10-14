import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
  size?: "default" | "icon";
}

export function Button({ variant = "default", size = "default", className = "", ...props }: ButtonProps) {
  const base = "rounded-md font-medium transition-colors";
  const variants = {
    default: "bg-orange-500 text-white hover:bg-orange-600",
    ghost: "bg-transparent text-white hover:bg-white/10",
  };
  const sizes = {
    default: "px-4 py-2",
    icon: "p-2",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
