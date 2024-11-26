import { html } from '../../node_modules/lit-html/lit-html.js';

import * as albumService from '../src/services/albumService.js';
import { albumIsInvalid } from '../src/utils/validators.js';


//Подаваме Album защото конкретен Album ще едитваме
const editTemplate = (album, submitHandler) => html` 
        <section class="editPage">
            <form @submit =${submitHandler} method="POST">
                <fieldset>
                    <legend>Edit Album</legend>

                    <div class="container">
                        <label for="name" class="vhide">Album name</label>
                        <input id="name" name="name" value=${album.name} class="name" type="text">

                        <label for="imgUrl" class="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" value=${album.imgUrl} class="imgUrl" type="text">

                        <label for="price" class="vhide">Price</label>
                        <input id="price" name="price" value=${album.price} class="price" type="text">

                        <label for="releaseDate" class="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" value=${album.releaseDate} class="releaseDate" type="text">

                        <label for="artist" class="vhide">Artist</label>
                        <input id="artist" name="artist" value=${album.artist} class="artist" type="text">

                        <label for="genre" class="vhide">Genre</label>
                        <input id="genre" name="genre" value=${album.genre} class="genre" type="text">

                        <label for="description" class="vhide">Description</label>
                        <textarea name="description" class="description" rows="10" cols="10">${album.description}</textarea>

                        <button class="edit-album" type="submit">Edit Album</button>
                    </div>
                </fieldset>
            </form>
        </section>
`

export const editView = (ctx) => {
    const albumId = ctx.params.albumId

    const submitHandler = (e) => {
        e.preventDefault();
        
        const albumData = Object.fromEntries(new FormData(e.currentTarget));

        if (albumIsInvalid(albumData)) { // Това formData в скобито е все едно albumData
            alert('All fields shoud be filled');
            return;
        }

        albumService.edit(ctx.params.albumId, albumData)
           .then(() => {
                ctx.page.redirect(`/albums/${albumId}`);
            })
           .catch(err => {
                alert(err);
            }); // Това ще изкара alert ако има някаква грешка
    };

    albumService.getOne(ctx.params.albumId) // Това albumId идва от App.js защото сме сложили параметър :albumId и чрез ctx.params можем да го вземем
        .then(album => {
            ctx.render(editTemplate(album, submitHandler))
        });
};