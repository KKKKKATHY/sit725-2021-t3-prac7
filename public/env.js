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
  console.log('Ready')
  
  $("#main-nav").load('component/navbar.html',() => {
    $('.sidenav').sidenav();
  })

  //test get call
  $.get('/projects',(result)=>{
    for(let project of result){
      $('#projects').append(createProjectCard(project)); 
    }
      
  })

})
