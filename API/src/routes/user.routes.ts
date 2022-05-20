import { Router } from "express";
import createUserFactory from "../modules/user/useCases/createUser";
import loginUserFactory from "../modules/user/useCases/loginAsUser";

const userRoutes = Router();
const createUserController = createUserFactory();
const loginUserController = loginUserFactory();

userRoutes.post( "/user", ( req, res ) =>
createUserController.handle( req, res )
);

userRoutes.post( "/login", ( req, res ) =>
loginUserController.handle( req, res )
);


export default userRoutes;
