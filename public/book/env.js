$(document).ready(() => {
  console.log('-> Book list Page Ready')
  $("#nav-bar").load('../component/navbar.html',() => {
    $('.sidenav').sidenav();
    $('#book').hide()
  })
  $("footer").load('../component/foot.html')

  //test get call
  $.get('/api/booklist', (res) => {
    console.log('--> book list: ', res.result)
    createBookList(res.result)
  })
})
