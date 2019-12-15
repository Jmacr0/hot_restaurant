const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let api = {
    reservations: [],
    waitlist: []
};

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "home.html"));
});

app.get("/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "reservations.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "tables.html"));
});

app.get("/api", function (req, res) {
    res.json(api);
})

app.get("/api/reservations", function (req, res) {
    res.json(api.reservations);
});

app.get("/api/waitlist", (req, res) => {
    res.json(api.waitlist);
});

app.post("/api/clear", (req, res)=>{
    api.reservations.length = 0;
    api.waitlist.length = 0;
    res.json({ ok: true })
})

app.post("/reservations", function (req, res) {
    var newReservation = req.body;
    if (api.reservations.length < 5) {
        api.reservations.push(newReservation);
    } else {
        api.waitlist.push(newReservation);
    }
    res.json(false);
});

app.listen(PORT, function () {
    console.log("listening on port: " + PORT);
})