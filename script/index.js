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
    if (inputUsuario.value == '' && inputSenha.value == ''){
        alert('Digite seu nome de usuário e senha para acessar.')
        console.log('Digite seu nome de usuário e senha para acessar.')
        return
    }    
    if (inputUsuario.value == '' & inputSenha.value != '' ){
        alert('Digite seu usuário para acessar.')
        limparInputLogin()
        return
    }else if(inputUsuario.value != '' & inputSenha.value == '' ){ 
        alert('Digite sua senha para acessar.')
          limparInputLogin()
          return  
    }
    if (inputUsuario.value == 'leo' & inputSenha.value == '123'){
        location.href = 'home.html'
        limparInputLogin()
        return
        }else if(inputUsuario.value != 'leo' & inputSenha.value != '123'){
        alert('Usuário ou senha incorretos')
        limparInputLogin()
        return
        }
}

function limparInputLogin(){
    inputUsuario.value = ''
    inputSenha.value = ''
}

function limparInputsForm(){
    inputForm.forEach(input =>{
        input.value = ''
    })
}


inputSenha.addEventListener('keydown',(event)=>{
    if(event.which == 13 ){
        
       entrar() 
    }
    })

btnCriarConta.addEventListener('click', ()=>{
    divLogin.classList.remove('mostrar')
    formCriarConta.classList.add('mostrar')
   

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

const todosInput = inputForm
//input.nextElementSibling.remove("negado");

btnConfirmar.addEventListener('click',(erro)=>{  
    
    
    inputForm.forEach(input =>{
        if(input.value == '' ){
        erro.preventDefault()
        input.classList.remove('negado')
        input.classList.add('negado')
        }else{
        input.classList.remove('negado')
        }
        })

        inputForm.forEach(input => {
        if(inputForm[0].value != '' &&
        inputForm[1].value != ''    &&
        inputForm[2].value != ''    &&
        inputForm[3].value != ''
        ){
        divLogin.classList.add('mostrar')
        formCriarConta.classList.remove('mostrar') 
        limparInputsForm()
        alert('Conta criada com sucesso.')
        }
    })
        }
        )


inputForm.forEach(input=>{
    input.addEventListener('keydown',()=>{
        if(input.value !== '' ){
            input.classList.remove('negado')
        }
    })
})







