let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function() {
    let items = document.createElement("li");
    items.innerHTML = input.value;
    ul.appendChild(items);

    let delbtn = document.createElement("button");
    delbtn.innerHTML = "delete";
    delbtn.classList.add("delete");

    items.appendChild(delbtn);

    console.log(input.value);
})

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})