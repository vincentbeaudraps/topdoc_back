import {Router} from "express";
import {Handler} from "./handler";

export const planningRouter = Router();

planningRouter.use('/planning', new Handler().find)
