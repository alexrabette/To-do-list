window.onload = initialize;

function initialize() {
    let middleDiv = document.getElementById("middle");
    let addButton = document.getElementById("add");

    addButton.addEventListener("click", e => {
        //Prevent default action
        e.preventDefault();
        //Create ul and il tags
        let ul = document.createElement("ul");
        let li = document.createElement("li");

        let input = document.getElementById("task").value
        let text = document.createTextNode(input);

        li.appendChild(text);

        //Allow li to be contained inside of li tag
        middleDiv.appendChild(li);
        ul.appendChild(li);
        //Append the list to the div!
        middleDiv.appendChild(ul);



    })

}