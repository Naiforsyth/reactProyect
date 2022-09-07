
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './Item.scss'

const Item = ({ producto }) => {

  return (    
      <Card>
        <Card.Img variant="top" src={producto.img} className='image' />
        <Card.Body>
          <Card.Title>{producto.category}</Card.Title>
          <Card.Text>
            <p>{producto.nombre}</p>
            <p className='price'> <span>${producto.precio}</span></p>
          </Card.Text>
          <Link className='btn' to={`/item/${producto.id}`}>Ver más</Link>
        </Card.Body>
      </Card>    
  );
};

export default Item;
