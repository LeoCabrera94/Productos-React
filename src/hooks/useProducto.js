import { useEffect, useState } from "react";
import { obtenerProductos } from "../servicios/ProductoService";

export default function useProducto() {
  const [productos, setProductos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    obtenerProductos().then((data) => {
      setProductos(data);
      // seteamos a la variable de estado
    });
  }, []);

  function agregarFavoritos(producto) {
    const newFavoritos = [...favoritos];
    newFavoritos.push(producto);
    setFavoritos(newFavoritos);
  }
  function quitarFavoritos(producto) {
    const newFavoritos = favoritos.filter((e) => e.id !== producto);
    setFavoritos(newFavoritos);
  }
  return { productos, favoritos, agregarFavoritos, quitarFavoritos };
}
