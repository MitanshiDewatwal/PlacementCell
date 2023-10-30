const express = require ('express');
const app = express();
app. use(express. json());
require('./models/config')

const dotenv = require('dotenv')
dotenv.config();
const path = require('path');

const bodyparser = require('body-parser')
const router = require('./routes/commonRoutes')

const template_path = path.join(__dirname,'./views');
app.set('view engine','hbs');
app.set('views',template_path);

app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.render('index')
})
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use("/",router)
const server = app.listen(process.env.port, function (req, res) {
    console.log(`server is running on port : ${process.env.port}`);
})

module.exports = server
