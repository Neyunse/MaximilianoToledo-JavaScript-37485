let container, data, entries, Timeline, getInput, getButtonPost, getAllEntries

Timeline = document.querySelector(".timeline__content")
getInput = document.querySelector(".new__conter")
getButtonPost = document.querySelector(".postButton")
getAllEntries = document.querySelectorAll(".entry__card")

entries = []

data = []

console.log(getAllEntries)




if (localStorage.getItem("entries") != null) { // Si hay algo en el localStorage
    data = JSON.parse(localStorage.getItem("entries")) // Lo parseamos a JSON
    for (let i = 0; i < data.length; i++) { // Recorremos el array
        entries.push(data[i]) // Lo añadimos al array entries
    }
}

function Entry(data) {

    this.id = data.id
    this.avatar = data.avatar
    this.name = data.name
    this.tag = data.tag
    this.body = data.body
    this.views = data.views
    this.comments = data.comments
    this.mg = data.mg 

    return this
}
//cargo los datos de la db
// for (const e of data) {
//     entries.push(new Entry(e))
// }

// Genera una ID aleatoria del post del usuario
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// nuevo contenido

function NewContent(body) { 
    
    let randomID = getRandomInt(1000) // Genera una ID aleatoria
    
    // Creo un nuevo objeto local

    let ldata = {
        id: randomID,
        avatar: "https://img-os-static.hoyolab.com/avatar/avatar30029.png",
        name: "Genshin Impact Official",
        tag: "test",
        body: `${body}`,
        views: 0,
        comments: 0,
        mg: 0
    }

    entries.push(new Entry(ldata)) // Lo añado a la lista

    localStorage.setItem("entries", JSON.stringify(entries)) // Lo guardo en el localStorage
    window.location.reload() // Recarga la pagina
}


getButtonPost.addEventListener("click", () => { 
    if (getInput.value != "") { // Si el input no esta vacio
        NewContent(getInput.value) // Crea un nuevo contenido
        getInput.value = "" // Limpia el input
    } else {
        alert("El input esta vacio!")
    }
})





function UpdateMG(id) { // Consigue la id de la entrada

    let objPos = entries.findIndex(e => e.id == id) // Busca la posicion del objeto
    let obj = entries[objPos] // Obtiene el objeto
    obj.mg++ // Incrementa el mg
    entries[objPos] = obj // Actualiza el objeto
    localStorage.setItem("entries", JSON.stringify(entries)) // Lo guarda en el localStorage
    window.location.reload() // Recarga la pagina

    
}

function Delete(objPos) {
    let obj = entries.findIndex(e => e.id == objPos) // Busca la posicion del objeto
    entries.splice(obj, 1) // Elimina el objeto
    localStorage.setItem("entries", JSON.stringify(entries)) // Lo guarda en el localStorage
    window.location.reload() // Recarga la pagina
}


entries.map((e, i) => { // Recorro la lista

    Timeline.innerHTML += `
        <div data-id="${e.id}" class="entry__card">
            <article class="entry">
                <div class="header">
                    <div class="h__l">
                        <div class="av">
                            <img src="${e.avatar}" lazy="loaded">
                        </div>
                        <div class="us">
                            <span class="name">${e.name}</span>
                            <span class="tag">@${e.tag}</span> 
                        </div>
                    </div>
                    
                </div>

                <div class="body">
                    <p>${e.body}</p>
                </div>

                <div class="footer">
                    <span><i class="fa-solid fa-eye"></i> ${e.views}</span>
                    <span><i class="fa-solid fa-comment-dots"></i> ${e.comments}</span>
                    <span onclick='UpdateMG(${e.id})' data-mg><i class="fa-solid fa-heart"></i> ${e.mg}</span>
                    <span onclick='Delete(${e.id})' data-mg><i class="fa-solid fa-trash-can"></i></span>
               
                </div>
            </article>
        </div>
    `
   
})
