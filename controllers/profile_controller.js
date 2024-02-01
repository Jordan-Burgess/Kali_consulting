const express = require('express')
const router = express.Router()

const Profile = require('../Models/Profile')

router.use(express.json())

router.get('/:id', async (req, res) => {
    try {
        const data = await Profile.findById(req.params.id)

        if (!data) {
            return res.status(404).send("The profile with the given id was not found.")
        } else {
            res.json(data);
        }
    } catch (err) {
        res.status(500).json(err);
    } 
});

router.get('/:id/services', async (req, res) => {
    try {
        const data = await Profile.findById(req.params.id)

        if (!data) {
            return res.status(404).send("The profile with the given id was not found.")
        } else {
            res.json(data.savedServices)
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {
    try { 
        const data = await Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!data) {
            return res.status(404).send("The profile with the given id was not found.")
        } else {
            res.json(data)
        }
    } catch (err) {
            res.status(500).json(err)
    }
});

router.post('/new', async (req, res) => {
    try {
        const data = await Profile.create(req.body);
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:profileId/reviews', async (req, res) => {
    try {
        const data = await Profile.findById(req.params.profileId).populate('reviews');
        if (!data) {
            return res.status(404).json({ error: "The profile with the given id was not found." });
        } else {
            res.json(data);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const data = await Profile.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({ error: "The profile with the given id was not found." });
        } else {
            res.json(data);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router 