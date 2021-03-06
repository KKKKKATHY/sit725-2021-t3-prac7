// connect to the socket

let socket = io();

socket.on('newMsg', (msg) => {
  console.log('Server msg:' + msg);
})

$(document).ready(() => {
  console.log('-> PageReady')
  $("#nav-bar").load('./component/navbar.html',() => {
    createNewBookList()
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('#book').show()
  })
  $("footer").load('./component/foot.html')

  //test get call
  $.get('/api/init', ({result}) => {
    console.log('--> page init: ', result)
    for(let project of result[0].items){
      $('#display').append(createProjectCard(project)); 
    }
  })

})
