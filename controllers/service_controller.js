const express = require('express')
const router = express.Router()

const Service = require('../Models/Service')

router.use(express.json())

router.get('/', async (req, res)=>{
    const data = await Service.find()
    res.json(data)
})

router.get('/:id', async (req, res)=>{
    const data = await Service.findById(req.params.id)
    res.json(data)
})

router.put('/:id', async (req, res)=>{
    const data = await Service.findByIdAndUpdate(req.params.id, req.body, {new: true}) 
    res.json(data)
})

router.post('/new', async (req, res) => {
    const data = await Service.create(req.body)
    res.json(data)
})

router.delete('/:id', async (req, res) => {
    const data = await Service.findByIdAndDelete(req.params.id)
    res.json(data)
})

module.exports = router
