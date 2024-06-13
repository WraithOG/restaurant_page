
export default function loadMenu () {
    const content = document.getElementById("content");
    
    //body
    //declaring body variables
    const body = document.createElement("div");
    body.id = "body"
    body.className = "body";
    const body_text = document.createElement("div");
    body_text.className = "body-text";
    body_text.innerHTML = "<span>Menu<br></span>"
    body_text.id = "title";
    body_text.style.gridArea = "title"
    body.style.gridTemplateColumns = "1fr 1fr";
    body.style.gridTemplateRows = "1fr 1fr 1fr 1fr";
    body.style.gridTemplateAreas = '"title title""donut cake""muffin bagel""bread cookie"';
    body.style.paddingBottom = "20px";
    body.style.rowGap = "10px";
    body.style.columnGap = "20px";

    const menuItem1 = document.createElement("div");
    menuItem1.className = "menu-item";
    menuItem1.style.gridArea = "donut"
    menuItem1.style.display = "flex";
    menuItem1.style.flexDirection = "column"
    menuItem1.style.alignItems = "center";
    menuItem1.style.border = "2px solid #F5F3F4"
    menuItem1.style.marginLeft = "10px";
    const itemTitle = document.createElement("div");
    itemTitle.innerHTML = "Donut"
    const itemImg = document.createElement("div");
    itemImg.id = "donut"
    menuItem1.appendChild(itemTitle);
    menuItem1.appendChild(itemImg);
    body.appendChild(menuItem1);

    const menuItem2 = document.createElement("div");
    menuItem2.className = "menu-item";
    menuItem2.id = "left-menu"
    menuItem2.style.gridArea = "cake"
    menuItem2.style.display = "flex";
    menuItem2.style.flexDirection = "column"
    menuItem2.style.border = "2px solid #F5F3F4"
    menuItem2.style.marginRight = "10px";
    menuItem2.style.alignItems = "center";
    const itemTitle2 = document.createElement("div");
    itemTitle2.innerHTML = "Cake"
    const itemImg2 = document.createElement("div");
    itemImg2.id = "cake";
    menuItem2.appendChild(itemTitle2);
    menuItem2.appendChild(itemImg2);
    body.appendChild(menuItem2);

    const menuItem3 = document.createElement("div");
    menuItem3.className = "menu-item";
    menuItem3.style.gridArea = "muffin"
    menuItem3.style.display = "flex";
    menuItem3.style.flexDirection = "column"
    menuItem3.style.alignItems = "center";
    menuItem3.style.border = "2px solid #F5F3F4"
    menuItem3.style.marginLeft = "10px";
    const itemTitle3 = document.createElement("div");
    itemTitle3.innerHTML = "Muffin"
    const itemImg3 = document.createElement("div");
    itemImg3.id = "muffin";
    menuItem3.appendChild(itemTitle3);
    menuItem3.appendChild(itemImg3);
    body.appendChild(menuItem3);

    const menuItem4 = document.createElement("div");
    menuItem4.className = "menu-item";
    menuItem4.id = "left-menu"
    menuItem4.style.gridArea = "bagel"
    menuItem4.style.display = "flex";
    menuItem4.style.flexDirection = "column"
    menuItem4.style.alignItems = "center";
    menuItem4.style.border = "2px solid #F5F3F4"
    menuItem4.style.marginRight = "10px";
    const itemTitle4 = document.createElement("div");
    itemTitle4.innerHTML = "Bagel"
    const itemImg4 = document.createElement("div");
    itemImg4.id = "bagel";
    menuItem4.appendChild(itemTitle4);
    menuItem4.appendChild(itemImg4);
    body.appendChild(menuItem4);

    const menuItem5 = document.createElement("div");
    menuItem5.className = "menu-item";
    menuItem5.style.gridArea = "bread"
    menuItem5.style.display = "flex";
    menuItem5.style.flexDirection = "column"
    menuItem5.style.alignItems = "center";
    menuItem5.style.border = "2px solid #F5F3F4"
    menuItem5.style.marginLeft = "10px";
    const itemTitle5 = document.createElement("div");
    itemTitle5.innerHTML = "Bread"
    const itemImg5 = document.createElement("div");
    itemImg5.id = "bread";
    menuItem5.appendChild(itemTitle5);
    menuItem5.appendChild(itemImg5);
    body.appendChild(menuItem5);

    const menuItem6 = document.createElement("div");
    menuItem6.className = "menu-item";
    menuItem6.id = "left-menu"
    menuItem6.style.gridArea = "cookie"
    menuItem6.style.display = "flex";
    menuItem6.style.flexDirection = "column"
    menuItem6.style.alignItems = "center";
    menuItem6.style.border = "2px solid #F5F3F4"
    menuItem6.style.marginRight = "10px";
    const itemTitle6 = document.createElement("div");
    itemTitle6.innerHTML = "Cookie"
    const itemImg6 = document.createElement("div");
    itemImg6.id = "cookie"
    menuItem6.appendChild(itemTitle6);
    menuItem6.appendChild(itemImg6);
    body.appendChild(menuItem6);
   

    //append children
    body.appendChild(body_text);
    content.appendChild(body);

    
}