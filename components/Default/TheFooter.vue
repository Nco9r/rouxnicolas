<template>
  <footer>
      <div class="left">
          <h2>Let's <span class="word_red">work</span> together</h2>
      </div>
      <div class="logo">
          <span class="span_logo"></span>
          <img src="@/assets/img/svg/logo_black.svg" alt="">
          <span class="span_logo"></span>
      </div>
      <div class="footer_bottom">
          <div class="items_footer">
              <div class="title_footer">
                  <h4>Adresse</h4>
                  <p>1 rue des tiocs <br>
                  33130, Bègles</p>
              </div>
          </div>
          <div class="items_footer">
              <div class="title_footer">
                  <h4>Contact</h4>
                  <p>06 83 97 65 90 <br>
                  hello@rouxnicolas.fr</p>
              </div>
          </div>
          <div class="items_footer">
              <div class="title_footer">
                  <h4>Copyright</h4>
                  <nuxt-link to='/mentions-legales'><p>Mentions légales </p></nuxt-link>
                    <p>©Nicolas ROUX {{new Date().getFullYear()}}</p>
              </div>
          </div>
          <div class="items_footer">
              <div class="title_footer" >
                  <h4>Réseaux Sociaux</h4>
                  <div class="sociaux">
                    <img src="@/assets/img/svg/insta.svg" alt="" >
                    <img src="@/assets/img/svg/git.svg" alt="" >
                    <img src="@/assets/img/svg/linkedin.svg" alt="" >
                  </div>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>

a {
    text-decoration: none; 
    color : var(--sombre);
}

footer  {
    padding: 105px 15px 20px 15px;
    background-color: var(--background_gray);
    margin-top: -1px;
    color: var(--sombre);
}

.left h2 {
    font-family: 'Vesterbo', serif;
    font-weight: 900;
    /* font-style: italic; */
    line-height:36px;
    /* color: var(--white); */
    font-size: 32px;
    margin-bottom: 50px;
    text-align: center;
}

.left p {
    font-family: 'Source-sans-pro', sans-serif; 
    font-weight: 400;
    line-height: 24Px;
    color: var(--sombre);
}

.sociaux {
    display: flex; 
    align-items: center;
}

.logo {
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    margin-top: 80px;
}

.logo img {
    width: 30px;
}

.span_logo {
    width: 100px;
    height: 1px;
    background-color: var(--sombre);
}

.footer_bottom {
    margin-top: 60px;
    display: flex; 
    flex-flow: row wrap; 
    justify-content: center;
    align-items: flex-start;
    padding: 0 10px; 
}

.word_red {
    color: var(--rouge);
}

.items_footer {
    margin-bottom: 30px;
    width: 50%;

}



.title_footer h4 {
    margin-bottom: 10px;
    font-size: 14px;
    text-transform: uppercase;
}

.title_footer p{
    font-size: 14px;
    font-weight: 200;
}

.sociaux {
    border-radius: 10Px;
}

.sociaux img {
    margin-right: 10px;
}




.safe {
    font-size: 12px; 
    font-style: italic;
}


@media screen and (min-width: 1024px) {

    footer {
        padding: 50px 150px;
    }
    .left h2 {
        text-align: center;
        font-size: 60px;
        margin-bottom: 100px;
    }

    .infos {
        display: flex; 
        flex-flow: row wrap;
        align-items: center; 
        justify-content: center;
    }

    .items_footer {
        width: 25%;
    }


    .span_logo {
        border: none; 
        background-color: var(--sombre);
        height: 1px;
        width: 400px;
    }

    .logo img {
        width: 50px;
    }
}
</style>