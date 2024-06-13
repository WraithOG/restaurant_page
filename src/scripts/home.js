export default function loadHome() {
    //body
    //declaring body variables
    const body = document.createElement("div");
    body.id = "body";
    body.className = "body";
    const body_text = document.createElement("div");
    body_text.className = "body-text";
    body_text.innerHTML = "<span id='title'>Home</span><br>Welcome to The Bakery! We make the most delicious treats in the entire world! Please feel free to browse our catalog, and let us know if anything peaks your interest!"
    const body_img_container = document.createElement("div");
    body_img_container.className = "baker-img";
    const body_img = document.createElement("div");
    body_img.className = "img";
    //append children
    body_img_container.appendChild(body_img);
    body_text.appendChild(body_img_container);
    body.appendChild(body_text);
    content.appendChild(body);
}