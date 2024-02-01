const express = require('express')
const router = express.Router()

const Service = require('../Models/Service')

router.use(express.json())

router.get('/', async (req, res) => {
    try {
        const data = await Service.find();
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await Service.findById(req.params.id).populate('reviews');
        if (!data) {
            res.status(404).json({ error: "The service with the given id was not found." });
        } else {
            res.json(data);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const data = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            res.status(404).json({ error: "The service with the given id was not found." });
        } else {
            res.json(data);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/new', async (req, res) => {
    try {
        const data = await Service.create(req.body);
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const data = await Service.findByIdAndDelete(req.params.id);
        if (!data) {
            res.status(404).json({ error: "The service with the given id was not found." });
        } else {
            res.json(data);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router
