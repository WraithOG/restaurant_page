export default function loadPage() {
    //declaring content variable
    const content = document.getElementById("content");
    //Declaring header variables
    const header = document.createElement("div");
    header.className = "header";
    const header_text = document.createElement("div");
    header_text.id = "header-text";
    header_text.innerHTML = "The Bakery";
    const navbar = document.createElement("nav");
    navbar.id = "navbar";
    //buttons
    const button1 = document.createElement("button");
    button1.className = "btn btn-rect-to-round btn-rect-to-round--red";
    button1.innerHTML = "Home";
    const button2 = document.createElement("button");
    button2.className = "btn btn-rect-to-round btn-rect-to-round--red";
    button2.innerHTML = "Menu";
    const button3 = document.createElement("button");
    button3.className = "btn btn-rect-to-round btn-rect-to-round--red";
    button3.innerHTML = "About";
    //appending children
    navbar.appendChild(button1);
    navbar.appendChild(button2);
    navbar.appendChild(button3);
    header.appendChild(header_text);
    header.appendChild(navbar);
    content.appendChild(header);
    //body
    //declaring body variables
    const body = document.createElement("div");
    body.className = "body";
    const body_text = document.createElement("div");
    body_text.className = "body-text";
    body_text.innerHTML = "<span id='home'>Home</span><br>Welcome to The Bakery! We make the most delicious treats in the entire world! Please feel free to browse our catalog, and let us know if anything peaks your interest!"
    const body_img_container = document.createElement("div");
    body_img_container.className = "baker-img";
    const body_img = document.createElement("div");
    body_img.className = "img";
    //append children
    body_img_container.appendChild(body_img);
    body_text.appendChild(body_img_container);
    body.appendChild(body_text);
    content.appendChild(body);
    //footer
    //declaring footer variables
    const footer = document.createElement("div");
    footer.className = "footer";
    const footer_text = document.createElement("div");
    footer_text.className = "footer-text";
    footer_text.innerHTML = "Made with love by Ethan Farber";
    //append children
    footer.appendChild(footer_text);
    content.appendChild(footer);
}


