import { html } from '../../node_modules/lit-html/lit-html.js';

import * as userService from '../src/services/userService.js';

const loginTemplate = (submitHandler) => html`
    <section id="loginPage">
        <form @submit=${submitHandler}>
            <fieldset>
                <legend>Login</legend>

                <label for="email" class="vhide">Email</label>
                <input id="email" class="email" name="email" type="text" placeholder="Email">

                <label for="password" class="vhide">Password</label>
                <input id="password" class="password" name="password" type="password" placeholder="Password">

                <button type="submit" class="login">Login</button>

                <p class="field">
                    <span>If you don't have profile click <a href="#">here</a></span>
                </p>
            </fieldset>
        </form>
    </section>
`;

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget);

        const email = formData.get('email');
        const password = formData.get('password');

        userService.login(email, password)
            .then(() => {
                ctx.page.redirect('/')
            })
            .catch(err => {
                alert(err)
            }); //Това ще изкара llert ако има някаква грешка
    };
    ctx.render(loginTemplate(submitHandler));
};