import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const ItemCount = ({stock}) => {

  const [counter, setCounter] = useState(1)
  const [agregar, SetAgregar] = useState(false)

  const handleSumar = () => {

    if (counter < stock) {
      setCounter(counter + 1)
    }
  }

  const handleRestar = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  const handlerAgregar = () => {
    SetAgregar(!agregar)
  }


  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image=""
          alt="Tablet"
        />
        <CardContent>
          stock: 7
        </CardContent>
        <CardActions>
          <Button size='small' variant="contained" onClick={handleRestar}>-</Button>
          <Typography variant="h5">
            {counter}
          </Typography>
          <Button size='small' variant="contained" onClick={handleSumar}>+</Button>
        </CardActions>
        <Button size='large' onClick={handlerAgregar} variant={agregar ? "outlined" : "contained"} >{agregar ? "Agregado al carrito" : "Agregar Carrito"} </Button>
      </Card>
    </div>
  )
}



export default ItemCount