let form = document.querySelector('form')
form.addEventListener('submit', function(event) {
    event.preventDefault()
    
    let email = document.querySelector('#email')

    if(email.value == '') {
        email.classList.remove('success')
        email.classList.add('faux')
        console.log('Invalide !')
    } else {
        email.classList.remove('faux')
        email.classList.add('success')
        console.log('Valide !')
    }

    
    let errorContainer = document.querySelector('.message-error')
    let errorList = document.querySelector('.message-error ul')

    errorList.innerHTML = ""
    errorContainer.classList.remove('visible')

    let pseudo = document.querySelector('#pseudo')

    if(pseudo.value == ''){

        errorContainer.classList.add('visible')
        pseudo.classList.remove('success')


        let err = document.createElement('li')
        pseudo.classList.add('faux')
        err.innerText = "Le champ pseudo ne peut pas être vide"

        errorList.appendChild(err)

    } else {

        if(pseudo.value.length < 6 ){
            errorContainer.classList.add('visible')
            pseudo.classList.remove('success')


            let err = document.createElement('li')
            pseudo.classList.add('faux')
            err.innerText = "Le champ pseudo doit contenir au moins 6 lettres"

            errorList.appendChild(err)
        } else {
            pseudo.classList.add('success')
        }
        
    }
    


    if(email.value == ''){

        errorContainer.classList.add('visible')
        email.classList.remove('success')


        let err = document.createElement('li')
        err.innerText = "Le champ email ne peut pas être vide"

        errorList.appendChild(err)
    } else {
        email.classList.add('success')
    }
    
    
    let password = document.querySelector('#password')
    let passCheck = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?])"
    )

    if(password.value == ''){

        errorContainer.classList.add('visible')
        password.classList.remove('success')


        let err = document.createElement('li')
        password.classList.add('faux')
        err.innerText = "Le champ mot de passe ne peut pas être vide"

        errorList.appendChild(err)
    } else {
        if(password.value.length < 10 || passCheck.test(password.value) == false){
            errorContainer.classList.add('visible')
            password.classList.remove('success')

            let err =document.createElement('li')
            password.classList.add('faux')
            err.innerText = "Le mot de passe doit faire 10 caractères minimumu, contenir minuscule, majuscule,chiffre, caractère spécial"

            errorList.appendChild(err)
        } else {
            password.classList.add('success')
        }
    }
    
    
    let password2 = document.querySelector('#password2')

    if(password2.value == ''){

        errorContainer.classList.add('visible')
        password2.classList.remove('success')


        let err = document.createElement('li')
        err.innerText = "Le champ validation du mot de passe ne peut pas être vide"
        password2.classList.add('faux')
        errorList.appendChild(err)
    } else {
        password2.classList.add('success')
    }

   
    let passwordInitial = document.querySelector('#password')
    let passwordReapeat = document.querySelector('#password2')

    if(passwordInitial.value != passwordReapeat.value){

        errorContainer.classList.add('visible')
        passwordReapeat.classList.remove('success')


        let err = document.createElement('li')
        passwordReapeat.classList.add('faux')
        err.innerText = "Les mots de passes sont différents"

        errorList.appendChild(err)

    } else {
        if (passwordReapeat.value == ''){
            passwordReapeat.classList.add('faux')
        } else {
            passwordReapeat.classList.add('success')
        }
        
    } 
    
    let successContainer = document.querySelector('.message-success')
    successContainer.classList.remove('visible')

    if(
        pseudo.classList.contains('success') &&
        email.classList.contains('success') &&
        password.classList.contains('success') &&
        passwordReapeat.classList.contains('success')
    ){
        successContainer.classList.add('visible')
    }

    
})