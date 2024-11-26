//ctx-a да знае дали сме логнати или не
import * as authServer from '../services/authService.js';

//Това ще върне или undefined или serializedUser
export const authMiddlewear = (ctx, next) => {
    ctx.user = authServer.getUser()

    next();
}