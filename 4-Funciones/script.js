let productID, sale, ouput, priceProduct, saleOuput, productTax, stock, maxStock, format, formated

maxStock = 3

const Intput = parseInt(prompt("¿Cuantos productos quieres?"))


function Format(price){
    // Acomoda el precio, de forma que sea mas visible y entendible
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
    format = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price)

}


function Price(price, size, tax=64, sale=50) {
    productTax = price * tax
    priceProduct = price + productTax
    saleOuput = priceProduct - sale
    formated = Format(saleOuput)

    if (size == maxStock){ // Si el usuario ingreso mas de 3

        alert("No hay suficiente Stock para este producto")
        // recargo la pagina, y le vuelvo a preguntar al usuario.
        window.location.reload()
    }else{

        alert(`
        Precio: ${price}
        TAX: ${tax}%
        Cantidad: ${size}
        Descuento: ${sale}%
        TOTAL: ${formated}
        `)
        
        console.log(`
        Precio: ${price}
        TAX: ${tax}%
        Cantidad: ${size}
        Descuento: ${sale}%
        TOTAL: ${formated}
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
