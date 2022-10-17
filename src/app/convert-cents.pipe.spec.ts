import { ConvertCentsPipe } from './convert-cents.pipe';

describe('ConvertCentsPipe', () => {
  const pipe = new ConvertCentsPipe()

  it('should return $15.99 when given 1599',() => {
    expect(pipe.transform(1599)).toBe('$15.99')
  });

  it('should return $0.00 when passed undefined', () => {
    expect(pipe.transform(undefined)).toBe('$0')
  });
});
