import Grid2 from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography'
import Item from "../Item/item"
import { Stack } from '@mui/system';


const ItemList = ({ productos = [] }) => {

  return (
    <Grid2 container spacing={2} columns={16}>
      <Grid2 xs={12} md={5} lg={4}>
      <Typography variant='h2' align='right'>Productos</Typography>
      </Grid2>
      <Stack direction={'row'} spacing={2} justifyContent="space-evenly"> 
      {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
      </Stack>      
    </Grid2>
  )
}

export default ItemList