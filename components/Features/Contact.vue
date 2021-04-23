<template>
  <div class="devis">
      <div class="left">
          <h2>Une idée, un projet ? <span class="rouge">Prenons</span> contact</h2>
          <p>Veuillez remplir le formulaire ci-dessous en détaillant un rapide brief de votre secteur d'activité et des fonctionnalités que vous désirez proposer à vos clients ou prospects. <br>
          </p>
      </div> 
      <form @submit="submit" >
          <label for="">
              <p>Nom et Prénom</p>
              <input type="text" v-model="form.name" required> 
          </label>
          <label for="">
              <p>E-mail</p>
              <input type="mail" required v-model="form.email">
          </label>
          <label for="">
              <p>Téléphone</p>
              <input type="number" v-model="form.phone" required>
          </label>
          <label for="">
              <p>Société <span class="liste">Facultatif</span></p>
              <input type="text" v-model="form.subject">
          </label>
          <label for="">
              <p>Prestation <span class="liste">choisir dans la liste déroulante</span></p>
              <select name="" id="" v-model="form.prestation" required>
                  <option value="Landing page" selected="selected" >Landing page</option>
                  <option value="Site vitrine">Site vitrine</option>
                  <option value="Site E-commerce">Site E-commerce</option>
                  <option value="Modules">Modules</option>
                  <option value="Référencement">Référencement</option>
                  <img src="@/assets/img/svg/arrow.svg" alt="">
              </select>
          </label>
          <label for="" >
              <p>Votre brief</p>
              <textarea type="text" rows="10" required v-model="form.text"></textarea>
          </label>
          <div class="checkbox">
              <input type="checkbox" checked required>
              <p>Je consens à ce que les données que j'ai soumises soient collectées et stockées en vue d'être utilisées pour traiter ma demande de contact.</p>
          </div>
          <button :class="{validateForm : validate, onloadForm : onload}" >
              <p v-if="!validate">Soumettre votre demande</p><p v-if="validate">C'est noté !</p>
          </button> 
      </form>
  </div>
</template>

<script>

export default {
    mounted() {
        this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 1000)
        })
    },
    data() {
        return {
            form : {
                name: '',
                phone:'',
                email : '',
                prestation: '',
                subject : '',
                text : '',
            },
            validate: false,
            error: false,
            onload : false, 
        }
    },
    methods: {
        submit(e) {
            e.preventDefault();
            console.log({...this.form})
            this.onload = true; 
            this.$axios.post('https://nco9r.herokuapp.com/api/send', {...this.form})
            .then(res => (
                this.onload = false,
                this.validate = true, 
                this.form = ''
            ))
            .catch(e)
            this.error = true;
        },
        // async submit(e){
        //     e.preventDefault();
        //     console.log({...this.form})
        //     try{
        //         const data = await axios.post('/api/send', {...this.form})
        //         this.validate = true,
        //         this.form = ''
        //     }catch(e){
        //         this.error = true,
        //         this.form = ''
        //     }
        // }
    }
}
</script>

<style scoped>

.devis  {
    padding: 0 20px;
    background-color: var(--background_gray);
    margin-top: -1px;
    color: var(--sombre);
}

.left h2 {
    font-family: 'Vesterbo', serif;
    font-weight: 900;
    /* font-style: italic; */
    line-height: 36px;
    /* color: var(--white); */
    font-size: 28px;
    margin-bottom: 20px;
}

.left p {
    font-family: 'Assistant', sans-serif; 
    font-weight: 400;
    line-height: 28Px;
    color: var(--sombre);
}

.sociaux {
    display: flex; 
    align-items: center;
}

.sociaux img {
    margin-right: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
}

.formulaire {
    margin-top: 40px;
}

.copyright {
    margin-top: 40px;
}

form {
    margin-top: 30px;
}


label p {
    font-family: 'Vesterbo', serif;
    font-weight: 900;
    /* font-style: italic; */
    line-height: 20px;
    color: var(--sombre);
    font-size: 14px;
    margin-bottom: 10px;
  
}

label input {
    margin-bottom: 20px;
    border: none; 
    background-color: white;
    outline: none;
    width: 100%;
    border-radius: 3px;
    padding: 10px;
    font-family: 'Lato', sans-serif;
    color: var(--sombre);
    font-size: 16px;

}

label select {
    -webkit-appearance: none; 
    padding: 10px;
    background-color: white; 
    border: 1px solid var(--sombre); 
    color: var(--sombre);
    font-weight: bold; 
    outline: none;
    text-align: center; 
    margin-bottom: 30px;
    border-radius: 3px;
    font-size: 16px;
}

.liste {
    font-size: 12px;
    font-family: 'Source-sans-pro', sans-serif; 
    font-weight: 300;
    line-height: 22Px;
    color: var(--sombre);
    margin-left: 10px;
    font-style: italic;
}



label textarea {
    margin-bottom: 20px;
    border: none; 
    background-color: rgb(255, 255, 255);
    outline: none;
    width: 100%;
    padding: 10px;
    font-family: 'Lato', sans-serif;
    color: var(--sombre);
    font-size: 16px;

 
}

button {
    -webkit-appearance: none; 
    padding: 10px;
    background-color: var(--rouge); 
    border: none; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    color: var(--white);
    font-weight: bold; 
    outline: none;
    text-align: center; 
    margin-bottom: 30px;
    margin: 30px auto;
    transition: all .5s;
    border-radius: 3px;
    width: 100%;
    font-size: 16px;
}

.validate {
    display: flex; 
    align-items: flex-start; 
    justify-content: flex-start;
}

.validate svg {
    width: 80px;
    margin-right: 20px;
}

.validate path{
    fill: var(--sombre);
}

.onloadForm {
    opacity: .3;
    cursor: none;
}

.validateForm {
    background-color: rgb(86, 161, 105); 
}
.validate {
    color: var(--sombre);
    font-weight: bold; 
    transition: all .5s;
}

.checkbox {
    display: flex; 
}

.checkbox input {
    border: 1px solid var(--sombre);
    color: var(--sombre)!important;

}

.checkbox p {
    margin-left: 10px;
    font-size: 12px;
    font-family: 'Source-sans-pro', sans-serif; 
    font-weight: 300;
    line-height: 16Px;
    color: var(--sombre);
    margin-left: 10px;
    font-style: italic;
    margin-top: -1px;
}

.rouge {
    color: var(--rouge);
}

@media screen and (min-width: 1024px) {
    .devis {
        padding: 20px 350px 200px 350px;
    }

    .left h2 {
        font-size: 50px; 
        line-height: 55px;
    }

    button {
    -webkit-appearance: none; 
    padding: 10px;
    background-color: var(--rouge); 
    border: none; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    color: var(--white);
    font-weight: bold; 
    outline: none;
    text-align: center; 
    margin-bottom: 30px;
    margin: 30px auto;
    transition: all .5s;
    border-radius: 3px;
    width: 40%;
    float: right;
    font-size: 16px;
    cursor: pointer;
}

}

@media screen and (min-width: 1440px) {
    .devis {
        padding: 20px 350px 200px 350px;
    }
}






</style>