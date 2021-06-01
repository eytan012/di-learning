const express = require('express');
const path = require('path');
const cons = require('consolidate');
const {Pool, Client} = require('pg')
const bp = require('body-parser');
const dust = require('dustjs-helpers');
const app = express();


const connectionString = 'postgresql://postgres:2391@localhost:5433/recipesdb'


app.engine('dust', cons.dust);


app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bp.urlencoded({extended: false}));
// parse application/json
app.use(bp.json());


//READ DB
app.get('/', (req, res) => {
    const pool = new Pool({
        connectionString,
    })
    const client = new Client({
        connectionString,
    })
    client.connect();

    client.query('SELECT * FROM recipes', (err, result) => {
        if (err) {
            return console.log('error:', err)
        }
        client.end();
        res.render('index', {recipes: result.rows});
    })
})


//CREATE RECIPE
app.post('/add', function (req, res) {
    const client = new Client({
        connectionString: connectionString,
    });
    client.connect();
    client.query('INSERT INTO recipes(name,mitzrahim,directions) VALUES($1, $2, $3)',
        [req.body.name, req.body.ingredients, req.body.directions], (err, response) => {
            if (err) {
                return console.error('error running query', err);
            }
            client.end();
            console.log('DATA ENTERED');
            res.redirect('/');
        })
});

app.delete('/delete/:id', (req, res) => {
    const client = new Client({
        connectionString: connectionString,
    });
    client.connect();
    client.query(`DELETE FROM "recipes" WHERE id = $1`, [req.params.id], (err, response) => {
        if (err) {
            return console.error('error running query', err);
        }
        client.end();
        console.log('Recipe deleted');
        res.sendStatus(200)
    })
})

app.post('/edit', (req, res) => {
    const client = new Client({
        connectionString: connectionString,
    });
    client.connect();
    console.log(req.body.name, req.body.ingredients, req.body.directions, req.body.id)
    client.query(`UPDATE "recipes" SET name=$1, mitzrahim=$2, directions=$3 WHERE id=$4`,
        [req.body.name, req.body.ingredients, req.body.directions, req.body.id], (err, response) => {
        if (err) {
            return console.error('error running query', err);
        }
        client.end();
        console.log('Succefully edited');
        res.redirect('/')
    })
})


app.listen(3000, () => {
    console.log('Server is running port 3000')
})

