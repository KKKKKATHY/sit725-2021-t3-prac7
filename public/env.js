// connect to the socket

let socket = io();


socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
})


function createProjectCard(project){
  return `    
  
    <div class="col s6 m4 " id=""project-id-${project.id}">
      <div class="card">
        <div class="card-image">
          <img src="${project.img ? project.img :'assets/HP.jpg'}">
          <span class="card-title">${project.title}</span>
        </div>
        <div class="card-content">
          <p>${project.info}</p>
        </div>
        <div class="card-action">
          <a href="project.html?pid=${project.id}">open project</a>
        </div>
      </div>
    </div>

`;
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
  $.get('/projects',(result)=>{
    for(let p of result){
      $('#projects-list').append(createProjectCard(p)); 
    }
      console.log(result)
  })

})
