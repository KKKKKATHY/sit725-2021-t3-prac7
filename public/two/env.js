
$(document).ready(() => {
  console.log('-> Page two Ready')
  $("#nav-bar").load('../component/navbar.html',() => {
    createNewBookList()
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('#book').show()
  })
  $("footer").load('../component/foot.html')

  //test get call
  $.get('/api/init', ({result}) => {
    console.log('--> page init: ', result)
    for(let project of result[1].items){
      $('#display').append(createProjectCard(project)); 
    }
  })

})
