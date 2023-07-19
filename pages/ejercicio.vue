<template>
  <a-layout style="min-height: 100vh">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Contenido de ejercicio.vue -->
    <a-layout>
      <a-layout-content style="margin: 24px 16px; padding: 24px; background-color: #fff;">
        <div class="content">
          <h1 class="letra" v-html="titulo"></h1>
          <br>
          <br>
          <Calculadora></Calculadora>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import Sidebar from '~/components/Sidebar.vue';
import Calculadora from '~/components/Calculadora.vue';

export default {
  data() {
    return {
      titulo: 'CALCULADORA - VUE'
    };
  },
  components: {
    Sidebar,
    Calculadora
  }
};
</script>

<style>
/* Estilos personalizados para el contenido de ejercicio.vue */
.content {
  text-align: center;
}
.letra{
    font-size: 350%;
    font-family: 'Times New Roman', Times, serif;
  }
</style>
