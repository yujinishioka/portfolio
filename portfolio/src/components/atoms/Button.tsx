'use client';

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({ variant = "default", className, ...props }: ButtonProps) {
  const base = "px-4 py-2 rounded-md font-medium transition";
  const styles = {
    default: "bg-white text-blue-800 hover:bg-blue-100",
    outline: "border border-white text-white hover:bg-white hover:text-blue-800"
  };

  return (
    <button className={cn(base, styles[variant], className)} {...props} />
  );
}
