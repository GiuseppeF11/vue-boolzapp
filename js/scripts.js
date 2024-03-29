// Estraggo la funzione creatAppa dall'oggetto Vue
const {createApp} = Vue;

// Creo l'istanza di Vue da montare in pagina
createApp ({
    data() {
        return {
            newMessage: '',  //Definisco il nuovo messaggio come stringa vuota
            searchContact: '',  //Definisco il contatto da cercare come stringa vuota
            activeContact: 0,  //Definisco il contatore dei contatti
            activeMessage: 0,  //Definisco il contatore dei messaggi
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
            
        };
    },

    methods: {

        //Funzione per inviare i messaggi
        sendMessage() {
            if (this.newMessage.trim().length > 0) { 
                let obj = {
                    date : this.getCurrentDateTime(),
                    message : this.newMessage.trim(),
                    status : 'sent',
                };
                
                this.contacts[this.activeContact].messages.push(obj); //pusho l'oggetto completo dentro la mia lista dei messaggi
                this.newMessage = ''; // Per svuotare il v-model ovvero il value dell'input

                let timeout;

                timeout = setTimeout(() => {
                    let autoMessage = {
                        date: this.getCurrentDateTime(),
                        message:'Ok!',
                        status:'received'
                    };
                    this.contacts[this.activeContact].messages.push(autoMessage);
                }, 3000);
            }
        },

        //Funzione per cercare le chat
        searchChat() {
            for (let i = 0; i < this.contacts.length; i++) {
                const name = this.contacts[i].name.toLowerCase();
                if (name.includes(this.searchContact.toLowerCase())) {
                    this.contacts[i].visible = true
                }
                else {
                    this.contacts[i].visible = false
                }   
            }
        },

        //Funzione per aggiungere l'ora attuale
        getCurrentDateTime() {
            const oggi = new Date();
            const giorno = oggi.getDate().toString().padStart(2, '0');
            const mese = (oggi.getMonth() + 1).toString().padStart(2, '0');
            const anno = oggi.getFullYear();
            const ore = oggi.getHours().toString().padStart(2, '0');
            const minuti = oggi.getMinutes().toString().padStart(2, '0');
            const secondi = oggi.getSeconds().toString().padStart(2, '0');
        
            const orarioFinale = `${giorno}/${mese}/${anno} ${ore}:${minuti}:${secondi}`;

            return orarioFinale;
        },

        //Funzione per rimuovere i messaggi dalla lista
        removeMessage(i) {
            console.log('Hai eliminato questo messaggio: ' , i);
            this.contacts[this.activeContact].messages.splice(i , 1); //.splice rimuove 1 elemento partendo da 'i'
        },

        //Creare una funzione che splitta l'ora

    },

    // Monto l'istanza di Vue in pagina
}).mount('#app');