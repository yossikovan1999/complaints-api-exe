import {signToken} from "../utils/jwt.js";
import AppError from "../errors/app.errors.js";

export function login(passwrod){

    const adminPassword = process.env.ADMIN_PASSWORD;
    
    if(adminPassword.trim() === passwrod.trim()){
        const token = signToken({admin : "admin"});
        return token;
    }

    throw new AppError("Unathorized", 409);
}