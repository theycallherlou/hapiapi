import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import indexRouter from './routes/index';
import employeeRouter from './routes/employees';
import { errorHandler } from './middlewares/error';

dotenv.config();

const app = express();
app.use(cors());
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100
});
app.use(limiter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/health', (req, res) => {
  res.send('Server is healthy!');
});


app.use('/api/v1', indexRouter);
app.use('/api/v1/employees', employeeRouter);

app.use(errorHandler);

export default app;
