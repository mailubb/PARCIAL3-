import { addRecordatorio } from "../../utils/firebase"

const forms = {
     titulo: "",
     des:""
}

export class Form extends HTMLElement{
     constructor(){
        super()
        this.attachShadow({mode:"open"})
     }
connectedCallback(){
    this.render()
}

changeTitulo(e:any){
     forms.titulo = e?.target?.value
}
changeDescription(e:any){
     forms.des = e?.target?.value
}
uploadForm(e:any){
     console.log(forms)
     addRecordatorio(forms)
}

async render(){
     if(this.shadowRoot){
         this.shadowRoot.innerHTML = ``

          const ChangeT = this.ownerDocument.createElement("input")
          ChangeT.placeholder = "Titulo del recordatorio"
          ChangeT.addEventListener("change", this.changeTitulo);
          this.shadowRoot?.appendChild(ChangeT)

          const ChangeD = this.ownerDocument.createElement("input")
          ChangeD.placeholder = "Descripción del recordatorio"
          ChangeD.addEventListener("change", this.changeDescription);
          this.shadowRoot?.appendChild(ChangeD)

          const Submit = this.ownerDocument.createElement("button")
          Submit.innerText = "Guardar recordatorio"
          Submit.addEventListener("click", this.uploadForm);
          this.shadowRoot?.appendChild(Submit)

      }
 }

}

customElements.define("my-form",Form)
export default Form
