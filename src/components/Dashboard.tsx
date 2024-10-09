import {   Box, useTheme } from '@mui/material'
import Ecommerce from './Ecommerce'
import Revenue from './Revenue'
import TopSellingProducts from './TopSellingProducts'

type Props = {}

const Dashboard = (props: Props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor:theme.palette.mode ==="light"?  "#ffffff":'#000000' ,
        padding: 4,
        ml: `240px`,  
        mr: `320px`, 
        mt: `64px`,   
        height:'100%'
      }}
    >
     <Ecommerce/>
     <Revenue/>
     <TopSellingProducts/>
    </Box>
  )
}

export default Dashboard