<template>
  <div>
    <h1>Conjetura de Collatz</h1>
    <label>Inserte un numero: </label>
    <input type="number" min="1"  v-model="numero" />
    <button v-on:click="calcularConjetura()">Calcular</button>
    <div v-html="html"></div>
    <!-- <div v-html="$filters.valorarDivisible(this.numero)"></div> -->
  </div>
</template>

<script>
export default {
  name: "CollatzComponent",
  methods: {
    calcularConjetura() {
    this.html = "";
    let numero = this.numero;
    this.html = `<li>${this.$filters.valorarDivisible(numero)}${numero}</span></li>`;
    while (numero !== 1) {
      if (numero % 2 === 0) {
        numero = numero / 2;
      } else {
        numero = numero * 3 + 1;
      }
      this.html += `<li>${this.$filters.valorarDivisible(numero)}${numero}</span></li>`;
    }
    },
  },
  data() {
    return {
      numero: 1,
      html: "",
    };
  },
};
</script>

<style>
h1 {
  color: blue;
}
</style>