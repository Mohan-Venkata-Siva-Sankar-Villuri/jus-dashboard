import { useLayoutEffect } from 'react';
import { Card, CardContent, Typography, useTheme } from '@mui/material';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import CountriesList from './CountriesList';

type Props = {}

const RevenueByLocation = (props: Props) => {
const theme = useTheme();


  useLayoutEffect(() => {
    let root = am5.Root.new('mapChartDiv');

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoMercator(),
      })
    );

    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ['AQ'],
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color('#A8C5DA'),
      stroke: am5.color('#ffffff'), 
      strokeWidth: 0.5,
    });

    let pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        valueField: 'value',
        latitudeField: 'latitude',
        longitudeField: 'longitude',
      })
    );

    pointSeries.bullets.push(function () {
      let circle = am5.Circle.new(root, {
        radius: 3,
        fill: am5.color(0x000000), 
        strokeWidth: 1,
        stroke: am5.color(0xffffff), 
      });

      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });

    pointSeries.data.setAll([
      { title: 'New York', latitude: 40.7128, longitude: -74.006, value: 72 },
      { title: 'San Francisco', latitude: 37.7749, longitude: -122.4194, value: 39 },
      { title: 'Sydney', latitude: -33.8688, longitude: 151.2093, value: 25 },
      { title: 'Singapore', latitude: 1.3521, longitude: 103.8198, value: 61 },
    ]);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <Card sx={{ width: '30%', borderRadius: '16px', bgcolor:theme.palette.mode ==="light"? '#F7F9FB' :"rgba(255, 255, 255, 0.05)" }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          Revenue by Location
        </Typography>
        <div id="mapChartDiv" style={{ width: '100%', height: '82px' }}></div>
        <CountriesList />
      </CardContent>
    </Card>
  );
};

export default RevenueByLocation;
