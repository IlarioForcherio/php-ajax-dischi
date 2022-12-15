

var app = new Vue({
    el: '#app',
    data: {

    arrayDischi : [],
    arrayGeneri:[],
    selectGenere:'',
   
    },
    mounted() {
     
        axios.get('./api/index.php')
        .then((res) => {
         //console.log(res.data)
         this.arrayDischi = res.data;


         this.arrayDischi.forEach((element) => {

            console.log(element)
            if(!this.arrayGeneri.includes(element.genre)){
                this.arrayGeneri.push(element.genre)
            }
          });
  
        })
    },
    beforeUpdate() {
    
    },
    methods: {
     
         ricercaGeneri(){
          axios.get(`./api/index.php?genre=${this.selectGenere} `).then((resp)=>{
            console.log(resp)
            this.arrayDischi = resp.data
          })
         }

    },
  });
  