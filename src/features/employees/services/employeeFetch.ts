import { apiClient } from '@/utils/api';
import { UrlParameters } from '@/utils/pathParameters';
import {
  IEmployee,
  IEmployeeCustomFields,
  IEmployeeSensitive,
  IEmployeeDirectoryCallResponse
} from '../types';
import { handleServiceError } from '@/middlewares/error/servicesError';
import logger from '@/services/logger';

/**
 * Fetches employee data for an individual employee by their EE Code.
 *
 * @param eecode - The EE Code of the employee to fetch data for.
 * @returns A promise that resolves to the fetched employee data, or null if there was an error.
 */
export async function getEmployeeByEecode(
  eecode: string
): Promise<IEmployee | null> {
  try {
    const response = await apiClient.get<IEmployee>(
      `/${UrlParameters.Employee}/${eecode}`
    );
    logger.info(`Employee data for ${eecode}:`, response.data);
    return response.data;
  } catch (error) {
    handleServiceError(error, eecode, 'fetching employee data');
    return null;
  }
}

/**
 * Fetches employee directory data with pagination.
 *
 * @param page - The current page number.
 * @param limit - The number of results per page.
 * @returns A promise that resolves to the paginated employee directory data, or null if there was an error.
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
    logger.info(
      `Fetched employee directory page ${page} with limit ${limit}`
    );
    return {
      data: response.data.data,
      total: Number(response.headers['x-total-count'])
    };
  } catch (error) {
    handleServiceError(error, '', 'fetching employee directory');
    return null;
  }
}

/**
 * Fetches custom fields for an individual employee by their EE Code.
 *
 * @param eecode - The EE Code of the employee to fetch custom fields for.
 * @returns A promise that resolves to the fetched custom fields, or null if there was an error.
 */
export async function getEmployeeCustomFields(
  eecode: string
): Promise<IEmployeeCustomFields | null> {
  try {
    const response = await apiClient.get<IEmployeeCustomFields>(
      `/${UrlParameters.Employee}/${eecode}/customField`
    );
    logger.info(
      `Custom fields for employee ${eecode}:`,
      response.data
    );
    return response.data;
  } catch (error) {
    handleServiceError(error, eecode, 'fetching custom fields');
    return null;
  }
}

/**
 * Fetches sensitive data for an individual employee by their EE Code.
 *
 * @param eecode - The EE Code of the employee to fetch sensitive data for.
 * @returns A promise that resolves to the fetched sensitive data, or null if there was an error.
 */
export async function getEmployeeSensitiveData(
  eecode: string
): Promise<IEmployeeSensitive | null> {
  try {
    const response = await apiClient.get<IEmployeeSensitive>(
      `/${UrlParameters.Employee}/${eecode}/sensitive`
    );
    logger.info(`Sensitive data fetched for employee ${eecode}.`);
    return response.data;
  } catch (error) {
    handleServiceError(error, eecode, 'fetching sensitive data');
    return null;
  }
}
