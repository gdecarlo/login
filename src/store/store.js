import { defineStore } from "pinia";

export const useStore = defineStore("auth", {
  state: () => ({
    _autenticado: false,
  }),
  actions: {
    autenticar(valor) {
      this._autenticado = valor;
    },
  },
  getters: {
    esAutenticado() {
      return this._autenticado;
    },
  },
});
