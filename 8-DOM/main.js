let persons, personList, data

personList = document.querySelector(".list")

persons = []

data = [
    {
        name: "Julian"    
    },
    {
        name: "Karina"    
    },
    {
        name: "Ana"    
    },
    {
        name: "Valeria"    
    },
    {
        name: "Tereza"    
    }
]

function P(data) {

    this.name = data.name

    return this
}

for (const e of data){
    persons.push(new P(e))
}


if(personList){ // Comprueba si el ul existe, luego incluye los items.
    persons.map((per, i) => {
        personList.innerHTML+=`<li data-id="${i}">${per.name}</li>`
        console.log(per)
    })
}