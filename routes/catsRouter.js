const express = require('express')
const catsRouter = express.Router()
const Cats = require('../models/cats')

//GET
catsRouter.get('/', async(req, res, next) => {
    try {
        const foundCats = await Cats.find()
        return res.status(200).send(foundCats)
    } catch (err) {
        console.log(err)
        res.status(500)
        return next('Error in GET route', err)
    }
})

//POST
catsRouter.post('/', async(req, res, next) => {
    try {
    const newCat = new Cats(req.body)
    const savedCat = await newCat.save()
    return res.status(200).send(savedCat)
    } catch(err) {
        console.log(err)
        res.status(500)
        return next('Error in POST route', err)
    }
})

//DELETE
catsRouter.delete('/:catId', async(req, res, next) => {
    try {
        const catId = req.params.catId
        const deletedCat = await Cats.findOneAndDelete({
            _id: catId
        })
        return res.status(200).send(`You deleted ${deletedCat.name}!`)
    } catch (err) {
        console.log(err)
        res.status(500)
        return next('Error in DELETE route', err)
    }
})

//PUT
catsRouter.put('/:catId', async(req, res, next) => {
    try {
        const catId = req.params.catId
        const updatedCat = await Cats.findByIdAndUpdate(
            catId,
            req.body,
            {new: true}
    )
        return res.status(201).send(updatedCat)
    } catch (err) {
        console.log(err)
        res.status(500)
        return next('Error in PUT route', err)
    }
})

//GET ONE
catsRouter.get('/:catId', async(req, res, next) => {
    try {
        const catId = req.params.catId
        const oneCat = await Cats.find(
            {_id: catId}
        )
        return res.status(201).send(oneCat)
    } catch (err) {
        console.log(err)
        res.status(500)
        return next('Error in GET ONE route', err)
    }
})

module.exports = catsRouter