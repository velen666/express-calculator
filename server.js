const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("express"));

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Подключаем стили
app.use('/styles', express.static(path.join(__dirname + "/styles")));
app.use('/node_modules', express.static(path.join(__dirname + "/node_modules")));
app.use('/js', express.static(path.join(__dirname + "/js")));

app.get("/", (req, res) => {
    response.send("Главная страница");
});

app.get("/calculator", urlencodedParser, (req,res) => {
    res.sendFile(__dirname + "/pages/index.html");
});

app.post("/calculator", urlencodedParser, (req, res) => {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.send(req.body);
});

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});