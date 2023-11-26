const express = require('express');
const app = express();
const morgan = require('morgan');
const suppliers = require('./api/suppliers/routes');
//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(require('./api/routes/index'));
app.use('/api/suppliers', suppliers);

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
}
)