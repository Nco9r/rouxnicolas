<template>
  <footer>
      <div class="left">
          <h2><span>Let's</span> <br><span class="word_red">work</span> <br> <span class="right">together</span></h2>
      </div>
      <div class="logo">
          <span class="span_logo"></span>
          <img src="@/assets/img/svg/logo_black.svg" alt="">
          <span class="span_logo"></span>
      </div>
      <div class="footer_bottom">
          <div class="items_footer">
              <div class="title_footer">
                  <h4>Contact</h4>
                  <p>06 83 97 65 90 <br>
                  hello@rouxnicolas.fr</p>
              </div>
              <hr>
          </div>
          <!-- <div class="items_footer">
              <div class="title_footer">
                  <h4>Partenaires</h4>
                  <img src="@/assets/img/png/B3E.PNG" alt="">
                <img src="@/assets/img/png/n-a.png" alt="">
              </div>
          </div>
           -->
          <div class="items_footer">
              <div class="title_footer">
                  <h4>Copyright</h4>
                  <nuxt-link to='/mentions-legales'><p>Mentions légales </p></nuxt-link>
                    <p>©Nicolas ROUX {{new Date().getFullYear()}}</p>
              </div>
              <hr>
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
    padding: 0px 15px 20px 15px;
    background-color: var(--background_gray);
    margin-top: -1px;
    color: var(--sombre);
}

.left h2 {
    font-family: 'Vesterbo', serif;
    font-weight: 900;
    /* font-style: italic; */
    line-height:50px;
    color: var(--white);
    font-size: 32px;
    margin-bottom: 50px;
}

.right{
    float: right;
    margin-top: -15px!important;
}

.left p {
    font-family: 'Source-sans-pro', sans-serif; 
    font-weight: 400;
    line-height: 24Px;
    color: var(--white);
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
    background-color: var(--white);
}

.footer_bottom {
    margin-top: 20px;
    display: flex; 
    flex-flow: column; 
    justify-content: flex-start;
    align-items:flex-start;
    text-align: left;
}

.word_red {
    color: var(--rouge);
    font-size: 125px;
}

.items_footer {
    margin-bottom: 10px;
    width: 100%;
}

hr {
    border: none; 
    width: 100%;
    height: 1px;
    background-color: var(--white);
    margin-bottom: 10px;
    margin-top: 10px;

}



.title_footer h4 {
    margin-bottom: 5px;
    font-size: 16px;
    color: var(--white);
    font-weight: bold;
    font-family: 'Assistant', sans-serif; 
}

.title_footer p{
    font-size: 14px;
    font-family: 'Assistant', sans-serif; 
    font-weight: 200;
    color: var(--white);
}

.title_footer img {
    width: 110px;
}

.sociaux {
    border-radius: 10Px;
    display: flex; 
    justify-content: space-between;
}

.title_footer .sociaux img {
    margin-right: 10px;
    width: 20px;
    text-align: center;
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


.footer_bottom {
    margin-top: 60px;
    display: flex; 
    flex-flow:row wrap; 
    justify-content: center;
    align-items: flex-start;
    padding: 0 10px; 
    text-align: center;
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

    .sociaux {
        justify-content: center;
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