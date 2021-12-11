let express = require("express");
let router = express.Router();

router.get('/' , (req,res) => {
    //call a method from the controller
    //re.send(data);
    re.send("this is worked from students");
});

//to get a project with id
router.get('/{id}' , (req,res) => {
    //call a method from the controller
    //re.send(data);
    re.send("this is worked from students");
});

//insert a new project
router.post('/' , (req,res) => {
    //call a method from the controller to insert data to the db
    re.sendStatus(204);
});

//remove a given project
router.delete('/' , (req,res) => {
    //call a method from the controller to insert data to the db
    re.sendStatus(204);
});

//update the project
router.put('/' , (req,res) => {
    //call a method from the controller to insert data to the db
    re.sendStatus(204);
});

module.exports = router;