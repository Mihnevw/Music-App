import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../../views/navigationView.js';

const headerElemnent = document.querySelector('.header-navigation');
const contentElement = document.querySelector('#main-content');

const renderContent = (templateResult) => {
    render(templateResult, contentElement)
}

export const renderNavigationMiddleware = (ctx, next) => {
    render(navigationView(ctx), headerElemnent)
    next();
};

export const renderContentMiddlewear = (ctx, next) => {
    ctx.render = renderContent
    next();
};