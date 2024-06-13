export default function loadAbout() {
    //body
    //declaring body variables
    const body = document.createElement("div");
    body.id = "body";
    body.className = "body";
    const body_text = document.createElement("div");
    body_text.className = "body-text";
    body_text.innerHTML = "<span id='title'>About Us</span><br><br>Hey there! Here at The Bakery, we pride ourselves on our quality ingredients, quick turnaround, and delicious treats! We hope you enjoy all we have to offer.<br>Created in 1920, we are a family run, locally owned business, with our roots deep in the city."
    const body_img_container = document.createElement("div");
    body_img_container.className = "baker-img";
    const body_img = document.createElement("div");
    body_img.className = "bakery-img";
    //append children
    body_img_container.appendChild(body_img);
    body_text.appendChild(body_img_container);
    body.appendChild(body_text);
    content.appendChild(body);
}