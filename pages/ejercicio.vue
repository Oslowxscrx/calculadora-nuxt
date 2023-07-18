<template >
  
    <div>
      <center>
        <header>
          <h1 v-html="titulo"></h1>
        </header>
        <br>
      
        <NuxtLogo></NuxtLogo>
        <br>
        <br>
        <hr>

      
<Calculadora></Calculadora>
  
      </center>
    </div>
  </template>
  <script lang="ts">
  import Vue, { Data } from "vue";
  import Calculadora from "~/components/Calculadora.vue";
  export default {
    data() {
        return {
            titulo: "CALCULADORA - VUE",

        };
    },
    components: { Calculadora }
};
  </script>


