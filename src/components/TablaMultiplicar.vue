<template>
  <div>
    <h1>TABLA MULTIPLICAR</h1>
    <label>Introduzca numero: </label>
    <input type="number" v-model="numero" />
    <button v-on:click="calcularTabla()">Calcular</button>
    <div v-html="html"></div>
    <hr />
    <div>
      <table border="1px" style="background-color:lightgreen"> 
        <thead>
          <tr>
            <th>Operacion</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="num in 10" :key="num">
            <td>{{ numero }} * {{ num }}</td>
            <td>{{ numero * num }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    <div>
      <table border="1px" style="background-color:lightblue">
        <thead>
          <tr>
            <th>Operacion</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="num in 10" :key="num">
            <td>{{ $filters.getOperacion(numero, num) }}</td>
            <td>{{ $filters.getMultiplicacion(numero, num) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  methods: {
    calcularTabla() {
      this.html =
        "<table border='1px' style='background-color:lightyellow'> <thead><tr><th>Operacion</th><th>Resultado</th></tr></thead><tbody>";
      var operacion = "";
      var resultado = "";
      for (var i = 1; i <= 10; i++) {
        this.html += "<tr>";
        operacion = "<td>" + this.numero + " * " + [i] + "</td>";
        resultado = "<td>" + this.numero * [i] + "</td>";
        this.html += operacion;
        this.html += resultado;
        this.html += "</tr>";
      }
      this.html += "</tbody></table>";
    },
  },
  data() {
    return {
      numero: 0,
      html: "",
    };
  },
};
</script>

<style>
</style>