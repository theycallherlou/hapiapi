import isAxiosError from '@/middlewares/error/AxiosError';
import logger from '@/services/logger';

/**
 * Centralized function to handle errors consistently across the service layer.
 *
 * @param error - The caught error object, typed as `unknown` to enforce type checking.
 * @param eecode - The employee code for context.
 * @param operation - A string indicating the current operation (e.g., "fetching employee data").
 */
export function handleServiceError(
  error: unknown,
  eecode: string,
  operation: string
) {
  if (isAxiosError(error)) {
    const errorMessage = error ? JSON.stringify(error) : error;

    logger.error(
      `Axios error during ${operation} for ${eecode}: ${errorMessage}`
    );
  } else if (error instanceof Error) {
    logger.error(
      `Error during ${operation} for ${eecode}: ${error.message}`
    );
  } else {
    logger.error(
      `Unknown error during ${operation} for ${eecode}: ${String(error)}`
    );
  }
}
