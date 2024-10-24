import path, { dirname } from 'path';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import employeeRouter from './features/employees/routes/employees';
import employeeNewHireRouter from './features/employeeNewHire/routes/employeeNewHire';
import changesRouter from './features/changes/routes/changes';
import { errorHandler } from './middlewares/error/errorHandler';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

app.use(express.static(path.join(__dirname, '../public')));

// Serve index.html for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use('/api/v1', employeeRouter);

app.use('/api/v1', employeeNewHireRouter);

app.use('/api/v1', changesRouter);

app.use(
  (err: unknown, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res, next);
  }
);

export default app;
