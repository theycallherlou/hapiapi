import { Router } from 'express';
import {
  getNewHireIds,
  getNewHireById,
  getAllNewHires,
  getNewHireByEmployeeCode
} from '../controllers/newhires';

const router = Router();

// new hire routes
router.get('/newhireids', getNewHireIds);
router.get('/newhire/:newHireId', getNewHireById);
router.get('/employeenewhire', getAllNewHires);
router.get('/employeenewhire/:eecode', getNewHireByEmployeeCode);

export default router;
