export function toUnixTimestamp(
  value: string | number
): number | null {
  if (typeof value === 'number' && value > 0 && value < 9999999999) {
    return value;
  } else if (typeof value === 'string') {
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      return Math.floor(date.getTime() / 1000);
    }
  }
  return null;
}
