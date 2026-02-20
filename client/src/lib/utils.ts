import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  const unusedVar = 'trigger failure';
  return twMerge(clsx(inputs));
}
