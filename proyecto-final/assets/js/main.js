let container, data, entries


entries = []

// FROM DB
data = [
    {
    id:1,
    avatar: "https://img-os-static.hoyolab.com/avatar/avatar30029.png",
    name: "Genshin Impact Official",
    tag: "test",
    body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ipsa laudantium deserunt ullam amet nemo ipsam sed deleniti, perferendis, quod quae dolorum illo repudiandae possimus tempore! Maiores qui voluptatum dolorum.`,
    views: 0,
    comments: 0,
    mg: 0
    },
    {
        id:2,
        avatar: "https://img-os-static.hoyolab.com/avatar/avatar30029.png",
        name: "Genshin Impact Official",
        tag: "test",
        body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ipsa laudantium deserunt ullam amet nemo ipsam sed deleniti, perferendis, quod quae dolorum illo repudiandae possimus tempore! Maiores qui voluptatum dolorum.`,
        views: 0,
        comments: 0,
        mg: 0
    }
]

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

for (const e of data){
    entries.push(new Entry(e))
}

function UpdateMG(id) { // Consigue la id de la entrada
    /*
    
    Optimizado para uso de consola...

    Abrir consola del navegador y escribir UpdateMG, luego pasarle una id (1 o 2)

    
    */
    let Get = entries.findIndex((obj => obj.id == id)); // Busco el objeto que tenga la id, indexOf no me servia para esto.
    entries[Get].mg += 1 // Le añade +1

    console.log(entries[Get]) // Retorna la entrada actualizada
}

function Delete(objPos) {

    /*
    
    Optimizado para uso de consola...

    Abrir consola del navegador y escribir Delete, luego pasarle la posicion del objeto: [0,1]

    
    */
    
    entries.splice(objPos); // Remueve el objeto

    console.log(entries) // Retorna la lista actualizada
}


entries.map((e, i) => {
    console.log(e)
})
