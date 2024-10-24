import logger from '@/services/logger';

describe('Logger Tests', () => {
  beforeEach(() => {
    jest.spyOn(logger, 'info').mockImplementation(jest.fn());
    jest.spyOn(logger, 'error').mockImplementation(jest.fn());
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should call logger.info with the correct message', () => {
    const testMessage = 'Test info log message';

    logger.info(testMessage);

    expect(logger.info).toHaveBeenCalledWith(testMessage);
  });

  it('should call logger.error with the correct message', () => {
    const errorMessage = 'Test error log message';

    logger.error(errorMessage);

    expect(logger.error).toHaveBeenCalledWith(errorMessage);
  });
});
