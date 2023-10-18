const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

app.get('/aboutus', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Aboutus.html'));
});


app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Services.html'));
});


app.get('/contactus', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Contactus.html'));
});

app.listen(port, () => {
    console.log(`Serveris running on http://localhost:${port}`);
});




