<template>
  <div class="login-container">
    <h1>Iniciar sesión</h1>
    <a-form class="login-form">
      <a-form-item label="Usuario" class="login-form-item">
        <a-input v-model="username" :auto-focus="true" required />
      </a-form-item>
      <a-form-item label="Contraseña" class="login-form-item">
        <a-input-password v-model="password" required />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="login">Iniciar sesión</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === '123') {
        this.$store.dispatch('iniciarSesion', this.username);

        this.$router.push('/ejercicio');
      } else {
        alert('Credenciales inválidas');
      }
    },
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('../static/images/logo.avif');
  background-size: cover;
  background-position: center;
  /* Otros estilos */
  width: 100%;
  height: 650px; /* Altura del contenedor, ajusta según tus necesidades */
}

.login-form {
  width: 300px;
  background-color: rgba(173, 216, 230, 0.5); /* Color celeste con transparencia */
  border-radius: 10px; /* Radio de borde para hacerlo más abierto */
  padding: 20px; /* Espacio interno del formulario */
}

/* Estilos para los form items dentro del formulario de inicio de sesión */
.login-form-item {
  margin-bottom: 10px; /* Espacio entre los form items */
  padding: 10px; /* Espacio interno del form item */
}
</style>
