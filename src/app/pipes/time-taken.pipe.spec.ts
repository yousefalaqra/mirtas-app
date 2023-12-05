import { TimeTakenPipe } from './time-taken.pipe';

describe('TimeTakenPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeTakenPipe();
    expect(pipe).toBeTruthy();
  });
});
