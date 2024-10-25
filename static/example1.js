//create event listeners for the buttons
document.addEventListener("DOMContentLoaded", () => {

    //change icon and title to match button

    document.getElementById("success").addEventListener("click", function(event){
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success" 
        });
    });

    document.getElementById("error").addEventListener("click", function(event){
        Swal.fire({
            title: "error",
            text: "Something is wrong",
            icon: "error"
        });
    });

    document.getElementById("warning").addEventListener("click", function(event){
        Swal.fire({
            title: "Warning",
            text: "Something maybe wrong",
            icon: "warning"
        });
    });


    document.getElementById("info").addEventListener("click", function(event){
        Swal.fire({
            title: "More Information",
            text: "Did you know?....etc.",
            icon: "info"
        });
    });


    document.getElementById("question").addEventListener("click", function(event){
        Swal.fire({
            title: "Why is the sky blue",
            text: "You clicked the button!",
            icon: "question"
        });
    });


});
