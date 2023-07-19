<template>
    <a-layout style="min-height: 100vh">
      <!-- Sidebar -->
      <Sidebar />
  
      <!-- Contenido de ejercicio.vue -->
      <a-layout>
        <a-layout-content style="margin: 24px 16px; padding: 24px; background-color: #fff;">
          <div class="content">
            <a-icon type="play-square" />
            <h1 class="letra" v-html="titulo"></h1>   
            <br>
            <Card></Card>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </template>
  
  <script lang="ts">
  import Sidebar from '~/components/Sidebar.vue';
import Card from '~/components/Card.vue';

  
  export default {
    data() {
      return {
        titulo: 'ARTISTAS'
      };
    },
    components: {
    Sidebar,
    Card
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
  