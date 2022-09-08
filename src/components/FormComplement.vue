<template>
    <div class="container mt-2">
    <div class="row">
      <div class="col-sm">
        <form id="FormComplement">
            <div class="input-container">
                <div class="select-container">
                    <label for="nrdependentes">Quantidade de Dependentes
                    <select name="nrdependentes" id="nrdependentes" v-model="nrdependentes">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                </label>
                </div>
               <div class="form-switch-container">
                    <div class="form-check form-switch" id="isentoIR">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="isentoIR">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Isento de Imposto de Renda</label>
                    </div>
                    <div class="form-check form-switch" id="inconsistenciaobito">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="inconsistenciaobtito">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Inconsistência no mês do óbito</label>
                    </div>
                    <div class="form-check form-switch" id="pensaoterminal">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="pensaoterminal">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Pensão terminal</label>
                    </div>
                    <div class="form-check form-switch" id="pj13">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="pj13">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Pensão Judicial com 13º</label>
                    </div>
               </div>
      
            </div>
         </form>
       </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "FormComplement"
}

</script>

<style scoped>
#nrdependentes {
    margin-left: 15px;
    width: 280px;
}
.form-switch-container{
    margin-top: 1rem;

}
.form-check{
    margin-top: 1rem;
    font-weight: bold;

}
</style>