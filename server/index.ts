import express, { Express, Request, Response, NextFunction } from 'express';
import cors, { CorsOptions } from 'cors';
import userRouter from './routes/user';
import categoryRouter from './routes/category';
import linkRouter from './routes/link';

const app: Express = express();
const port = 8000;

const corsOptions: CorsOptions = {
  // 클라이언트 도메인으로 변경
  origin: true,
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/user', userRouter);
app.use('/category', categoryRouter);
app.use('/link', linkRouter);

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  res.status(err.status || 500);
  res.send(err.message);
});

app.get('/', (req: Request, res: Response) => {
  res.send('express server');
});

app.listen(port, () => {
  console.log(`server : http://localhost:${port}`);
});
