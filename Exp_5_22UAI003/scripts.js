
function calculateAge() {
    var dob = document.getElementById('dob').value;
    if (dob === "") {
        document.getElementById('age').value = '';
        return;
    }


    var dobDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - dobDate.getFullYear();
    var m = today.getMonth() - dobDate.getMonth();


    if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    document.getElementById('age').value = age;
}


function validateForm() {

    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var adharNumber = document.getElementById('adhar').value;
    var address = document.getElementById('address').value;
    var age = document.getElementById('age').value;


    document.getElementById('error-message').innerText = '';

    if (name === "") {
        document.getElementById('error-message').innerText = 'Full Name is required.';
        return false;
    }

    if (dob === "") {
        document.getElementById('error-message').innerText = 'Date of Birth is required.';
        return false;
    }

    if (age < 18) {
        document.getElementById('error-message').innerText = 'You must be at least 18 years old to register.';
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        document.getElementById('error-message').innerText = 'Please enter a valid email address.';
        return false;
    }

    if (adharNumber === "") {
        document.getElementById('error-message').innerText = 'Aadhar number is required.';
        return false;
    }

    if (address === "") {
        document.getElementById('error-message').innerText = 'Address is required.';
        return false;
    }

    alert('Registration successful!');
    return true;
}