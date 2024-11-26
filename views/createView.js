import { html } from '../../node_modules/lit-html/lit-html.js';

import * as albumService from '../src/services/albumService.js';
import { albumIsInvalid } from '../src/utils/validators.js';

const createTemplate = (submitHandler) => html`
    <section class="createPage">
            <form @submit=${submitHandler} method="POST">
                <fieldset>
                    <legend>Add Album</legend>

                    <div class="container">
                        <label for="name" class="vhide">Album name</label>
                        <input id="name" name="name" class="name" type="text" placeholder="Album name">

                        <label for="imgUrl" class="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" placeholder="Image Url">

                        <label for="price" class="vhide">Price</label>
                        <input id="price" name="price" class="price" type="text" placeholder="Price">

                        <label for="releaseDate" class="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" placeholder="Release date">

                        <label for="artist" class="vhide">Artist</label>
                        <input id="artist" name="artist" class="artist" type="text" placeholder="Artist">

                        <label for="genre" class="vhide">Genre</label>
                        <input id="genre" name="genre" class="genre" type="text" placeholder="Genre">

                        <label for="description" class="vhide">Description</label>
                        <textarea name="description" class="description" placeholder="Description"></textarea>

                        <button class="add-album" type="submit">Add New Album</button>
                    </div>
                </fieldset>
            </form>
        </section>
`;



export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault()

        const albumData = Object.fromEntries(new FormData(e.currentTarget))
        //const formData = new FormData(e.currentTarget);

        //const name = formData.get('name');
        //const imgUrl = formData.get('imgUrl');
        //const price = formData.get('price');
        //const releaseDate = formData.get('releaseDate');
        //const artist = formData.get('artist');
        //const genre = formData.get('genre');
        //const description = formData.get('description');

        if (albumIsInvalid(albumData)) { // Това formData в скобито е все едно albumData
            alert('All fields shoud be filled');
            return;
        };

        albumService.create(albumData)
            .then(() => {
                ctx.page.redirect('/catalog')
            })
            .catch(err => {
                alert(err)
            }); //Това ще изкара alert ако има някаква грешка
    };
    ctx.render(createTemplate(submitHandler));
};