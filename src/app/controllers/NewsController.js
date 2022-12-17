class NewsController {
    index(req, res) {
        res.render('news');
    }
    // Get/new/slug
    show(req, res) {
        res.send('News Details');
    }
}

module.exports = new NewsController();
