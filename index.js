const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.engine('.html', require('ejs').__express);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

const conn = "mongodb+srv://tschultz:u!naP4NPv3JE_vJ@web340db.pgwsyvk.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello Routes: Home',
        message: 'Welcome to the Hello Routes Home Page!'
    })
})

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

app.get('/register', (req, res) => {
    res.render('register', {
        title: 'Hello Routes: register',
        message: 'Welcome to the Hello Routes Register Page'
    })
})

app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});


// when the registration posts the request, add it to the database
app.post("/register", (req, res) => {
    const customers = new Customers({
        customerId: req.body.customerId,
        email: req.body.email
    });

    // check for errors loading to the database
    // then redirect to the home page
    Customers.create(customers, (err, customers) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});


mongoose.connect(conn).then(() => {
    console.log("MongoDB successfully connected.");
}).catch((err) => {
    console.log("MongoDB Error: " + err);
});

