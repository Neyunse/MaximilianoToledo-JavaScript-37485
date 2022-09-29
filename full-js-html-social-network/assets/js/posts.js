let Timeline, getInput, getButtonPost, entries;

entries = [];

Timeline = document.querySelector(".timeline__content");
getInput = document.querySelector(".new__conter");
getButtonPost = document.querySelector(".postButton");

// Funcion que recupera los datos del localStorage
if (localStorage.getItem("entries") != null) {
  // Si hay algo en el localStorage
  data = JSON.parse(localStorage.getItem("entries")); // Lo parseamos a JSON
  for (let i = 0; i < data.length; i++) {
    // Recorremos el array
    entries.push(data[i]); // Lo añadimos al array entries para ser usado
    // mas adelante en la funcion NewContent() y evitar bugs
  }
}

async function entr() {
  await fetch(
    "https://raw.githubusercontent.com/Neyunse/MaximilianoToledo-JavaScript-37485/main/full-js-html-social-network/DB/posts.json"
  ) // o fetch("/DB/posts.json")
    .then((res) => res.json())
    .then((data) => {
      const localData = localStorage.getItem("entries")
        ? JSON.parse(localStorage.getItem("entries"))
        : []; // Si hay algo en el localStorage lo parseamos a JSON

      const l = localData.map((e) => e);
      const m = data.map((i) => i);

      return [...l, ...m]; // Concatena los dos arrays
    })
    .then((m) => {
      const sortedDesc = m.sort((a, b) => new Date(b.date) - new Date(a.date));
      sortedDesc.map((e, i) => {
        let date = moment(e.date).fromNow(); // Obtiene la fecha actual del objeto

        let footer =
          e.user.id == 5
            ? `
            <div class="footer">
              <span onclick='Delete(${e.id})' ><i class="fa-solid fa-trash-can"></i></span>
            </div>
            `
            : "";

        Timeline.innerHTML += `
        <div data-id="${e.id}" class="entry__card">
            <article class="entry">
                <div class="header">
                    <div class="h__l">
                        <div class="av">
                            <img src="${e.user.avatar}" lazy="loaded">
                        </div>
                        <div class="us">
                            <span class="name">${e.user.name} - ${date}</span>
                            <span class="tag">@${e.user.tag}</span> 
                        </div>
                        
                    </div>
                  
                </div>

                <div class="body">
                    <p>${e.body}</p>
                </div>
                ${footer}
            </article>
        </div>
    `;
      });
    });
}
entr();

// Genera una ID aleatoria del post del usuario
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// nuevo contenido

function NewContent(body) {
  let randomID = getRandomInt(1000); // Genera una ID aleatoria

  // Creo un nuevo objeto local

  let ldata = {
    id: randomID,
    user: {
      id: 5,
      avatar: "https://picsum.photos/seed/picsum/200/300",
      name: "Erik",
      tag: "erik_2312",
    },
    date: new Date(),
    body: `${body}`,
  };

  entries.push(ldata); // Lo añado a la lista para almacenarlo en el localStorage

  localStorage.setItem("entries", JSON.stringify(entries)); // Lo guardo en el localStorage

  Toastify({
    text: "Se publico correctamente",
    duration: 1000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover

    onClick: function () {}, // Callback after click
  }).showToast();

  // emula el restraso del servidor.
  setTimeout(() => {
    location.reload();
  }, 1600);
}

// Crea una nueva entrada
getButtonPost.addEventListener("click", () => {
  if (getInput.value != "") {
    // Si el input no esta vacio
    NewContent(getInput.value); // Crea un nuevo contenido
    getInput.value = ""; // Limpia el input
  } else {
    Toastify({
      text: "No puedes dejar el campo vacio",
      duration: 1000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover

      onClick: function () {}, // Callback after click
    }).showToast();
  }
});

// Funcion que elimina una entrada
function Delete(id) {
  let obj = entries.findIndex((e) => e.id == id); // Busca el objeto con el id que se le pasa
  entries.splice(obj, 1); // Elimina el objeto
  localStorage.setItem("entries", JSON.stringify(entries)); // Lo guarda en el localStorage
  window.location.reload(); // Recarga la pagina
}
