import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

const Item = ({ producto }) => {
  return (
    <Stack direction="row">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" width="150" image={producto.img} />
        <CardContent>
          <h4>{producto.nombre}</h4>
          <p>Precio: {producto.precio}</p>
          <small>Stock disponible: {producto.stock}</small>
          <p>{producto.desc}</p>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">
            Ver más
          </Button>
        </CardActions>
      </Card>
      <hr/>
    </Stack>
  );
};

export default Item;
