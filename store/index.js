export const state = () => ({
    usuarioAutenticado: false
  });
  
  export const mutations = {
    SET_USUARIO_AUTENTICADO(state, valor) {
      state.usuarioAutenticado = valor;
    }
  };
  
  export const actions = {
    async iniciarSesion({ commit }, usuario) {
      // Lógica de autenticación (simulación de autenticación exitosa)
      await new Promise(resolve => setTimeout(resolve, 2000));
  
      // Establecer el usuario como autenticado
      commit('SET_USUARIO_AUTENTICADO', true);
    }
  };