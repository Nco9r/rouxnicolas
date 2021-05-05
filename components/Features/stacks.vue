<template>
  <div class="stacks">
      <div class="logo_grid">
      <div class="stacks_logo">
          <img src="@/assets/img/svg/html.svg" alt="">
      </div>
      <div class="stacks_logo">
          <img src="@/assets/img/svg/css.svg" alt="">
      </div>
      <div class="stacks_logo">
          <img src="@/assets/img/svg/js.svg" alt="">
      </div>
      <div class="stacks_logo">
          <img src="@/assets/img/svg/vuejs.svg" alt="">
      </div>
      <div class="stacks_logo">
          <img src="@/assets/img/svg/nuxt.svg" alt="">
      </div>
      <div class="stacks_logo">
          <img src="@/assets/img/svg/node.svg" alt="">
      </div>
      <div class="stacks_logo">
          <img src="@/assets/img/svg/strapi.svg" alt="">
      </div>
      <div class="stacks_logo">
          <img src="@/assets/img/svg/git.svg" alt="">
      </div>
    
      <div class="stacks_logo">
          <img src="@/assets/img/svg/net.svg" alt="">
      </div>
      <div class="stacks_logo">
          <img src="@/assets/img/svg/ai.svg" alt="">
      </div>
      <div class="stacks_logo">
          <img src="@/assets/img/svg/xd.svg" alt="">
      </div>
      <div class="stacks_logo">
          <img src="@/assets/img/svg/ps.svg" alt="">
      </div>
      </div>
     <div class="stacks_content">
         
         <span class="post_content">01 STACK | TECHNOLOGIES</span>
         <hr>
      <h1 class="lerp is-inview" data-scroll><span class="lerp is-inview" data-scroll data-scroll-delay="0.13" data-scroll-repeat data-scroll-speed="6">D</span><span class="lerp" data-scroll data-scroll-delay="0.12" data-scroll-speed="6">é</span>veloppeur web à Bordeaux<span class="rouge">.</span></h1>
      <p class="after_title">Développeur web freelance à Bordeaux, je développe vos projets web et mobile en proposant une approche unique et sur-mesure.</p><p class="after_title"> Aujourd'hui la performance est devenue primordiale. Un temps de chargement dépassant les 3 secondes aura pour effet de faire fuir vos clients.
      </p>
      <p class="after_title">Il m'est donc nécessaire d'être en perpétuel renouvellement pour vous proposer les dernières technologies du web et apporter une expérience enrichissante à vos internautes.
      </p>
       <nuxt-link to="/contact"><button class="cta">En savoir plus <svg xmlns="http://www.w3.org/2000/svg" width="15.693" height="15.712" viewBox="0 0 15.693 15.712">
  <path id="arrow-left_1_" data-name="arrow-left (1)" d="M20.389,12.543H10.46l4.317-4.3a1.314,1.314,0,1,0-1.858-1.858L6.378,12.922a1.352,1.352,0,0,0,0,1.858l6.541,6.541a1.314,1.314,0,1,0,1.858-1.858l-4.317-4.3h9.93a1.308,1.308,0,1,0,0-2.617Z" transform="translate(-6.005 -5.996)" fill="#f04e5a"/>
</svg>
</button></nuxt-link>
     </div>
 
  </div>
</template>

<script>

export default {
   data() { 
    return {
      lmS: null
    }
  },
  mounted(){
  
  },
}


</script>

<style scoped>

hr {
    border: none; 
    width: 100%;
    height: 1px;
    background-color: var(--rouge);
    margin-bottom: 10px;
    margin-top: 10px;

}

.rouge {
    color: var(--rouge);
}

.stacks {
        display: flex; 
        flex-flow: column-reverse; 
        justify-content: space-between;
        align-items: center; 
        margin-top: 30px;
        margin-bottom: 40px;
    }

.post_content {
    color: var(--rouge); 
    font-size: 12px; 
    letter-spacing: 1Px;
    font-weight: bold;
    margin-bottom: 0px;
    margin-top: 20px;
}

.stacks_content h1 {
    font-family: 'Vesterbo', sans-serif;
    font-weight: 800;
    /* font-style: italic; */
    line-height: 36px;
    color: var(--white);
    font-size: 34px;
    margin-top: 15px;
    margin-bottom: 30px;
    letter-spacing: -0.3px
}

.after_title {
    font-family: 'Assistant', sans-serif; 
    font-weight: 400;
    line-height: 26Px;
    color: var(--white);
    margin-bottom: 30px;
    width: 100%;
}

.cta {
   -webkit-appearance: none; 
   padding: 14px;
    background-color: transparent; 
    border: none; 
    color: var(--rouge);
    font-weight: bold; 
    outline: none;
    margin-bottom: 50px;
    margin: 0px 0 40px 0;
    transition: all .5s;
    border-radius: 3px;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
    
    
}


.cta svg {
    margin-left: 10px;
    transform: rotate(180deg);
    position: relative;
    top: 4px;
    width: 13px;
} 

.cta path {
    fill: white;
}

.cta:hover {
    margin-left: 5px; 
    opacity: .8;
}

.logo_grid {
    display: flex; 
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}

.stacks_logo {
    height: 90px;
    width: 90px; 
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.034);
    border-radius: 50%;
    margin-bottom: 20px;
    display: flex; 
    justify-content: center;
    align-items: center;
  
}
.stacks_logo img {
    height: 40px;
    filter: grayscale(1);
    width: 40px; 
    transition: all .5s;

}

.stacks_logo img:hover {
    height: 50px;
    filter: grayscale(0);
    width: 50px; 
}

@media screen and (min-width: 768px) {
  
}

@media screen and (min-width: 1024px) {
    .stacks {
        display: flex; 
        flex-flow: row; 
        justify-content: space-between;
        align-items: center; 
        margin-top: 50px;
        margin-bottom: 80px;
    }

    .stacks_logo {
        width: 50%;
    }

    .stacks_logo img {
        margin-right: 30px;
        margin-bottom: 30px;
        height: 70px;
    width: 70px; 
    padding: 10px;
    }

    .stacks_content {
        width: 50%;
    }

    .stacks_content h1 {
        font-size: 50px;
        line-height: 55px;
        color: var(--sombre);

    }

    .post_content {
        color: var(--rouge);
    }

    .after_title {
        font-size: 16px;
        line-height: 26px;
        color: var(--sombre);
        width: 100%;
    }

    .cta {
        width: 40%;
    }


}

@media screen and (min-width: 1440px) {
  .stacks {
      margin-top: 150px;
  }
}

</style>