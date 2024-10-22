import { Router } from 'express';
import { getAllUsers } from '../controllers/users';

const usersRouter = Router();

usersRouter.get('/', getAllUsers);

export default usersRouter;
