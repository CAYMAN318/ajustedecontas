<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <div class="h4 text-success fw-bold">ADICIONAR DADOS DE QUALIFICAÇÃO</div>
      </div>
    </div>
  </div>

<!--<FormDados />-->

  <div class="container mt-2">
    <div class="col-md-6">
      <form @submit.prevent="submitCreate()">
        <div class="mb-2">
          <input type="text" class="form-control" id="name" v-model="qualification.name" placeholder="Nome">
        </div>
        <div class="cps mb-2">
          <input type="text" class="form-control" id="prec" v-model="qualification.prec" placeholder="Prec">
          <input type="text" class="form-control" id="cp" v-model="qualification.cp" placeholder="CP">
        </div>
        <div class="mb-2">
          <input type="text" class="form-control" id="cpf" v-model="qualification.cpf" placeholder="CPF">
        </div>
        <div class="mb-2">
          <input type="text" class="form-control" id="posto" v-model="qualification.posto" placeholder="Posto/Grad">
        </div>
        <div class="mb-2">
          <input type="text" class="form-control" id="om" v-model="qualification.om" placeholder="OM">
        </div>
        <div class="mb-2">
          <input type="text" class="form-control" id="codom" v-model="qualification.codom" placeholder="CODOM">
        </div>
        <div class="input-container mb-2 mt-2">
          <label for="motivo"> MOTIVO DA EXCLUSÃO</label>
          <select name="motivo" id="motivo" v-model="motivo">
            <option selected>Selecione o motivo</option>
            <option value="renuncia">Renúncia</option>
            <option value="obito">Óbito</option>
          </select>                   
        </div>
        <button type="submit" class="btn btn-success" value="Create" >Salvar</button>
      </form>
      
    </div>
  </div>

  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <div class="h6 text-success fw-bold">Inserir Datas</div>
      </div>
    </div>
  </div>
<FormDates />

  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <div class="h6 text-success fw-bold">Dados Complementares</div>
      </div>
    </div>
  </div>
<FormComplement />

  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <div class="h5 text-success fw-bold">DADOS INTERNOS</div>
        <div class="p text-success">Responsáveis por este processo</div>
      </div>
    </div>
  </div>
<FormInterno />
              
  

           




  
                          
    

</template>

<script>
//import FormDados from "@/components/FormDados.vue";
import FormDates from "@/components/FormDates.vue";
import FormComplement from "@/components/FormComplement.vue";
import FormInterno from "@/components/FormInterno.vue";
import { QualificationService } from '@/services/QualificationService';

export default {
  name: "InsertData",
  components: {
    //FormDados,
    FormDates,
    FormComplement,
    FormInterno
  },
  data : function () {
    return {
      qualification : {
        name : '',
        prec : '',
        cp : '',
        cpf : '',
        posto : '',
        om : '',
        codom : '',
        soldo : '',
        adctpsv: '',
       
      }
    }
  },
  methods : {
    submitCreate : async function () {
      try {
        let response = await QualificationService.createQualification(this.qualification)
        if (response) {
          return this.$router.push('/')
        }
        else {
          return this.$router.push('/inserirdados')
        }

      }
      catch (error){
        console.log(error)
      } 
    }
  }
}

</script>

<style>

#prec {
  max-width: 100px;
  flex-direction: row;
  margin-right: 20px;
  
}

.input-container {
  display: flex;
  flex-direction: column;
  
}

.cps {
  display: flex;
  flex-direction: row;
}

.list-group-item{
    padding: center;
    align-items: center;
    width: 10rem;
    font-weight: bold;
    justify-items: center;
}
#modalenter {
  width: 16.3rem !important;
}


</style>