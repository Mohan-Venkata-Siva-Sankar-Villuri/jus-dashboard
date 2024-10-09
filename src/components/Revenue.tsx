import React, { useLayoutEffect } from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import RevenueByLocation from './RevenueByLocation';


const Revenue: React.FC = () => {

  const theme = useTheme();

  useLayoutEffect(() => {
    let root = am5.Root.new('lineChartDiv');

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        layout: root.verticalLayout,
      })
    );


    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'month',
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    xAxis.data.setAll([
      { month: 'Jan' },
      { month: 'Feb' },
      { month: 'Mar' },
      { month: 'Apr' },
      { month: 'May' },
      { month: 'Jun' },
    ]);


    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    let currentWeekSeries = chart.series.push(
      am5xy.SmoothedXYLineSeries.new(root, {
        name: 'Current Week',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'current',
        categoryXField: 'month',
        stroke: am5.color(0x000000), 
        tooltip: am5.Tooltip.new(root, { labelText: '{name}: ${valueY}K' }),
      })
    );

    currentWeekSeries.strokes.template.setAll({
      strokeWidth: 3, 
    });

    let previousWeekSeries = chart.series.push(
      am5xy.SmoothedXYLineSeries.new(root, {
        name: 'Previous Week',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'previous',
        categoryXField: 'month',
        stroke: am5.color(0x90caf9),
        tooltip: am5.Tooltip.new(root, { labelText: '{name}: ${valueY}K' }),
      })
    );

    previousWeekSeries.strokes.template.setAll({
      strokeWidth: 2,
      strokeDasharray: [5, 5],
    });

    currentWeekSeries.data.setAll([
      { month: 'Jan', current: 12 },
      { month: 'Feb', current: 19 },
      { month: 'Mar', current: 15 },
      { month: 'Apr', current: 20 },
      { month: 'May', current: 25 },
      { month: 'Jun', current: 30 },
    ]);

    previousWeekSeries.data.setAll([
      { month: 'Jan', previous: 10 },
      { month: 'Feb', previous: 22 },
      { month: 'Mar', previous: 30 },
      { month: 'Apr', previous: 18 },
      { month: 'May', previous: 22 },
      { month: 'Jun', previous: 28 },
    ]);

    chart.set('cursor', am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Card sx={{ width: '70%', borderRadius: '16px', bgcolor: '#F7F9FB' }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography color={theme.palette.mode ==="light"?"black":"black"} variant="h6" sx={{ fontWeight: 'bold' }}>
              Revenue
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography sx={{ fontWeight: 'bold', color: 'black' }}>• Current Week: $58,211</Typography>
              <Typography sx={{ fontWeight: 'bold', color: '#90caf9' }}>• Previous Week: $68,768</Typography>
            </Box>
          </Box>
          <div id="lineChartDiv" style={{ width: '100%', height: '300px' }}></div>
        </CardContent>
      </Card>
      <RevenueByLocation />
    </Box>
  );
};

export default Revenue;
