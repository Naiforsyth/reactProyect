import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexto/CartContext";
import EmptyCart from "../EmptyCart/EmptyCart";
import "./Cart.scss";

const Cart = () => {
  const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext);

  return cart.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="container-cart">
      <h1>Tu Compra</h1>
      <hr />
      {cart.map((item) => (
        <div className="box-cart" key={item.id}>
          <img className="image-cart" src={item.imagen} alt={item.name} />
          <div className="content-cart">
            <h2 className="title-cart">{item.nombre}</h2>
            <p className="quantity-cart">
              Cantidad: <span>{item.cantidad}</span>
            </p>
            <p className="price-cart">
              Precio: <span className="number">{item.precio}</span>
            </p>
            <button onClick={() => removeItem(item.id)} className="btn-remove">
              Eliminar del Carrito
            </button>
          </div>
        </div>
      ))}
      <div className="box-total">
        <h3 className="total-cart">Total: ${cartTotal()}</h3>
        <button onClick={emptyCart} className="btn-total">
          Vaciar Carrito
        </button>
        <Link className="btn-total " to={'/checkout'}> terminar mi compra</Link>
      </div>
    </div>
  );
};

export default Cart;
