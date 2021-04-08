<template>
  <div>
      <header class="mobile">
          <div class="top_bar" :class="{top_bar_color: scrollPosition > 100}">
            <div class="logo_header">
                <img src="@/assets/img/svg/logo_black.svg" alt="">
            </div>
            <div class="hamburger" @click="open = !open" >
                <span></span>
            </div>
          </div>
        <div class="black" v-if='open'></div>
        <transition name="overlay" appear>
        <div class="overlay" v-if='open'>
        <transition name="open" appear>
          <div class="menu" v-if='open'>
              <div class="close"  @click="open = !open">
                  <span></span>
              </div>
              <div class="langues">
                  <p>Fr.</p>
              </div>
              <div class="items_menu" @click="open = !open" >
                  <nuxt-link to='/'>Accueil</nuxt-link>
                  <nuxt-link to='/references'>Références</nuxt-link>
                  <nuxt-link to='/contact'>Contact</nuxt-link>
              </div>
              <hr>
              <div class="sociaux">
                  <img src="@/assets/img/svg/git.svg" alt="">
                  <img src="@/assets/img/svg/insta.svg" alt="">
                  <img src="@/assets/img/svg/linkedin.svg" alt="">
              </div>
              <div class="contact">
                  <p>1 rue des tiocs, 33130 Bègles</p>
                  <p><strong>+33 (0)6 83 97 65 90</strong></p>
                  <p><strong>hello@rouxnicolas.fr</strong></p>
              </div>
          </div>
        </transition>
          </div>
        </transition>
       
      </header>

      <header class="desktop">
          <div class="top_bar" :class="{top_bar_color: scrollPosition > 1}">
            <div class="logo_header">
                <img src="@/assets/img/svg/Logo.svg" alt="">
            </div>
           <div class="menu_desktop">
              <div class="items_menu">
                  <nuxt-link to='/' >Acceuil</nuxt-link>
                  <nuxt-link to='/contact'>Contact</nuxt-link>
              </div>
          </div>
          </div>
      </header>
  </div>
</template>

