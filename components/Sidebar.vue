<template>
  <a-layout-sider
    :collapsed-width="collapsedWidth"
    :trigger="null"
    :collapsible="true"
    v-model="collapsed"
    :breakpoint="breakpoint"
  >
    <div class="logo">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggleSidebar" />
    </div>
    <a-menu :default-selected-keys="['1']" :theme="theme" mode="inline" >
      <a-menu-item key="1" @click="calculadora">
        <a-icon type="calculator" />
        <span>Calculadora</span>
      </a-menu-item>
      <a-menu-item key="2" @click="fotos" >
        <a-icon type="customer-service" />
        <span>Artistas</span>
      </a-menu-item>
      <!-- Puedes agregar más opciones de menú aquí -->
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
      theme: 'dark',
      collapsedWidth: 80, // Ancho cuando el menú está colapsado
      breakpoint: 768 // Punto de quiebre para hacerlo responsive (ejemplo: 768px)
    };
  },
  methods: {
    toggleSidebar() {
      this.collapsed = !this.collapsed;
    },
    calculadora() {
      this.$router.push('/ejercicio')
    },
    fotos(){
      this.$router.push('/artista')
    }
  }
};
</script>

<style scoped>
.logo {
  height: 32px;
  line-height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color: #fff;
  text-align: center;
  font-size: 20px;
}

/* Estilos para el icono de hamburguesa */
.anticon-menu-unfold,
.anticon-menu-fold {
  font-size: 24px;
  cursor: pointer;
}
</style>
