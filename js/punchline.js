class MyStupidJokeElement extends HTMLElement  {
    constructor() {
        super();
    }

    displayError() {
        const stateDisplay = this.shadowRoot.getElementById('joke-content');
        stateDisplay.getElementsByClassName('joke-status').textContent = "The reference to official joke API has failed. Try again later!";
        stateDisplay.dataset.state = "error";
    }

    showSetup() {
        fetch('https://official-joke-api.appspot.com/jokes/random')
            .then(response => response.json())
            .then(data =>  {
                console.log(data.punchline)
                this.shadowRoot.getElementById("set-up").textContent = data.setup;
                localStorage.setItem("currentJoke", JSON.stringify(data));
                const stateDisplay = this.shadowRoot.getElementById('joke-content');
                stateDisplay.dataset.state = "ready";
            })
            .catch(error => this.displayError())
    }
    
    showPunchline() {
        console.log("New joke");
        fetch('https://official-joke-api.appspot.com/jokes/random')
            .then(response => response.json())
            .then(data =>  {
                console.log(data)
                this.shadowRoot.getElementById("punchline").textContent = data.punchline;
                localStorage.setItem("currentJoke", JSON.stringify(data));
                const stateDisplay = this.shadowRoot.getElementById('joke-content');
                stateDisplay.dataset.state = "ready";
            })
            .catch(error => this.displayError())
    }

    connectedCallback() {
        console.log("Custom element added to page.");
        let template = document.getElementById("joke-template");
        let templateContent = template.content;



        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(document.importNode(templateContent, true));

        const stateDisplay = this.shadowRoot.getElementById('joke-content');
        stateDisplay.getElementsByClassName('joke-status').textContent = "Loading jokes...";
        stateDisplay.dataset.state = "loading";

        const newJokeButton = this.shadowRoot.querySelector("button");
        newJokeButton.addEventListener('click', () => this.showPunchline());

        this.showSetup();
        this.showPunchline();

    }

    disconnectedCallback() {
        const newJokeButton = this.shadowRoot.querySelector("button");
        newJokeButton.removeEventListener('click', () => this.showPunchline());
    }


}

customElements.define("my-joke-element", MyStupidJokeElement);

console.log("hi");