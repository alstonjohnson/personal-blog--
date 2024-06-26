// Get the form element
const form = document.querySelector('form');

// Function for collecting the form data
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Collecting the form data
    const username = document.getElementById('exampleFormControlInput1').value;
    const blogTitle = document.getElementById('exampleFormControlInput2').value;
    const blogContent = document.getElementById('blog-content').value;

    // Object for the collected form data
    const formDataObject = {
        username: username,
        blogTitle: blogTitle,
        blogContent: blogContent
    };

    const formDataJSON = JSON.stringify(formDataObject);

    localStorage.setItem('formData', formDataJSON);

    console.log('Form data saved to local storage:', formDataJSON);
});