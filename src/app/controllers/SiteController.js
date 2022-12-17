const Course = require('../models/CourseModel');
const {mutipleMongooseToObject} = require('../../util/mongoose');
class SiteController {
    // Get/
    index(req, res, next) {
        Course.find({})
        .then(courses => {
            // courses = courses.map(course => course.toObject())
            res.render('home',{
                courses:  mutipleMongooseToObject (courses)
            });
        })
        .catch((error) => next(error));
    }

    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
