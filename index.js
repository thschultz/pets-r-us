const express = require('express');
const path = require('path');

const app = express();

app.engine('.html', require('ejs').__express);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello Routes: Home',
        message: 'Welcome to the Hello Routes Home Page!'
    })
});

app.get('/grooming', (req, res) => {
    res.render('grooming', {
        title: 'Hello Routes: About',
        message: 'Welcome to the Hello Routes About Page'
    })
})

app.get('/boarding', (req, res) => {
    res.render('boarding', {
        title: 'Hello Routes: boarding',
        message: 'Welcome to the Hello Routes Contact Page'
    })
})

app.get('/training', (req, res) => {
    res.render('training', {
        title: 'Hello Routes: training',
        message: 'Welcome to the Hello Routes Contact Page'
    })
})

app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});