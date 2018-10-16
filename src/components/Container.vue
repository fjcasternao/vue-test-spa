<template>
  <b-container fluid class="bv-example-row">
      <b-row class="header">
          <img src="https://mayordomo.io/w2/img/logo.svg"  width="50%" style="margin: auto"/>
      </b-row>
      <b-row class="content">
        <div class="content__header" style="width: 100%">Selecciona un servicio</div>
        <service-item v-for="a in services.slice(pageOffset, pageOffset + pageLimit)" v-bind:service="a" :key="a.id"></service-item>
      </b-row>
      <b-row class="footer">

        <div class="discounts">
          <img src="../assets/discount.png" height="180px"/>
        </div>

        <div class="menu__buttons">
          <img src="../assets/menuButtons.png" height="100px"/>
        </div>

        <div class="flags__container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Spain_%28Civil%29.svg/2000px-Flag_of_Spain_%28Civil%29.svg.png" class="flag"  @click="setLanguage('es')"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/2000px-Flag_of_Catalonia.svg.png" class="flag" @click="setLanguage('ca')"/>
          <img src="http://projectbritain.com/images/uk.jpg" class="flag" @click="setLanguage('en')"/>
        </div>
      </b-row>
  </b-container>
</template>

<script>
import ServiceItem from './ServiceItem';
import axios from 'axios';

function compareOrder(a, b) {
  if (a.order < b.order) {
    return -1;
  }
  if (a.order > b.order) {
    return 1;
  }
  return 0;
}

export default {
  name: 'container',
  data() {
    return {
      services: [],
      pageOffset: 0,
      pageLimit: 6,
      msg: 'Welcome to Your Vue.js App',
    };
  },

  components: {
    ServiceItem,
  },

  mounted() {
    axios
      .get(`${this.$globalVariables.api}services`)
      .then((response) => { this.services = response.data.sort(compareOrder); });
  },

  methods: {
    setLanguage(val) {
      this.$globalVariables.lang = val;
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 15vh;
  background-color: #F3F3F5;
}

.footer {
  height: 15vh;
  background-color: #F3F3F5;
}

.content {
  height: 70vh;
  display: flex;
  background-color: #9CBDCD;
}

.content__header {
  font-size: 3em;
  padding: 15px;
  width: 100%;
}

.flag {
  border-radius: 50%;
  height: 75px;
  width: 75px;
}

.flags__container {
  position: absolute;
  right: 0px;
  bottom: 0px;
  margin: 20px;
}

.menu__buttons {
  margin: auto;
}

.discounts {
  position: absolute;
  left: 0px;
  bottom: 0px;
  margin: 20px;
}


</style>
