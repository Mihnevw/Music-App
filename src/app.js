import page from '../node_modules/page/page.mjs';

import { catalogView } from '../views/catalogView.js';
import { createView } from '../views/createView.js';
import { deleteView } from '../views/deleteView.js';
import { detailsView } from '../views/detailsView.js';
import { editView } from '../views/editView.js';
import { homeView } from '../views/homeView.js';
import { loginView } from '../views/loginView.js';
import { logoutView } from '../views/logoutView.js';
import { registerView } from '../views/registerView.js';
import { searchView } from '../views/searchView.js';
import { authMiddlewear } from './middlewares/authMiddlewear.js';
import { renderNavigationMiddleware, renderContentMiddlewear} from './middlewares/renderMiddleware.js';

page(authMiddlewear);
page(renderNavigationMiddleware);
page(renderContentMiddlewear);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/catalog', catalogView);
page('/create', createView);
page('/search', searchView);
page('/albums/:albumId', detailsView);
page('/albums/:albumId/edit', editView);
page('/albums/:albumId/delete', deleteView);

page.start();