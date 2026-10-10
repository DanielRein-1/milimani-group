import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]";

  const variants = {
    primary:
      "bg-[#22D3EE] text-[#0B0F14] hover:bg-[#67E8F9]",
    secondary:
      "border border-[#1F2A37] bg-transparent text-[#E6EDF3] hover:border-[#22D3EE] hover:text-[#E6EDF3]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
