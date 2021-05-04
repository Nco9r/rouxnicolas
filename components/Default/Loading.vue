<template>
<div>
    <transition name="loading" appear>
  <div class="overlay" v-if="loading" :value="overlay">
        <div class="span_container">
            <div class="logo">
                <img src="@/assets/img/svg/logo_black.svg" alt="">
            </div>
        </div>
    </div>  
    </transition>
</div>
</template>

<script>

export default {
  data: () => ({
    loading: false,
    overlay: true,
  }),
  methods: {
    start() {
      this.loading = false
      this.overlay = true
    },
    finish() {
      this.loading = false
      this.overlay = false
    },
    fail(error) {
      console.log(error)
    },
    increase(num) {
      // console.log(num)
    },
  },
}
</script>

<style scoped>
.overlay {
    position: fixed; 
    top: 0; 
    left: 0; 
    right: 0;
    height: 100vh;
    background-color: var(--rouge);
    z-index: 10000;
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
}

.logo {
    display: flex; 
    margin: auto; 
    justify-content: center; 
    align-items: center;
}

.span_container {
    animation: Emerge 1.5s; 
    animation-fill-mode: forwards;
    animation-delay: .1s;
    overflow: hidden; 
    height: 100px; 
    width: 100px; 
    opacity: 0; 
    display: flex; 
    margin: auto; 
    
}

@keyframes Emerge {
    0%{
        
        transform: rotate(0);
        opacity: 0; 


    }
    50%{
    
        opacity: 1; 
    
    }
    100%{
        
        transform: rotate(360deg);
        opacity: 0; 

    }
}



@keyframes loadingOpen {
    from{
        transform: translateX(-100%)
    }
    to{
        transform: translateX(0)
    }
}

@keyframes loadingClose {
    from{
        transform: translateX(0)
    }
    to{
        transform: translateX(100%)
    }
}



.loading-enter{
    animation: loadingOpen 1s; 
}


.loading-leave-active {
    animation: loadingClose 1s; 
}

@media screen and (min-width: 1200px) {
    .logo img {
        width: 100px;
    }
}


</style>