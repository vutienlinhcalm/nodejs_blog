const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/edit/:id', courseController.edit);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.delete);
router.delete('/:id/destroy', courseController.destroy)
router.get('/:slug', courseController.show);


module.exports = router;
