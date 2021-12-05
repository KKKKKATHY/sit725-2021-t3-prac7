const getProjects = () => {
    $.get('/api/projects',(response)=>{
        if (response.statusCode==200){
            addCards(response.data);
        }
    })
}

