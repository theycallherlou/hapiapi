import { Router, Request, Response, NextFunction } from 'express';
import {
  fetchNewHireById,
  fetchCustomFieldsByNewHireId
} from '../services/newhirefetch';
import { isValidId } from '@/newhire/utils/validate-id';
import { AppError } from '@/global/middlewares/error';
import { UrlParameters } from '@/global/constants/parameters';

const router = Router();

// Route to get information about a specific new hire by ID
router.get(
  `/${UrlParameters.NewHire}/:new-hire-id`,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { newHireId } = req.params;

      if (!isValidId(newHireId)) {
        return next(
          new AppError(
            'Invalid new hire ID. It must be 4 characters long and contain only 0-9 and A-Z.',
            400
          )
        );
      }

      const newHire = await fetchNewHireById(parseInt(newHireId, 10));
      if (!newHire) {
        return next(new AppError('New hire not found', 404));
      }

      res.status(200).json(newHire);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  `/${UrlParameters.NewHire}/:new-hire-id/${UrlParameters.CustomField}`,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { newHireId } = req.params;

      // Validate the new hire ID
      if (!isValidId(newHireId)) {
        return next(
          new AppError(
            'Invalid new hire ID. It must be 4 characters long and contain only 0-9 and A-Z.',
            400
          )
        );
      }

      const customFields = await fetchCustomFieldsByNewHireId(
        parseInt(newHireId, 10)
      );
      if (!customFields) {
        return next(
          new AppError(
            'Custom fields not found for this new hire',
            404
          )
        );
      }

      res.status(200).json(customFields);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
