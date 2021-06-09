module.exports = {
    addCube(req, res) {
        res.render('create',{title: 'Add Cube'});
    },
    async creatCube (req, res) {
        const body = req.body;

        const name = body.name;
        const description = body.description;
        const imageUrl = body.imageUrl;
        const difficulty = Number(body.difficultyLevel);
        


        if (!name || !description || !imageUrl || !difficulty) {
            res.render('create', { error: 'All fields are required!' });
        } else {
            const cube = {
                name,
                description,
                imageUrl,
                difficulty
            }
            await req.storage.creat(cube);
            res.redirect('/');
        }

    }
}