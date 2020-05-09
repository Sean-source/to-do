$('#add-item').on('click', function (event) {
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
    }).then(function (data) {
        location.reload();
    })
})


$(".update-item").on("click", function (event) {
    var id = $(this).data("id");
    var newCondition = $(this).data("complete");

    console.log(id);

    if (newCondition) {
        newCondition = false;
    }
    else {
        newCondition = true;
    }

    // var newConditionState = {
    //     complete: newCondition
    // };

    // Send the PUT request.
    $.ajax("/api/items/" + id, {
        type: "PUT",
        data: {
            complete: newCondition
        }
    }).then(
        function () {
            console.log(newCondition);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});


$(".delete-item").on("click", function (event) {
    var id = $(this).data("id");

    $.ajax("/api/items/" + id, {
        type: "DELETE",
    }).then(function () {
        console.log("successfully deleted");
        location.reload();
    })
})