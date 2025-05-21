'use client';

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary";
};

export function MidiaButton({ variant = "default", className, ...props }: ButtonProps) {
  const base = "p-3 text-lg rounded-full font-medium transition";
  const styles = {
    default: "bg-gray-dark text-gray-light hover:bg-primary-light hover:text-black cursor-pointer",
    secondary: "bg-gray-light text-gray-dark hover:bg-primary-light hover:text-black cursor-pointer"
  };

  return (
    <button className={cn(base, styles[variant], className)} {...props} />
  );
}
