new Vue({
    el: '#app',
    data:{
        saluto: 'Ciao Mondo',
        parola: 'tempo',
        bello: false,
        red: 'red',
        age: 20,
        numero: 10,
        giorno: new Date().getDate(),
        mese:   new Date().getMonth()+1,
        anno:   new Date().getFullYear()
    },    
    methods:{
        aumenta: function(inc){
           this.numero += inc; 
        }, 
        diminuisci: function(dec){
            this.numero -= dec
         } 
    } 
})

