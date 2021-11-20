<template>
    <div id="largura">
        
        {{nome}} <br/>
        {{descricao}}
        
            
            <div class="campo-texto">
                
                <label>Nome: </label>
                <input type="text" name="f_nome"  v-model:value="conteudo"/>

            </div>
            <div class="campo-texto">
                
                <label>Descrição: </label>
                <input type="text" name="f_descricao" value="conteúdo"/>

            </div>
            <div id="botao">
                <button v-on:click="adicionar()">Salvar</button>
                <p>Foram salvas {{contador}} tarefas </p>
            </div>
        
    </div>
</template>

<script>
    export default {
        name: 'TarefasFormulario',
        data() { 
            return {
                nome: '',
                descricao: '',
                conteudo: 'aleatório',
                contador: 0
                
            }
        },
        methods: {
            adicionar() {
                this.contador += 1;
            }
        },
        var lista_nome = [],
        var lista_descricao = [],
    }
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