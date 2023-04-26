const mongoose = require('mongoose');
const DBUri = 'mongodb+srv://krishnamohanbitsindri:krishna_123@mongo-db-practice.wse3ciu.mongodb.net/sample_training?retryWrites=true&w=majority'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

async function db () {
    const connection = mongoose.connect(DBUri, options)
    console.log('connection successful')
    return connection
}

module.exports = db