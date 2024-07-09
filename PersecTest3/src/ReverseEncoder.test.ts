import ReverseEncoder from './ReverseEncoder';

describe('ReverseEncoder', () => {
  let reverseEncoder: ReverseEncoder;

  beforeEach(() => {
    reverseEncoder = new ReverseEncoder();
  });

  test('เข้ารหัส "Hello world" เป็น "svool dliow"', () => {
    const encodedResult = reverseEncoder.encode("hello world");
    console.log('Encoded "hello world" to:', encodedResult);
    expect(encodedResult).toBe("svool dliow");
  });

  test('ถอดรหัส "svool dliow" เป็น "Hello world"', () => {
    const decodedResult = reverseEncoder.decode("svool dliow");
    console.log('Decoded "svool dliow" to:', decodedResult);
    expect(decodedResult).toBe("hello world");
  });

  test('เข้ารหัส "Programming is fun!" เป็น "kiltiznnrmt rh ufm!"', () => {
    const encodedResult = reverseEncoder.encode("programming is fun!");
    console.log('Encoded "programming is fun!" to:', encodedResult);
    expect(encodedResult).toBe("kiltiznnrmt rh ufm!");
  });

  test('ถอดรหัส "kiltiznnrmt rh ufm!" เป็น "Programming is fun!"', () => {
    const decodedResult = reverseEncoder.decode("kiltiznnrmt rh ufm!");
    console.log('Decoded "kiltiznnrmt rh ufm!" to:', decodedResult);
    expect(decodedResult).toBe("programming is fun!");
  });
});
