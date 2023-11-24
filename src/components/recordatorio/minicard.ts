export enum Attributes{
    "titulo" = "titulo",
    "des"= "des"
}

class Card extends HTMLElement{
        titulo?: string;
        des?: string;

    static get observedAttributes(){
        const attrs: Record<Attributes,null> ={
            titulo: null,
            des: null
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName:Attributes, oldValue: string | undefined, newValue: string | undefined){
        switch(propName) {
                default:
                this[propName] = newValue
                    break;
            }
            
        this.render()
    }
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
}

render(){
    if (this.shadowRoot){
        this.shadowRoot.innerHTML = `
        
        <div>
        <h2>${this.titulo}</h2>
        <p>${this.des}</p>
        </div>
        `
    }
}
}

customElements.define("my-card", Card)
export default Card