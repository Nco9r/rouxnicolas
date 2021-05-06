<template>
  <div class="reference">
      <div class="title_reference">
          <p>03 CLIENTS | RÉALISATIONS</p>
          <hr>
          <h2>Références<span class="rouge">.</span></h2>
      </div>
    
    <div class="items_cards">
        <div class="cards">
            <div class="cards_img">
                <img src="@/assets/img/png/brasero.jpg" alt="">
            </div>
            <div class="title_cards">
                <h2>My terroir - <span class="secteur">traiteur</span></h2>
                <p>©2021</p>
            </div>
            <div class="content_cards">
                <p>UX/IU - Site E-commerce - Boutique. <br>
                    Développement front/back-end. <br>
                    Référencement - SEO
                </p>
            </div>
            <hr>
        </div>

          <div class="cards">
            <div class="cards_img">
                <img src="@/assets/img/png/maison-blanche.jpg" alt="">
            </div>
            <div class="title_cards">
                <h2>La Maison Blanche - <span class="secteur">Restauration</span></h2>
                <p>©2021</p>
            </div>
            <div class="content_cards">
                <p>UX/IU - Site E-commerce - Boutique. <br>
                    Développement front/back-end. <br>
                    Référencement - SEO
                </p>
            </div>
            <hr>
        </div>
        <div class="cards">
            <div class="cards_img">
                <img src="@/assets/img/png/angels-pub.jpg" alt="">
            </div>
            <div class="title_cards">
                <h2>Angel's PUB - <span class="secteur">Restauration</span></h2>
                <p>©2021</p>
            </div>
            <div class="content_cards">
                <p>UX/IU - Site E-commerce - Boutique. <br>
                    Développement front/back-end. <br>
                    Référencement - SEO
                </p>
            </div>
            <hr>
        </div>
        <div class="cards">
            <div class="cards_img">
                <img src="@/assets/img/png/hospital.jpg" alt="">
            </div>
            <div class="title_cards">
                <h2>Château de l'Hospital - <span class="secteur">Vignoble</span></h2>
                <p>©2021</p>
            </div>
            <div class="content_cards">
                <p>UX/IU - Site E-commerce - Boutique. <br>
                    Développement front/back-end. <br>
                    Référencement - SEO
                </p>
            </div>
            <hr>
        </div>
    </div>
    <nuxt-link to="/contact">
        <button class="cta">
            <img src="@/assets/img/svg/allwork.svg" alt=""> 
            <svg xmlns="http://www.w3.org/2000/svg" width="15.693" height="15.712" viewBox="0 0 15.693 15.712">
            <path id="arrow-left_1_" data-name="arrow-left (1)" d="M20.389,12.543H10.46l4.317-4.3a1.314,1.314,0,1,0-1.858-1.858L6.378,12.922a1.352,1.352,0,0,0,0,1.858l6.541,6.541a1.314,1.314,0,1,0,1.858-1.858l-4.317-4.3h9.93a1.308,1.308,0,1,0,0-2.617Z" transform="translate(-6.005 -5.996)" fill="#f04e5a"/>
            </svg>
        </button>
    </nuxt-link>
    










    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.reference {
    background-color: var(--black);

}

.secteur {
    font-size: 12px;
    opacity: .5;
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
    color: var(--rouge)
}

.title_reference h2 {
    font-family: 'Vesterbo', serif;
    font-weight: 800;
    /* font-style: italic; */
    line-height: 36px;
    color: var(--white);
    font-size: 34px;
    margin-top: 15Px;
    letter-spacing: -0.6px;  
}

.title_reference p {
     color: var(--rouge); 
    font-size: 12px; 
    letter-spacing: 1Px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 20px;
}

.after_title {
    color: var(--rouge); 
    font-size: 12px; 
    letter-spacing: 1Px;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 10px;
}

.reference_img {
    display: flex; 
    flex-flow: row wrap; 
    justify-content: space-between;
}

.cta {
   -webkit-appearance: none; 
   padding: 10px;
   position: relative;
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

@keyframes move {
    from {
        transform: rotate(0)
    }
    to {
        transform: rotate(-360deg)
    }
    
}
.cta img {
    width: 200px;
    animation: move 10s infinite linear;
}


.cta svg {
    transform: rotate(180deg);
    position: absolute;
    left: 170px;
    top: 100px;
    transform: rotate(230deg)
} 

.cta path {
    fill: var(--rouge);
}

.cta:hover {
    margin-left: 5px; 
    opacity: .8;
}

.cards {
    display: flex; 
    flex-flow: column; 
    margin-top: 30px;
}

.cards_img img{
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.title_cards {
    display: flex;
    flex-flow: row; 
    justify-content: space-between; 

}

.title_cards h2 {
    margin-top: 5px;
    color: var(--white);
    font-family: 'Assistant', serif;
    font-weight: 800;
    font-size: 18px;
    margin-bottom: 15px;
}

.title_cards p {
    color: var(--white);
    font-family: vesterbo, sans-serif; 
    font-weight: bold; 
    opacity: .5;

    font-size: 12px;
    margin-top: 12px;
}

.content_cards p {
    color: white;
    font-size: 12px;
}






@media screen and (min-width: 768px) {
    
}

@media screen and (min-width: 1024px) {
    .title_reference h2 {
        font-size: 120px;
        margin-bottom: 50px;
        line-height: 105px;
        margin-top: 20px;

    }

    .reference_img {
        display: flex; 
        flex-flow: row wrap; 
        width: 100%; 
        justify-content: space-between;
    }

 

    .items_cards {
        display: flex; 
        flex-flow: wrap;
        justify-content: center;
    }

    .cards {
        width: 25%;
        margin-right: 50px;
    }

}

@media screen and (min-width: 1440px) {
    
}

</style>