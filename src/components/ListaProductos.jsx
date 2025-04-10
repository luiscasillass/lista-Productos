import React, { useState, useEffect } from "react"; // useState lo usamos para guardar la lista de productos que vamos a mostrar en pantalla del usuario
import "./ListaProductos.css"; 

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => { // está haciendo una supuesta llamada a una API
    setTimeout(() => {
      setProductos([
        {
          id: 1, nombre: "Sudadera Tec Azul", precio: 1699, precioDescuento: 999, imagen: "https://tecstore.com/sudadera.png",
        },
        {
          id: 2, nombre: "Cilindro Tec", precio: 1049, precioDescuento: 649, imagen: "https://tecstore.com/cilindro.png",
        },
        {
          id: 3, nombre: "Mochila Oficial", precio: 2499, precioDescuento: 1229, imagen: "https://tecstore.com/mochila.png",
        }
      ]);
    }, 1000);
  }, []);

  return (
    <div className="lista-productos">
      {productos.map((producto) => ( // map lo usamos para recorrer cada producto de nuestra lista y, por cada uno, pintamos una tarjetita con su nombre, precio, imagen y botón.
        <div className="tarjeta" key={producto.id}>
          <img src={producto.imagen} alt={producto.nombre} />
          <h3>{producto.nombre}</h3>
          <p>
            <span className="precio-anterior">${producto.precio}</span>
            <span className="precio-descuento">${producto.precioDescuento}</span>
          </p>
          <button onClick={() => alert(`Agregado: ${producto.nombre}`)}>
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaProductos;
