import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, retrieveUserController, updateUserController } from "../controllers/users.controller";
import { ensureEmailWontRepeatMiddleware } from "../middlewares/ensureEmailWontRepeat.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schema";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware";

const usersRoutes: Router = Router();

usersRoutes.post("", ensureDataIsValidMiddleware(userSchemaRequest), ensureEmailWontRepeatMiddleware, createUserController);
usersRoutes.get("", listUsersController);
usersRoutes.get("/:id", ensureUserExistsMiddleware, retrieveUserController);
usersRoutes.patch("/:id", ensureDataIsValidMiddleware(userSchemaUpdate), ensureUserExistsMiddleware, updateUserController);
usersRoutes.delete("/:id", ensureUserExistsMiddleware, deleteUserController);


export { usersRoutes };