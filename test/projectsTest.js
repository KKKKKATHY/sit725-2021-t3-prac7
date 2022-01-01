const expect = require("chai").expect;
const request = require("request");
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://KATHY:<zzg961215>@cluster0.v9zsp.mongodb.net/pitch-project?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



describe("get all projects", () =>{
    const url = "http://localhost:8585/api/projects";

    before((done) => {
      dbo.connect(() =>{
           const projectsCollection = dbo.getDB().collection("projects");
           console
       for (let index = 1; index < 11; index++){
           projectsCollection.insertOne({ 
              projectID: index,
              title: 'test' + index,
              info: 'test info' + index,
              img: 'img' + index
           })  
         }
         setTimeout(() => {
             done();
         },1000); 
       })

    });

    it("requests return status code 200", (done) => {
        request(url, (err,res,body) =>{
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("requests body type is equal to array", (done) => {
        request(url, (err,res,body) =>{
            body = JSON.parse(body);
            expect(body).to.be.a("array");
            done();
        });
    });

    it("requests body returns exactly 10 projects", (done) => {
        request(url, (err,res,body) =>{
            body = JSON.parse(body);
            console.log(body);
            expect(body.length).to.equal(10);
            done();
        });
    });

    after(() => {
        dbo.connect(()=>{
            const projectsCollection = dbo.getDB().collection("projects");
        for (let index = 1; index < 11; index++){
           projectsCollection.deleteOne({ 
               projectID: 'test' + index,
           });  
        };
    });
    });
});