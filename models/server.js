const express = require('express')
//var cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //conectar a la BD
        this.middlewares();

        this.routes();

    }

    middlewares() {

        //parser y read body
        this.app.use(express.json(), express.query());
    }

    routes() {
        this.app.use('/api/getPrimos', require('../routes/calculo'));
        
    }   

    listen() {

        this.app.listen(this.port, () => {

            console.log('El puerto utilizado es', this.port);

        });
    }

}
module.exports = Server;