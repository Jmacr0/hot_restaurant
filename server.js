const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let reservation = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "home.html"));
});

app.get("/reserves", function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "reserves.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "table.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(reservation);
  });

app.post("/api/tables", function(req, res) {
    
    var newReservation = req.body;
    console.log(newReservation);

    reservation.push(newReservation);
  
    res.json(newReservation);
  });
app.listen(PORT, function () {
    console.log("listening on port: " + PORT);
})