<template>
  <div class="stack" >
      <div class="bloc_right">
      <p class="post_content" data-scroll data-scroll-speed="3">02 DOMAINES | COMPÉTENCES</p>
      <hr>
      <h2 class="title_e"><span data-scroll="" data-scroll-delay="0.13" data-scroll-speed="6" class="is-inview"></span>Mes <span class="rouge">domaines</span> d'expertise<span class="rouge">.</span></h2>
      <p class="after_title">Pour réaliser votre outil digital, quelque soit votre secteur d'activité, je vous propose différentes compétences qui s'articulent autour de trois axes : le conseil, le développement et l'accompagnement.
      </p>
      <p class="after_title">J'interviens dans des domaines d'expertises ciblés : création de site internet, référencement naturel et UX Design.
      </p>
       <nuxt-link to="/contact"><button class="cta">En savoir plus <svg xmlns="http://www.w3.org/2000/svg" width="15.693" height="15.712" viewBox="0 0 15.693 15.712">
  <path id="arrow-left_1_" data-name="arrow-left (1)" d="M20.389,12.543H10.46l4.317-4.3a1.314,1.314,0,1,0-1.858-1.858L6.378,12.922a1.352,1.352,0,0,0,0,1.858l6.541,6.541a1.314,1.314,0,1,0,1.858-1.858l-4.317-4.3h9.93a1.308,1.308,0,1,0,0-2.617Z" transform="translate(-6.005 -5.996)" fill="#f04e5a"/>
</svg>
</button></nuxt-link>
      </div>
      <div class="bloc_left_">
        <div class="expertise_">
            <div class="expertise">
            <img src="@/assets/img/svg/tild.svg" alt="">
            <p class="title_expertise">Design</p>
            <p class="content_expertise">Web design <br>
                UI & UX</p>
            </div>
            <div class="expertise">
            <img src="@/assets/img/svg/tild.svg" alt="">
            <p class="title_expertise">Digital / Mobile</p>
            <p class="content_expertise">Sites web <br>
                Responsive design</p>
            </div>
            <div class="expertise">
            <img src="@/assets/img/svg/tild.svg" alt="">
            <p class="title_expertise">Développement</p>
            <p class="content_expertise">Développement front<br>
                                        Référencement </p>
            </div>
            <div class="expertise">
            <img src="@/assets/img/svg/tild.svg" alt="">
            <p class="title_expertise">Serveur</p>
            <p class="content_expertise">Nom de domaine <br>
                Hébergement</p>
            </div> 
        </div>
        
      </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import  { ScrollTrigger }  from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


export default {
    data() {
        return {
            scrollPosition: null,
        }
    },
    methods: {
        updateScroll() {
        this.scrollPosition = window.scrollY
        },
         startAnimation() {
            
        }
    },
    mounted() {
    window.addEventListener('scroll', this.updateScroll);
     this.startAnimation();
    }  

}
</script>

<style scoped>

.stack {
    background-color: var(--black);
}
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

.stack {
    transition: all .9s;
    padding: 10px 0 20px 0; 
}
.background {
    background-color: var(--rouge);
}

.background_gray {
background-color: var(--background_gray);
}

.post_content {
    color: var(--rouge); 
    font-size: 12px; 
    letter-spacing: 1Px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 20px;
}

.stack .title_e {
    font-family: 'Vesterbo', serif;
    font-weight: 800;
    line-height: 36px;
    color: var(--white);
    font-size: 34px;
    margin-top: 15px;
    margin-bottom: 30px;
    letter-spacing: -0.6px;

    }

.after_title {
    font-family: 'Assistant', sans-serif; 
    font-weight: 400;
    line-height: 26Px;
    color: var(--white);
    margin-bottom: 30px;
    width: 100%;
    transform: translate(10deg, 10px);
}

.bloc_left_ {
    background-color: rgba(255, 255, 255, 0.034);
    padding: 20px;
    }

.cta {
   -webkit-appearance: none; 
   padding: 10px;
    background-color: transparent; 
    border: none; 
    color: var(--rouge);
    font-weight: bold; 
    outline: none;
    margin-bottom: 50px;
    margin: 0px 0 40px 0;
    transition: all .5s;
    border-radius: 6px;
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

.stack_logo {
    display: flex; 
    flex-flow: column;  
    align-items: flex-start; 

}

.title_expertise {
    margin-top: 5px;
    color: var(--white);
    font-family: 'Assistant', serif;
    font-weight: 800;
    font-size: 18px;
    margin-bottom: 15px;
}

.content_expertise {
    font-family: 'Assistant', sans-serif; 
    font-weight: 300;
    line-height: 20Px;
    color: var(--white);
    margin-bottom: 30px;
    opacity: 0.7;
}

.design{
    margin-bottom: -30px;
    margin-top: 0px;
    margin-right: -25px;
    margin-left: -25px;
}

@media screen and (min-width: 1024px) {
    .stack {
        display: flex; 
        flex-flow: row-reverse; 
        padding: 50px 0 100Px 0;
        align-items: center; 
        justify-content: space-around;

    }

    .stack .title_e {
        font-size: 120px;
        line-height: 105px;
        color: var(--white);

    }

    .post_content {
        color: var(--rouge);
    }

    .after_title {
        font-size: 16px;
        line-height: 26px;
        color: var(--white);
        width: 90%;
    }

    .bloc_right {
        width: 50%;
    }

    .bloc_left_ {
        display: flex; 
        flex-flow: row wrap; 
        justify-content: center; 
        margin: 0px auto;
        width: 40%;
        align-items: flex-end;

        background-color: rgba(255, 255, 255, 0.144);
        padding: 20px;
        border-radius: 10px;
    }

    .expertise {
        width: 225px;
        display: flex; 
        flex-flow: column; 
        margin: auto;
    }

    .expertise img {
        width: 20%;
        margin-bottom: 10px;
    }

    .expertise_ {
        display: flex; 
        flex-flow: row wrap; 
    }

    


}

@media screen and (min-width: 1444px) {
    .bloc_right{
        width: 40%;
    }

    .bloc_left_ {
        width: 40%;
    }
}


</style>