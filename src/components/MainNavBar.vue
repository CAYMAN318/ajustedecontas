<template>
  <!--
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" aria-current="page" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Inserir Dados
      <router-link to="/InserirDados">


      </router-link>
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Demonstrativo
      <router-link to="./view/DocDemonstration"></router-link>
    </button>
  </li>


  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Disabled</button>
  </li>
  
</ul>
 
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"></div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...</div>
 
  
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>

</div>

-->





<!--
  <ul class="nav nav-pills">
    
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/inserirdados">DADOS</a>
      </li>
       <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/inserirdados/demonstrativo">DEMONSTRATIVO</a>
     </li>
  
  
  
   
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
  
</ul>
-->




<!--
<ul class="nav nav-pills nav-justified">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/emajustedecotastodos">Em Aj Contas</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/inserirdados">Inserir Dados</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/inserirdados/inserirvalores">Inserir Valores <br>(CONTRACHEQUE cheio)</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/inserirdados/valorescessacao">Inserir Valores <br>(CONTRACHEQUE cessação)</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/inserirdados/demonstrativo/:qualificationId">Demonstrativo</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/inserirdados/folhadecalculo/:qualificationId">Folha de Cálculos</a>
    </li>

    
  
</ul>
-->
<nav class="navbar navbar-dark bg-success navbar-expand-sm">
  <div class="container">
    <router-link to="/" class="navbar-brand">GERENCIAR LANÇAMENTOS</router-link>
  </div>

</nav>








  <!--<router-link to="/inserirdados"></router-link>-->
  <router-link to="/MainBusca">buscar</router-link>
</template>

<script>
export default {
  name: 'MainNavBar'
  
}
</script>

<style>


</style>