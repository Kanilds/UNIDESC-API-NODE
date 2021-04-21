const mongoose = require('../database');

const ProdutoSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    preco: {
        type: Number,
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
});

const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;