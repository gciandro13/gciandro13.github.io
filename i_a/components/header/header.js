class PageHeader extends HTMLElement {
    constructor() {
        super();

        const template = `
        <!-- Bootstrap css -->




        `;

        let shadow = this.attachShadow({
            mode: 'open'
        });
        shadow.innerHTML = template
    }

    connectedCallback() {
        this.classList.add('page-header');
        this.shadowRoot.querySelector('.logo-img').src = `${this.getAttribute('assetsUrl')}/img/logo.png`;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('page-header', PageHeader);