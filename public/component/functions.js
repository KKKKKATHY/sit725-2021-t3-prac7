function createProjectCard(project){
    return `    
        <div class="card col s6 m4">
            <div class="card-image imgSize" >
                <img src="${project.img ? project.img :'assets/HP.jpg'}">
                <span class="card-title">${project.title}</span>
            </div>
            <div class="card-content">
                <p>${project.des}</p>  
            </div>
        </div>
    `;
}

function createBookList(list) {
    if(list.length <= 0) {
        $('#book_list').append(`<p>Sorry, <br/> you don't have any book application yet.</p>`)
    }
    else {
        list.map(item => {
            $('#book_list').append(`
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">${item.bookName}</span>
                            <p>Email: ${item.email ? item.email : "no email"}</p>
                            <p>Phone: ${item.phone ? item.phone : "no phone"}</p>
                        </div>
                    </div>
                </div>
            `)
        })
    }
}

const createNewBookList = () => {
    $('#appoint').append(`
        <div class="modal-content">
        <h4>Make An Appoint</h4>
        <div class='row'>
        <form class="col s12">
            <div class="row">
                <div class="input-field col s6">
                    <input id="book_name" type="text" class="validate">
                    <label for="book_name">Name: </label>
                </div>
            </div>      
            <div class="row">
                <div class="input-field col s6">
                    <input id="phone" type="tel" class="validate">
                    <label for="phone">Phone: </label>
                </div>
                <div class="input-field col s6">
                    <input id="email" type="email" class="validate">
                    <label for="email">Email: </label>
                </div>
            </div>
        </form>
        </div>
    </div>
    <div class="modal-footer">
        <a id="book_cancel" href="#!" class="modal-close waves-effect red waves-red btn">
            Cancel
        </a>
        <a id="book_ok" href="#!" class="modal-close waves-effect waves-green btn">
            OK
        </a>
    </div>`)
    
    const clearInput = () => {
        $('#book_name').val('')
        $('#phone').val('')
        $('#email').val('')
    }

    $('#book_cancel').click(() => {
        clearInput()
    })
    
    $('#book_ok').click(() => {
        if($('#book_name').val() === "" 
            || ($('#phone').val() === "" 
            && $('#email').val() === "")) {
            clearInput()
            return 
        }
        const data = {
            bookName: $('#book_name').val(),
            phone: $('#phone').val(),
            email: $('#email').val(),
        }

        const setting = {
            "url": "/api/book",
            "type": "POST",
            "timeout": 500,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify(data)
        }

        $.ajax(setting).done((res) => {console.log(res)})
        clearInput()
    })
}