import { Router } from "express";
import getAllDDDFactory from "../modules/ddd/useCases/getAllDDD";
import getPricesFactory from "../modules/ddd/useCases/getPrices";
import getAllPlansFactory from "../modules/plan/useCases/getAllPlan";
import createUserFactory from "../modules/user/useCases/createUser";
import loginUserFactory from "../modules/user/useCases/loginAsUser";

const routes = Router();
const createUserController = createUserFactory();
const loginUserController = loginUserFactory();
const getAllDDDController = getAllDDDFactory();
const getPriceController = getPricesFactory();
const getAllPlansController = getAllPlansFactory();

routes.post("/register", (req, res) => createUserController.handle(req, res));

routes.post("/login", (req, res) => loginUserController.handle(req, res));

routes.post("/price", (req, res) => getPriceController.handle(req, res));

routes.get("/ddd", (req, res) => getAllDDDController.handle(req, res));

routes.get("/plans", (req, res) => getAllPlansController.handle(req, res));

export default routes;
