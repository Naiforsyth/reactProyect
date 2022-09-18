const ItemCount = ({ stock, counter, setCantidad, handleAgregar }) => {

  const handleSumar = () => {
    if (counter < stock) {
      setCantidad(counter + 1);
    }
  };

  const handleRestar = () => {
    if (counter > 1) {
      setCantidad(counter - 1);
    }
  };

  return (
    <div>
      <button className="btn" onClick={handleRestar} disabled={counter === 1} > - </button>
      <span className="mx-3"> {counter} </span>
      <button className="btn" onClick={handleSumar} disabled={counter === stock} > + </button>
      <br></br>

      <button onClick={handleAgregar} className="btn">Agregar carrito</button>

    </div>
  );
};

export default ItemCount;
