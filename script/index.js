const btnEntrar = document.querySelector('.btnEntrar')
const inputUsuario = document.querySelector('.inputUsuario')
const inputSenha = document.querySelector('.inputSenha')
const btnCriarConta = document.querySelector('.btnCriarConta')
const divLogin = document.querySelector('.divLogin')
const formCriarConta = document.querySelector('.formCriarConta')
const btnCancelar = document.querySelector('.btnCancelar')
const btnConfirmar = document.querySelector('.btnConfirmar')
const inputForm = document.querySelectorAll('.inputForm')


function entrar(){
btnEntrar.addEventListener('click',() =>{
    if (inputUsuario.value == '' & inputSenha.value == ''){
        alert('Digite seu nome de usuário e senha para acessar.')
    }    
    if (inputUsuario.value == '' & inputSenha.value != '' ){
        alert('Digite seu usuário para acessar.')
            inputUsuario.value = ''
            inputSenha.value = ''
    }else if(inputUsuario.value != '' & inputSenha.value == '' ){ 
        alert('Digite sua senha para acessar.')
            inputUsuario.value = ''
            inputSenha.value = ''
}})
}

entrar()



inputSenha.addEventListener('keydown',(event)=>{
    if(event.which == 13 ){

       entrar() 
    }
    })

btnCriarConta.addEventListener('click', ()=>{
    divLogin.classList.remove('mostrar')
    formCriarConta.classList.add('mostrar')
   console.log(formCriarConta)

   inputForm.forEach(input =>{
    input.classList.remove('negado')
   })
})

btnCancelar.addEventListener('click', ()=>{
    divLogin.classList.add('mostrar')
    formCriarConta.classList.remove('mostrar') 

    inputForm.forEach(input=>{
        input.value = ''
    })
})


//input.nextElementSibling.remove("negado");


btnConfirmar.addEventListener('click',(erro)=>{  
    inputForm.forEach(input =>{
        if(input.value == '' ){
            erro.preventDefault()
            input.classList.add('negado')
        }else{
            input.classList.remove('negado')
        }
    })
})

inputForm.forEach(input=>{
    input.addEventListener('keydown',()=>{
        if(input.value !== '' ){
            input.classList.remove('negado')
        }
    })
})





