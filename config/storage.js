const fs = require('fs/promises');
const Cube = require('../models/Cube');
const Comment = require('../models/Comments');


async function init() {

    return (req, res, next) => {
        req.storage = {
            creat,
            getById,
            getAll,
            updateCube,
            deleteById,
            creatComment
        };
        next();
    }

}

async function creat(cube) {
    const item = new Cube(cube);
    return item.save();
}

async function creatComment(cubeId, comment) {
    const cube = await Cube.findById(cubeId);

    const newComment = new Comment(comment);
    await newComment.save();

    cube.comments.push(newComment);
    await cube.save();
}

async function updateCube(id, cube) {

    const item = await Cube.findById(id);

    if (item) {
        await item.updateOne(cube);

    } else {
        return undefined;
    };

}

async function getAll(query) {
    const option = {};

    if (query.search) {
        option.name = { $regex: query.search, $options: 'i' };
    }
    if (query.from) {
        option.difficulty = { $gte: Number(query.from) };
    }
    if (query.to) {
        option.difficulty = option.difficulty || {};
        option.difficulty.$lte = Number(query.to);
    }

    const cubes = await Cube.find(option).lean();
    return cubes;
}

async function getById(id) {
    const cube = await Cube.findById(id).populate('comments').lean();
    if (cube) {
        return cube;
    } else {
        return undefined;
    };

}

async function deleteById(cubeId) {

    return Cube.deleteOne({ _id: cubeId });
}

module.exports = {
    init,
    getAll,
    getById,
    creat,
    updateCube,
    deleteById,
    creatComment
}