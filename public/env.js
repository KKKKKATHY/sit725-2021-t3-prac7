// connect to the socket

let socket = io();


socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
})


function createProjectCard(project){
  return `    
  
    <div class="col s6 m4 " id=""project-id-${project.projectId}">
      <div class="card">
        <div class="card-image">
          <img src="${project.img ? project.img :'assets/HP.jpg'}">
          <span class="card-title">${project.title}</span>
        </div>
        <div class="card-content">
          <p>${project.info}</p>
        </div>
        <div class="card-action">
          <a href="project.html?pid=${project.project.id}">open project</a>
          <a class = "btn waves-effect waves-light" Onclick = "deleteProject(${project.project.id})"><i class="material-icons">delete</i></a>
        </div>
      </div>
    </div>

`;
}

function deleteProject(projectid){
  var settings ={
    "url":`/api/projects/${projectid}`,
      "method":"DELETE",
      "timeout": 0,
  };

  $.ajax(settings).done(function(response){
    alert(`#project-id-${projectId}`);
    $(`#project-id-${projectId}`).remove();
  });
}
 


$(document).ready(function(){

  $('.sidenav').sidenav();
  
  $('.modal').modal();

  $('#save-project').onClick((e)=>{
    const data = {
      projectID:$("#project-id").val(),
      title:$("#project-title").val(),
      info:$("#project-description").val(),
      img:null
    };
   
    var settings = {
      "url":"localhost:8080/projects",
      "method":"POST",
      "timeout": 0,
      "headers":{
        "Content-Type":"application/json"
      },
      "data": JSON.stringify(data),
    };
    $.ajax(settings).done(function(response){
      console.log(response);
    });
  });

  //test get call
  $.get('/api/projects',(result)=>{
    for(let p of result){
      $('#projects-list').append(createProjectCard(p)); 
    }
      console.log(result)
  })

})
