import { ApiError } from "../utils/ApiError";
import { User } from "../models/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken"

export const verifyJWT = asyncHandler(async(req, res, next) => {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer", "")

    if(!token){
        throw new ApiError(401, "Unauthorized request")
    }
    
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    await User.findById(decodedToken?)

})