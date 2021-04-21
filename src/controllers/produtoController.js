const express = require ('express');

const Produto = require('../models/produto');

const router = express.Router();


router.post('/register', async (req, res) => {
   try {
       const produto = await Produto.create(req.body);

       return res.send({ produto });
   } catch (err) {
       return res.status(400).send({ error: 'Registration failed'});
   }
});


router.put('/:produtoId', async (req, res) => {
    const { name, preco } = req.body
    try {
        const produto = await Produto.findByIdAndUpdate(req.params.produtoId, {
            name,
            preco
            }, { new: true });

        return res.send({ produto });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating anime'});
    }
});

//GET ALL
router.get('/', async (req, res) => {
    try {
        const produtos = await Produto.find();

        return res.send ({ produtos });

    } catch (err){
        return res.status(400).send({ error: 'Error loading produtos' });
    }
});

//GET ID
router.get('/:produtoId', async (req, res) => {
    try {
        const produto = await Produto.findById(req.params.produtoId);

        return res.send ({ produto });

    } catch (err){
        return res.status(400).send({ error: 'Error loading produto' });
    }
});

router.delete('/:produtoId', async (req, res) => {
    try {
        await Produto.findByIdAndRemove(req.params.produtoId);

        return res.send();

    } catch (err){
        return res.status(400).send({ error: 'Error deleting produto' });
    }
});


module.exports = app => app.use('/produto', router);