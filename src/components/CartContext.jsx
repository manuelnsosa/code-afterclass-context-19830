import { React, createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const indexPlant = cart.findIndex((cartItem) => cartItem.id === item.id);
    //uso findIndex porque nos permite acceder directamente a la posición del array que coincida con el id del item que queremos editar
    //en caso de existir
    if (indexPlant !== -1) {
      // el findIndex devuelve -1 si no encuentra ningun elemento que coincida la condición del callback
      const newCart = [...cart];
      newCart[indexPlant].count = newCart[indexPlant].count + item.count;
      setCart(newCart);
    } else {
      //si no existe el item en el carrito, lo añadimos
      setCart([...cart, item]);
    }
  };
  const deleteFromCart = (id) => {
    //eliminamos el item del carrito filtrando los que no coincidan con el id
    setCart(cart.filter((plant) => plant.id !== id));
  };

  const buyAll = () => {
    //eliminamos todos los items del carrito
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart, buyAll }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
