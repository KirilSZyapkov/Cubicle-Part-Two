module.exports = {
    async details(req, res) {
        const id = await req.params.id;
        const cube = await req.storage.getById(id);

        res.render('details', {
            title: 'Details',
            cube
        });
    },

    async addComment(req, res) {
        const id = req.params.id;
        const body = req.body;

        const name = body.name;
        const description = body.description;

        if (!name || !description) {
            const id = await req.params.id;
            const cube = await req.storage.getById(id);

            res.render('details', {
                title: 'Details',
                cube,
                error: 'All fields are required!'
            });

        } else {
            await req.storage.creatComment(id, { name, description });
            res.redirect('/details/' + id);
        }

    }
}