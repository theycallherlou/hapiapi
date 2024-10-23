import { Router, Request, Response, NextFunction } from 'express';
import {
  fetchEmployeeNewHires,
  fetchEmployeeNewHireByCode
} from '../services/employeeNewHireFetch';
import { AppError } from '@/global/middlewares/error/AppError';
import { UrlParameters } from '@/global/constants/parameters';
import { toUnixTimestamp } from '../utils/timestamp';

const router = Router()
  .get(
    `/${UrlParameters.EmployeeNewHire}`,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { startDate, endDate } = req.query;

        // Convert startDate and endDate to UNIX timestamps if necessary
        const startUnix = toUnixTimestamp(startDate as string);
        const endUnix = toUnixTimestamp(endDate as string);

        // Check if the dates are valid UNIX timestamps
        if (startUnix === null || endUnix === null) {
          return next(
            new AppError(
              'Invalid date format. Please provide a valid date or UNIX timestamp.',
              400
            )
          );
        }

        // Fetch the employee new hires based on the UNIX timestamps
        const employeeNewHires = await fetchEmployeeNewHires(
          startUnix,
          endUnix
        );
        if (!employeeNewHires) {
          return next(
            new AppError('Failed to fetch employee new hires', 500)
          );
        }

        res.status(200).json(employeeNewHires);
      } catch (error) {
        next(error); // Pass the error to the global error handler
      }
    }
  )
  .get(
    `/${UrlParameters.EmployeeNewHire}/:eecode`,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { eecode } = req.params;

        // Fetch the employee new hire by EE code
        const employeeNewHire =
          await fetchEmployeeNewHireByCode(eecode);
        if (!employeeNewHire) {
          return next(
            new AppError(
              `Employee new hire with EE code ${eecode} not found`,
              404
            )
          );
        }

        res.status(200).json(employeeNewHire);
      } catch (error) {
        next(error); // Pass the error to the global error handler
      }
    }
  );
export default router;
