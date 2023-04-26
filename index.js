const express = require('express');
const cors = require('cors');
const db = require('./db')
const app = express();

app.use(cors());
app.use('/', require('./routes/index.js'))
// app.get('/', async (req, res) => {
//     const dataBase = (await db()).connection;
//     const data = await dataBase
//         .collection('zips')
//         .find({state: "CA"})
//         .toArray((err, docs) => {
//             if(err) return err;
//             return docs
//         });
//     res.send({
//         data: data
//     })
// })

app.listen('5000', () => {
    console.log('app running at PORT: 5000')
})