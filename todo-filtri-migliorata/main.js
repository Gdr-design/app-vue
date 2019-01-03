new Vue ({
    el:'#app',
    data:{
     inputVal:'',
     nuovoId:0,
     filter: 'tutte',
     lista:[],
    },
    methods:{
        aggiungiVal(){
         if (this.inputVal){
          this.lista.push({
         id: this.nuovoId++,
         elemento: this.inputVal,
         completato: false
        });
        }
        this.inputVal = ''
      },
      fatto(voce) {
        voce.completato = !voce.completato;
        }
      },
    computed:{
        rimaste(){
        return this.lista.filter(voce => !voce.completato).length
        },
        listaFiltrata(){
            if(this.filter == 'tutte'){
                return this.lista 
            }else if(this.filter == 'daFare'){
                return this.lista.filter(voce => !voce.completato)
            }else if(this.filter == 'completato'){
                return this.lista.filter(voce => voce.completato)
            }
            return this.lista 
        }  
    }
})