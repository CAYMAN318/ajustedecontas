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
          <div class="col">
              <form id="paycheck">
                  <div class="receitas">
                      <div class="h5 text-primary fw-bold"><u>RECEITAS</u></div>
                       
                        <ul class="list-group list-group-horizontal  mb-1">
                            <li class="list-group-item me-1 text-primary text-center">Soldo</li>
                            <li class="list-group-item me-1 text-primary text-end col-1">B-01</li>
                            <input class="border-info rounded-2" id="soldo" type="number" v-model="soldo">
                        </ul>
                        <ul class="list-group list-group-horizontal mb-1">
                            <li class="list-group-item me-1 text-primary text-center">Adc Tp Sv</li>
                            <li class="list-group-item me-1 text-primary text-end col-1">B-03</li>
                            <input class="border-info rounded-2" id="adctpsv" type="number" v-model="adctpsv">
                        </ul>
                        <ul class="list-group list-group-horizontal mb-1">
                            <li class="list-group-item me-1 text-primary text-center">Adc Hab</li>
                            <li class="list-group-item me-1 text-primary text-end col-1">B-06</li>
                            <input class="border-info rounded-2" id="adchab" type="number" v-model="adchab">
                        </ul>
                        <ul class="list-group list-group-horizontal mb-1">
                            <li class="list-group-item me-1 text-primary text-center">Adc Mil</li>
                            <li class="list-group-item me-1 text-primary text-end col-1">B-20</li>
                            <input class="border-info rounded-2" id="adcmil" type="number" v-model="adcmil">
                        </ul>
                        <ul class="list-group list-group-horizontal mb-1">
                            <li class="list-group-item me-1 text-primary text-center">Adc C Org</li>
                            <li class="list-group-item me-1 text-primary text-end col-1">B-14</li>
                            <input class="border-info rounded-2" id="adccorgb14" type="number" v-model="adccorgb14">
                        </ul>
                        <ul class="list-group list-group-horizontal mb-1">
                            <li class="list-group-item me-1 text-primary text-center">Adc C Org</li>
                            <li class="list-group-item me-1 text-primary text-end col-1">C-12</li>
                            <input class="border-info rounded-2" id="adccorgc12" type="number">
                        </ul>
                        <ul class="list-group list-group-horizontal mb-1">
                            <li class="list-group-item me-1 text-primary text-center">Sal Família</li>
                            <li class="list-group-item me-1 text-primary text-end col-1">B-17</li>
                            <input class="border-info rounded-2" id="salfamilia" type="number">
                        </ul>
                         <ul class="list-group list-group-horizontal mb-1">
                            <li class="list-group-item me-1 text-primary text-center">Aux Inv</li>
                            <li class="list-group-item me-1 text-primary text-end col-1">C-12</li>
                            <input class="border-info rounded-2" id="auxinv" type="number">
                        </ul><br>
                         <div class="p text-primary fw-bold">13° SALÁRIO</div>

                        <ul class="list-group list-group-horizontal mb-1">
                            <li class="list-group-item me-1 text-primary text-center">13º - 1ª Parcela</li>
                            <li class="list-group-item me-1 text-primary text-end col-1">-x-</li>
                            <input class="border-info rounded-2" id="parcela1" type="number">
                        </ul>
                        <ul class="list-group list-group-horizontal mb-1">
                            <li class="list-group-item me-1 text-primary text-center">13º - 2ª Parcela</li>
                            <li class="list-group-item me-1 text-primary text-end col-1">-x-</li>
                            <input class="border-info rounded-2" id="parcela2" type="number">
                        </ul>
                        <ul class="list-group list-group-horizontal mb-1">
                            <li class="list-group-item me-1 text-primary text-center">13º cheio</li>
                            <li class="list-group-item me-1 text-primary text-end col-1">-x-</li>
                            <input class="border-info rounded-2" id="total13" type="number">
                        </ul><br>
                        <div class="h5 text-primary fw-bold">OUTRAS RECEITAS</div>
                        <span><button>Add valores</button></span><br><br>

                        <div class="h4 text-primary fw-bold mt-3">TOTAL RECEITAS BRUTO: {{ totalbruto }}</div>

                  </div>

                  <div class="descontos mt-3">
                      <div class="h5 text-danger fw-bold"><u>DESCONTOS</u></div>
                      <div class="p text-danger">Descontos obrigatórios</div>

                    <ul class="list-group list-group-horizontal mt-2 mb-1">
                        <li class="list-group-item me-1 text-danger text-center">FUSEX</li>
                        <li class="list-group-item me-1 text-danger text-end col-1">Z-01</li>
                        <input class="border-danger rounded-2" id="fusexz01" type="number">
                    </ul>
                    <ul class="list-group list-group-horizontal mb-1">
                        <li class="list-group-item me-1 text-danger text-center">Pens Mil 10,5%</li>
                        <li class="list-group-item me-1 text-danger text-end col-1">Z-02</li>
                        <input class="border-danger rounded-2" id="pmilz02" type="number">
                    </ul>
                        <ul class="list-group list-group-horizontal mb-1">
                        <li class="list-group-item  me-1 text-danger text-center">Pens Mil 1,5%</li>
                        <li class="list-group-item me-1 text-danger text-end col-1">Z-05</li>
                        <input class="border-danger rounded-2" id="pmilz05" type="number">
                    </ul>
                    <ul class="list-group list-group-horizontal mb-1">
                    <li class="list-group-item me-1 text-danger text-center">IRRF</li>
                        <li class="list-group-item me-1 text-danger text-end col-1">Z-33</li>
                        <input class="border-danger rounded-2" id="irrf" type="number">
                    </ul>
                    <ul class="list-group list-group-horizontal mb-1">
                        <li class="list-group-item me-1 text-danger text-center">Pens Jud</li>
                        <li class="list-group-item me-1 text-danger text-end col-1">Z-99</li>
                        <input class="border-danger rounded-2" id="pensjud" type="number">
                    </ul>

                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "PayCheck",
    data : function () {
       return {
           soldo : "",
           adctpsv : "",
           adchab : ""
       }
    
    },
    computed : {
        totalbruto (){
            return ((this.soldo) + (this.adctpsv) + (this.adchab))
        }
        
    }
}
</script>

<style scoped>

</style>