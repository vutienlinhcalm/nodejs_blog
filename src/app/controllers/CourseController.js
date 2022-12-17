const Course = require('../models/CourseModel');
const {mongooseToObject} = require('../../util/mongoose');
class CourseController {
    // Get/courses/:slug
    
    show(req, res,next) {
        Course.findOne({slug: req.params.slug})
        .then(course => {
            res.render('courses/show', {course: mongooseToObject(course)});
        })
        .catch(next);
    }
}
module.exports = new CourseController();
