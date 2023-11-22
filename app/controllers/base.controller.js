import { baseService } from '#services';
import { catchAsync } from '#utils';


export const generateJWT = catchAsync(async (req, res) => {
    const { email } =
        req.body;
    const token = await baseService.generateJWT(email);
    return res.status(200).json({
        success: true,
        message: 'token',
        data: token
    });
});

export const test = catchAsync(async (req, res) => {
    const { _id: email } = req.user;
    return res.status(200).json({
        success: true,
        data: email
    })
});