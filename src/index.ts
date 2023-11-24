import "./components/export"
import Card, {Attributes} from "./components/recordatorio/minicard"
import firebase from "./utils/firebase"
import "./utils/firebase"
import events from "./utils/events"
import { serverTimestamp } from "firebase/firestore"
import getRecordatorio from "./utils/firebase"

class AppContainer extends HTMLElement{


    records: Card[]=[]

    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

async connectedCallback(){
    const reminders = await firebase.getRecordatorio()

    reminders.forEach(async (post:any) => {
        const postRemi = this.ownerDocument.createElement("my-card") as Card
        postRemi.setAttribute(Attributes.titulo, post.titulo)
        postRemi.setAttribute(Attributes.des, post.des)
        this.records.push(postRemi)

    })
        this.render()

        // events.addEventListener('uploadData', async  ()  =>{
        // const reminders = await firebase.getRecordatorio()

        // this.records = []

        // reminders.forEach(async (post:any) => {
        //     const postRemi = this.ownerDocument.createElement("my-card") as Card
        //     postRemi.setAttribute(Attributes.titulo, post.titulo)
        //     postRemi.setAttribute(Attributes.des, post.des)
        //     this.records.push(postRemi)
        // })

        // this.render()

        // })

    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = ``

            const form = this.ownerDocument.createElement("my-form") 
            this.shadowRoot?.appendChild(form)
        }
    }
}

customElements.define("app-container", AppContainer)