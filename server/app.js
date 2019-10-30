/*
a = [1, 2, 3];
b = [1, 2];

function isEqual(x, y)
{
    if (x.length != y.length)
    {
        return false;
    }
    for (let i = 0; i < x.length; i++)
    {
        if (x[i] != y[i])
            return false;
    }
    return true;
}

console.log("Result of comparing " + a + " and " + b + " is " + isEqual(a, b));
*/

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

// Server will always find an open port.
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});

// Access example.com/
app.get('/', (req, res) => {
    res.send("I love HackSchool.");
});

// Access example.com/memes
app.get('/memes', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// On all other pages, redirect to an error page.
// MUST ALWAYS BE LAST PAGE

app.get("*", (req, res) => {
    res.status(404).sendFile(__dirname + '/error.html');
});