<script>
export default {
    data() {
        return {
            open: false,
            scrollPosition: null
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
    }
}
</script>

<style scoped>

.nuxt-link-exact-active {
    color: var(--rouge)!important;
}

.nuxt-link-exact-active::after {
    color: var(--rouge); 
    content : url("~assets/img/svg/arrow.svg");
    font-size: 14px;
    margin-left: 10px;
}

.desktop {
    display: none;
}

.mobile {
    padding: 15px 12px; 
    display: flex;  
}

.top_bar {
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    position: fixed; 
    top: 0px; 
    left: 0px;
    right: 0px;
    z-index: 9;
    padding: 15px 20px 15px 20px;
    transition: all .7s;
}

.logo_header img {
    width: 30px;
    z-index: 1000;
}

.red {
    color: var(--rouge);
}

.hamburger {
    display: flex; 
    flex-flow: column; 
    cursor: pointer;
    
}

.hamburger span {
    height: 3Px;
    border: none; 
    background-color: var(--sombre); 
    width: 28px;
    border-radius: 4px;
    z-index: 30;
    outline: none;
}

.hamburger span::before {
    content: '';
    height: 3Px;
    border: none; 
    background-color: var(--sombre); 
    width: 28px;
    position: absolute;
    border-radius: 4px;
    margin-top: -10px;
}

.hamburger span::after {
    content: '';
    height: 3Px;
    border: none; 
    background-color: var(--sombre); 
    width: 28px;
    position: absolute;
    border-radius: 4px;
    margin-top: 10px;
}

.overlay {
    background-color: var(--rouge);
    height: 100%;
    width: 100%;
    display: flex;
    position: fixed; 
    top: 0; 
    right: 0;
    z-index: 99;

}

.menu {
    background-color: var(--gray);
    height: 100%;
    width: 90%;
    position: fixed; 
    top: 0; 
    right: 0;
    z-index: 100;
}

.langues {
    margin: 34px 30px;
}

.langues p {
    font-weight: 800;
}

.close {
    display: flex; 
    position: absolute;
    right: 20px;
    top: 40px;
}

.close span {
    height: 3Px;
    border: none; 
    background-color: var(--rouge); 
    width: 20px;
    border-radius: 4px;
    z-index: 30;
    outline: none;
    transform: rotate(45deg)
}

.close span::after {
    content: '';
    height: 3Px;
    border: none; 
    background-color: var(--rouge); 
    width: 20px;
    position: absolute;
    border-radius: 4px;
    transform: rotate(90deg)
}

.items_menu {
    display: flex; 
    flex-flow: column; 
    margin: 100px 30px 30px 30px;
}

.items_menu a {
    color: var(--sombre);
    text-decoration: none; 
    cursor: pointer; 
    font-weight: 700;
    margin: 6px 0; 
    font-size: 26px;
    font-family: 'Vesterbo';
    font-weight: 800;
    animation: Emerge .5s;
    opacity: 0;
    animation-fill-mode: forwards;
}





.items_menu a:nth-child(2) {
    animation-delay: 200ms;
}

.items_menu a:nth-child(3) {
    animation-delay: 400ms;
    
}



@keyframes Emerge {
    0%{
        opacity: 0;
        transform: translateY(50px)
    }
    100%{
        opacity: 1;
        transform: translateY(0);

    }
}

.white {
    color: var(--white);
}

hr {
    border: none; 
    margin: 0 33px;
    width: 20px;
    height: 3px;
    border-radius: 4px;
    background-color: var(--sombre);
    animation: Emerge .5s;
    animation-delay: 600ms;
    opacity: 0;
    animation-fill-mode: forwards;
}

.sociaux {
    margin: 40px 30px;
}

.sociaux img {
    width: 20px;
    margin-right: 12px;
    animation: Emerge .5s;
    animation-delay: 600ms;
    opacity: 0;
    animation-fill-mode: forwards;
}

.sociaux img:nth-child(2) {
    animation-delay: .8s;

}

.sociaux img:nth-child(3) {
    animation-delay: 1s;

}

.contact {
    position: absolute; 
    bottom: 5px;
    left: 30px;
    font-size: 12px;
    animation: Emerge .5s;
    animation-delay: .4s;
    opacity: 0;
    animation-fill-mode: forwards;
}

strong {
    font-weight: 800;
}



/* TRANSITION */

@keyframes open {
    from{
        transform: translateX(100%);
    }
    to {
        transform: translateX(0%);
    }
}


@keyframes close {
    from{
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}


.overlay-enter-active {
    animation: open .3s; 
}

.open-enter-active {
    animation: open .7s; 
}

.open-leave-active {
    animation: close .3s; 
}

.overlay-leave-active {
    animation: close .5s; 
}


@media screen and (min-width: 1024px) {

    a {
        transition: all .5s;
    }
    a:hover {
    opacity: .5;
    }

    .top_bar {
        padding: 30px 100px;
    }
   
    .items_menu {
        display: flex; 
        flex-flow: column; 
        margin: 0px 30px 30px 30px;
    }

    .items_menu a {
        color: var(--violet);
        margin-right: 70px;
        font-size: 46px;
        transition: all .5s;
        font-style: italic;

    }

    
@keyframes open {
    from{
        opacity: 0;
    }
    to {
        opacity: 1;

    }
}


@keyframes close {
    from{
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}


.overlay-enter-active {
    animation: open .3s; 
}

.open-enter-active {
    animation: open .3s; 
}

.open-leave-active {
    animation: close .3s; 
}

.overlay-leave-active {
    animation: close .3s; 
} 

    .menu {
        width: 34%;
    }

    .overlay {
        width: 38%;
    }

    .black {
    background-color: var(--sombre);
    height: 100%;
    width: 100%;
    display: flex;
    position: fixed; 
    top: 0; 
    right: 0;
    z-index: 99;
    opacity: .7;

}

    .items_menu a:hover {
        color: var(--rouge);
        font-style: italic;
    }

    .sociaux img {
        width: 30px;
    
    }

    .nuxt-link-exact-active::after {
        margin-left: 30px;
    }


    .close {
        cursor: pointer;
        right: 100px;
        top: 40px;
    }
}

@media screen and (min-width: 1440px) {
     .top_bar {
        padding: 30px 250px;
     }
     .close {
        cursor: pointer;
        right: 250px;
        top: 40px;
    }
}





</style>