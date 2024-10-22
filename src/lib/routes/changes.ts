import { Router } from 'express';
import {
  getChangeLog,
  getChangeById,
  getSensitiveChangeLog,
  getSensitiveChangeById
} from '../controllers/changes';

const router = Router();

// change routes
router.get('/employee/:eecode/change', getChangeLog);
router.get('/employee/:eecode/change/:changeId', getChangeById);

// sensitive change routes
router.get(
  '/employee/:eecode/sensitivechange',
  getSensitiveChangeLog
);
router.get(
  '/employee/:eecode/sensitivechange/:changeId',
  getSensitiveChangeById
);

export default router;
