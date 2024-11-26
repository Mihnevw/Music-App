import * as albumService from '../src/services/albumService.js';

export const deleteView = async (ctx) => {
    try {
        const album = await albumService.getOne(ctx.params.albumId);

        let confirmed = confirm(`Are you sure you want to delete: ${album.name}`);

        if (confirmed) {
            await albumService.remove(ctx.params.albumId)

            ctx.page.redirect('/catalog');
        };
    } catch (err) {
        alert(err)
    }
};