const express = require('express');
const app = express();
const {engine} = require('express-heandlerbars');

const port = process.env.PORT || 8080;

app.use(express.static('public'));

app.engine('hbs', engine);
app.set('view', '/view');
app.set('view engine', 'hbs');


const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    }
);

server.on('close', () => {
    console.log('Server closed');
});