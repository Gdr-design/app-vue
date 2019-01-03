const STORAGE_KEY = 'app-js-hfjsdhf4'

new Vue ({
    el:'#app',
    data:{
     inputVal:'',
     nuovoId:0,
     filter: 'tutte',
     lista:[],
    },
    created(){
        this.lista = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
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
        this.inputVal = '';
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.lista));
       },
      fatto(voce) {
        voce.completato = !voce.completato;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.lista));
        },
      cancella(index){
          this.lista.splice(index, 1);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(this.lista));
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