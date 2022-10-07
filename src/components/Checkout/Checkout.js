import { useState } from "react";
import { BsTruck } from "react-icons/bs";
import "./Checkout.scss";
import { useContext } from "react";
import { CartContext } from "../contexto/CartContext";
import { Link, Navigate } from "react-router-dom";
import { addDoc, collection, writeBatch, query, where, documentId, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import Swal from "sweetalert2";

const Checkout = () => {
  const { cart, cartTotal, terminarCompra } = useContext(CartContext);

  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    emailComprobado: "",
    direccion: "",
    ciudad: "",
    provincia: "",
    codigoPostal: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orden = {
      buyer: values,
      items: cart,
      total: cartTotal(),
    };

    if (values.nombre.length < 2) {
      Swal.fire({
        icon: 'error',
        title: '¡Coloca tu nombre!',
      })
      return;
    }

    if (values.apellido.length < 2) {
      Swal.fire({
        icon: 'error',
        title: '¡Coloca tu apellido!',
      })
      return;
    }

    if (values.email.length < 2) {
      Swal.fire({
        icon: 'error',
        title: '¡Coloca tu email!',
      })
      return;
    }

    if (values.emailComprobado !== values.email) {
      Swal.fire({
        icon: 'error',
        title: '¡Los emails deben coincidir!',
      })
      return
    }

    if (values.direccion.length < 2) {
      Swal.fire({
        icon: 'error',
        title: '¡Coloca tu dirección!',
      })
      return;
    }

    if (values.ciudad.length < 2) {
      Swal.fire({
        icon: 'error',
        title: '¡Coloca tu ciudad!',
      })
      return;
    }

    if (values.provincia.length < 2) {
      Swal.fire({
        icon: 'error',
        title: '¡Coloca tu provincia!',
      })
      return;
    }

    if (values.codigoPostal.length < 2) {
      Swal.fire({
        icon: 'error',
        title: '¡Coloca tu código postal!',
      })
      return;
    }

    const batch = writeBatch(db);
    const ordenesRef = collection(db, "ordenes");
    const productosRef = collection(db, "productos");

    const consulta = query(
      productosRef,
      where(
        documentId(),
        "in",
        cart.map((item) => item.id)
      )
    );

    const productos = await getDocs(consulta);

    const outOfStock = [];

    productos.docs.forEach((doc) => {
      const itemInCart = cart.find((item) => item.id === doc.id);

      if (doc.data().stock >= itemInCart.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemInCart.cantidad,
        });
      } else {
        outOfStock.push(itemInCart);
      }
    });

    if (outOfStock.length === 0) {
      batch.commit().then(() => {
        addDoc(ordenesRef, orden).then((doc) => {
          terminarCompra(doc.id);
        });
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: '¡Items sin stock!',
      })
    }
  };

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="wrap">
        <div className="container-checkout">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <BsTruck className="icon-form" />
            <h2>Detalle de envío</h2>

            <div className="name">
              <div>
                <label htmlFor="name">Nombre</label>
                <input
                  value={values.nombre}
                  onChange={handleInputChange}
                  type={"text"}
                  className="input-form"
                  placeholder="Nombre"
                  name="nombre"
                />
              </div>

              <div>
                <label htmlFor="lastName">Apellido</label>
                <input
                  value={values.apellido}
                  onChange={handleInputChange}
                  type={"text"}
                  className="input-form"
                  placeholder="Apellido"
                  name="apellido"
                />
              </div>
            </div>

            <div className="name">
              <div>
                <label htmlFor="lastName">Email</label>
                <input
                  value={values.email}
                  onChange={handleInputChange}
                  type={"email"}
                  className="input-form"
                  placeholder="Email"
                  name="email"
                />
              </div>

              <div>
                <label htmlFor="lastName">Confirmar Email</label>
                <input
                  value={values.emailComprobado}
                  onChange={handleInputChange}
                  type={"email"}
                  className="input-form"
                  placeholder="Email"
                  name="emailComprobado"
                />
              </div>
            </div>

            <div className="address">
              <label htmlFor="name">Dirección</label>
              <input
                value={values.direccion}
                onChange={handleInputChange}
                type={"text"}
                className="input-form"
                placeholder="Direccion"
                name="direccion"
              />
            </div>

            <div className="address-info">
              <div>
                <label htmlFor="city">Ciudad</label>
                <input
                  value={values.ciudad}
                  onChange={handleInputChange}
                  type={"text"}
                  name="ciudad"
                  placeholder="Ciudad"
                />
              </div>
              <div>
                <label htmlFor="city">Provincia</label>
                <input
                  value={values.provincia}
                  onChange={handleInputChange}
                  type={"text"}
                  name="provincia"
                  placeholder="Provincia"
                />
              </div>
              <div>
                <label htmlFor="city">Código Postal</label>
                <input
                  value={values.codigoPostal}
                  onChange={handleInputChange}
                  type={"text"}
                  name="codigoPostal"
                  placeholder="Código Postal"
                />
              </div>
            </div>

            <div className="btns">
              <button type={"submit"} className="btn-checkout">
                {" "}
                Enviar
              </button>
              <Link className="btn-checkout" to={"/cart"}>
                Regresar al carrito
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
