import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import employeeRouter from './features/employees/routes/employees';
import employeeNewHireRouter from './features/employeeNewHire/routes/employeeNewHire';
import changesRouter from './features/changes/routes/changes';
import { errorHandler } from './middlewares/error/errorHandler';

dotenv.config();

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: process.env.CLIENT_URL
  })
);

app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100
});

app.use(limiter);

app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', employeeRouter);

app.use('/api/v1', employeeNewHireRouter);

app.use('/api/v1', changesRouter);

app.use(
  (err: unknown, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res, next);
  }
);

export default app;
