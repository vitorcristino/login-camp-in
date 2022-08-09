const passwordInput = document.getElementById('Password')

const eyeSvg = document.getElementById('eye-svg')

function eyeClick(){
    let inputTypePassword = passwordInput.type == 'password' 

    if(inputTypePassword){
        showPassword()
}else{
    hidePassword()
    
}

function showPassword(){
    passwordInput.setAttribute('type', 'text')
    eyeSvg.setAttribute('src', './svg/eye-closed-fill.svg')
}

function hidePassword(){
    passwordInput.setAttribute('type', 'password')
    eyeSvg.setAttribute('src', './svg/eye.svg')
}

}