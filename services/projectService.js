let dbo = require('../db/conn');

let projectCollection;

setTimeout(()=>{
    projectCollection = dbo.getDB().conllection('projects');
}, 2000);


const AllProject = (res) => {
    projectCollection.find().toArray((err, result) => {
        if(err) throw err;
        res.send(result);
    });
 }

const inserProject = (project, res) => {
    projectCollection.inserOne(project, (err,result) => {
        if(err) throw err;
        res.send({result: 204});
    });
 }

const releteProject = (id, res) =>{
    projectCollection.deleteOne({projectId: id }, (err, result) => {
        if(err) throw err;
        res.send({result: 204});
    })
}

 module.exports = { getAllprojects, inserProject, deleteProject}