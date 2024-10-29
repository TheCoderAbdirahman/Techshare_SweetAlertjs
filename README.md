# Techshare_SweetAlertjs

## Introduction
## SweetAlert2 is a modern and customizable alternative to the basic JavaScript alert(), confirm(), and prompt(). It offers a seamless user experience and has flexibility for handling notifications and dialogs.
---
## Example #1 Basic Alert and Animations
- We will be introducing SweetAlertJs. The first example I would like to show is an basic example of how to change a single property, **icon**, to better inform the user what you might like to inform them of. Do you want to tell the user of a successful submit? Use {icon : success}, or a warning? Use {icon : success} instead!

```
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
```

---

## Example 2 Custom Input Modal
-  The next example will showcase how to spice up taking in user input. Instead of using a normal input box that needs to be styled or importinga css framework, just use this example! The below code pops a user input box that is triggered by a button. Once a user inputs text it can  save the input and save it into a textbox to show a successful capture of input!


```
        // pause code execution for user input by using await.
        // returns a sweetalert object, value and name it url
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
```
---

## Example 3 Fetch Funtionality with Input 
- The third example will go over how to weave the SweetAlerts into a form submission, a real project application. It takes in input with a form, which then fires a Fetch and in the server if the user input is correct or an error happens. Sweet Alert is able to take in the server response and is able to better help the user understand their next steps!


```
//capture form data
        const formData = new FormData(this);

        const response = await fetch("/submit", {
            method: "POST",
            body: formData,
        });

        if(!response.ok)
        {
            const errorData = await response.json;
            Swal.fire({
                icon: "error",
                title: "Erorr! Wrong Answer",
                placeholder: errorData["value"]
            })
        } else {
            const data = await response.json;
            Swal.fire({
                icon: "success",
                title: "Correct! Good Job",
                placeholder: data["value"],
                timer: 2000
            });
        }
```

---

### Why Use SweetAlert2?
- Customizable: Change icons, buttons, text, etc.
- Better UX: Visually appealing and responsive dialogs.
- Input Validation: Built-in validation for input types.
- Asynchronous: Uses promises for smoother workflows.

---

### Reference
- [SweetAlert2 Documentation](https://sweetalert2.github.io)




