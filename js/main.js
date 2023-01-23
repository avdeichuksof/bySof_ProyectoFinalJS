/****  CARRITO DE COMPRAS - BY SOF ****/

/* MOSTRAMOS LOS PRODUCTOS DEL .JSON LOCAL CON FETCH */
let productos = [];

fetch("../json/productos.json")
.then(response => response.json())
.then(datos => {
    productos = datos;
    mostrarProductos(datos);
})
.catch(error => console.log(error))

/* ARRAY DEL CARRILLO */
let carrito = [];

// CARGAMOS CARRITO DESDE EL LOCALSTORAGE 
if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

/* FUNCION MOSTRAR PRODUCTOS */
const contProductos = document.getElementById("contProductos");
const mostrarProductos = (productos) => {
    productos.forEach( producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
        <div class="card">
            <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
            <div class="card-body">
                <h5>${producto.nombre}</h5>
                <p class="price">${producto.precio}</p>
                <button class="btn colorBoton" id="boton${producto.id}">Agregar al carrito</button>
            </div>
        </div> `;

        contProductos.appendChild(card);

        // AGREGAMOS PRODS AL CARRITO:
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })
    })
}

/* FUNCION AGREGAR AL CARRITO */
const agregarAlCarrito = (id) => {

    Toastify({
        text: "Producto agregado",
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

    const productoExistente = carrito.find(producto => producto.id === id);
    if(productoExistente){
        productoExistente.cantidad++;
    }else{
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    }
    
    //localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    calcularTotal();
}

// MOSTRAMOS EL CARRITO:
const contCarrito = document.getElementById("contCarrito");
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
                <button class="btn btnCantidad" id="sumar${producto.id}">+</button>
                <p class="cant">${producto.cantidad}</p>
                <button class="btn btnCantidad" id="restar${producto.id}">-</button>
                <button class="btn colorBoton" id="eliminar${producto.id}">Eliminar Producto</button>
            </div>
        </div> `;

        contCarrito.append(card);

        // AUMENTAR CANTIDAD
        const btnSumar = document.getElementById(`sumar${producto.id}`);
        btnSumar.addEventListener("click", () => {
            producto.cantidad++;
            calcularTotal();
            mostrarCarrito();

            localStorage.setItem("carrito", JSON.stringify(carrito));
        })

        // RESTAR CANTIDAD
        const btnRestar = document.getElementById(`restar${producto.id}`);
        btnRestar.addEventListener("click", () => {
            if (producto.cantidad > 1) {
                producto.cantidad--;
            }else {
                eliminarDelCarrito();
            }
            calcularTotal();
            mostrarCarrito();
        })

        // ELIMINAR PRODUCTO
        const btnEliminar = document.getElementById(`eliminar${producto.id}`);
        btnEliminar.addEventListener("click", () =>{
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
    total.innerHTML = `Total: $${totalCompra}`;
};

console.log(carrito);

/* FUNCION COMPRAR */
const comprar = document.getElementById("comprar");

comprar.addEventListener("click", () => {
    if(carrito.length >= 1) {
        Toastify({
            text: "Muchas gracias por su compra!",
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

        vaciarCarrito();
    }
    else{
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
    }
})


/* BTN TO TOP */

const btnTop = document.getElementById("buttonTop");

window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
        btnTop.classList.add('shows')
    } else {
        btnTop.classList.remove('shows')
    }
    btnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}
