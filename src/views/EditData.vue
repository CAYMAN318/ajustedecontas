<template>
   <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h2 text-success fw-bold">EDITAR DADOS</p>
      </div>
    </div>
  </div>
  <div class="container mt-2">
    <div class="col-md-6">
      <form @submit.prevent="updateSubmit()">
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
        <div class="input-container mb-2">
          <label for="motivo"> MOTIVO DA EXCLUSÃO</label>
          <select name="motivo" id="motivo" v-model="motivo">
            <option selected>Selecione o motivo</option>
            <option value="renuncia">Renúncia</option>
            <option value="obito">Óbito</option>
          </select>
        </div>

        <button type="submit" class="btn btn-success" value="Create" >Atualizar</button>

      </form>
    </div>
  </div>
 
</template>

<script>
import { QualificationService } from '@/services/QualificationService'
export default {
    name: "EditData",
    data : function () {
        return {
            qualificationId : this.$route.params.qualificationId,
            qualification : {
              name : '',
              prec : '',
              cp : '',
              cpf : '',
              posto : '',
              om : '',
              codom : ''
            }
        }
    },
    created : async function () {
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
          return this.$router.push('/editardados/:qualificationId')
        }

      }
      catch (error){
        console.log(error)
      } 
      }
    }
}

</script>

<style scoped>

#prec {
  max-width: 100px;
  flex-direction: row;
  margin-right: 20px;
  
}

.input-container {
  display: flex;
  flex-direction: column;
  
}

.cp {
  width: 100%;
}

.cps {
  display: flex;
  flex-direction: row;
}


</style>