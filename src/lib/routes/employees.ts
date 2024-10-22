import { Router } from 'express';
import { getAllEmployees } from '../controllers/employees';

const employeeRouter = Router();

employeeRouter.get('/', getAllEmployees);

export default employeeRouter;
