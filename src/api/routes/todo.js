var express = require('express');
var router = express.Router();
var knex = require('../config/_config');


router.get('/', (req, res, next) => {
    knex('tarefa').then(function (collection) {
            res.json({
                error: false,
                data: collection
            })
        })
        .catch(function (err) {
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        });
});

router.post('/', (req, res, next) => {
    const {
        descricao,
        status,
        data_criacao = new Date()
    } = req.body;
    console.log(data_criacao);
    knex('tarefa')
        .insert({
            descricao,
            status,
            data_criacao
        })
        .then((dados) => {
            res.status(200).send(dados)
        })
        .catch(function (err) {
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        });

});

router.get('/:id', function (req, res, next) {
    const {
        id
    } = req.params;
    knex('tarefa')
        .where('id', id)
        .first()
        .then(function (collection) {
            res.json({
                error: false,
                data: collection
            })
        })
        .catch(function (err) {
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        });

});

router.put('/', function (req, res, next) {
    const {
        id
    } = req.body;
    knex('tarefa')
        .where('id', id)
        .update(req.body)
        .then(function (collection) {
            res.json({
                error: false,
                data: "Dados Salvos com Sucesso."
            })
        })
        .catch(function (err) {
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        });
});

router.delete('/:id', function (req, res, next) {
    const {
        id
    } = req.params;
    knex('tarefa')
        .where('id', id)
        .delete()
        .then(function (collection) {
            if (collection == 0) return err;
            res.json({
                error: false,
                data: "Dados Deletados com Sucesso."
            })


        })
        .catch(function (err) {
            res.status(500).json({
                error: true,
                data: {
                    message: err.message
                }
            })
        });

});
module.exports = router;