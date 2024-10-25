document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("url").addEventListener("click", async function(event){
        
        //pause code execution for user input by using await.
        //returns a sweetalert object, value and name it url
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
        });

        //if url is not null, set textbox and alert with value
        if (url) {
            document.getElementById("text").value = url;
            Swal.fire(`You entered URL: ${url}`);
            return;
        }

    })

})