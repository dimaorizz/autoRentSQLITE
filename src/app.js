require('dotenv').config();
require('./db/sqlite');
require('./models/index');
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define path for express config
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(path.join(__dirname, '../public')));

app.use('/branches', require('./routers/branches.js'));
app.use('/agents', require('./routers/agents'));
app.use('/cars', require('./routers/cars'));
app.use('/clients', require('./routers/clients'));
app.use('/deals', require('./routers/deals'));
app.use('/dealsinfo', require('./routers/dealsInfo'));
app.use('/dealsstatus', require('./routers/dealsStatus'));
app.get('/', (req, res) => res.render('index'));

app.listen(PORT, () => {
    console.log('Server is up on port ' + PORT);
})