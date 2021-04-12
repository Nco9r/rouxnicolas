<template>
  <div class="cookies" v-if="cook">
      <div class="overlay_cookies"></div>
      <div class="content_cookies">
          <div class="logo_cookies">
              <img src="@/assets/img/svg/cookies.svg" alt="">
          </div>
          <div class="title_cookies">
              <h3>Respect de votre vie privée</h3>
          </div>
          <div class="content">
              <p>Avec votre accord, j'utilise des cookies ou technologies similaires pour stocker et accéder à des informations personnelles comme votre visite sur ce site. Vous pouvez retirer votre consentement ou vous opposer aux traitements basés sur l'intérêt légitime à tout moment en cliquant sur "En savoir plus" ou dans les mentions légales de ce site.</p>
          </div>
          <div class="button">
              <nuxt-link to=/mentions-legales><button class="next" @click="cook = !cook">En savoir plus</button></nuxt-link>
              <button class="ok" @click="valide">Accepter et fermer</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            cook: true,
        }
    },
    mounted(){
        const cookies = this.$cookies.get('consent')
        this.cook = cookies === undefined
    },
    methods: {
      valide() {
          this.cook = !this.cook
          this.$cookies.set('consent', true,{
            path: '/',
            maxAge: 60 * 60 * 24 * 365
            })
        }
    }
}
</script>

<style>

.cookies {
    overflow-y: scroll; 
}

.overlay_cookies {
    width: 100%;
    position: fixed; 
    top: 0;
    left: 0; 
    right: 0; 
    bottom: 0; 
    z-index: 10000; 
    background-color: var(--sombre);
    opacity: .8;
    overflow-y: scroll; 

}

.content_cookies {
    width: 90%;
    position: fixed; 
    margin: 20px auto;
    padding: 20px 20px 0px 20px;
    left: 0; 
    right: 0; 
    overflow-y: scroll!important;
    z-index: 30000; 
    background-color: white;
    border-radius: 6px;
}

.logo_cookies {
    margin: 30px 0;
    text-align: center;
}

.logo_cookies img {
    width: 70px;
}

.content p {
    font-family: 'Assistant', sans-serif; 
    font-weight: 400;
    line-height: 26Px;
    color: var(--sombre);
    margin-bottom: 30px;
    width: 100%;
    margin-top: 20px;
}

.button {
    display: flex; 
    flex-flow: column; 
}

.next {
    background-color: var(--gray);
    border: none; 
    padding: 10px;
    border-radius: 6px;
    font-family: 'Assistant', sans-serif; 
    font-weight: 700;
    font-size: 16px;
    color: var(--sombre);
    margin-bottom: 5px;
    outline: none; 
    width: 100%;
    cursor: pointer;

}

.ok {
    background-color: var(--rouge);
    border: none; 
    padding: 10px;
    border-radius: 6px;
    font-family: 'Assistant', sans-serif; 
    font-weight: 700;
    font-size: 16px;
    color: white;
    margin-bottom: 20px;
    outline: none; 
    width: 100%;
    cursor: pointer;

}

@media screen and (min-width: 1024px) {
    .content_cookies {
        width: 50%;
     

    }
}

@media screen and (min-width: 1024px) {
    .content_cookies {
        width: 30%;
     

    }
}

</style>