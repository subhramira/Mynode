const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;
const url = 'mongodb+srv://subhramira:Loveuma89@cluster0-puyo8.mongodb.net/test?retryWrites=true&w=majority';

const dbConnection = (callback) => {
    mongoClient.connect(url, {useUnifiedTopology: true}).then(res => {
        console.log(res)
        callback(res);
    }).catch(error => {
        console.log(error)
    })
}

const mydb = () => {
    mongoClient.connect(url, {useNewUrlParser:true,useUnifiedTopology: true}, (error, client) => {
        if(error) {
            return console.log(error)
        }
        console.log('connected');
        //Creating database
        const db = client.db('mydatabase');
        //insert one data
        db.collection('user').insertOne({
            name:'Subhransu',
            age: 30
        })
    })
} 

// module.exports = dbConnection;
module.exports = mydb