export function hexToRgb(hex: string): { r: number, g: number, b: number } | null {
    hex = hex.replace(/^#/, '');
    
    if (hex.length === 3) {
      hex = hex.split('').map(char => char + char).join('');
    }
  
    if (hex.length !== 6) {
      return null;
    }
  
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
  
    return { r, g, b };
  }
  