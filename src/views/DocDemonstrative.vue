<template>
  
  <div id="visto" class="container" style="align-items:center">
    <div>
      <p>Visto:</p>
    </div>
    <div style="margin-top:8rem">
      <p>{{ sigla }} <br> {{ abrvom }}</p>
    </div>
  </div>
  <div id="titulo" class="container" v-if="isDone()">
    <h5>DEMONSTRATIVO DE RESTITUIÇÃO</h5>
  </div>
  <div id="ocorrencia" class="container">
    <p style="font-weight:bold">1. OCORRÊNCIA</p>
    <p style="margin-left: 2rem">a. Motivo: {{ motivo }} <br>b. Data: {{ date }}</p>
  </div>
  <div id="mesexcl" class="container">
    <p style="font-weight:bold">2. MÊS DA EXCLUSÃO DO SISTEMA: {{ mesexcl }} "ATENÇÃO VER LANÇAMENTO"</p>
  </div>
  <div id="dadoscadastrais" class="container">
    <p style="font-weight:bold">3. DADOS CADASTRAIS</p>
    <p style="margin-left: 2rem">a. Nome: {{ qualification.name }} <br>b. Prec CP: {{ qualification.prec }}/ {{ qualification.cp }} <br>
      c. OM: {{ qualification.om }} <br> d. CODOM: {{ qualification.codom }} <br> e. Posto/Grad: {{ qualification.posto }}
    </p>
  </div>
  <div id="demonstrativo" class="container">
    <p style="font-weight:bold">4. DEMONSTRATIVO</p>
    <p style="margin-left: 2rem">a. Total da restituição: {{ totalrest }} <br>b. Cobrança administrativa: {{ cobadministrativa }} <br>c. Cobrança judicial: {{ cobjudic }}</p>
  </div>
      
    
  <div id="fechamento" class="container">
    <p style="color: red">"Guarnição", {{ guarnição }}, "data" {{ this.date }} NÃO ESQUECER DE TRANSFERIR DADOS DESSE FECHAMENTO</p>
  </div>
  <div id="fechamento" class="container">
    <h5 style="font-weight: bold; margin-top: 3rem;">{{ autoridade }}AUTORIDADE<br>{{ funcao }}  FUNÇÃO</h5>
  </div>
  
  <div class="btn" style="color:red; align-content: center">GERAR PDF</div> ATENÇÃO

  

</template>

<script>
import { QualificationService } from '@/services/QualificationService'
export default {
  name: 'DocDemonstrative', 
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
#visto{
  display: flex;
  justify-content: flex-end;
  align-content: center;
}

#titulo{
  display:flex;
  justify-content: center;
}

#fechamento {
 display:flex;
 justify-content: center;
}


</style>