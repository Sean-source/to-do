$('#add-item').on('click', function(event) {
    const text = $('#items').val();
    const description = $('#description').val();
    const newItem = {
        name: text,
        description: description
    }

    $.ajax({
        url: "/api/items",
        method: "POST",
        data: newItem
    }).then(function(data) {
        location.reload();
    })
})