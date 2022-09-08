<template>
   <div id="titulo" class="container">
    <h5>FOLHA DE CÁLCULOS</h5>
  </div>
  <div id="dados" class="container" v-if="isDone()">
    <p style="font-weight:bold">1. DADOS</p>
    <p style="margin-left: 2rem">
    a. Motivo: {{ motivo }} <br>
    b. Nome: {{ qualification.name }} <br>
    c. Prec CP: {{ qualification.prec }}/ {{ qualification.cp }} <br>
    d. CPF: {{ qualification.cpf }} <br>
    e. Data do óbito: {{ diedate }} <br>
    f. Data de nascimento: {{ borndate }} <br>
    g. Idade: {{ idade }} <br>
    h. Número de dependentes para o IR: {{ nrdependentes }} <br>
    i. Pensão terminal: {{ pensaoterminal }} <br>
    j. Isenção de IRPF: {{ isentoIR }}</p>
  </div>
   <div id="mesexcl" class="container">
    <p style="font-weight:bold">2. CÁLCULO DO VALOR A SER RESTITUÍDO AO ERÁRIO:</p>
    <p style="margin-left: 2rem">a. Mês do óbito: {{ mesexcl }}  "ATENÇÃO VER LANÇAMENTO"</p>
    <p style="margin-left: 4rem">1) 1ª FASE: </p>
    <h6 style="color: red"> "GRID OU INPUT?????"</h6>
  </div>
</template>

<script>
import { QualificationService } from '@/services/QualificationService'


export default {
    name: "SheetCalculator",
    data : function () {
    return {
      qualificationId : this.$route.params.qualificationId,
      qualification : {},
      errorMessage : null
    }
  },
  created : async function (){
    try {
      let response = await QualificationService.getQualification(this.qualificationId)
      this.qualification = response.data
    }
    catch (error) {
      this.errorMessage = error
    }
  },
  methods: {
    isDone : function (){
      return Object.keys(this.qualification).length > 0
    }
  }
  
    
}
</script>

<style scoped>
#titulo{
  display:flex;
  justify-content: center;
}

</style>