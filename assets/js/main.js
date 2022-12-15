var app = new Vue({
    el: '#app',
    data: {
    arrayDischi : [],
    },
    mounted() {
      axios.get('./api/index.php')
        .then((res) => {
         console.log(res.data)
         this.arrayDischi = res.data
  
        })
    },
    beforeUpdate() {
    
    },
    methods: {

    }
  })
  