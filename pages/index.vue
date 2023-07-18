<template>
  <div>
    <Logo />

    <Login />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Login from '~/components/Login.vue';
import Logo from '~/components/Logo.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { Login, Logo }
})
</script>
