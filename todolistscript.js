const button = document.querySelector("#myButton");
const list = document.querySelector("#list");
const input = document.querySelector("#textbox");

const clickHandler = () => {
    const listitem = document.createElement("li");
    // how to create custom attributes: (good for multiple items) const attribute = document.createAttribute("", "");
    //listitem.setAttribute("", "");
    const checkbox = document.createElement("input");
    const text = document.createTextNode(input.value);

    checkbox.setAttribute("type", "checkbox");

    listitem.appendChild(checkbox);
    listitem.appendChild(text);

    let id;
    checkbox.addEventListener("click", () => {
        if (listitem.classList.contains("strikethrough")) {
            clearTimeout(id);
        } else {
            id = setTimeout(() => list.removeChild(listitem), 3000);
        }
        listitem.classList.toggle("strikethrough");
    });

    // adding to DOM
    list.appendChild(listitem);
    input.value = "";
    
}

const enterHandler = event => {
    if (event.key === "Enter") {
        button.click(); // sees its a click nd then runs thru line 21
        //clickHandler(); calls clickHandler function
    }

}

button.addEventListener("click", clickHandler);
input.addEventListener("keydown", enterHandler);