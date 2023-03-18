const form = document.getElementById('form');
const input = document.getElementById('texto');
const lista = document.getElementById('lista');
const botao = document.getElementById('add');

botao.addEventListener('click', addtarefa); // adiciona a funçao ao botao para que ele funcione apos ser clicado
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addtarefa();
    }
}); // permite adicionar as tarefas clicando em enter no teclado

function addtarefa() {
    const tarefa = document.createElement('li'); // cria o elemento 'li' e adiciona nele a entrada do usuario
    tarefa.className = 'tarefa';
    tarefa.textContent = input.value.trim();

    const btnEditar = document.createElement('button'); // cria o botao de editar e abre a caixa de ediçao apos o botao ser clicado
    btnEditar.className = 'editar';
    btnEditar.textContent = 'Editar';
    btnEditar.addEventListener('click', function () {
        const novoTexto = prompt('Digite o novo texto da tarefa:');
        if (novoTexto !== null) {
            tarefa.textContent = novoTexto.trim();

            // recria botões de editar e excluir
            const novoBtnEditar = document.createElement('button');
            novoBtnEditar.className = 'editar';
            novoBtnEditar.textContent = 'Editar';
            novoBtnEditar.addEventListener('click', function () {
                const novoTexto = prompt('Digite o novo texto da tarefa:');
                if (novoTexto !== null) {
                    tarefa.textContent = novoTexto.trim();
                }
            });

            const novoBtnExcluir = document.createElement('button');
            novoBtnExcluir.className = 'excluir';
            novoBtnExcluir.textContent = 'Excluir';
            novoBtnExcluir.addEventListener('click', function () {
                tarefa.remove();
            });

            tarefa.appendChild(novoBtnEditar);
            tarefa.appendChild(novoBtnExcluir);
        }
    });

    const btnExcluir = document.createElement('button'); // cria o botao de excluir
    btnExcluir.className = 'excluir';
    btnExcluir.textContent = 'Excluir';
    btnExcluir.addEventListener('click', function () {
        tarefa.remove();
    });

    tarefa.appendChild(btnEditar);
    tarefa.appendChild(btnExcluir);
    lista.appendChild(tarefa);

    input.value = ''; // Limpa o input após adicionar a tarefa

}