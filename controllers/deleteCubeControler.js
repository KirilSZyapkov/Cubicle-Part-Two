module.exports = async (req, res) => {
    const id = req.params.id;
    await req.storage.deleteById(id);
}