export default class BeeCat {
    constructor(el) {
        this.root = el;
        this.templates = {};
        document.querySelectorAll("[data-template-for='beecat']").forEach((templateEL) => {
            this.templates[templateEL.dataset.templateId] = templateEL;
        });        
        const start = Number(el.dataset.start);
        this.counter = isNaN(start) ? 0 : start;
        this.render();
    }

    incrementCount = (event) => {
        this.counter++;
        this.render();
    }

    removeEventListeners() {
        this.root.removeEventListener('click', this.incrementCount);
    }

    addEventListeners() {
        this.root.addEventListener('click', this.incrementCount);
    }

    render() {
        this.removeEventListeners();
        this.root.innerHTML = '';
        
        const bee = this.templates['bee'].content.cloneNode(true).querySelector('span');
        const cat = this.templates['cat'].content.cloneNode(true).querySelector('span');
        const num = this.templates['num'].content.cloneNode(true).querySelector('span');

        const isBee = this.counter > 0 && this.counter % 5 === 0;
        const isCat = this.counter > 0 && this.counter % 7 === 0;
        const isNum = !isBee && !isCat;

        if (isNum) {
            num.appendChild(document.createTextNode(this.counter));
            this.root.appendChild(num);
        } else {
            if (isCat) {
                this.root.appendChild(cat);
            }
            if (isBee) {
                this.root.appendChild(bee);
            }
        }

        this.addEventListeners();
    }
}