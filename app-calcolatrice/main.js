
new Vue ({
    el: '#app',
    data:{
        logo: `https://vuejs.org/images/logo.png`,
        current: ' ',
        operatore: null,
        operatoreCliccato: false
    },
    methods:{
        cancella() {
            this.current = '';
          },
          segno() {
            this.current = this.current.charAt(0) === '-' ?
              this.current.slice(1) : `-${this.current}`;
          },
          percentuale() {
            this.current = `${parseFloat(this.current) / 100}`;
          },
          inserisci(numero) {
            if(this.operatoreCliccato) {
              this.current = '';
              this.operatoreCliccato = false;
            }
            this.current = `${this.current}${numero}`;
          },
          dot() {
            if (this.current.indexOf('.') === -1) {
              this.inserisci('.');
            }
          },
          setPrecedente(){
            this.precedente = this.current;
            this.operatoreCliccato = true;
          },
          dividi() {
            this.operatore = (a, b) => a / b;
            this.setPrecedente();
          },
          moltiplica(){
            this.operatore = (a, b) => a * b;
            this.setPrecedente();
          },
          sottrai(){
            this.operatore = (a, b) => a - b;
            this.setPrecedente();
          },
          addizione(){
            this.operatore = (a, b) => a + b;
            this.setPrecedente() ;
          },
          uguale(){
            this.current = `${this.operatore(
              parseFloat(this.precedente),
              parseFloat(this.current)
            )}`;
            this.precedente = null;
          }
    }
})