/**
 * Validates if the given ID is a valid new hire ID.
 *
 * A valid new hire ID must be exactly 4 characters long
 * and can only contain uppercase letters (A-Z) and digits (0-9).
 *
 * @param id The ID string to validate.
 * @returns True if the ID is valid, false otherwise.
 */

export function validateEeCode(id: string): boolean {
  return /^[0-9A-Z]{4}$/.test(id);
}
