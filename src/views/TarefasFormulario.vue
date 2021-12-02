<template>
  
  <div id="largura">
    {{indexTarefaSelecionada}}
    <div class="campo-texto">
      <label>Nome: </label>
      <input type="text" name="f_nome" id="nome" v-model="nome" />
    </div>
  
    <div class="campo-texto">
      <label>Descrição: </label>
      <input
        type="text"
        name="f_descricao"
        id="descricao"
        v-model="descricao"
      />
    </div>

    <div class="campo-texto">
      <label>Tempo: </label>
      <input type="text" name="f_tempo" id="tempo" v-model="tempo" />
    </div>
    <div id="botao">
      <button @click="enviar()" v-if="indexTarefaSelecionada == null">Salvar</button>
    </div>
    <div>
      <button @click = "atualizar(tarefa)" v-if="indexTarefaSelecionada != null">Atualizar</button>
    </div>
    <table border="1" width="100%" length="100%" bordercolor="blue">
      <caption>
        Lista de Tarefas
      </caption>
      <thead>
        <th>Status</th>
        <th>Nome</th>
        <th>Descricão</th>
        <th>Tempo de realização</th>
        <th>Área de botões</th>
      </thead>

      <tbody id="tbody">
        <tr v-for="tarefa in tarefas" @click="editar(tarefa)">
          <td>{{ tarefa.status }}</td>
          <td>{{ tarefa.nome }}</td>
          <td>{{ tarefa.descricao }}</td>
          <td>{{ tarefa.tempo }}</td>
          <td>
            <button @click="concluir(tarefa)">Concluir</button>
            <button @click="remover(tarefa)" :disabled="indexTarefaSelecionada != null">Remover</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "TarefasFormulario",
  data() {
    return {
      nome: "",
      descricao: "",
      tempo: "",
      conteudo: "aleatório",
      contador: 0,
      tarefas: [],
      indexTarefaSelecionada: null,
    };
  },
  methods: {
    enviar() {
      if (this.nome < 1) {
        alert("Por favor, preencha os campos corretamente");
        this.nome = "";
        this.descricao = "";
        this.tempo = "";
      }
      if (this.descricao < 1) {
        alert("Por favor, preencha os campos corretamente");
        this.nome = "";
        this.descricao = "";
        this.tempo = "";
      } else {
        this.tarefas.push({
          nome: this.nome,
          descricao: this.descricao,
          tempo: this.tempo,
          status: "aguardando",
        });
        this.nome = "";
        this.descricao = "";
        this.tempo = "";
      }
    },
    remover(tarefa) {
      const index = this.tarefas.indexOf(tarefa);
      this.tarefas.splice(index, 1);
      //this.indexTarefaSelecionada = null;
    },
    editar(tarefa) {
      this.indexTarefaSelecionada = this.tarefas.indexOf(tarefa);
      this.nome = "";
      this.descricao = "";
      this.tempo = "";
    },
    atualizar() {
      const tarefa = this.tarefas[this.indexTarefaSelecionada];
      this.$set(this.tarefas, this.indexTarefaSelecionada, {
        nome: this.nome,
        descricao: this.descricao,
        tempo: this.tempo,
        status: tarefa.status
      })
      this.nome = "";
      this.descricao = "";
      this.tempo = "";
      this.indexTarefaSelecionada = null;
    },
    concluir(tarefa) {
      this.indexTarefaSelecionada = this.tarefas.indexOf(tarefa);
      this.status = "Concluída";
    }
  },
};

//1 - Clicar no botão (da linha da tarefa)
//2 - Chamar o método remover passando a tarefa como parametro
//3 - Pesquisar no array de tarefas a tarefa que foi passada como parametro
//4 - Remover a tarefa do array
</script>

<style>
button {
  color: DarkGreen;
  padding: 8px 32px;
  margin-top: 8px;
  margin-left: 100px;
}

.campo-texto label {
  width: 100px;
  display: inline-block;
  text-align: left;
  margin-bottom: 8px;
}
.campo-texto {
}
#botao {
  display: block;
}
#largura {
  width: 600px;
  margin: 0 auto;
}
</style>
