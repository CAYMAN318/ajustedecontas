<template>
 <div class="container mt-2">
    <div class="row">
      <div class="col-sm">
        <form id="FormDates">
          <div class="p text-primary">DATA DE NASCIMENTO</div>
          <div class="input-container">
          <input type="date" id="borndate" v-model="borndate">
        </div>
        <br>
        <div class="p text-danger">DATA DE CESSAÇÃO</div>
        <div class="input-container">
            <input type="date" id="diedate" v-model="diedate">
        </div>
        </form>
        <p class="mt-3"><u>IDADE</u>: {{ idade }} anos</p>
        
      </div>
    </div>
  </div>
    
</template>

<script>
export default {
   name: "FormDates",
   data : function () {
     return {
       borndate: "",
       diedate: ""
     }
   },
   computed : {
     idade() {
       return (this.diedate) - (this.borndate)
     }
   }
}

</script>

<style scoped>
#FormDates {
  max-width: 500px;
}

</style>