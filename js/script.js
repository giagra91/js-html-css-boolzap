let app = new Vue(
    {
        el: `#app`,
        data: {
            newIndex : 0,
            newMessage : "",
            currentDate : new Date().getDate(),
            nameToSearch : "",
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
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
                    avatar: '_2',
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
                    avatar: '_3',
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
                    avatar: '_4',
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
                    avatar: '_5',
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
                    avatar: '_6',
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
                    avatar: '_7',
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
                    avatar: '_8',
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
            
        },
        methods : {
            // Funzione per aggiornare il newIndex al click sulla singola chat
            changeIndex(index){
                this.newIndex=index;
            },
            // Funzione per aggiungere un messaggio ed avere la risposta
            addToMessages(contacts, newMessage,index){
                if (newMessage !== ""){
                    contacts[index].messages.push({
                        message : newMessage,
                        date : dayjs().format('DD/MM/YYYY hh.mm'),
                        status : `sent`
                    })
                    setTimeout(() => {
                        contacts[index].messages.push({
                            message : "ok",
                            date : dayjs().format('DD/MM/YYYY hh.mm'),
                            status : `received`
                        })
                    }, 1000)
                }
                this.newMessage = ""
            },
            // Funzione per ricerca tra i contatti
            searchName(contacts, newName){
                contacts.filter((element, index) => {
                    if (element.name.substring(0, newName.length).toLowerCase().trim() == newName.substring(0, this.length).toLowerCase().trim()) {
                        this.newIndex=index
                        console.log(`trovato`)
                        element.visible= true;
                    } else if (newName.substring(0, this.length).toLowerCase().trim() == ""){
                        element.visible= true;
                    } else {
                        element.visible = false;
                    }
            });
            },
            // Funzione cancella messaggio
            deleteMessage(contacts, mainIndex, index){
                contacts[mainIndex].messages.splice(index,1)
                document.getElementsByClassName(`my-dropdown-menu`)[index].classList.remove(`d-block`);
            },
            // Funzione per mostrare il dropdown menu sui messaggi
            showDropdown(index){
                document.getElementsByClassName(`my-dropdown-menu`)[index].classList.toggle(`d-block`);
            },
            // Funzione per troncare i messaggi troppo lunghi da mostrare nella lista contatti
            cutMessage(message){
                if(message.length > 20){
                    return message.substring(0,19)
                }
                return message
            },
            // Funzione per recuperare la data da inserire all'ultimo accesso nella sezione di destra
            takeDate(myDate){
                let myTime = myDate.split(" ");
                return myTime[0] + ` alle ` + myTime[1]
            }
        },
        // Updated per verifica dati e test funzioni
        updated(){
            // console.log(this.nameToSearch.substring(0, this.length).toUpperCase())
        }
    }
)

