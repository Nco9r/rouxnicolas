<template>
  <div class="reference"> 
      <reference/>
  </div>
</template>

<script>

import Reference from '../components/Features/Reference';
export default {
    components: {
        Reference,
    },
    mounted(){
        this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 1000)
        })
    }
}
</script>

<style scoped>
.reference {
  padding: 20px 5px 0 5px;
}


@media screen and (min-width: 768px) {
   .reference {
      padding: 0 0px; 
    }
}

@media screen and (min-width: 1024px) {
    .reference {
      padding: 0 50px; 
    }
}

@media screen and (min-width: 1440px) {
   .reference {
      padding: 0 100px; 
    }
}

</style>