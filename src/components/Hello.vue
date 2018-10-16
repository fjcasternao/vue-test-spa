<template>
  <b-container fluid class="bv-example-row">
      <b-row class="header">
          <b-col>1 of 3</b-col>
      </b-row>
      <b-row class="content">
        <p>Selecciona un servicio</p>
        <b-col>
          <service-item imgText="Hola Manolo"></service-item>
          <service-item imgText="Adios Manolo"></service-item>
          <service-item imgText="tercer Manolo"></service-item>
        </b-col>
        <b-col>
          <service-item imgText="Hola Manolo"></service-item>
          <service-item imgText="Adios Manolo"></service-item>
          <service-item imgText="tercer Manolo"></service-item>
        </b-col>
      </b-row>
      <b-row class="footer">
          <b-col>1 of 3</b-col>

          <button>ES</button>
          <button>EN</button>
          <button>CA</button>

      </b-row>
  </b-container>
</template>

<script>
import ServiceItem from './ServiceItem';


export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },

  components: {
    ServiceItem,
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 20vh;
  background-color: red;
}

.footer {
  height: 20vh;
  background-color: red;
}

.content {
  height: 60vh;
}

.overlay {
  position: absolute;
  
}



</style>
