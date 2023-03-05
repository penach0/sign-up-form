const form = document.querySelector('.form')

const password = form.pwd
const confirmPassword = form.confirm_pwd

password.classList.add('invalid-password')
confirmPassword.classList.add('invalid-password')

const checkPassword = ()=> {
    if((password.value !== confirmPassword.value) || (password.value === '' && confirmPassword.value === '') ) {
        password.classList.add('invalid-password')
        confirmPassword.classList.add('invalid-password')
    }
    else {
        password.classList.remove('invalid-password')
        confirmPassword.classList.remove('invalid-password')
    }
}

[password, confirmPassword].forEach(element => addEventListener('keyup', checkPassword))