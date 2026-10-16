import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/utils/helpers';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  showIcon = true,
  className = '',
  onClick,
  href,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium tracking-wider uppercase transition-all duration-300 rounded-full group focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#FAF7F2] relative overflow-hidden select-none';

  const variants = {
    primary: 'bg-[#E8521A] text-white font-semibold hover:bg-[#C43F0D] hover:shadow-[0_4px_20px_rgba(232,82,26,0.4)] border border-orange-600/30',
    secondary: 'bg-white/80 text-[#1A1208] border border-[#1A1208]/15 hover:border-orange-400/60 hover:bg-orange-50 hover:text-orange-700 backdrop-blur-md',
    outline: 'border border-orange-400/50 text-orange-600 hover:bg-orange-50 hover:border-orange-500 hover:shadow-[0_4px_16px_rgba(232,82,26,0.15)]',
    ghost: 'text-[#6B5B4A] hover:text-orange-600 hover:bg-orange-50',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-xs sm:text-sm px-6 py-3 gap-2',
    lg: 'text-sm sm:text-base px-8 py-4 gap-3 font-semibold',
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], sizes[size], disabled && 'opacity-50 pointer-events-none', className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {showIcon && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
      )}
    </Component>
  );
}
