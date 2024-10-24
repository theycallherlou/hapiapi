import { apiClient } from '@/utils/api';
import { IEmployeeChanges } from '../types';
import { calculateDateRange } from '@/utils/dateRange';
import logger from '@/services/logger';
import { handleServiceError } from '@/middlewares/error/servicesError';
import parseToUnixTimestamp from '@/utils/timestamp';

/**
 * Fetches a single change log for an employee.
 * Accepts either UNIX timestamps or date strings for start and end date.
 *
 * @param eecode - The EE Code of the employee.
 * @param changeId - The ID of the change.
 * @param startDate - The start date as a UNIX timestamp or a date string 'YYYY-MM-DD' or 'MM-DD-YYYY'.
 * @param endDate - The end date as a UNIX timestamp or a date string 'YYYY-MM-DD' or 'MM-DD-YYYY'.
 *
 * @returns A promise that resolves to the employee change log, or null if there was an error.
 */

export async function getEmployeeChangeInRange(
  eecode: string,
  changeId: string,
  startDate: string | number,
  endDate: string | number
): Promise<IEmployeeChanges | null> {
  try {
    const startDateUnix = parseToUnixTimestamp(startDate);
    const endDateUnix = parseToUnixTimestamp(endDate);

    const queryString = new URLSearchParams({
      startDate: startDateUnix.toString(),
      endDate: endDateUnix.toString()
    }).toString();

    const response = await apiClient.get<IEmployeeChanges>(
      `/employee/${eecode}/change/${changeId}?${queryString}`
    );

    logger.info(
      `Fetched change data for EE code ${eecode} and change ID ${changeId}`
    );
    return response.data;
  } catch (error) {
    handleServiceError(
      error,
      eecode,
      `fetching change data for change ID ${changeId}`
    );
    return null;
  }
}

/**
 * Fetches a single sensitive change log for an employee.
 * Accepts either UNIX timestamps or date strings for start and end date.
 *
 * @param eecode - The EE Code of the employee.
 * @param changeId - The ID of the sensitive change.
 * @param startDate - The start date as a UNIX timestamp or a date string 'YYYY-MM-DD' or 'MM-DD-YYYY'.
 * @param endDate - The end date as a UNIX timestamp or a date string 'YYYY-MM-DD' or 'MM-DD-YYYY'.
 *
 * @returns A promise that resolves to the employee sensitive change log, or null if there was an error.
 */
export async function getEmployeeSensitiveChangeInRange(
  eecode: string,
  changeId: string,
  startDate: string | number,
  endDate: string | number
): Promise<IEmployeeChanges | null> {
  try {
    const startDateUnix = parseToUnixTimestamp(startDate);
    const endDateUnix = parseToUnixTimestamp(endDate);

    const queryString = new URLSearchParams({
      startDate: startDateUnix.toString(),
      endDate: endDateUnix.toString()
    }).toString();

    const response = await apiClient.get<IEmployeeChanges>(
      `/employee/${eecode}/sensitivechange/${changeId}?${queryString}`
    );

    logger.info(
      `Fetched sensitive change data for EE code ${eecode} and change ID ${changeId}`
    );
    return response.data;
  } catch (error) {
    handleServiceError(
      error,
      eecode,
      `fetching sensitive change data for change ID ${changeId}`
    );
    return null;
  }
}
