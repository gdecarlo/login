<template>
  <div id="app">
    <div>
      <p>Autenticado: {{ autenticado ? "Si" : "No" }}</p>
      <button v-if="autenticado" class="but" @click="signOut">Salir</button>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/secret">Secret</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { useStore } from "./store/store";

export default {
  name: "App",
  setup() {
    const store = useStore();
    return { store };
  },

  methods: {
    signOut() {
      this.store.autenticar(false);
      this.$router.replace({ name: "login" });
    },
  },
  computed: {
    autenticado() {
      return this.store.esAutenticado;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
