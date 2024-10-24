import { AppError } from './error/AppError';

export default function notFoundError(
  entity: string,
  eecode: string
): AppError {
  return new AppError(
    `${entity} for EE code ${eecode} not found`,
    404
  );
}
