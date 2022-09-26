import { useState } from "react";
import { BsTruck } from "react-icons/bs";
import "./Checkout.scss";
import { useContext } from 'react';
import { CartContext } from '../contexto/CartContext';
import { Link, Navigate } from "react-router-dom";
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/config'
 

const Checkout = () => {

  const { cart, cartTotal, terminarCompra } = useContext(CartContext)
  
  const [values, setValues] = useState({
    nombre: '',
    apellido: '',
    email: '',
    direccion: '',
    ciudad: '',
    provincia: '',
    codigoPostal: '',
  })

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    const orden = {

      buyer: values,
      items: cart,
      total: cartTotal()
    }

    if (values.nombre.length < 2) {
      alert("Nombre incorrecto")
      return
    }

    if (values.apellido.length < 2) {
      alert("Apellido incorrecto")
      return
    }

    if (values.email.length < 2) {
      alert("Correo incorrecto")
      return
    }

    if (values.direccion.length < 2) {
      alert("Direccion incorrecto")
      return
    }

    if (values.ciudad.length < 2) {
      alert("Ciudad incorrecto")
      return
    }

    if (values.provincia.length < 2) {
      alert("Provincia incorrecto")
      return
    }

    if (values.codigoPostal.length < 2) {
      alert("Codigo Postal incorrecto")
      return
    }

    const ordenesRef = collection (db, 'ordenes')

    addDoc(ordenesRef, orden)
      .then((doc) => {
        terminarCompra(doc.id)
      })
  }


  if (cart.length === 0) {
    return <Navigate to="/" />
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
                  placeholder="Provincia" />
              </div>
              <div>
                <label htmlFor="city">Código Postal</label>
                <input
                  value={values.codigoPostal}
                  onChange={handleInputChange}
                  type={"text"}
                  name="codigoPostal"
                  placeholder="Código Postal" />
              </div>
            </div>
            <div className="btns">
              <button type={"submit"} className="btn-checkout"> Enviar
              </button>
              <Link className="btn-checkout" to={'/cart'}>Regresar al carrito</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};


export default Checkout;
