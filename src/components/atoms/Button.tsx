'use client';

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({ variant = "default", className, ...props }: ButtonProps) {
  const base = "px-4 py-2 text-lg rounded-md font-medium transition";
  const styles = {
    default: "bg-white text-secondary-dark hover:bg-secondary-light hover:text-black cursor-pointer",
    outline: "border border-white text-white hover:bg-primary-light hover:text-black"
  };

  return (
    <button className={cn(base, styles[variant], className)} {...props} />
  );
}
