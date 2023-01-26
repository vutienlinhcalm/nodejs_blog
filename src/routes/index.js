const newsRouter = require('./news');
const coursesRouter = require('./course');
const siteRouter = require('./site');
const meRouter = require('./me');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

module.exports = route;
