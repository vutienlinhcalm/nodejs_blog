const express = require('express');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const port = 3002;
const app = express();
const route = require('./routes');
const db = require('./config/db');
// connect to db
db.connect();

// http logger
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));
// http template engine
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
        helpers:{
            sum:(a,b) => a + b,
        }
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
