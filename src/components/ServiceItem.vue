<template>
    <b-row> 
        <div class="image__container">
            <img :src="imgSrc"/>
            <div class="circle__text">{{imgText}}</div>
        </div>
    </b-row>

</template>

<script lang="js">
  export default {
    name: 'service-item',
    props: {
      imgSrc: {
        default: 'http://placehold.it/300x300',
        type: String,
      },
      imgText: String,
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
    margin: 30px;
    border-radius: 150px;
    overflow: hidden;
  }



  .circle__text {
    width: 100%;
    height: 30%;
    font-size: 25px;
    text-align: center;
    bottom: 0px;
    background-color: green;
    position: absolute
  }
</style>
