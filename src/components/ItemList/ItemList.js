import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from '../Item/item';
import './ItemList.scss'

const ItemList = ({ productos = [] }) => {

  return (
    <Container className='products' >
      <Row>
        <Col>
          <h1>Productos</h1>
        </Col>
      </Row>
      <Row  >
        <Col className='box-container'>{productos.map((prod) => <Item producto={prod} key={prod.id} />)}
        </Col>
      </Row>
    </Container>
  )
}

export default ItemList