const mongoDB = require('mongoose');
const config = require('./config');

module.exports = {
    connection: null,
    connect: function(){
        if(this.connection)return this.connection;
        return mongoDB.connect(config.DB).then(connection =>{
            this.connection = connection;
            console.log('Conexion a Base de Datos Exitosa')
        }).catch(error => console.log(error))
    }
}