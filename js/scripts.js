function newItem() {

    
    if ($('#input').val() === '') {
        alert('can not be empty');
        return;
    }

    
    let input = $('#input').val();
    let element = $('<li></li>');

    
    element.append(input);

    
    $('#list').append(element);

    
    $('#input').val('');

    
    element.on("dblclick", crossOut);

    
    let deleteButton = $('<crossoutbutton></crossoutbutton>');
    deleteButton.append(document.createTextNode('Delete'));

   
    element.append(deleteButton);

    
    deleteButton.on("click", deleteListItem);

    function deleteListItem() {
        element.addClass('delete');
    }

    function crossOut() {
        
        element.toggleClass('strike');
    }

    
    $('#list').sortable();
}
