import { Router } from "express";
import { createUserController } from "../controllers/users.controller";
import { ensureEmailWontRepeatMiddleware } from "../middlewares/ensureEmailWontRepeat.middleware";

const usersRoutes = Router();

usersRoutes.post("", ensureEmailWontRepeatMiddleware, createUserController);


export { usersRoutes };