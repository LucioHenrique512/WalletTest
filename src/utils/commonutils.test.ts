import { delay } from "./commonutils";

describe('commonutils', () => {
  describe('delay', () => {
    it('should delay for the specified time', async () => {
      const ms = 1000;
      const startTime = Date.now();

      await delay(ms);

      const endTime = Date.now();
      const elapsedTime = endTime - startTime;

      expect(elapsedTime).toBeGreaterThanOrEqual(ms);
    });
  });
});