fetch("data/data.json")
.then(response => response.json())
.then(data =>{
    console.log(data.items)
    displayItems(data.items)
    setEvnetItems(data.items)
});



function setEvnetItems(items) {
    const btns = document.querySelector("#year");
    btns.addEventListener("click", function(e){
        const { key, value } = e.target.dataset;
        
        let filterd = items.filter(item => item[key] === value);
        console.log(filterd);
        displayItems(filterd);
    })
}


function displayItems(items) {
    const ul = document.querySelector(".items");
    let str = "";

    str = items.map(item=> {
        return `<li class="item">
        <p>${item.name}</p>
        <p>${item.project}</p>
        <p>${item.year}</p>
        </li>`
    }).join("")
    ul.innerHTML = str;
}