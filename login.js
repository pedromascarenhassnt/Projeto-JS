
        const botaoEnviar = document.getElementById('botaoEnviar')
        const nomeUsuario = document.getElementById('nomeUsuario')
        const sobrenomeUsuario = document.getElementById('sobrenomeUsuario')
        const emailUsuario = document.getElementById('emailUsuario')
        const senhaUsuario = document.getElementById('senhaUsuario')


        botaoEnviar.addEventListener('click', function(event){
            event.preventDefault()

            const nomeDigitado = nomeUsuario.value
            const sobrenomeDigitado = sobrenomeUsuario.value
            const emailDigitado = emailUsuario.value
            const senhaDigitada = senhaUsuario.value

            localStorage.setItem('nome', nomeDigitado)
            localStorage.setItem('sobrenome', sobrenomeDigitado)
            localStorage.setItem('email', emailDigitado)
            localStorage.setItem('senha', senhaDigitada)


        })




