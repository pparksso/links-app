import express, { Express, Request, Response } from 'express';
import cors, { CorsOptions } from 'cors';

const app: Express = express();
const port = 8000;

const corsOptions: CorsOptions = {
  // 클라이언트 도메인으로 변경
  origin: true,
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('express server');
});

app.listen(port, () => {
  console.log(`server : http://localhost:${port}`);
});
