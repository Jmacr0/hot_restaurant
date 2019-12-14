const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "home.html"));
});

app.get("/reserves", function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "reserves.html"));
});

app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "table.html"));
});

app.post("reservation", function(req, res) {
    
})


app.listen(PORT, function () {
    console.log("listening on port: " + PORT);
})