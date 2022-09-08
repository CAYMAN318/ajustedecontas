<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">GERENCIAMENTO DE LANÇAMENTOS <router-link to="/inserirdados" class="btn  d-grid col-2 mx-auto me-md-2 btn-success fw-bold ">NOVO</router-link></p>
        <form>
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Buscar Nome">
                </div>
                <div class="col">
                  <input type="submit" class="btn btn-outline-dark">
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  
  <div class="container mt-3" v-if="qualifications.length > 0">
    <div class="row">
      <div class="card border-success shadow-lg mb-3" v-for="qualification of qualifications" :key="qualification">
        <div class="card-header">
          Nome : <span class="fw-bold">{{qualification.name}}</span>
        </div>
        <div class="card-body">
           <div class="col sm-1">
            <router-link :to="`/editardados/${qualification.id}`" class="btn btn-outline-warning m-1">
            <i class="bi bi-pencil-square fw-bold">   Editar Dados</i>
            </router-link>

            <!--<router-link to="/inserirdados/inserirvalores/qualificationId" class="btn btn-outline-info m-1">
            <i class="bi bi-card-checklist fw-bold">  Espelho Contracheque"</i>
            </router-link>-->

            <router-link :to="`/inserirdados/inserirvalores/${qualification.id}`" class="btn btn-outline-info m-1">
            <i class="bi bi-card-checklist fw-bold">  Espelho Contracheque"</i>
            </router-link>


            <router-link :to="`/inserirdados/demonstrativo/${qualification.id}`" class="btn btn-outline-success m-1">
            <i class="bi bi-file-earmark-text fw-bold">  Demonstrativo</i>
            </router-link>
            
            <router-link :to="`/inserirdados/folhadecalculo/${qualification.id}`" class="btn btn-outline-dark m-1">
            <i class="bi bi-calculator fw-bold">  Folha de Cálculos</i>
            </router-link>
            <button class="btn btn-outline-danger m-1" @click="clickDeleteQualification(qualification.id)"><i class="bi bi-trash3 fw-bold"> Excluir</i></button>

          </div>
        </div>
        

      </div>
    </div>
  </div>



  
</template>

<script>
//tooltips



import { QualificationService } from '@/services/QualificationService'
    export default {
        name: "AdjustManager",
        data : function () {
          return {
            qualifications : [],
            errorMessage: null
          }
        }, 
        created : async function () {
          try {
            let response = await QualificationService.getAllQualifications()
            this.qualifications = response.data
            
          }
          catch (error) {
            this.errorMessage = error

          }
        },
        methods : {
          clickDeleteQualification : async function (qualificationId) {
            try {
              let response = await QualificationService.deleteQualification(qualificationId)
              if(response) {
                let response = await QualificationService.getAllQualifications()
                this.qualifications = response.data
              }
            }
            catch (error) {
              this.errorMessage = error
            }
          }
        }
    }
</script>

<style scoped>

</style>