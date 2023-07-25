import express, { Express, Request, Response } from 'express';
import cors, { CorsOptions } from 'cors';

const app: Express = express();
const port = 8000;

// 배포 시 origin 수정 필요(해당 도메인으로)
app.use(cors({ origin: true, credentials: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('express server');
});

app.listen(port, () => {
  console.log(`server : http://localhost:${port}`);
});
