$(document).ready(function () {
    $('.modal').modal();
});

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBXt2gg6xgQIk0Qq50GFp-K1IxcNjY3q_I",
    authDomain: "tutorial-vue-80f43.firebaseapp.com",
    databaseURL: "https://tutorial-vue-80f43.firebaseio.com",
    projectId: "tutorial-vue-80f43",
    storageBucket: "tutorial-vue-80f43.appspot.com",
    messagingSenderId: "884165146384"
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