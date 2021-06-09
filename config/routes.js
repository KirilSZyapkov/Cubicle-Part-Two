const {Router} = require('express');
const router = Router();

const homeControler = require('../controllers/homeControler');
const {addCube, creatCube} = require('../controllers/addCubeControler');
const {editCube, saveCube} = require('../controllers/editCubeControler');
const aboutCotroler = require('../controllers/aboutControler');
const {details, addComment} = require('../controllers/detailsControler');
const deleteCube = require('../controllers/deleteCubeControler');
const notFound = require('../controllers/404');


router.get('/', homeControler);
router.get('/create', addCube);
router.get('/about', aboutCotroler);
router.get('/details/:id', details);
router.get('/details/:id/edit', editCube);
router.get('/details/:id/delete', deleteCube);
router.get('*', notFound);

router.post('/create', creatCube);
router.post('/details/:id/edit', saveCube);
router.post('/details/:id', addComment);


module.exports = router;