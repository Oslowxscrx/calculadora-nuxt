export const state = () => ({
    usuarioAutenticado: false
  });
  
  export const mutations = {
  userAutenticado(state, valor) {
      state.usuarioAutenticado = valor;
    }
  };
  
  export const actions = {
    async iniciarSesion({ commit }) {
      // Lógica de autenticación (simulación de autenticación exitosa)
      new Promise(resolve => setTimeout(resolve));
      
  
      // Establecer el usuario como autenticado
      commit('userAutenticado', true);
    }
  };