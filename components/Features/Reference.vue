<template>
  <div class="reference">
      <div class="title_reference">
          <p>CLIENTS | RÉALISATIONS</p>
          <h2>Références<span class="rouge">.</span></h2>
      </div>
      <div class="reference_img">
          <div class="items">
            <a href="https://mansa-clone.netlify.app" target="_blank">
            <div class="mansa">
                <div class="box">
                </div>
            </div>
            </a>
          </div>
          



           <div class="items">
            <!-- <a href="" target="_blank"> -->
                <div class="ap">
                    <div class="box">
                    </div>
                </div>
            <!-- </a> -->
          </div>



          <div class="items">
            <a href="https://stat-covid-19.netlify.app/" target="_blank">
                <div class="covid">
                    <div class="box">
                    </div>
                </div>
            </a>
        </div>


        <div class="items">
            <a href="https://chateaudelhospital.fr/" target="_blank">
                <div class="cdh">
                    <div class="box">
                    </div>
                </div>
            </a>
        </div>

        <div class="items">
            <a href="https://alisoncilsvousplait.fr/" target="_blank">
                <div class="ali">
                    <div class="box">
                    </div>
                </div>
            </a>
        </div>

         <div class="items">
            <a href="http://mbeautynails.fr/index.html" target="_blank">
                <div class="mb">
                    <div class="box">
                    </div>
                </div>
            </a>
        </div>












    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.rouge {
    color: var(--rouge)
}

.title_reference h2 {
    font-family: 'Vesterbo', serif;
    font-weight: 800;
    /* font-style: italic; */
    line-height: 36px;
    color: var(--sombre);
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

.items {
    width: 100%;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: var(--boxShadow);
    display: flex;
    flex-flow: column;
    padding: 10px;
    margin-top: 30px;
   
}

.mansa img {
    width: 80px;
    margin-bottom: 20px;
}

.title h3 {
    font-family: 'Vesterbo', serif; 
    font-size: 24px;
}

.small {
    font-size: 16px; 
    font-weight: 300;
    font-family: 'Lato', sans-serif;  
}

.mansa {
    background-image: url('~assets/img/png/mansa.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position-x: -10px;

}

.covid {
    background-image: url('~assets/img/png/covid.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position-x: -10px;
}

.ali {
    background-image: url('~assets/img/png/ali.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position-x: -10px;
}

.ap {
    background-image: url('~assets/img/png/ap.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position-x: -10px;
        transition: all .5s;
}

.ap:hover {
    filter: grayscale(1);
}


.cdh {
    background-image: url('~assets/img/png/cdh.jpg');
        background-size: cover;
                background-position-x: -10px;

        background-repeat: no-repeat;
}

.mb {
    background-image: url('~assets/img/png/mb.jpg');
        background-size: cover;
                background-position-x: -10px;

        background-repeat: no-repeat;
}

.content {
    display: flex; 
    flex-flow: row; 
    justify-content: space-between;
    width: 100%;
    align-items: flex-end;
}

.box {
        height: 350px;
    }

.arrow img {
    width: 20px;
    transform: rotate(180deg)
}



@media screen and (min-width: 768px) {
    
}

@media screen and (min-width: 1024px) {
    .title_reference h2 {
        font-size: 50px;
        text-align: center;
        margin-bottom: 50px;
        margin-top: 20px;

    }

    .title_reference p {
        text-align: center; 
    }

    .reference {
        margin-bottom: 150px;
    }

    .reference_img {
        display: flex; 
        flex-flow: row wrap; 
        width: 100%; 
        justify-content: space-between;
    }

    .items {
        width: 32%;
        display: flex;
        padding: 10px;
        transition: all .5s;

    }

    .items:hover {
        transform: translateY(-20px);
    }

    .ali:hover {
        opacity: .7;
        transition: all .3s;
    }

     .mansa:hover {
        opacity: .7;
        transition: all .3s;
    }

     .cdh:hover {
        opacity: .7;
        transition: all .3s;
    }

     .mb:hover {
        opacity: .7;
        transition: all .3s;
    }

     .covid:hover {
        opacity: .7;
        transition: all .3s;
    }

    .ap:hover {
         filter: grayscale(1)
    }


    .content {
        position: relative;
        width: 32%;
    }

    .box {
        height: 350px;
    }

}

@media screen and (min-width: 1440px) {
    
}

</style>