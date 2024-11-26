import { html } from '../../node_modules/lit-html/lit-html.js';

import * as albumService from '../src/services/albumService.js';

import { albumTemplate } from './templates/albumTemplate.js';

const searchTemplate = (searchHandler, albums, isLogged) => html`
    <section id="searchPage">
        <h1>Search by Name</h1>

            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button class="button-list" @click=${searchHandler}>Search</button>
            </div>

        <h2>Results:</h2>
        ${albums.length > 0 // Ако има повече от един албум
            ? albums.map(x => albumTemplate(x, isLogged)) // Ми покажи всичките албуми
            : html`<p class="no-result">No result.</p>` // Ако няма ми покажи No result.
        }
            </div>
    </section>
`;

export const searchView = (ctx) => {
    const searchHandler = (e) => {
        e.preventDefault()
        let searchElement = document.getElementById('search-input')

        albumService.search(searchElement.value)
            .then(albums => {
                const isLogged = Boolean(ctx.user);
                ctx.render(searchTemplate(searchHandler, albums, isLogged))
            })
    }
    ctx.render(searchTemplate(searchHandler, []))
};