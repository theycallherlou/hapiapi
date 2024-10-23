/**
 * Check if a value is a valid UNIX timestamp.
 * @param value Value to check.
 * @returns True if the value is a valid UNIX timestamp, false otherwise.
 */

export function isUnixTimestamp(value: unknown): boolean {
  if (typeof value !== 'number' || isNaN(value)) return false;

  const date = new Date(value * 1000);

  return (
    date.getTime() > 0 &&
    date.getFullYear() > 1970 &&
    date.getFullYear() < 3000
  );
}

/**
 * Converts a date string to a UNIX timestamp.
 * If the input is already a UNIX timestamp, it returns the input as is.
 *
 * @param date The date string to convert, or a number if it's already a UNIX timestamp.
 * @returns The UNIX timestamp in seconds.
 */
export function toUnixTimestamp(date: unknown): number {
  if (isUnixTimestamp(date)) {
    return date as number; // Already a UNIX timestamp
  }

  // Convert to Date object and return UNIX timestamp in seconds
  const timestamp = new Date(date as string | number).getTime();
  return Math.floor(timestamp / 1000);
}
