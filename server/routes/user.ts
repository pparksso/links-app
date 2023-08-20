import express, { Express, Request, Response } from 'express';
import userDb from '../db/user';
import countDb from '../db/count';

const router = express.Router();

// 회원가입
router.post('/signup', (req: Request, res: Response) => {});

// 로그인
router.post('/login', (req: Request, res: Response) => {});

// 비밀번호 찾기
router.put('/findpw', (req: Request, res: Response) => {});
export default router;
