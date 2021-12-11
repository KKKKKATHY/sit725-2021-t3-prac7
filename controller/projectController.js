let service = require("../services/projectService");

const getProjects = (res) => {
    service.getAllprojects(res);
}

const inserProjects = (project, res) => {
    service.getAllprojects(project, res);
}


const deleteProject = (id,res) => {
    service.deleteProject(id, res);
}

module.exports = {getProjects, inserProjects, deleteProject}