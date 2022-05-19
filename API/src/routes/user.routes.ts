import { Router } from "express";
import createUserFactory from "../modules/user/useCases/createUser";

const userRoutes = Router();
const createClientController = createUserFactory();

userRoutes.post( "/user", ( req, res ) =>
createClientController.handle( req, res )
);

export default userRoutes;
