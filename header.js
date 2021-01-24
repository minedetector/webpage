class CustomHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <link rel="stylesheet" type="text/css" href="style.css">
        <div class="navbar">
            <div class="logo">
                <a href="index.html">Home</a>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="index.html">About</a></li>
                    <li><a href="resume.html">Resume</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="contact-info">
                <ul>
                    <li><a href="#" class="phone-no">+372 56920636</a></li>
                    <li><a href="#" class="sep">/</a></li>
                    <li><a href="#" class="email">larsasi.la@gmail.com</a></li>
                </ul>
            </div>
        </div>
        `;
    }
}

window.customElements.define('custom-header', CustomHeader);