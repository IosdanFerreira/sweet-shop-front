import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string, utilizing `clsx`
 * for conditional class selection and `twMerge` for Tailwind CSS class merging.
 *
 * @param inputs - An array of class values that can be strings, objects, or arrays.
 * @returns A single merged string of class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
