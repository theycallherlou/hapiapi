import { Router } from 'express';
import {
  getAllEmployees,
  getEmployeeByCode,
  getMasterRecordByCode,
  getSensitiveMasterRecordByCode,
  getEmployeesSubset,
  getEmployeeSubsetByCode
} from '../controllers/employees';

const router = Router();

// employee directory routes
router.get('/employeedirectory', getAllEmployees);
router.get('/employeedirectory/:eecode', getEmployeeByCode);

// master record routes
router.get('/employee/:eecode', getMasterRecordByCode);
router.get(
  '/employee/:eecode/sensitive',
  getSensitiveMasterRecordByCode
);

// employee id routes
router.get('/employeeid', getEmployeesSubset);
router.get('/employeeid/:eecode', getEmployeeSubsetByCode);

export default router;
