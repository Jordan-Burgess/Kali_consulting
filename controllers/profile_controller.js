const express = require('express')
const router = express.Router()

const Profile = require('../Models/Profile')

router.use(express.json())

router.get('/:id', async (req, res) => {
    const data = await Profile.findById(req.params.id)

    if (!data) return res.status(404).send("The profile with the given id was not found.")

    res.json(data)
})

router.get('/:id/services', async (req, res) => {
    const data = await Profile.findById(req.params.id)
    if (!data) return res.status(404).send("The profile with the given id was not found.")
    res.json(data.savedServices)
})

router.put('/:id', async (req, res) => {
    const data = await Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if (!data) return res.status(404).send("The profile with the given id was not found.")
    res.json(data)
})

router.post('/new', async (req, res) => {
    const data = await Profile.create(req.body)
    res.json(data)
})

router.delete('/:id', async (req, res) => {
    const data = await Profile.findByIdAndDelete(req.params.id)
    if (!data) return res.status(404).send("The profile with the given id was not found.")
    res.json(data)
})


module.exports = router 