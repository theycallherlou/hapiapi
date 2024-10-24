/**
 * Parses a date string or a UNIX timestamp and returns the value as a UNIX timestamp.
 *
 * @param dateInput - A UNIX timestamp (number) or a date string (e.g., 'YYYY-MM-DD').
 * @returns The UNIX timestamp (in seconds).
 */
export default function parseToUnixTimestamp(dateInput: string | number): number {
  if (typeof dateInput === 'number') {
    return dateInput;
  }

  const parsedDate = new Date(dateInput);

  if (isNaN(parsedDate.getTime())) {
    throw new Error(`Invalid date format: ${dateInput}`);
  }

  return Math.floor(parsedDate.getTime() / 1000);
}
