import express, { Express, Request, Response } from 'express';
import categoryDb from '../db/category';
import linkDb from '../db/link';
import countDb from '../db/count';
import userDb from '../db/user';

const router = express.Router();

// 카테고리 추가
router.post('/category', (req: Request, res: Response) => {});

// 카테고리 삭제
router.delete('/category', (req: Request, res: Response) => {});

export default router;
