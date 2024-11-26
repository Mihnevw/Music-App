import * as userService from '../src/services/userService.js';

export const logoutView = (ctx) => {
    userService.logout()
    .then(() => {
        ctx.page.redirect('/');
    })
};