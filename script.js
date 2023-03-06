const form = document.querySelector('.form')

const password = form.pwd
const confirmPassword = form.confirm_pwd
const passwordFeedback = document.querySelector('.form__password-feedback')

const noMatch = () => {
    password.classList.add('invalid-password')
    confirmPassword.classList.add('invalid-password')
    confirmPassword.setCustomValidity('Please make sure your passwords match')

    passwordFeedback.style.visibility = 'visible'
}

const match = () => {
    password.classList.remove('invalid-password')
    confirmPassword.classList.remove('invalid-password')

    confirmPassword.setCustomValidity('')


    passwordFeedback.style.visibility = 'hidden'
}

const checkPassword = ()=> {
    if((password.value !== confirmPassword.value) || (password.value === '' && confirmPassword.value === '') ) {
        noMatch()
    }
    else {
        match()
    }
}

[password, confirmPassword].forEach(element => addEventListener('keyup', checkPassword))

noMatch()