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
  const baseStyles = 'inline-flex items-center justify-center font-medium tracking-wider uppercase transition-all duration-300 rounded-full group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black relative overflow-hidden select-none';

  const variants = {
    primary: 'bg-cyan-400 text-black font-semibold hover:bg-white hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] border border-cyan-300',
    secondary: 'bg-white/5 text-slate-100 border border-white/20 hover:border-cyan-400/60 hover:bg-cyan-950/30 hover:text-cyan-300 backdrop-blur-md',
    outline: 'border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]',
    ghost: 'text-slate-300 hover:text-cyan-400 hover:bg-white/5',
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
