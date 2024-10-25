document.addEventListener("DOMContentLoaded", () => {

    //simple form submission
    //asynchronus function due to fetch
    //once fetch is sent, await response and act on it
    document.getElementById("form").addEventListener("submit", async function(event){
        event.preventDefault();

        //capture form data
        const formData = new FormData(this);

        const response = await fetch("/submit", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            // If not OK, attempt to parse the error message from JSON
            const errorData = await response.json();
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: errorData["value"], // Display the error message from the server
            });
            return; // Exit the function early
        }else{
            // Parse the successful JSON response
            const data = await response.json();
            Swal.fire({
                icon: "success",
                title: "correct!",
                text: "good guess",
                timer: 2000 // Display the message for 2 seconds
            });
        }


    });//end of function
});