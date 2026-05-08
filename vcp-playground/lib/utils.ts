import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function rgbaToHex(rgbaString:string) {
  // Define a regular expression to match and capture r, g, b, and a values
  const rgbaRegex = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*([01]?\.?\d*)\s*)?\)$/;

  // Use the regex to match the rgbaString
  const match = rgbaString.match(rgbaRegex);

  if (match) {
    // Extract and parse the r, g, b, and a values
    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);
    const a = match[4] !== undefined ? parseFloat(match[4]) : 1;

    // Convert r, g, and b to two-digit hex values
    const rHex = r.toString(16).padStart(2, '0');
    const gHex = g.toString(16).padStart(2, '0');
    const bHex = b.toString(16).padStart(2, '0');

    // Convert a to a two-digit hex value, scaled to 255
    const aHex = Math.round(a * 255).toString(16).padStart(2, '0');

    // Combine the hex values into a single string
    const hex = `#${rHex}${gHex}${bHex}${aHex !== 'ff' ? aHex : ''}`;

    return hex;
  }
  
  // If the input does not match, throw an error or return null
  throw new Error("Invalid RGBA string");
}

export function capitalizeWord(word:string) {
  return word.charAt(0).toUpperCase()+word.slice(1)
}

export function getBuilderApiKey(hostlist:any) {
  const host = typeof hostlist==="string" ? 'localhost' : hostlist.get('host');
  const hostPrefix = host.split(/[-:]/)[0];

  switch (hostPrefix) {
    case 'tim': return '50b344f9116e4820a020e382058146e0';
    case 'localhost': return 'a87584e551b6472fa0f0a2eb10f2c0ff';
    default: return 'a87584e551b6472fa0f0a2eb10f2c0ff'
  }
}