import { Router } from "express";
import { createUserController, listUsersController } from "../controllers/users.controller";
import { ensureEmailWontRepeatMiddleware } from "../middlewares/ensureEmailWontRepeat.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest } from "../schemas/users.schema";

const usersRoutes = Router();

usersRoutes.post("", ensureDataIsValidMiddleware(userSchemaRequest), ensureEmailWontRepeatMiddleware, createUserController);
usersRoutes.get("", listUsersController);
usersRoutes.get("/:id", listUsersController);


export { usersRoutes };