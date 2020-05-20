require('dotenv').config();
var express = require('express');
var exphbs = require('express-handlebars');
var moment = require('moment');
var Handlebars = require('handlebars');
var db = require('./models');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
var app = express();
var PORT = process.env.PORT || 3000;
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
// Handlebars
app.engine(
    'handlebars',
    exphbs({
        defaultLayout: 'main',
        handlebars: allowInsecurePrototypeAccess(Handlebars),
        helpers: {
            formatDate: function(date, format) {
                return moment(date).format(format);
            },
        },
    })
);
app.set('view engine', 'handlebars');
// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);
var syncOptions = { force: false };
// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
    syncOptions.force = true;
}
// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
        console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
    });
});
module.exports = app;
