let userEmail = 'user@gmail.com';
let userPassword = 'UserPass';
let adminEmail = 'admin@gmail.com';
let adminPassword = 'AdminPass';

let password;
const minEmailLength = 6;
const minPasswordLength = 5;

let visitorEmail = prompt('Please, enter your email', '');
if (visitorEmail === '' || visitorEmail === null) {
    alert('Canceled');
} else if (visitorEmail.length < minEmailLength) {
    alert("I don't know any emails having name length less than 6 symbols");
} else if (visitorEmail === userEmail || visitorEmail === adminEmail) {
    if (visitorEmail === userEmail) {
        password = userPassword;
    } else if (visitorEmail === adminEmail) {
        password = adminPassword;
    }
    let visitorPassword = prompt('Please, enter your password', '');
    if (visitorPassword === password) {
        let change = confirm('Do you want to change your password?');
        if (change === false) {
            alert('You have failed the change.');
        } else if (change === true) {
            let visitorPassword = prompt('Please, enter your old password', '');
            if (visitorPassword === '' || visitorPassword === null) {
                alert('Canceled');
            } else if (visitorPassword === password) {
                let visitorNewPassword = prompt('Please, enter your new password', '');
                if (visitorNewPassword.length < minPasswordLength) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let visitorEnterNewPassword = prompt('Please, enter your new password again', '');
                    if (visitorEnterNewPassword !== visitorNewPassword) {
                        alert('You wrote the wrong password.');
                    } else {
                        alert('You have successfully changed your password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        }
    } else if (visitorPassword === '' || visitorPassword === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}

