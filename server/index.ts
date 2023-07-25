import express, {Express, Request, Response} from 'express'

const app: Express = express();
const port = 8000;

app.get('/',(req: Request, res: Response)=> {
    res.send('express server')
});

app.listen(port, () => {
    console.log(`server : http://localhost:${port}`);
})