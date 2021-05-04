<template>
  <main class="container">
      <hero/>
      <stacks />
      <expertise />
      <reference />
  </main>
</template>

<script>

import Hero from '../components/Features/Hero';
import Stacks from '../components/Features/stacks';
import Expertise from '../components/Features/Expertise';
import Reference from '../components/Features/Reference';


export default {
  components: {
    Hero,
    Expertise,
    Stacks,
    Reference,
  },
  data (){
    return {
      lmS: null
    }
  },
  mounted(){
    this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 1000)
        })
  },
  methods: {
  }


}
</script>

<style>

.container {
  padding: 0 10px;
}

.cta_index {
   -webkit-appearance: none; 
   padding: 10px;
    background-color: var(--rouge); 
    border: none; 
    color: var(--white);
    font-weight: bold; 
    outline: none;
    margin-bottom: 50px;
    margin: 0px 0 40px 0;
    transition: all .5s;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
    margin-top: 30px;
    
}


.cta_index svg {
    margin-left: 10px;
    transform: rotate(180deg);
    position: relative;
    top: 4px;
    width: 13px;
} 

.cta_index path {
    fill: white;
}

.cta_index:hover {
    margin-left: 5px; 
    opacity: .8;
}

.works {
  background-image: url('~assets/img/png/works.jpg');
  background-size: 100%;
  margin: 60px -10px -60px -10px;
  height: 200px;
  background-repeat: no-repeat;
}


@media screen and (min-width: 768px) {
   .container {
      padding: 0 50px; 
      
    }

     .works {
      display: none;
    }
}

@media screen and (min-width: 1024px) {
    .container {
      padding: 0 100px; 
    }

    .cta_index {
      display: none;
    }

   
}

@media screen and (min-width: 1440px) {
   .container {
      padding: 0 250px; 
    }
}


</style>
