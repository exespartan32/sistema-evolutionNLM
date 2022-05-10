const Database = require('./app/config/database');
const config = require('./app/config/config');
const App = require('./app/app');

Database.connect();


App.listen(config.PORT, function(error){
    if(error) return console.log(error);
    console.log(`Servidor corriendo en el puerto ${config.PORT}!`)
})