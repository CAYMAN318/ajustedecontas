<template>
  <!--
  <div class="container mt-2">
    <div class="row">
      <div class="col-sm">
        <form id="FormValues">
            <div class="receitas">
                <h5 style="color:blue; font-weight: bold; text-decoration: underline;" >RECEITAS</h5>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Soldo</li>
                    <li class="list-group-item">B-01</li>
                    <input id="soldo" type="number" v-model="soldo">
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Adc Tp Sv</li>
                    <li class="list-group-item">B-03</li>
                    <input id="adctpsv" type="number" v-model="adctpsv">
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Adc Hab</li>
                    <li class="list-group-item">B-06</li>
                    <input id="adchab" type="number" v-model="adchab">
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Adc Mil</li>
                    <li class="list-group-item">B-20</li>
                    <input id="adcmil" type="number">
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Adc C Org</li>
                    <li class="list-group-item">B-14</li>
                    <input id="adccorgb14" type="number">
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Adc C Org</li>
                    <li class="list-group-item">C-12</li>
                    <input id="adccorgc12" type="number">
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Sal Família</li>
                    <li class="list-group-item">B-17</li>
                    <input id="salfamilia" type="number">
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">Aux Inv</li>
                    <li class="list-group-item">C-12</li>
                    <input id="auxinv" type="number">
                </ul><br>
                <h5 style="color:blue">13º SALÁRIO</h5>
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
                
                <span><button>Add valores</button></span><br><br>
                
 
            </div>
                <h2 style="color:blue; font-weight: bold">TOTAL RECEITAS BRUTO: {{  }}</h2>




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

        </form>
    
      </div>
    </div>
  </div>
  -->
  

-->
</template>

<script>
export default {
    name: "FormValoresCheio"
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