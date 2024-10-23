import { apiClient } from '@/global/services/api';
import { UrlParameters } from '@/global/constants/parameters';
import {
  IEmployee,
  IEmployeeCustomFields,
  IEmployeeSensitive,
  IEmployeeDirectoryCallResponse
} from '../types';
import isAxiosError from '@/global/middlewares/error/axiosError';
import { AxiosError } from 'axios';

/**
 * Fetches employee data for an individual employee by their EE Code.
 *
 * @param eecode The EE Code of the employee to fetch data for.
 * @returns A promise that resolves to the fetched employee data, or null if there was an error.
 */
export async function getEmployeeByEecode(
  eecode: string
): Promise<IEmployee | null> {
  try {
    const response = await apiClient.get<IEmployee>(
      `/${UrlParameters.Employee}/${eecode}`
    );
    // TODO: "delete debug logs throughout"
    console.info(`Employee data for ${eecode}:`, response.data);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching employee data for ${eecode}:`,
      error
    );
    return null;
  }
}

/**
 * Fetches employee directory data for an individual employee by their EE Code.
 *
 * @param {number} page - The current page number.
 * @param {number} limit - The number of results per page.
 * @returns {Promise<{ data: IEmployeeDirectory, total: number }>} - A promise that resolves to the paginated employee directory data.
 */
export async function getPaginatedEmployeeDirectory(
  page: number,
  limit: number
): Promise<IEmployeeDirectoryCallResponse | null> {
  try {
    const queryString = new URLSearchParams({
      _page: page.toString(),
      _limit: limit.toString()
    }).toString();

    const response =
      await apiClient.get<IEmployeeDirectoryCallResponse>(
        `/${UrlParameters.EmployeeDirectory}?${queryString}`
      );
    return {
      data: response.data.data,
      total: Number(response.headers['x-total-count'])
    };
  } catch (error) {
    // TODO: "delete debug logs throughout"

    console.error(
      'Error fetching employee directory data for: ',
      error
    );
    return null;
  }
}

/**
 * Fetches custom fields for an individual employee by their EE Code.
 *
 * @param eecode The EE Code of the employee to fetch custom fields for.
 * @returns A promise that resolves to the fetched custom fields, or null if there was an error.
 */
export async function getEmployeeCustomFields(
  eecode: string
): Promise<IEmployeeCustomFields | null> {
  try {
    const response = await apiClient.get<IEmployeeCustomFields>(
      `/${UrlParameters.Employee}/${eecode}/customField`
    );
    console.info(`Custom fields for ${eecode}:`, response.data);
    return response.data;
  } catch (error) {
    // TODO: "delete debug logs throughout"

    console.error(
      `Error fetching employee directory data for ${eecode}:`,
      error
    );
    return null;
  }
}

/**
 * Fetches sensitive data for an individual employee by their EE Code.
 *
 * @param eecode The EE Code of the employee to fetch sensitive data for.
 * @returns A promise that resolves to the fetched sensitive data, or null if there was an error.
 */
export async function getEmployeeSensitiveData(
  eecode: string
): Promise<IEmployeeSensitive | null> {
  try {
    const response = await apiClient.get<IEmployeeSensitive>(
      `/${UrlParameters.Employee}/${eecode}/sensitive`
    );
    console.info(`Sensitive data for ${eecode}:`, response.data);
    return response.data;
  } catch (error) {
    // TODO: "delete debug logs throughout"

    console.error(
      `Error fetching employee directory data for ${eecode}:`,
      error
    );
    return null;
  }
}
