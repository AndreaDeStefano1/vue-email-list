
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.




const app = new Vue({
  el: '#app',

  data:{
    mailList: [],
    loading: true
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((res) => {
       
        this.mailList.push(res.data.response);
        if(this.mailList.length == 10) this.loading = false;
      })
      
      
    };

  }
 
})

