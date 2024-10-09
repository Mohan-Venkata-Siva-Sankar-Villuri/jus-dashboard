import React from 'react';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import { ArrowUpwardTwoTone, ArrowDownwardTwoTone } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ProjectionsVsActuals from './BarChart';

const Ecommerce: React.FC = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 4 }}>
        eCommerce
      </Typography>

      <Box sx={{ display: 'flex', gap: 4 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: 4,
            width: '50%',
            height: '400px',
          }}
        >
          <StatCard
            title="Customers"
            value="3,781"
            percentage="11.01"
            isIncrease={true}
            bgColor="#E3F5FF"
            link="/"
          />
          <StatCard
            title="Orders"
            value="1,219"
            percentage="0.03"
            isIncrease={false}
            bgColor={theme.palette.mode ==="light"?"#F7F9FB":"rgba(255, 255, 255, 0.05)"}
            link="/orders" 
          />
          <StatCard
            title="Revenue"
            value="$695"
            percentage="15.03"
            isIncrease={true}
            bgColor={theme.palette.mode ==="light"?"#F7F9FB":"rgba(255, 255, 255, 0.05)"}
            link="/"
          />
          <StatCard
            title="Growth"
            value="30.1%"
            percentage="6.08"
            isIncrease={true}
            bgColor="#E5ECF6"
            link="/" 
          />
        </Box>

        <Box sx={{ flex: '1', height: '300px' }}>
          <ProjectionsVsActuals />
        </Box>
      </Box>
    </Box>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  percentage: string;
  isIncrease: boolean;
  bgColor: string;
  link: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, percentage, isIncrease, bgColor, link }) => {
  const theme = useTheme();
  const navigate = useNavigate(); 

  const handleCardClick = () => {
    navigate(link);
  };

  return (
    <Card
      sx={{
        width: '202px',
        height: '112px',
        borderRadius: '16px',
        bgcolor: bgColor,
        cursor: 'pointer', 
      }}
      onClick={handleCardClick}
    >
      <CardContent>
        <Typography color={theme.palette.mode === "light" ? "black" : (title === "Orders" || title === "Revenue") ? "white" : "black"}


variant="body2" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, justifyContent: 'center', gap: '5px' }}>
          <Typography color={theme.palette.mode === "light" ? "black" : (title === "Orders" || title === "Revenue") ? "white" : "black"} variant="h4" sx={{ fontWeight: 'bold' }}>
            {value}
          </Typography>
          <Typography color={theme.palette.mode === "light" ? "black" : (title === "Orders" || title === "Revenue") ? "white" : "black"} variant="body2" sx={{ color: isIncrease ? 'green' : 'red' }}>
            {isIncrease ? `+${percentage}%` : `-${percentage}%`}
          </Typography>
          {isIncrease ? (
            <ArrowUpwardTwoTone sx={{ color: 'green', fontSize: 16 }} />
          ) : (
            <ArrowDownwardTwoTone sx={{ color: 'red', fontSize: 16 }} />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Ecommerce;
