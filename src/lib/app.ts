import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import employeesRouter from './routes/employees';
import changesRouter from './routes/changes';
import newhireRouter from './routes/newhires';
import { errorHandler } from './middlewares/error';

dotenv.config();

const app = express();
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL,
}));
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100
});
app.use(limiter);

app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.send('Server is healthy!');
});

app.use('/', indexRouter);
app.use('/api/v1', usersRouter);
app.use('/api/v1', employeesRouter);
app.use('/api/v1', changesRouter);
app.use('/api/v1', newhireRouter);

app.use(errorHandler);

export default app;
