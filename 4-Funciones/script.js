let productID, sale, ouput, priceProduct, saleOuput, productTax, stock, maxStock

maxStock = 3

const Intput = parseInt(prompt("¿Cuantos productos quieres?"))


function Price(price, size, tax=64, sale=50) {
    productTax = price * tax
    priceProduct = price + productTax
    saleOuput = priceProduct - sale

    if (size > maxStock){ // Si el usuario ingreso mas de 3

        alert("No hay suficiente Stock para este producto")
        
    }else{

        alert(`
        Precio: ${price}
        TAX: ${tax}%
        Cantidad: ${size}
        Descuento: ${sale}%
        TOTAL: ${saleOuput}
        `)
        
        console.log(`
        Precio: ${price}
        TAX: ${tax}%
        Cantidad: ${size}
        Descuento: ${sale}%
        TOTAL: ${saleOuput}
        `)
    }
}


if (Intput !== 0) {
    
    Price(400, Intput)

}else{
    alert("No puedes poner 0!")

    // recargo la pagina, y le vuelvo a preguntar al usuario.
    window.location.reload()
}
