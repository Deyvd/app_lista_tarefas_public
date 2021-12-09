function editar(id, descricaoTarefa){
    // alert('estamos aqui');

    console.log(descricaoTarefa)

    let form = document.createElement('form')
    form.action = "tarefa_controller.php?acao=atualizar"
    form.method = 'post'
    form.className = 'row'

    let inputTarefa = document.createElement('input')
    inputTarefa.type = 'text'
    inputTarefa.name = 'tarefa'
    inputTarefa.className = 'form-control col-9'
    inputTarefa.value = descricaoTarefa
    
    let inputId = document.createElement('input')
    inputId.type = 'hidden'
    inputId.name = 'id'
    inputId.value = id


    let button = document.createElement('button')
    button.type = 'submit'
    button.className = 'btn btn-info col-3'
    button.innerHTML = 'Atualizar'


    form.appendChild(inputTarefa)
    form.appendChild(inputId)
    form.appendChild(button)

    // console.log(form)

    let tarefa = document.getElementById('tarefa_'+id)

    tarefa.innerHTML = ''

    tarefa.insertBefore(form, tarefa[0])

    

}

function remover(id, task){
    alert(`tem certeza que deseja remover: "${task}" da sua lista de tarefas?`)
    location.href = 'todas_tarefas.php?acao=remover&id='+id
}

function checked(id){
    location.href = 'todas_tarefas.php?acao=checked&id='+id
}
