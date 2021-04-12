<template>
  <div>  
    <the-header />
    <cookies/>
    <nuxt>
    </nuxt>
    <the-footer />
    <neige/>
  </div>
</template>


<script>

import TheHeader from '../components/Default/TheHeader'
import TheFooter from '../components/Default/TheFooter'
import Neige from '../components/Default/Neige'
import Cookies from '../components/Default/Cookies'




export default {
  components: {
    TheHeader,
    TheFooter,
    Neige,
    Cookies
  },
  data (){
    return {
      
    }
  },
  mounted(){
     
  },
  methods: {
  }
}

</script>

<style>
html {
  font-family: 'Assistant', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-weight: 400;
  background-color: var(--gray);
  color: var(--sombre);
}

body {
  border: 5px solid white;
}

 

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

:root {
  --rouge: #ff5851;
  --bleue: #3648d6;
  --sombre: #202020;
  --gray: #f8f8f8;
  --white: white; 
  --black: #202020;
  --boxShadow: 0px 10px 60px rgb(236, 236, 236);
;
}

@font-face {
  font-family: 'Vesterbo';
  font-display: swap;
  src: url('~assets/fonts/Vesterbro-Poster.otf') format('truetype');
}

</style>
