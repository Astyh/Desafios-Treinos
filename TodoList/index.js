// Função para adicionar uma nova atividade na tabela

const newAtiv = (ativi, data, horario) => {

    const list = document.querySelector('.listas tbody')
    const col1 = document.createElement('td')
    const col2 = document.createElement('td')
    const col3 = document.createElement('td')
    col1.innerHTML = ativi
    col2.innerHTML = data
    col3.innerHTML = horario
    
    const newRow = document.createElement('tr')
    newRow.appendChild(col1)
    newRow.appendChild(col2)
    newRow.appendChild(col3)
    console.log(newRow)
    list.appendChild(newRow)
    
}


/* Quando clica no botão Adicionar, verifica se os campos estão vazios, se estiver lança um aviso
  em vermelho, se todos os campos estiverem com algo, chama a função para adicionar e lança um
  aviso em verde */

const addBut = document.querySelector('.add')

addBut.onclick = (e => { 
    const msgErro = document.querySelector('.msgErro h1')
    e.preventDefault() 
    const inputAtv = document.querySelector('input.atividade')
    const inputData = document.querySelector('input.data')
    const inputHora = document.querySelector('input.hora')
    const campoVazio = inputAtv.value.length === 0 
        || inputData.value.length === 0
        || inputHora.value.length === 0

    if(campoVazio === true) {
        
        msgErro.innerHTML = 'Não pode existir campos vazios'
        const div = document.querySelector('.msgErro')
        msgErro.classList.contains('sucess') ? msgErro.classList.remove('sucess') : msgErro
        msgErro.classList.add('failed')
        div.appendChild(msgErro)

    } else {
        newAtiv(inputAtv.value, inputData.value, inputHora.value)
        msgErro.innerHTML = 'Adicionado com sucesso'
        msgErro.classList.contains('failed') ? msgErro.classList.remove('failed') : msgErro
        msgErro.classList.add('sucess')
        
        const div = document.querySelector('.msgErro')
        div.appendChild(msgErro)
        inputAtv.value = ''
        inputData.value = ''
        inputHora.value = ''
    }

})




/* Remove os itens que estiverem selecionados e lança uma msg verde, se não houver
 nada selecionado ele não remove nada e lança um aviso em vermelho */

const removeBut = document.querySelector('.remove')

removeBut.onclick = e => {
    e.preventDefault()
    const msgErro = document.querySelector('.msgErro h1')
    const atividades = document.querySelectorAll('.remova')
    
    
    if(atividades.length === 0 ) {

        msgErro.innerHTML = 'Nenhum Campo selecionado'
        const div = document.querySelector('.msgErro')
        msgErro.classList.contains('sucess') ? msgErro.classList.remove('sucess') : msgErro
        msgErro.classList.add('failed')
        div.appendChild(msgErro)

    } else {
        const list = document.querySelector('.listas tbody')
        atividades.forEach(e => list.removeChild(e))
        msgErro.innerHTML = 'Removido com sucesso'
        msgErro.classList.contains('failed') ? msgErro.classList.remove('failed') : msgErro
        msgErro.classList.add('sucess')
    }
   
}


/* Dificuldade encontrada na hora de conseguir adicionar a classe .remova nos novos elementos
adicionados, então fiz uma função auto invocada chamando uma vez fora do click do body
e sempre que eu clico no body/lista ele adiciona os novos itens da lista na chamada
assim consigo marcar eles também. */

// Apenas adiciona a classe .remova assim habilitando a exclusão

(()=>{

    const body = document.querySelector('body')
    
    let testeRemove = document.querySelectorAll('tbody tr')
    testeRemove.forEach(e => {
        e.onclick = ()=> {
            e.classList.toggle('remova')
        }
    
    })
    body.onclick = () => {

    testeRemove = document.querySelectorAll('tbody tr')

    testeRemove.forEach(e => {
    e.onclick = ()=> {
        e.classList.toggle('remova')
    }

})
}

})()
