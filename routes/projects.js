let express = require("express");
let router = express.Router();



const projectService = require("../services/projects");


router.get('/' , (req,res) => {
    controller.getProjects(res);
});

//to get a project with id
router.get('/:id' , (req,res) => {
    //call a method from the controller
    //re.send(data);
    re.send("this is worked");
});

//insert a new project
router.post('/' , (req,res) => {
    controller.inserProjects(req.body, res);
});

//remove a given project
router.delete('/:id' , (req,res) => {
    controller.deleProjects(req.params.id, res);
});

//update the project
router.put('/' , (req,res) => {
    //call a method from the controller to insert data to the db
    re.sendStatus(204);
});


module.exports = router;