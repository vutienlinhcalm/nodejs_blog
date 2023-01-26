const Course = require('../models/CourseModel');
const {mutipleMongooseToObject} = require('../../util/mongoose');
class SiteController {
    // Get/me/stored/courses
    storedCourses(req, res,next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses',
                {
                deletedCount,
                courses:mutipleMongooseToObject(courses)
            })
            )
            .catch(next);

    }
    // Get/me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted()
        .then(courses =>
        {res.render('me/trash-courses',
            {courses:mutipleMongooseToObject(courses)})
        })
        .catch(next);
    }
}
module.exports = new SiteController();
