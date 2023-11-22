import ErrorHandler from '#middlewares/ErrorClass.js';
import { generateToken } from '#utils'

export const generateJWT = async (
    email
) => {
    try {
        let token = generateToken(email);
        return token;
    } catch (error) {
        throw ErrorHandler.badRequestError(error.message);

    }
}