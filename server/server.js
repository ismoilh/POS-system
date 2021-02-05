if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const bodyParser = require('body-parser');
const session = require('express-session');
const ExpressError = require('./utils/ExpressError');
const passport = require('passport');
const methodOverride = require('method-override');
const LocalStrategy = require('passport-local');
const MongoDBStore = require('connect-mongo')(session);
const User = require('./models/user');
const Menu = require('./models/menu');
const Blog = require('./models/blog');
const Paid = require('./models/paid')
const Location = require('./models/location');
const flash = require('connect-flash');
const bcrypt = require('bcrypt');
const cors = require('cors');
const morgan = require('morgan');
const jsonwebtoken = require("jsonwebtoken");

const userRoutes = require('./routes/users');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');
const blogRoutes = require('./routes/blog');
const locationRoutes = require('./routes/location')
const paymentRoute = require('./routes/payment')
const paidRoute = require('./routes/paid')

const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('admin-bro-expressjs')

AdminBro.registerAdapter(require('admin-bro-mongoose'))

//DB connection 
const dbUrl = process.env.DB_URL || 'mongodb://localhsot:271017/liferando';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const port = process.env.PORT || 8000;
const app = express();


app.use(morgan("tiny"));
const adminBro = new AdminBro({
    resources: [User, Menu, Location, Blog, Paid],
    rootPath: '/admin',
    branding: {
        companyName: 'Liferando',
    }
})

const router = AdminBroExpressjs.buildRouter(adminBro)


app.use(adminBro.options.rootPath, router)



app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'client/public')))
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const secret = process.env.SECRET || 'thisshouldbeabettersecret!';

const store = new MongoDBStore({
    url: dbUrl,
    secret,
    touchAfter: 24 * 60 * 60
});


store.on("error", function (e) {
    console.log("Session store error", e);
});

const sessionConfig = {
    store,
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig))
app.use(flash());


const ADMIN = {
    email: process.env.ADMIN_EMAIL || 'admin@example.com',
    password: process.env.ADMIN_PASSWORD || 'lovejs'
}


app.use(function (req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function (err, decode) {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});



app.use('/auth/', userRoutes);
app.use('/menu', menuRoutes);
app.use('/orders', orderRoutes);
app.use('/blog', blogRoutes);
app.use('/location', locationRoutes);
app.use('/charge', paymentRoute);
app.use('/paid', paidRoute);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
    });

}



const run = async () => {
    app.listen(port, (err) => {
        if (err) {
            throw (err);
        } else {
            console.log("Server is running on port " + port);
        }
    })
}

run();