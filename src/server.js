//--------------------------------------------------------------------------------------//
//·································· proyect moduls·····································//
//--------------------------------------------------------------------------------------//
// modulos del proyecto
const Database = require('./config/database');

// modulos exportados
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const methodOverride = require('method-override');
const bodyparser = require('body-parser');

/* 
// modulos del proyecto
import Database from "./config/database";
import config from "./config/config";
import AppModule from "./App"

// modulos importados
import express from "express";
import exphbs from "express-handlebars";
import session from "express-session";
import path from "path";
import methodOverride from "method-override";
import flash from "connect-flash";
import morgan from "morgan";
import MongoStore from "connect-mongo";
*/

//--------------------------------------------------------------------------------------//
//······························· Initiliazations ······································//
//--------------------------------------------------------------------------------------//
const app = express();
Database.connect();

//--------------------------------------------------------------------------------------//
//···························· server is listenning ····································//
//--------------------------------------------------------------------------------------//
const port = process.env.PORT || 3000
//mensaje 
app.listen(port, function () {
    console.log("App corriendo en el puerto " + port + "!")
})

//--------------------------------------------------------------------------------------//
//··································· setting ··········································//
//--------------------------------------------------------------------------------------//
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//--------------------------------------------------------------------------------------//
//································· Middlewares ········································//
//--------------------------------------------------------------------------------------//
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    //store: MongoStore.create({ mongoUrl: config.MONGODB_URI }),
  })
);
 
//--------------------------------------------------------------------------------------//
//······························· Global Variable ······································//
//--------------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------------//
//··································· routes  ··········································//
//--------------------------------------------------------------------------------------//
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, './views/home.html'));
})
app.use(require('./routes/users'));
app.use(require('./routes/deudas'));
app.use(require('./routes/pagos'));

//--------------------------------------------------------------------------------------//
//································· static Files ·······································
//--------------------------------------------------------------------------------------//
// static Files
app.use(express.static(path.join(__dirname, 'public')));