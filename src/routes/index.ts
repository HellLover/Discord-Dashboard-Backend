import { Router } from "express";
import authRouter from "./auth";
import guildsAuth from "./guilds"

const router = Router();

router.use('/auth', authRouter);
router.use('/guilds', guildsAuth)

export default router;