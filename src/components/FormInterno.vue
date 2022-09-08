<template>
    <div class="container mt-2">
        <div class="row">
            <div class="col-sm">
                <form id="DadosInternos">
                    <div class="resp">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="sigla" v-model="sigla" placeholder="Abreviatura da Autoridade no Visto do DEMONSTRATIVO" size="45">
                            <label for="autoridade">Abreviatura da Autoridade no Visto do DEMONSTRATIVO</label>
                        </div>
                    </div>   
                    <div class="resp">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="abrvom" v-model="abrvom" placeholder="Abreviatura da OM no Visto do DEMONSTRATIVO" size="45">
                            <label for="autoridade">Abreviatura da OM no Visto do DEMONSTRATIVO</label>
                        </div>
                    </div>   
       
                    <div class="resp">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="responsavel" v-model="responsavel" placeholder="Responsavel pelo Preenchimento" size="45">
                            <label for="Responsavel pelos dados">Responsavel pelo preenchimento: (Posto/ Grad Nome de Guerra)</label>
                        </div>
                    </div> 
                    <div class="resp">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="autoridade" v-model="autoridade" placeholder="Nome Completo da Autoridade" size="45">
                            <label for="autoridade">Nome Completo da Autoridade Assinante (+ Posto/ Grad)</label>
                        </div>
                    </div>   
                    <div class="resp">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="funcao" v-model="funcao" placeholder="funcao" size="45">
                            <label for="funcao">Função da Autoridade Assinante Ex: Ch Ssec Ajust C </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "FormInterno"
}

</script>

<style scoped>
.resp {
  display: flex;
  flex-direction: row;
}

</style>