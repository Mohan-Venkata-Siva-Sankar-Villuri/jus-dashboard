import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Card, CardContent, Box, useTheme } from '@mui/material';
import TotalSalesChart from './TotalSales';

type Product = {
  name: string;
  price: string;
  quantity: number;
  amount: string;
};

const products: Product[] = [
  { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
  { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
  { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
  { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
  { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' },
];

const TopSellingProducts: React.FC = () => {
const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', gap: 4,mt:3 }}>
    <Card sx={{bgcolor:theme.palette.mode ==="light"? '#F7F9FB' :"rgba(255, 255, 255, 0.05)", borderRadius: '16px', width: '70%', height: '336px' }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          Top Selling Products
        </Typography>

        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: '#828282' }}>Name</TableCell>
                <TableCell align="left" sx={{ fontWeight: 'bold', color: '#828282' }}>Price</TableCell>
                <TableCell align="left" sx={{ fontWeight: 'bold', color: '#828282' }}>Quantity</TableCell>
                <TableCell align="left" sx={{ fontWeight: 'bold', color: '#828282' }}>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="left">{product.price}</TableCell>
                  <TableCell align="left">{product.quantity}</TableCell>
                  <TableCell align="left">{product.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
    <TotalSalesChart/>
    </Box>
  );
};

export default TopSellingProducts;
