<template>
  <h1>QR-Code Generator</h1>
  <p>Dead-simple, on-device qr code generator.</p>

  <span>Width is {{ width }}</span>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class App extends Vue {
  data() {
    return {
      width: 500
    }
  }
}
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
