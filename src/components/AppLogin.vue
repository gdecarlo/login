<template>
  <div>
    <h3>Login</h3>
    <form @submit.prevent="login">
      <button>Login</button>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
  </div>
</template>

<script>
import { useStore } from "@/store/store";
export default {
  setup() {
    const store = useStore();
    return { store };
  },
  data() {
    return {
      error: "",
    };
  },
  methods: {
    login() {
      try {
        //si esta todo bien
        this.store.autenticar(true);
        this.$router.replace({ name: "secret" });
      } catch (error) {
        this.error = error;
      }
    },
  },
};
</script>

<style scoped>
div {
  color: inherit;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
.error {
  color: red;
}
</style>
