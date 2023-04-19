const carrito = {
  
  productos: [
    {
      nombre: 'papel higienico',
      unidades: 4,
      precio: 5
    },
    {
      nombre: 'chocolate',
      unidades: 2,
      precio: 1.5
    },
  ],
  
  get precioTotal() {
    let acumuladorPrecio = 0;
    for (let producto of this.productos) {
      acumuladorPrecio += producto.precio * producto.unidades;
    }
    return acumuladorPrecio;
  }
}