import express, { Express, Request, Response } from 'express';
import categoryDb from '../db/category';
import linkDb from '../db/link';
import countDb from '../db/count';

const router = express.Router();

// 링크 조회( query: id )
router.get('/links', (req: Request, res: Response) => {});

// 링크 추가
router.post('/links', (req: Request, res: Response) => {});

// 링크 삭제( query: id )
router.delete('/links', (req: Request, res: Response) => {});

export default router;
