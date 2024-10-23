import { apiClient } from '@/global/services/api';
import { IEmployeeChanges } from '../types';
import { calculateDateRange } from '../utils/calculateDateRange';

/**
 * Fetches a single change log for an employee within the past 7 days by EE
 * Code and change ID.
 *
 * @param eecode The EE Code of the employee to fetch the change log for.
 * @param changeId The ID of the change to fetch.
 * @returns A promise that resolves to the employee change log, or null if there
 * was an error.
 */
export async function getEmployeeChangeInRange(
  eecode: string,
  changeId: string
): Promise<IEmployeeChanges | null> {
  const { startDate, endDate } = calculateDateRange();

  const queryString = new URLSearchParams({
    startDate: startDate.toString(),
    endDate: endDate.toString()
  }).toString();

  try {
    const response = await apiClient.get<IEmployeeChanges>(
      `/employee/${eecode}/change/${changeId}?${queryString}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching change data for ${eecode} and change ID ${changeId}:`,
      error
    );
    return null;
  }
}

/**
 * Fetches a single sensitive change log for an employee within the past 7 days
 * by EE Code and change ID.
 *
 * @param eecode The EE Code of the employee to fetch the sensitive change log
 * for.
 * @param changeId The ID of the sensitive change to fetch.
 * @returns A promise that resolves to the employee sensitive change log, or null
 * if there was an error.
 */
export async function getEmployeeSensitiveChangeInRange(
  eecode: string,
  changeId: string
): Promise<IEmployeeChanges | null> {
  const { startDate, endDate } = calculateDateRange();

  const queryString = new URLSearchParams({
    startDate: startDate.toString(),
    endDate: endDate.toString()
  }).toString();

  try {
    const response = await apiClient.get<IEmployeeChanges>(
      `/employee/${eecode}/sensitivechange/${changeId}?${queryString}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching sensitive change data for ${eecode} and change ID ${changeId}:`,
      error
    );
    return null;
  }
}
