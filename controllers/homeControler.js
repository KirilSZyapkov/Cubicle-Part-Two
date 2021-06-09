module.exports = async (req, res) => {
    const query = req.query;

    const data = await req.storage.getAll(query);
    res.render('home', {
        title: 'Home Page',
        data
    });
}