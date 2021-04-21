const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/restnode", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Banco de dados conectado");
})
mongoose.Promise = global.Promise;

module.exports = mongoose;