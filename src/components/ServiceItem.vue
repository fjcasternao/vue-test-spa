<template>
  <div class="service__item">
    <div class="circle__outer">
        <div class="image__container">
          <router-link :to="`/service/${service.id}`">
            <img :src="imgSrc" class="center-cropped"/>
            <div class="circle__text">{{service.primaryServiceDescription[$globalVariables.lang]}}</div>
          </router-link>  
        </div>      
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: 'service-item',
    props: {
      imgSrc: {
        default: 'https://vuejs.org/images/logo.png',
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
    height: 290px;
    width: 290px;
    border-radius: 50%;
    border: 5px solid #9CBDCE;
    background-color: white;
    overflow: hidden;
  }

  .circle__outer {
    height: 300px;
    width: 300px;
    margin: auto;
    border-radius: 50%;
    border: 5px solid white;
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

  .center-cropped {
    object-fit: none; 
    object-position: center;
    height: 300px;
    width: 300px;
  }
</style>
