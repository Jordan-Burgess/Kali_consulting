const express = require('express')
const router = express.Router()

const Category = require('../Models/Category')

router.use(express.json())

router.get('/:id', async (req, res) => {
    try {
        const data = await Category.findById(req.params.id);
        if (!data) {
            return res.status(404).json("The category with the given id was not found." );
        } else {
            res.json(data);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "An error occurred while processing your request." });
    }
});

router.put('/:id', async (req, res) => {
    try{
        const data = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!data) {
            return res.status(404).send("The category with the given id was not found.")
        } else {
            res.json(data);
        }
    
    } catch (err){
        console.log(err);
        res.status(500).json({ error: "An error occurred while processing your request." });
    }
});

router.post('/new', async (req, res) => {
    try {
        const data = await Category.create(req.body);
        return res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "An error occurred while processing your request." });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const data = await Category.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({ error: "The category with the given id was not found." });
        } else {
            res.json(data);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "An error occurred while processing your request." });
    }
});

module.exports = router 