const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://KATHY:<zzg961215>@cluster0.v9zsp.mongodb.net/pitch-project?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let dbConnection;

module.exports = {
    connectToDatabase : function(calback){
        client.connect(function(err,db){
            if (err || !db) {
                return calback(err);
            }

            dbConnection = db.db("pitch-project");
            console.log("Connect to monogo atlas");

            return calback();
        });
    },
    getDb:function(){
        return dbConnection;
    }

}