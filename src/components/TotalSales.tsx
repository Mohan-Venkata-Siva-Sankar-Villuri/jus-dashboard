import React, { useLayoutEffect } from 'react';
import { Card, CardContent, Typography, useTheme } from '@mui/material';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const TotalSalesChart: React.FC = () => {
const theme = useTheme();

  useLayoutEffect(() => {
    let root = am5.Root.new('salesChartDiv');

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        innerRadius: am5.percent(50),
      })
    );

    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: 'value',
        categoryField: 'category',
        innerRadius: am5.percent(50), 
      })
    );

    series.data.setAll([
      { category: 'Direct', value: 300.56, color: am5.color(0x000000) },
      { category: 'Affiliate', value: 135.18, color: am5.color(0xA3E2A4) },
      { category: 'Sponsored', value: 154.02, color: am5.color(0x9090F9) },
      { category: 'E-mail', value: 48.96, color: am5.color(0xA8C5DA) },
    ]);

    series.slices.template.setAll({
      strokeWidth: 2,
      stroke: am5.color(0xffffff),
    });

    series.labels.template.setAll({
      text: '',
    });

    series.ticks.template.setAll({
      visible: false, 
    });

    series.slices.template.adapters.add('fill', (fill, target) => {
      const dataItem = target.dataItem as am5.DataItem<any>;
      return dataItem?.get('color') || fill;
    });

    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        layout: root.verticalLayout,
        x: am5.percent(55),
        marginTop: 20,
      })
    );

    legend.data.setAll(series.dataItems);

    series.slices.template.setAll({
      tooltipText: '{category}: ${value}',
    });

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <Card sx={{ width: '30%', borderRadius: '16px', bgcolor: '#F7F9FB' }}>
      <CardContent>
        <Typography color={theme.palette.mode ==="light"?"black":"black"} variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          Total Sales
        </Typography>
        <div id="salesChartDiv" style={{ width: '100%', height: '232px' }}></div>
      </CardContent>
    </Card>
  );
};

export default TotalSalesChart;
