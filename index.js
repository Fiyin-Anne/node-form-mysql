const express = require("express");
const register = require('./src/controller/register');
const login = require('./src/controller/login');
const app = express();
const port = 8000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set('view engine', 'ejs');
app.use("/css", express.static(__dirname + '/public/css'));

app.get('/', (req, res) => {
    res.render('pages/index', {
        title: "The Jeam"
    })
})

app.get('/register', (req, res) => {
    res.render('pages/register', {
        title: "Register"
    })
})

app.get('/login', (req, res) => {
    res.render('pages/login', {
        title: "Login"
    })
})

app.post('/register', async (req, res) => {
    await register(req.body)
    .then(response => {
        res.render('pages/success', {
            data: response.member
        })
    }).catch(err => {
        res.render('pages/error', {
            message: err.message
        })
    })
})

app.post('/login', async (req, res) => {
    await login(req.body)
    .then(response => {
        let data = response.member || {};
        data.login = true;

        res.render('pages/success', {
            data
        })
    }).catch(err => {
        res.render('pages/error', {
            message: err.message
        })
    })
})

app.listen(port, () => {
  console.log(`Server istening at http://localhost:${port}`);
});