import parseToUnixTimestamp from '@/utils/timestamp';

test('should return the same value if passed a UNIX timestamp (in seconds)', () => {
  const unixTimestamp = 1633046400;
  const result = parseToUnixTimestamp(unixTimestamp);
  expect(result).toBe(unixTimestamp);
});

test('should convert a valid "YYYY-MM-DD" date string to a UNIX timestamp', () => {
  const dateString = '2023-10-01';
  const expectedUnixTimestamp = Math.floor(
    new Date(dateString).getTime() / 1000
  );
  const result = parseToUnixTimestamp(dateString);
  expect(result).toBe(expectedUnixTimestamp);
});

test('should convert a valid "YYYY-MM-DDTHH:mm:ss" date string to a UNIX timestamp', () => {
  const dateString = '2023-10-01T15:30:00';
  const expectedUnixTimestamp = Math.floor(
    new Date(dateString).getTime() / 1000
  );
  const result = parseToUnixTimestamp(dateString);
  expect(result).toBe(expectedUnixTimestamp);
});

test('should throw an error for an invalid ISO date string', () => {
  const invalidDateString = '2023-25-01';
  expect(() => parseToUnixTimestamp(invalidDateString)).toThrow(
    'Invalid ISO date format'
  );
});

test('should throw an error for an invalid string', () => {
  const invalidDateString = 'invalid-date';
  expect(() => parseToUnixTimestamp(invalidDateString)).toThrow(
    'Invalid ISO date format'
  );
});
