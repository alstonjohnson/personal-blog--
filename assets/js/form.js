function validateForm() {
    const usrnm = document.getElementById('exampleFormControlInput1').value;
    const title = document.getElementById('exampleFormControlInput2').value;
    const blogEntry = document.getElementById('blog-content').value;

    if (usrnm === '' || title === '' || blogEntry === '') {
        alert('Please be sure to enter data into all fields before submitting this form.');
        return false; 
    }
}

// Local Storage
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('exampleFormControlInput1').value;
    const blogTitle = document.getElementById('exampleFormControlInput2').value;
    const blogContent = document.getElementById('blog-content').value;

    const formDataObject = {
        username: username,
        blogTitle: blogTitle,
        blogContent: blogContent
    };

    const formDataJSON = JSON.stringify(formDataObject);

    localStorage.setItem('formData', formDataJSON);

    console.log('Form data saved to local storage:', formDataJSON);
});