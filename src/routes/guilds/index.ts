import { Router } from 'express';
import {
  getGuildController,
  getGuildPermissionsController,
  getGuildsController,
} from '../../controllers/guilds';
import { isAuth } from '../../utils/Middlewares';
const router = Router();

router.get('/', isAuth, getGuildsController);

// /api/guilds/123/permissions
router.get('/:id/permissions', isAuth, getGuildPermissionsController);

router.get('/:id', isAuth, getGuildController);

export default router;