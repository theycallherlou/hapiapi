import { apiClient } from '@/utils/api';
import { INewHire, INewHireCustomFields } from '../types';
import { handleServiceError } from '@/middlewares/error/servicesError';
import logger from '@/services/logger';
import { UrlParameters } from '@/utils/pathParameters';

/**
 * Fetch a specific new hire by their new hire ID.
 *
 * @param newHireId - The new hire ID.
 * @returns The new hire data or null if not found.
 */
export async function getNewHireById(
  newHireId: string
): Promise<INewHire | null> {
  try {
    const response = await apiClient.get<INewHire>(
      `/newHires/${newHireId}`
    );
    logger.info(`Fetched new hire data for employee ID ${newHireId}`);
    return response.data;
  } catch (error) {
    handleServiceError(error, newHireId, 'fetching new hire data');
    return null;
  }
}

/**
 * Fetch all new hires, optionally supporting pagination.
 *
 * @param page - The page number for pagination.
 * @param limit - The limit of results per page.
 * @returns The paginated list of new hires or null if an error occurs.
 */
export async function getAllNewHires(
  page: number,
  limit: number
): Promise<INewHire[] | null> {
  const queryString = new URLSearchParams({
    _page: page.toString(),
    _limit: limit.toString()
  }).toString();

  try {
    const response = await apiClient.get<INewHire[]>(
      `/newHires?${queryString}`
    );
    logger.info(
      `Fetched all new hires (page: ${page}, limit: ${limit})`
    );
    return response.data;
  } catch (error) {
    handleServiceError(error, '', 'fetching all new hires');
    return null;
  }
}

/**
 * Fetches custom fields for an individual employee by their EE Code.
 *
 * @param eecode - The EE Code of the employee to fetch custom fields for.
 * @returns A promise that resolves to the fetched custom fields, or null if there was an error.
 */
export async function getNewHireCustomFields(
  newHireId: string
): Promise<INewHireCustomFields | null> {
  try {
    const response = await apiClient.get<INewHireCustomFields>(
      `/${UrlParameters.NewHire}/${newHireId}/customField`
    );
    logger.info(
      `Custom fields for new hire ${newHireId}:`,
      response.data
    );
    return response.data;
  } catch (error) {
    handleServiceError(error, newHireId, 'fetching custom fields');
    return null;
  }
}
