function validateWidth(){
    document.getElementById('background-burger-menu').style.display = 'none'
    let currentWidth = window.innerWidth
    let nav = document.getElementById('nav')
    let btn = document.getElementById('btn-burger-menu')
    if(currentWidth >= 600){
        nav.classList.remove('hide')
        nav.classList.add('show')
        btn.style.display = 'none'
    }else{
        nav.classList.add('hide')
        nav.classList.remove('show')
        btn.style.display = 'block'
    }
}
window.addEventListener('load', validateWidth)
window.addEventListener('resize', validateWidth)

function burgerMenu(){
    let nav = document.getElementById('nav')
    if(nav.classList.contains('show')){
        nav.classList.add('hide')
        nav.classList.remove('show')
        document.getElementById('background-burger-menu').style.display = 'none'
    }else{
        nav.classList.remove('hide')
        nav.classList.add('show')
        document.getElementById('background-burger-menu').style.display = 'flex'
    }
}
document.getElementById('btn-burger-menu').addEventListener('click', burgerMenu)

function validateForm(e, id){
    e.preventDefault()
    let container = document.getElementById(id)
    let input = e.target.children
    if(input[0].id === 'container-input'){
        input = e.target.children[0].children[0]
    }else{
        input = e.target.children[0]
    }
    let textResponse = document.createElement('p')
    textResponse.id = 'textResponse'
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(input.value.match(validRegex)){
        //valid
        textResponse.innerText = 'Email sent successfully!'
        textResponse.classList.add('email-sent')
        input.classList.add('border-sent')
    }else{
        //invalid
        textResponse.innerText = 'Please check your email'
        textResponse.classList.add('error-email')
        input.classList.add('border-error')
    }
    container.appendChild(textResponse)
}

function removeOldAnswer(e, id){
    let container = document.getElementById(id)
    let input = e.target
    let text = document.getElementById('textResponse')
    if(text){
        container.removeChild(text)
        input.classList.remove('border-error')
        input.classList.remove('border-sent')
    }
}