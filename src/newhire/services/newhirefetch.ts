import axios from 'axios';
import { UrlParameters } from '@/global/constants/parameters';
import { INewHire, INewHireCustomFields } from '../types';
import { apiClient } from '@/global/services/api';

/**
 * Fetches a new hire by their ID.
 *
 * @param id The ID of the new hire to fetch.
 * @returns A promise that resolves to the fetched new hire, or null if there was an error.
 */
export async function fetchNewHireById(
  id: number
): Promise<INewHire | null> {
  try {
    const newHire = await apiClient.get<INewHire>(
      `${UrlParameters.NewHire}/${id}`
    );
    console.info('New hire data:', newHire.data);
    return newHire.data; // Return the fetched data directly
  } catch (error) {
    console.error(`Failed to fetch new hire with ID ${id}`, error);
    return null;
  }
}

/**
 * Fetches custom fields for a given new hire ID.
 *
 * @param nhid The new hire ID to fetch custom fields for.
 * @returns A promise that resolves to the fetched custom fields, or null if there was an error.
 */
export async function fetchCustomFieldsByNewHireId(
  nhid: number
): Promise<INewHireCustomFields | null> {
  try {
    const customFields = await apiClient.get<INewHireCustomFields>(
      `${UrlParameters.NewHire}/${nhid}/${UrlParameters.CustomField}`
    );
    console.info(
      `Custom Fields for new hire no. ${nhid}:`,
      customFields.data
    );
    return customFields.data; // Return the fetched custom fields
  } catch (error) {
    console.error(
      `Failed to fetch custom fields for new hire with ID ${nhid}`,
      error
    );
    return null;
  }
}
