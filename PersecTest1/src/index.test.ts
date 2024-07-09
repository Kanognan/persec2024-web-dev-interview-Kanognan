import { hexToRgb } from './index'; 

describe('Color Conversion', () => {
  test('convert hex #FF9933 to rgb', () => {
    const result = hexToRgb('#FF9933');
    console.log(result);
    expect(result).toEqual({ r: 255, g: 153, b: 51 });
  });

  test('convert hex #ff9933 to rgb', () => {
    const result = hexToRgb('#ff9933');
    console.log(result);
    expect(result).toEqual({ r: 255, g: 153, b: 51 });
  });

  test('convert hex #FFF to rgb', () => {
    const result = hexToRgb('#FFF');
    console.log(result);
    expect(result).toEqual({ r: 255, g: 255, b: 255 });
  });

  test('convert hex #000 to rgb', () => {
    const result = hexToRgb('#000');
    console.log(result);
    expect(result).toEqual({ r: 0, g: 0, b: 0 });
  });
});
