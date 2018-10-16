<template>
  <div class="service__item">
    <div class="image__container">
        <router-link :to="`/service/${service.id}`">
          <img :src="imgSrc"/>
          <div class="circle__text">{{service.primaryServiceDescription[$globalVariables.lang]}}</div>
        </router-link>        
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: 'service-item',
    props: {
      imgSrc: {
        default: 'http://placehold.it/300x300',
        type: String,
      },
      service: Object,
    },
    mounted() {

    },
    methods: {

    },
    computed: {

    },
};
</script>

<style scoped>
  .image__container {
    position: relative;
    height: 300px;
    width: 300px;
    margin: auto;
    border-radius: 50%;
    padding: 5px;
    border: 5px solid white;
    background-color: #9CBDCD;
    overflow: hidden;
  }

  .service__item {
    width: 50%;
    height: 33%;
  }

  .circle__text {
    width: 100%;
    height: 30%;
    font-size: 25px;
    text-align: center;
    bottom: 0px;
    background-color: #C5D6DE;
    position: absolute
  }
</style>
