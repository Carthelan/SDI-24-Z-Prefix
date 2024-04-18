const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.get('', (req, res) => {
    knex('user')
    .select('*')
    .then((data) => res.status(200).json(data));
})


//display full inventory #
app.get('/data/inventory', (req, res) => {
    knex('item')
    .select('*')
    .then((data) => res.status(200).json(data));
})

//display item by itemId #3/
app.get('/data/inventory/:itemid', (req, res) => {
    let itemid = req.params.id;
    knex('item')
    .where('id', '=', itemid)
    .then((data) => res.status(200).json(data))
})

//specific item by specific owner
app.get('/data/inventory/:itemid/:userid', (req, res) => {
    let itemid = req.params.itemid;
    let userid = req.params.userid;
    knex('item')
    .where('id', '=', itemid)
    .andWhere('user_id', '=', userid)
    .then((data) => res.status(200).json(data))
})

//all items by specific owner
app.get('/data/user/items/:userid/', (req, res) => {
    let userid = req.params.userid;
    knex.select('*').from('item').where('user_id', '=', userid)
    .then((data) => res.status(200).json(data))
})

app.post('/data/login', (req, res) => {
    console.log(req.body.length)
    if(req.body.length < 2) {
        res.status(406).json({status: 'Forgot Username or Password'})
    }
    try {
        knex('user')
        .select('*')
        .where('username', req.body.username[0] )
        //.then((data) => (data))
        .then((data) => {
            console.log(data)
            if (data[0].password == req.body.password[0]) {
                res.status(201).json({status: 'Logged in'})
            } else {
                res.status(500).json({status: 'User not found'})
            }
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({status: "Log in Failed"})
    }

})

app.get('/user/:userid', (req, res) => {
    let userid = req.params.userid;
    knex('user')
    .where('id', userid)
    .then((data) => res.status(200).json(data))
})

app.post('/user', (req, res) => {
        knex('user').insert(
            {
                first_name: 'Deep',
                last_name: 'Value',
                username: '$gamestop',
                password: 'nothing'
            })
        .then(res.status(201).json({message: 'cant believe it worked'}))

})
    


app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`)
})