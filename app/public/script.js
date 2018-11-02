$("#subBtn").on("click", function (event) {
    event.preventDefault();

    // Here we grab the form elements
    var newUser = {
        userName: $("#userName").val().trim(),
        Gender: $("#userGender").val().trim(),
        age: $("#userAge").val().trim(),
        //user pic ???
        scores: [
            parseInt($('#question1').val()),
            parseInt($('#question2').val()),
            parseInt($('#question3').val()),
            parseInt($('#question4').val()),
            parseInt($('#question5').val()),
            parseInt($('#question6').val()),
            parseInt($('#question7').val()),
            parseInt($('#question8').val()),
            parseInt($('#question9').val()),
            parseInt($('#question10').val())
        ]
    };
    console.log(newUser);

    // This line is the magic. It"s very similar to the standard ajax function we used.
    // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
    // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
    // depending on if a tables is available or not.
    $.post("/api/tables", newUser,
        function (data) {

            // If a table is available... tell user they are booked.
            if (data) {
                alert("Yay! You are officially booked!");
            }

            // If a table is available... tell user they on the waiting list.
            else {
                alert("Sorry you are on the wait list");
            }

            // Clear the form when submitting
            $("#userGender").val("");
            $("#userName").val("");
            $("#userAge").val("");

        });

});


            // If a table is available... tell user they are booked.
            // if (data) {
            //     alert("Yay! You are officially booked!");
            // }

            // // If a table is available... tell user they on the waiting list.
            // else {
            //     alert("Sorry you are on the wait list");
            // }

            // Clear the form when submitting
            // $("#userGender").val("");
            // $("#userName").val("");
            // $("#userAge").val("");

    


