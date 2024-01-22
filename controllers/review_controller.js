const express = require('express')
const router = express.Router()

const Review = require('../Models/Review')

router.use(express.json())

router.get('/:id', async (req, res)=>{
    const data = await Review.findById(req.params.id)
    res.json(data)
})

router.put('/:id', async (req, res)=>{
    const data = await Review.findByIdAndUpdate(req.params.id, req.body, {new: true}) 
    res.json(data)
})

router.post('/:serviceId/:profileId/new', async (req, res) => {
    req.body['service'] = req.params.serviceId
    req.body['profile'] = req.params.profileId
    const data = await Review.create(req.body)
    res.json(data)
})



router.delete('/:id/destroy', async (req, res) => {
    const data = await Review.findByIdAndDelete(req.params.id)
    res.json(data)
})

module.exports = router
