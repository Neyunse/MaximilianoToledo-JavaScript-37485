let array, input, max

array = []

max = 7


do {
      input = parseInt(prompt("Ingresa numeros (no se puede repetir) "))
      
      array.push(input)
      console.log(array)
}while (array.length != max)

if (array.length == max) {
      alert("Tienes mucho tiempo para escribir numeros... Sal a tomar algo de sol...")
}