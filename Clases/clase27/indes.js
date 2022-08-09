const parseArgs = require('minimist');

const argv = process.argv.slice(2);

const options = {
    default: {
        modo: 'prod',
        puerto: 0,
        debug: false,
    },
    alias: {
        'm': 'modo',
        'p': 'puerto',
        'd': 'debug',
        _: 'otros'
    }
}

const parsed = parseArgs(argv, options)
delete parsed.m;
delete parsed.p;
delete parsed.d;
parsed.otros = parsed['_'];
delete parsed['_'];

console.log(parsed);

//variables de entorno

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
}
);
app.get('/', (req, res) => {
    res.send('Hola mundo');
}
);

console.log({
    modo: process.env.MODO || "prod",
    puerto: Number(process.env.PUERTO) || 0,
    debug: Boolean(process.env.DEBUG) || false,
});