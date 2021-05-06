<template>
  <div class="hero">
      <div class="hero_fixed"></div>
      <div class="scroll">
          <svg xmlns="http://www.w3.org/2000/svg" width="15.693" height="15.712" viewBox="0 0 15.693 15.712">
  <path id="arrow-left_1_" data-name="arrow-left (1)" d="M20.389,12.543H10.46l4.317-4.3a1.314,1.314,0,1,0-1.858-1.858L6.378,12.922a1.352,1.352,0,0,0,0,1.858l6.541,6.541a1.314,1.314,0,1,0,1.858-1.858l-4.317-4.3h9.93a1.308,1.308,0,1,0,0-2.617Z" transform="translate(-6.005 -5.996)" fill="#f04e5a"/>
</svg>

      </div>
  </div>
</template>

<script>

import { gsap } from 'gsap';
import  { ScrollTrigger }  from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default {
    mounted() {
      
        this.gsap_scroll();
    },
    methods: {
         gsap_scroll() {
             gsap.to('.scroll',{
                 scrollTrigger: {
                     trigger: '.scroll',
                     toggleActions: 'play none none none', 
                     start:'Opx 100%',
                     end: '0px 40%',
                     scrub: true,
                 },
                    opacity: 0,
             })
        }
    }
}
</script>

<style scoped>

.rouge {
    color: var(--rouge);
}

.hero {
    display: flex; 
    flex-flow: column; 
    justify-content: space-between; 
    align-items: center;
    padding: 10px 0;
    margin: 0 auto;
    /* background-image: url('~assets/img/png/code_.jpeg'); */
    background-size: cover;
    /* margin: 0 -20px; */
    background-position: -200px 0;
    height: 500px;
    /* opacity: .2; */
}

.hero_fixed

.scroll {
    position: absolute;
    bottom: 50px;
    animation: scroll 1.5s infinite;

}

.scroll svg {
    transform: rotate(-90deg);
    

}

@keyframes scroll {
    0% {
        transform: translateY(0px)
    }
    50% {
        transform: translateY(20px)
    }
    100%{
        transform: translateY(0px)
    }
}

.scroll path {
    fill: var(--sombre);
}

.post_content {
    color: var(--rouge); 
    font-size: 12px; 
    letter-spacing: 1Px;
    font-weight: bold;
    margin-top: 20px;
}

 .date {
        display: flex; 
        flex-flow: row;
        justify-content: space-between;
        align-items: flex-end;
        position: absolute; 
        bottom: 20px;
        left: 20px; 
        right: 20px;
}

.hero_img {
    width: 100%;
    display: flex; 
    justify-content: center;
    margin: auto; 
    height: 90vh;
}

.hero_img img {
    width: 80%;
}

.hero_content {
    width: 100%;
    margin-top: 30px;
}

.hero_content h1 {
    font-family: 'Vesterbo';
    color: var(--sombre);
    margin-top: 10px;
    font-size: 30px;
    line-height: 1.3;
}

.hero_content img {
    width: 60px;
}

.hero p {
    margin-top: 30px;
    line-height: 24px;

}

@media screen and (min-width: 768px) {
  .hero_img img {
    width: 70%;
    }
}

@media screen and (min-width: 1024px) {
    .hero {
    display: flex; 
    flex-flow: column; 
    justify-content: space-between; 
    align-items: center;
    padding: 100px 0;
    }   

    .hr {
        border: none; 
        height: 1px;
        width: 50%;
        background-color: var(--sombre);
    }

    .hero_img {
    width: 50%;
    margin-top: 20px;
    height: 60vh;
    text-align: center;
    
    }

    .hero_img img {
    width: 100%;
    }

    .hero_content {
    width: 50%;
    margin-top: 30px;
    }

    .hero_content img {
        width: 15%;
        margin-bottom: 30px;
    }

    .hero_content p {
        width: 90%;
        font-size: 18px;
        line-height: 30px; 
        font-weight: 500;
    }


}

@media screen and (min-width: 1440px) {
    
}

</style>