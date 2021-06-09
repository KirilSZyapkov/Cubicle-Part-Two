module.exports = {
    async editCube(req, res) {
        const id = req.params.id;
        const cube = await req.storage.getById(id);

        res.render('edit', {
            title: 'Edit',
            cube
        });
    },
    async saveCube(req, res) {
        const body = req.body;
        const id = req.params.id;
        await req.storage.updateCube(id, body);
        res.redirect(`/details/${id}`);
    }
}