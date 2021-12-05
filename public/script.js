const getProjects = () => {
    $.get('/api/projects',(response)=>{
        if (response.statusCode==200){
            addCards(response.data);
        }
    })
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitFrom();
    })
    getProjects();
    $('.modal').modal();
});