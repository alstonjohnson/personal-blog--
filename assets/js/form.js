function validateForm() {
    const name = document.getElementById('exampleFormControlInput1').value;
    const email = document.getElementById('exampleFormControlInput2').value;
    const password = document.getElementById('blog-content').value;

    if (name === '' || email === '' || password === '') {
        alert('Please be sure to enter data into all fields before submitting this form.');
        return false; 
    }
}

// Local Storage
const form = document.querySelector('form');

// Function for collecting the form data
form.addEventListener('submit', function(event) {
    event.preventDefault();

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