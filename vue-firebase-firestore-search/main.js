$(document).ready(function () {
    $('.modal').modal();
});

var firebaseApp = firebase.initializeApp({
    //inserire qui le vostre api firebase
})


var db = firebaseApp.firestore();

db.settings({
    timestampsInSnapshots: true
});

new Vue({
    el: '#app',
    data: {
        title: 'Archivio Film Firestore',
        db: null,
        filmcloud: [],
        headerAttivo: '',
        currentSort: 'titolo',
        currentSortDir: 'asc',
        pageSize:'3',
        currentPage:'1',
        cerca:'',
        nuovoFilm: {
            film_id: 0,
            titolo: '',
            locandina: '',
            regista: '',
            anno: '',
            tag: 'già visto'
        },
        editFilm: {
            film_id: '',
            titolo: '',
            locandina: '',
            regista: '',
            anno: '',
            tag: 'già visto'
        }
    },
    created() {
        this.pubblicaLista();
    },
    methods: {
        randomId() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        },
        cambiaTag() {
            if (this.nuovoFilm.tag == "già visto") {
                this.nuovoFilm.tag = "da vedere";
            } else {
                this.nuovoFilm.tag = "già visto";
            }
        },
        editTag() {
            if (this.editFilm.tag == "già visto") {
                this.editFilm.tag = "da vedere";
            } else {
                this.editFilm.tag = "già visto";
            }
        },
        pubblicaLista() {
            db.collection("filmcloud").orderBy('titolo').get().then(querySnapshot => {
                var filmcloud = []
                querySnapshot.forEach(doc => {
                    filmcloud.push(doc.data())
                });
                this.filmcloud = filmcloud
            });
        },
        sortTabella(colonna) {
            this.headerAttivo = colonna
            if (colonna === this.currentSort) {
                this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
            }
            this.currentSort = colonna
        },
        attivazioneHeader(nomeColonna) {
            return {
                'active blue-text': this.headerAttivo == nomeColonna
            }
        },
        nextPage(){
            if((this.currentPage*this.pageSize) < this.filmcloud.length) this.currentPage++
        },
        prevPage(){
            if(this.currentPage > 1) this.currentPage--
        },
        aggiungiFilm() {
            this.nuovoFilm.film_id = this.randomId();
            db.collection("filmcloud").add(this.nuovoFilm).then(this.pubblicaLista)
            this.nuovoFilm.titolo = '',
                this.nuovoFilm.locandina = '',
                this.nuovoFilm.regista = '',
                this.nuovoFilm.anno = ''
            toastr.success('Film Aggiunto');
        },
        cancellaFilm(film_id) {
            db.collection("filmcloud").where('film_id', '==', film_id).get().then(querySnapshot => {
                var filmcloud = []
                querySnapshot.forEach(doc => {
                    doc.ref.delete().then(this.pubblicaLista)
                });
                toastr.success('Film cancellato');
            });
        },
        aggiornaFilm(unfilm) {
            this.editFilm.id = unfilm.film_id
            this.editFilm.titolo = unfilm.titolo
            this.editFilm.locandina = unfilm.locandina
            this.editFilm.regista = unfilm.regista
            this.editFilm.anno = unfilm.anno
            this.editFilm.tag = unfilm.tag
        },
        modificaFilm() {
            db.collection("filmcloud").where('film_id', '==', this.editFilm.id).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.set({
                        film_id: this.editFilm.id,
                        titolo: this.editFilm.titolo,
                        locandina: this.editFilm.locandina,
                        regista: this.editFilm.regista,
                        anno: this.editFilm.anno,
                        tag: this.editFilm.tag
                    }).then(this.pubblicaLista)
                });
                toastr.success('Film aggiornato');
            });
        }
    },
    computed: {
        sortedFilmcloud() {
            return this.filmcloud.sort((a, b) => {
                var modifier = 1;
                if (this.currentSortDir === 'desc') modifier = -1;
                if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                return 0;
            }).filter((unfilm) => {
                var reg = new RegExp(this.cerca, "i");
                return unfilm.titolo.match(reg);
            }).filter((row, index) => {
                var start = (this.currentPage-1)*this.pageSize;
                var end = this.currentPage*this.pageSize;
                if(index >= start && index < end) return true;
            })
        },       
    }
})