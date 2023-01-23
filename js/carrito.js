const carritoRecuperado = localStorage.getItem("carrito");
const carritoObj = JSON.parse(carritoRecuperado);
const contCarrito = document.getElementById("contCarrito");

carritoObj.forEach(producto => {
    mostrarCarrito(producto);
})

// MOSTRAMOS EL CARRITO:
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () =>{
    mostrarCarrito();
})


/* FUNCION MOSTRAR CARRITO */
function mostrarCarrito() {
    contCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
        <div class="card">
            <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
            <div class="card-body">
                <h5>${producto.nombre}</h5>
                <p>"$" ${producto.precio}</p>
                <p>${producto.cantidad}</p>
                <button class="btn colorBoton" id="eliminar${producto.id}">Eliminar Producto</button>
            </div>
        </div> `;

        contCarrito.append(card);

        // ELIMINAR PRODUCTOS:
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () =>{
        eliminarDelCarrito(producto.id);
        });
    })
    calcularTotal();
}

/* FUNCION ELIMINAR PRODUCTO */
const eliminarDelCarrito = (id) => {

    Toastify({
        text: "Producto eliminado",
        duration: 3000,
        close: true,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true,
        style: {
        background: "linear-gradient(to right, #eb4b10, #000f90)",
        borderRadius: "0.5rem",
        textTransform: "uppercase",
        fontWeight: 600,
        fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', 
            y: '1.5rem' 
        },
        onClick: function(){} // Callback after click
    }).showToast();

    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);

    mostrarCarrito();
    // localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
};


/* VACIAR CARRITO */
const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
});

/* FUNCION VACIAR CARRITO */
const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();
    localStorage.clear();
};

/* FUNCION MOSTRAR TOTAL */
const total = document.getElementById("total");
const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total: ${totalCompra}`;
};


/* FUNCION COMPRAR */
const comprar = document.getElementById("comprar");

if(carrito.lenght > 0){
    comprar.addEventListener("click", () => {
        Toastify({
            text: "Muchas gracias por tu compra!",
            duration: 3000,
            close: true,
            gravity: "bottom", 
            position: "right", 
            stopOnFocus: true,
            style: {
            background: "linear-gradient(to right, #eb4b10, #000f90)",
            borderRadius: "0.5rem",
            textTransform: "uppercase",
            fontWeight: 600,
            fontSize: ".75rem"
            },
            offset: {
                x: '1.5rem', 
                y: '1.5rem' 
            },
            onClick: function(){} // Callback after click
        }).showToast();
    
        carrito.length = 0;
        localStorage.setItem("carrito", JSON.stringify(carrito));
    });
}
else{
    comprar.addEventListener("click", () => {
        Toastify({
            text: "No hay productos en el carrito",
            duration: 3000,
            close: true,
            gravity: "bottom", 
            position: "right", 
            stopOnFocus: true,
            style: {
            background: "linear-gradient(to right, #eb4b10, #000f90)",
            borderRadius: "0.5rem",
            textTransform: "uppercase",
            fontWeight: 600,
            fontSize: ".75rem"
            },
            offset: {
                x: '1.5rem', 
                y: '1.5rem' 
            },
            onClick: function(){} // Callback after click
        }).showToast();
    });
}