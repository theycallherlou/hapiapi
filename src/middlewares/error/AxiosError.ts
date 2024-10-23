import { AxiosError } from 'axios';

/**
 * Checks if an error is an AxiosError.
 *
 * @param err The error to check
 * @returns If the error is an AxiosError
 */
export default function isAxiosError(err: unknown) {
  return (err as AxiosError).isAxiosError !== undefined;
}
