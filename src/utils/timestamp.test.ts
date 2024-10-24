import parseToUnixTimestamp from './timestamp';

test('should return the same number if the input is a UNIX timestamp', () => {
  const timestamp = 1633072800;
  expect(parseToUnixTimestamp(timestamp)).toBe(timestamp);
});

test('should parse a valid date string to a UNIX timestamp', () => {
  const dateString = '2021-10-01';
  const expectedTimestamp = 1633046400; // UNIX timestamp for 2021-10-01 00:00:00 UTC
  expect(parseToUnixTimestamp(dateString)).toBe(expectedTimestamp);
});

test('should throw an error for an invalid date string', () => {
  const invalidDateString = 'invalid-date';
  expect(() => parseToUnixTimestamp(invalidDateString)).toThrowError(
    `Invalid date format: ${invalidDateString}`
  );
});

test('should parse a date string with time to a UNIX timestamp', () => {
  const dateTimeString = '2021-10-01T12:00:00Z';
  const expectedTimestamp = 1633089600; // UNIX timestamp for 2021-10-01 12:00:00 UTC
  expect(parseToUnixTimestamp(dateTimeString)).toBe(
    expectedTimestamp
  );
});
