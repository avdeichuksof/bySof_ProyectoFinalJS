/* CARRITO DE COMPRAS - BY SOF */

class Producto{
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

// CATÁLOGO DE PRODUCTOS:
const cuadro1 = new Producto("a1", "The Beatles", 1800, "../img/productos/artist.jpg");
const cuadro2 = new Producto("a2", "Harry Tattoos", 1800, "../img/productos/artist2.jpg");
const cuadro3 = new Producto("a3", "Abbey Road", 1800, "../img/productos/artist3.jpg");
const cuadro4 = new Producto("a4", "Harry Fine Line", 2500, "../img/productos/artist4.jpg");
const cuadro5 = new Producto("c1", "Bojack Horseman", 2500, "../img/productos/cinema1.jpg");
const cuadro6 = new Producto("c2", "Darth Vader", 1900, "../img/productos/cinema2.jpg");
const cuadro7 = new Producto("c3", "Bojack Pop Art", 2500, "../img/productos/cinema3.jpg");
const cuadro8 = new Producto("c4", "Teabeanie Card", 2200, "../img/productos/cinema4.jpg");
const cuadro9 = new Producto("c5", "Bob Esponja", 2500, "../img/productos/cinema5.jpg");
const cuadro10 = new Producto("c6", "Bart y Lisa", 2200, "../img/productos/cinema6.jpg");
const cuadro11 = new Producto("c7", "Anakin Vader", 15000, "../img/productos/cinema7.jpg");
const cuadro12 = new Producto("cl1", "David oneline", 1800, "../img/productos/classic1.jpg");
const cuadro13 = new Producto("cl2", "Greek Spongebob", 1800, "../img/productos/classic2.jpg");
const cuadro14 = new Producto("cl3", "Greek skull", 1800, "../img/productos/classic3.jpg");
const cuadro15 = new Producto("cl4", "David B&W ", 1800, "../img/productos/classic4.jpg");
const cuadro16 = new Producto("cl5", "Broken David ", 1800, "../img/productos/classic5.jpg");
const cuadro17 = new Producto("f1", "Hojitas", 1800, "../img/productos/flowers1.jpg");
const cuadro18 = new Producto("f2", "Plantita", 1800, "../img/productos/flowers2.jpg");
const cuadro19 = new Producto("f3", "Lirios", 1800, "../img/productos/flowers3.jpg");
const cuadro20 = new Producto("f4", "Vase", 1800, "../img/productos/flowers4.jpg");
const cuadro21 = new Producto("f5", "Girasol", 2000, "../img/productos/flowers5.jpg");
const cuadro22 = new Producto("g1", "Geometric Woman", 2300, "../img/productos/geometric1.jpg");
const cuadro23 = new Producto("g2", "Geometric Stairs", 2300, "../img/productos/geometric2.jpg");
const cuadro24 = new Producto("h1", "Cámara", 1500, "../img/productos/hobbies1.jpg");
const cuadro25 = new Producto("h2", "Yoga", 1500, "../img/productos/hobbies2.jpg");
const cuadro26 = new Producto("h3", "Ballet", 1500, "../img/productos/hobbies3.jpg");
const cuadro27 = new Producto("h4", "Escritor", 1500, "../img/productos/hobbies4.jpg");
const cuadro28 = new Producto("h5", "Piano", 1500, "../img/productos/hobbies5.jpg");
const cuadro29 = new Producto("h6", "Guitarrista", 1500, "../img/productos/hobbies6.jpg");
const cuadro30 = new Producto("h7", "Saxofón", 1500, "../img/productos/hobbies7.jpg");
const cuadro31 = new Producto("h8", "Violín", 1500, "../img/productos/hobbies8.jpg");
const cuadro32 = new Producto("h9", "Acordeón", 1500, "../img/productos/hobbies9.jpg");
const cuadro33 = new Producto("ol1", "Pancakes", 1800, "../img/productos/oneline1.jpg");
const cuadro34 = new Producto("ol2", "Tea Bag", 1800, "../img/productos/oneline2.jpg");
const cuadro35 = new Producto("ol3", "Coffee Time", 1800, "../img/productos/oneline3.jpg");
const cuadro36 = new Producto("ol4", "Pisa Tower", 1800, "../img/productos/oneline4.jpg");
const cuadro37 = new Producto("ol5", "A martini please", 1800, "../img/productos/oneline5.jpg");
const cuadro38 = new Producto("ol6", "Wine lover", 1800, "../img/productos/oneline6.jpg");
const cuadro39 = new Producto("ol7", "Woman Oneline", 1800, "../img/productos/oneline7.jpg");
const cuadro40 = new Producto("ol8", "Drowning in tea", 1800, "../img/productos/oneline8.jpg");
const cuadro41 = new Producto("ol9", "Woman face", 1800, "../img/productos/oneline9.jpg");
const cuadro42 = new Producto("ol10", "Family 1", 1800, "../img/productos/oneline10.jpg");
const cuadro43 = new Producto("ol11", "Family 2", 1800, "../img/productos/oneline11.jpg");
const cuadro44 = new Producto("ol12", "Family 3", 1800, "../img/productos/oneline12.jpg");
const cuadro45 = new Producto("ol13", "Gatito", 1800, "../img/productos/oneline13.jpg");
const cuadro46 = new Producto("ol14", "Koi fish", 1800, "../img/productos/oneline14.jpg");
const cuadro47 = new Producto("ol15", "Firulais", 1800, "../img/productos/oneline15.jpg");
const cuadro48 = new Producto("ol16", "Buda", 1800, "../img/productos/oneline16.jpg");
const cuadro49 = new Producto("ol17", "Chakras", 1800, "../img/productos/oneline17.jpg");
const cuadro50 = new Producto("v1", "Hongojo", 3500, "../img/productos/varios1.jpg");
const cuadro51 = new Producto("v2", "Feathers", 2000, "../img/productos/varios2.jpg");
const cuadro52 = new Producto("v3", "Sunset Man", 4000, "../img/productos/varios3.jpg");
const cuadro53 = new Producto("v4", "Woman", 4000, "../img/productos/varios4.jpg");
const cuadro54 = new Producto("v5", "Women díptico", 12000, "../img/productos/varios5.jpg");

//ARRAY DE PRODUCTOS:
const productos = [cuadro1, cuadro2, cuadro3, cuadro4, cuadro5, cuadro6, cuadro7, cuadro8, cuadro9, cuadro10, cuadro11, cuadro12, cuadro13, cuadro14, cuadro15, cuadro16, cuadro17, cuadro18, cuadro19, cuadro20, cuadro21, cuadro22, cuadro23, cuadro24, cuadro25, cuadro26, cuadro27, cuadro28, cuadro29, cuadro30, cuadro31, cuadro32, cuadro33, cuadro34, cuadro35, cuadro36, cuadro37, cuadro38, cuadro39, cuadro40, cuadro41, cuadro42, cuadro43, cuadro44, cuadro45, cuadro46, cuadro47, cuadro48, cuadro49, cuadro50, cuadro51, cuadro52, cuadro53, cuadro54];


// ARRAY DEL CARRITO:
let carrito = [];

// CARGAMOS CARRITO DESDE EL LOCALSTORAGE 
if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

// MODIFICAMOS EL DOM MOSTRANDO LOS PRODS:
const contProductos = document.getElementById("contProductos");

// MOSTRAR PRODUCTOS:
const mostrarProductos = () => {
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
mostrarProductos();

// AGREGAR AL CARRITO:
const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else{
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    }
    // Tabajamos con localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotal();
}

// MOSTRAMOS EL CARRITO:
const contCarrito = document.getElementById("contCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () =>{
    mostrarCarrito();
})

// MOSTRAR CARRITO:
const mostrarCarrito = () => {
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
};

// ELIMINAR PRODUCTO:
const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();
    // localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

// VACIAR CARRITO
const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () =>{
    eliminarTodoElCarrito();
})

// ELIMINAR TODO:
const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();
    localStorage.clear();
};

// MOSTRAR TOTAL DE COMPRA:
const total = document.getElementById("total");
const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total: ${totalCompra}`;
};