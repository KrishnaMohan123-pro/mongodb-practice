const Router = require('express').Router();
const db = require('../db')

Router.get('/:id', async (req, res) => {
    const stateCode = req.params.id
    const dataBase = (await db()).connection;
    const d = [];
    for(let i =0; i < 100; i++) {
        d.push({index: i})
    }
    const data = await dataBase
        .collection('customCollection')
        // .findOne({index: 1})
        // .updateMany({index: {$lt: 10}}, {$rename: {name: 'fullName'}}) 
        .find({
            index: { $lt : 10}
        },{batchSize: 10})
        // .sort({index: -1}).skip(10).limit(10)
        // .findOne({})
        // .insertMany(d)
        // .collection('zips')
        // .dropIndex({'state': 1});
        // .find({
        //     state: stateCode
        // })
        .toArray((err, docs) => {
            if (err) return err;
            return docs
        });
        // .explain()
    res.send({
        data: data
    })
    // res.send({
    //     success: true
    // })
})

module.exports = Router