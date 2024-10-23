import { Router, Request, Response, NextFunction } from 'express';
import {
  getEmployeeByEecode,
  getPaginatedEmployeeDirectory,
  getEmployeeCustomFields,
  getEmployeeSensitiveData
} from '../services/employeeFetch';
import { AppError } from '@/global/middlewares/error/AppError';
import { UrlParameters } from '../../../global/constants/parameters';

const router = Router()
  .get(
    `/${UrlParameters.Employee}/:eecode`,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { eecode } = req.params;
        const employee = await getEmployeeByEecode(eecode);
        if (!employee) {
          return next(
            new AppError(
              `Employee with EE code ${eecode} not found`,
              404
            )
          );
        }
        res.status(200).json(employee);
      } catch (error) {
        next(error);
      }
    }
  )

  .get(
    `/${UrlParameters.EmployeeDirectory}`,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const employeeDirectory = await getPaginatedEmployeeDirectory(
          page,
          limit
        );
        if (!employeeDirectory) {
          return next(
            new AppError('Employee directory not found', 404)
          );
        }
        res.status(200).json(employeeDirectory);
      } catch (error) {
        next(error);
      }
    }
  )

  .get(
    `/${UrlParameters.Employee}/:eecode/customField`,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { eecode } = req.params;
        const customFields = await getEmployeeCustomFields(eecode);
        if (!customFields) {
          return next(
            new AppError(
              `Custom fields for EE code ${eecode} not found`,
              404
            )
          );
        }
        res.status(200).json(customFields);
      } catch (error) {
        next(error);
      }
    }
  )

  .get(
    `/${UrlParameters.Employee}/:eecode/sensitive`,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { eecode } = req.params;
        const sensitiveData = await getEmployeeSensitiveData(eecode);
        if (!sensitiveData) {
          return next(
            new AppError(
              `Sensitive data for EE code ${eecode} not found`,
              404
            )
          );
        }
        res.status(200).json(sensitiveData);
      } catch (error) {
        next(error);
      }
    }
  );
export default router;
