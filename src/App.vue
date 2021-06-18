<template>
  <button @click="myMethod()">Display Toast</button>
</template>
<script>
import { useToast } from 'vue-toastification'

export default {
  name: 'App',
  setup() {
    // Get toast interface
    const toast = useToast()
    // Make it available inside methods
    return { toast }
  },
  methods: {
    myMethod() {
      // Since you returned `toast` from setup(), you can access it now
      this.toast.info("I'm an info toast!")
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
