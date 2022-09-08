<template>

  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <div class="h5 text-success fw-bold">Inserir Valores <br>Espelho do Contracheque
        </div>
        <!--<div class="p text-danger fw-bold">Nome: {{qualification.name}}, CPF: {{qualification.cpf}}</div>-->
      </div>
    </div>
  </div>
  

  <div class="container mt-2">
    <div class="row">
      <div class="col-sm">
        <!--<form id="FormValues" @submit.prevent="updateSubmit()">-->
        <form id="FormValues">
            <div class="receitas">
              <div class="h5 text-primary fw-bold"><u>RECEITAS</u></div>
                
                <ul class="list-group list-group-horizontal mb-1">
                    <li class="list-group-item me-1 text-primary">Soldo</li>
                    <li class="list-group-item me-1 text-primary">B-01</li>
                    <input class="border-success border-opacity-75 rounded-1" id="soldo" type="number" v-model="qualification.soldo">
                </ul>
                <ul class="list-group list-group-horizontal mb-1">
                    <li class="list-group-item me-1 text-primary">Adc Tp Sv</li>
                    <li class="list-group-item me-1 text-primary">B-03</li>
                    <input class="border-success border-opacity-75 rounded-1" id="adctpsv" type="number" v-model="adctpsv">
                </ul>
                <ul class="list-group list-group-horizontal mb-1">
                    <li class="list-group-item me-1 text-primary">Adc Hab</li>
                    <li class="list-group-item me-1 text-primary">B-06</li>
                    <input class="border-success border-opacity-75 rounded-1" id="adchab" type="number" v-model="adchab">
                </ul>
                <ul class="list-group list-group-horizontal mb-1">
                    <li class="list-group-item me-1 text-primary">Adc Mil</li>
                    <li class="list-group-item me-1 text-primary">B-20</li>
                    <input class="border-success border-opacity-75 rounded-1" id="adcmil" type="number" v-model="adcmil">
                </ul>
                <ul class="list-group list-group-horizontal mb-1">
                    <li class="list-group-item me-1 text-primary">Adc C Org</li>
                    <li class="list-group-item me-1 text-primary">B-14</li>
                    <input class="border-success border-opacity-75 rounded-1" id="adccorgb14" type="number" v-model="adccorgb14">
                </ul>
                <ul class="list-group list-group-horizontal mb-1">
                    <li class="list-group-item me-1 text-primary">Adc C Org</li>
                    <li class="list-group-item me-1 text-primary">C-12</li>
                    <input class="border-success border-opacity-75 rounded-1" id="adccorgc12" type="number">
                </ul>
                <ul class="list-group list-group-horizontal mb-1">
                    <li class="list-group-item me-1 text-primary">Sal Família</li>
                    <li class="list-group-item me-1 text-primary">B-17</li>
                    <input class="border-success border-opacity-75 rounded-1" id="salfamilia" type="number">
                </ul>
                <ul class="list-group list-group-horizontal mb-1">
                    <li class="list-group-item me-1 text-primary">Aux Inv</li>
                    <li class="list-group-item me-1 text-primary">C-12</li>
                    <input class="border-success border-opacity-75 rounded-1" id="auxinv" type="number">
                </ul><br>
                <div class="p text-primary fw-bold">13° SALÁRIO</div>
                
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">13º - 1ª Parcela</li>
                    <li class="list-group-item">XXX</li>
                    <input id="parcela1" type="number">
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">13º - 2ª Parcela</li>
                    <li class="list-group-item">XXX</li>
                    <input id="parcela2" type="number">
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">13º cheio</li>
                    <li class="list-group-item">sem código</li>
                    <input id="total13" type="number">
                </ul><br>
                <h5 style="color: blue">OUTRAS RECEITAS</h5>
                
                <!--<span><button>Add valores</button></span><br><br>-->
                
 
            </div>
            <!--<button class="btn btn-info col-md-7" type="submit" value="Create">Atualizar Receitas</button>-->
            
            
            <div class="h2 text-primary fw-bold mt-3">TOTAL RECEITAS BRUTO: {{ totalbruto }}</div>
          <!--
            <div class="descontos">
                <h2 style="color: red; font-weight: bold; margin-top: 2rem; text-decoration: underline;">DESCONTOS</h2><br>
                <h5 style="color: red">DESCONTOS OBRIGATÓRIOS</h5>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">FUSEX</li>
                    <li class="list-group-item">Z-01</li>
                    <input id="fusexz01" type="number">
                </ul>
                    <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Pens Mil 10,5%</li>
                    <li class="list-group-item">Z-02</li>
                    <input id="pmilz02" type="number">
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Pens Mil 1,5%</li>
                    <li class="list-group-item">Z-05</li>
                    <input id="pmilz05" type="number">
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">IRRF</li>
                    <li class="list-group-item">Z-33</li>
                    <input id="irrf" type="number">
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Pens Jud</li>
                    <li class="list-group-item">Z-99</li>
                    <input id="pensjud" type="number">
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">FUSEX</li>
                    <li class="list-group-item">Z-M5</li>
                    <input id="fusexzm5" type="number">
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">FUSEX</li>
                    <li class="list-group-item">ZM7</li>
                    <input id="fusexzm7" type="number">
                </ul><br>

                <h5 style="color:red">DESCONTO RECEBIMENTO INDEVIDO</h5>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">"X" meses Óbito</li>
                    <li class="list-group-item">Z-33</li>
                    <input id="xmesesobito" type="number">
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Ano Óbito +1</li>
                    <li class="list-group-item">Z-33</li>
                    <input id="xmesesobito" type="number">
                </ul>
                <h5 style="color: red">OUTROS DESCONTOS</h5>
                
                <span><button>Add valores</button></span><br><br>
                
            </div>
          -->
        </form>
    
      </div>
    </div>
  </div>



<!--<FormValoresCheio />-->


</template>

<script>

//import FormValoresCheio from '@/components/FormValoresCheio.vue';
//import { QualificationService } from '@/services/QualificationService'
export default {
    name: "AddValuesFull",
    /*components: {
    FormValoresCheio,
}*/
  data : function () {
    return {
      soldo: "",
      adctpsv: "",
      adcmil: ""
    }
    
    },
  /*computed : {
    totalbruto() {
      return ((this.soldo) + (this.adctpsv) + (this.adcmil))
      
    }
  },*/
  /*created : async function () {
      try {
       let response = await QualificationService.getQualification(this.qualificationId)
        this.qualification = response.data
      }
      catch (error) {
        this.errorMessage = error
      }
    },
  methods : {
    updateSubmit : async function(){
        try {
          let response = await QualificationService.updateQualification(this.qualification, this.qualificationId)
          if (response) {
          return this.$router.push('/')
        }
        else {
          return this.$router.push('/editardados/inserirvalores/:qualificationId')
        }

      }
      catch (error){
        console.log(error)
      } 
    }
  }*/
  
}
</script>

<style scoped>
.list-group-item{
    padding: center;
    align-items: center;
    width: 10rem;
    font-weight: bold;
    justify-items: center;
}



</style>