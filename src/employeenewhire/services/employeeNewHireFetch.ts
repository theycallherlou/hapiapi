import axios from 'axios';
import { UrlParameters } from '@/global/constants/parameters';
import { IEmployeeNewHire } from '../types';

const apiClient = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: `Bearer ${process.env.API_SID}:${process.env.API_TOKEN}`,
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  }
});


/**
 * Fetches all employee new hires between the given start and end dates.
 *
 * @param startDate The start date (inclusive) to fetch new hires from, in milliseconds since the Unix epoch.
 * @param endDate The end date (inclusive) to fetch new hires up to, in milliseconds since the Unix epoch.
 * @returns A promise that resolves to an array of employee new hire objects, or null if there was an error.
 */
export async function fetchEmployeeNewHires(
  startDate: number,
  endDate: number
): Promise<IEmployeeNewHire[] | null> {
  try {
    const response = await apiClient.get<IEmployeeNewHire[]>(
      `${UrlParameters.EmployeeNewHire}?startDate=${startDate}&endDate=${endDate}`
    );
    console.info('Employee New Hires:', response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch employee new hires', error);
    return null;
  }
}

/**
 * Fetches a new hire employee by their EE Code.
 *
 * @param eecode The EE Code of the new hire employee to fetch.
 * @returns A promise that resolves to the fetched new hire employee, or null if there was an error.
 */
export async function fetchEmployeeNewHireByCode(
  eecode: string
): Promise<IEmployeeNewHire | null> {
  try {
    const response = await apiClient.get<IEmployeeNewHire>(
      `${UrlParameters.EmployeeNewHire}/${eecode}`
    );
    console.info(
      `Employee New Hire with EE Code ${eecode}:`,
      response.data
    );
    return response.data;
  } catch (error) {
    console.error(
      `Failed to fetch employee new hire with EE Code ${eecode}`,
      error
    );
    return null;
  }
}
