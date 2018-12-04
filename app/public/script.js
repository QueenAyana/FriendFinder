var newUser = [];
$("#subBtn").on("click", function (event) {
    event.preventDefault();

    // Function to validate form
    function validateForm() {
        var isValid = true;
        // Check to see if Name and Photo are filled 
        $(".form-control").each(function () {
            if ($(this).val() === "") {
                isValid = false;
            }
        });
        // check to see if all answers are filled
        $(".chosen-select").each(function () {
            if ($(this).val() === "") {
                isValid = false;
            }
        });
        return isValid;
    } // end of validateForm

    // If all required fields are filled
    if (validateForm()) {

        // Here we grab the form elements
        var newUser = {
            userName: $("#userName").val().trim(),
            Gender: $("#userGender").val().trim(),
            age: $("#userAge").val().trim(),
            photo: $("#userPhoto").val().trim(),
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

        // send an AJAX POST-request with jQuery
        $.post("/api/friends", newUser, function (data) {

            $("#match-name").text(data.name);
            $("#match-img").attr("src", data.photo);
            // Show the modal with the best match
            jQuery("#results-modal").modal();

            $("#userGender").val("");
            $("#userName").val("");
            $("#userAge").val("");
            $('#question1').val("");
            $('#question2').val("");
            $('#question3').val("");
            $('#question4').val("");
            $('#question5').val("");
            $('#question6').val("");
            $('#question7').val("");
            $('#question8').val("");
            $('#question9').val("");
            $('#question10').val("");
        });

    } else {
        $(".modal-title").text("Missing Required Information");
        $(".modal-body").html("<h3>Please answer all questions to find friends.</h3>");
        $(".modal-footer").html("<h3><i id='links' class='fas fa-dragon'></i>&nbsp;Dragon Dating</h3>");
        $("#results-modal").modal();
    }
})