// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue({
	el: '#saluto',
	data: {
		messaggio: "Il mondo è il mio giaciglio",
		classeTesto: "stile",
        divcontimg: "container-img",
        immag:"img/Spiaggia.jpg"
	}
});