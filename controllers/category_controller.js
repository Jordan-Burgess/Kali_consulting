const express = require('express')
const router = express.Router()

const Category = require('../Models/Category')

router.use(express.json())

router.get('/:id', async (req, res) => {
    const data = await Category.findById(req.params.id)
    if (!data) return res.status(404).send("The category with the given id was not found.")
    res.json(data)
})

router.put('/:id', async (req, res) => {
    const data = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if (!data) return res.status(404).send("The category with the given id was not found.")
    res.json(data)
})

router.post('/new', async (req, res) => {
    const data = await Category.create(req.body)
    res.json(data)
})

router.delete('/:id', async (req, res) => {
    const data = await Category.findByIdAndDelete(req.params.id)
    if (!data) return res.status(404).send("The category with the given id was not found.")
    res.json(data)
})

module.exports = router 