$(document).ready(function () {
    $('.modal').modal();
});

var firebaseApp = firebase.initializeApp({
    //inserire le api firebase come mostrato nel video
})

var db = firebaseApp.database();
var filmRef = db.ref('film')

new Vue({
    el: '#app',
    data: {
        titolo: 'Archivio Film',
        db: null,
        nuovoFilm: {
            titolo: '',
            locandina: '',
            regista: '',
            anno: '',
            tag: 'già visto'
        },
        editFilm: {
            titolo: '',
            locandina: '',
            regista: '',
            anno: '',
            tag: 'già visto'
        }
    },
    firebase: {
        film: filmRef
    },
    methods: {

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
        aggiungiFilm() {
            filmRef.push(this.nuovoFilm);
            toastr.success("Film aggiunto con successo");
        },
        cancellaFilm(unfilm) {
            filmRef.child(unfilm['.key']).remove()
            toastr.success("Film cancellato");
        },
        modificaFilm() {
            filmRef.child(this.editFilm['.key']).update({
                'titolo': this.editFilm.titolo,
                'locandina': this.editFilm.locandina,
                'regista': this.editFilm.regista,
                'anno': this.editFilm.anno,
            });
            toastr.success("Film aggiornato");
        }

    }
})