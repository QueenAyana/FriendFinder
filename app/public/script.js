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

//keep getting an error that $.push is not a function. dont know why.

    $.post("/api/tables", newUser,
        function (data) {

            if (data) {
                alert("Yay! You did the Thing!!!");
            }
            else {
                alert("Sorry you messed up foo");
            }
            // Clear the form when submitting
            $("#userGender").val("");
            $("#userName").val("");
            $("#userAge").val("");

        });

});