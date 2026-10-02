import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function formatNumber(num) {
  return num < 10 ? `0${num}` : `${num}`;
}
