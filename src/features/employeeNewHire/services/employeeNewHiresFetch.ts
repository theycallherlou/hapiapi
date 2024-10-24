import { apiClient } from '@/utils/api';
import { IEmployeeNewHire } from '../types';
import { handleServiceError } from '@/middlewares/error/servicesError';
import logger from '@/services/logger';

/**
 * Fetches new hire data for an employee using their EE Code.
 *
 * @param eecode - The EE Code of the employee to fetch new hire data for.
 * @returns A promise that resolves to the fetched new hire data, or null if there was an error.
 */
export async function getEmployeeNewHireById(
  eecode: string
): Promise<IEmployeeNewHire | null> {
  try {
    const response = await apiClient.get<IEmployeeNewHire>(
      `/employeenewhire/${eecode}`
    );
    logger.info(
      `Fetched employee new hire data for employee ID ${eecode}`
    );
    return response.data;
  } catch (error) {
    handleServiceError(
      error,
      eecode,
      'fetching employee new hire data'
    );
    return null;
  }
}

/**
 * Fetch all employee new hires, optionally supporting pagination.
 *
 * @param page - The page number for pagination.
 * @param limit - The limit of results per page.
 * @returns The paginated list of new hires or null if an error occurs.
 */
export async function getAllEmployeeNewHires(
  page: number,
  limit: number
): Promise<IEmployeeNewHire[] | null> {
  const queryString = new URLSearchParams({
    _page: page.toString(),
    _limit: limit.toString()
  }).toString();

  try {
    const response = await apiClient.get<IEmployeeNewHire[]>(
      `/employeeNewHire?${queryString}`
    );
    logger.info(
      `Fetched all employee new hires (page: ${page}, limit: ${limit})`
    );
    return response.data;
  } catch (error) {
    handleServiceError(error, '', 'fetching all employee new hires');
    return null;
  }
}
