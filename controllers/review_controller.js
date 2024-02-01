const express = require('express')
const router = express.Router()

const Review = require('../Models/Review')

router.use(express.json())

router.get('/:id', async (req, res) => {
    try {
        const data = await Review.findById(req.params.id);
        if (!data) {
            res.status(404).json({ error: "The review with the given id was not found." });
        } else {
            res.json(data);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


router.put('/:id', async (req, res) => {
    try {
        const data = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            res.status(404).json({ error: "The review with the given id was not found." });
        } else {
            res.json(data);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/:serviceId/:profileId/new', async (req, res) => {
    try {
        req.body['service'] = req.params.serviceId;
        req.body['profile'] = req.params.profileId;
        const data = await Review.create(req.body);
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});



router.delete('/:id/destroy', async (req, res) => {
    try {
        const data = await Review.findByIdAndDelete(req.params.id);
        if (!data) {
            res.status(404).json({ error: "The review with the given id was not found." });
        } else {
            res.json(data);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router
