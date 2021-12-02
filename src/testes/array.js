const tarefas = [
    {nome:"playar", descricao:"Vitória"},
    {nome:"capinar", descricao:"terreno"},
    {nome:"tarefinha", descricao:"abc"},
    {nome:"piso", descricao:"fazer_concreto"}
];

// Adicionar tarefa
tarefas.push({nome:"codar",descricao:"ToDoList"})
// Remover a primeria tarefa do array
tarefas.shift();
// Remover a ultima tarefa do array
tarefas.pop();
// Pesquisar a tarefa com o nome capinar
function filtrarTarefa(tarefas) {
    return tarefas.nome == "capinar"
}
const tarefaSelecionada = tarefas.filter(filtrarTarefa)[0];
// Alterar a descricacao da tarefa capinar para meu quintal
const index = tarefas.indexOf(tarefaSelecionada);
tarefas[index].descricao = "meu quintal"
//console.log(tarefaSelecionada)
console.log(tarefas)
console.log(tarefaSelecionada)

for (tarefa of tarefas) {
    
}

