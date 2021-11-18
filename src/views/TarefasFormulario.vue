<template>
    <div id="largura">
        <form name="" action="" method="" enctype="">
            
            <div class="campo-texto">
                
                <label>Nome: </label>
                <input type="text" name="f_nome">

            </div>
            <div class="campo-texto">
                
                <label>Descrição: </label>
                <input type="text" name="f_descricao">

            </div>
            <div id="botao">
                <button>Salvar</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'TarefasFormulario'
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