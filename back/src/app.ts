import "express-async-errors";
import express, { Application } from "express";
import cors from "cors"
import { usersRoutes } from "./routes/users.routes";
import { handleErrors } from "./errors";
import { loginRoutes } from "./routes/login.routes";
import { contactsRoutes } from "./routes/contacts.routes";

const app: Application = express();

app.use(cors())

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrors);

export default app;
