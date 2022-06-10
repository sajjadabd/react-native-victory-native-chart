/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';




import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';




import { 
  VictoryBar, 
  VictoryChart, 
  VictoryTheme,
  VictoryAxis,
  VictoryLine,
  VictoryScatter,
  VictoryGroup,
  VictoryStack,
  VictoryArea,
  VictoryCandlestick,
  VictoryErrorBar,
  VictoryVoronoi,
  VictoryZoom,
  VictoryBrush,
  VictorySelection,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryLegend,
  VictoryPortal,
  VictoryClipContainer,
  VictoryLabel,
  VictoryPie,
  VictoryBarHorizontal,
  VictoryBarVertical,
  VictoryAreaVertical,
  VictoryAreaHorizontal,
} from 'victory-native';


const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
      <View style={styles.container}>


      <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={20}
      domain={{ x: [0, 10], y: [0, 10] }}

    >
      <VictoryArea
        style={{ data: { fill: "#c43a31" } }}
        data={[
          { x: 0, y: 3 },
          { x: 1, y: 1 },
          { x: 2, y: 4 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 5 },
          { x: 6, y: 6 },
          { x: 7, y: 7 },
          { x: 8, y: 6 },
          ]
        }
      />
    </VictoryChart>

    



      <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>







      <VictoryChart 
        theme={VictoryTheme.material}
        domainPadding={20}
        padding={{ top: 50, bottom: 50, left: 50, right: 50 }}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) => `${datum.quarter}: $${datum.earnings}`}
          />
        }
        width={400}
        height={400}
        scale={{ x: "time", y: "linear" }}
      >
          <VictoryBar 
          data={data} 
          x="quarter" 
          y="earnings" />
      </VictoryChart>






      <VictoryChart height={400} width={400}
          domainPadding={{ x: [ 0 , 100 ], y: [0, 20] }}
          scale={{ x: "time" }}
          domain={{ x: [new Date(1980, 1, 1), new Date(2010, 1, 1)] }}
          theme={VictoryTheme.material}
          padding={{ top: 50, bottom: 50, left: 50, right: 50 }}
        >
          <VictoryBar
            style={{ 
              data: { fill: "tomato" },
              labels: { fill: "white" }
            }}
            data={[
              { x: new Date(1986, 1, 1), y: 2 },
              { x: new Date(1996, 1, 1), y: 3 },
              { x: new Date(2006, 1, 1), y: 5 },
              { x: new Date(2016, 1, 1), y: 4 }
            ]}
          />
        </VictoryChart>







      <VictoryPie
          style={{ labels: { fill: "white" } }}
          innerRadius={100}
          labelRadius={120}
          labels={({ datum }) => `# ${datum.y}`}
          
          data={[
            { x: 1, y: 5 },
            { x: 2, y: 4 },
            { x: 3, y: 2 },
            { x: 4, y: 3 },
            { x: 5, y: 1 }
          ]}
        />




      
        <VictoryPie
          theme={VictoryTheme.material} 
          width={400} height={400}
          data={[
            { x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 }
          ]}
          innerRadius={68} 
          labelRadius={100}
          style={{ labels: { fontSize: 20, fill: "black" } }}
        />
      


    
      {/* <Svg  viewBox="0 0 200 200">
        <VictoryPie
          standalone={false}
          width={200} height={200}
          data={[
            { x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 }
          ]}
          innerRadius={68} 
          labelRadius={100}
          style={{ labels: { fontSize: 20, fill: "white" } }}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 20 , fill: "white" }}
          x={100} y={100}
          text="Pie!"
        />
      </Svg> */}






        <VictoryChart  
        height={390}
        width={400}
        domainPadding={{ x: 30, y: [20, 20, 20, 20] }}
        padding={{ top: 50, bottom: 50, left: 50, right: 50 }}
        domain={{ x: [0, 7], y: [0, 7] }}
        theme={VictoryTheme.material} 
        >
          <VictoryLine
            interpolation={'linear'} 
            data = {[
              { x: 0, y: 0 },
              { x: 1, y: 2 },
              { x: 2, y: 1 },
              { x: 3, y: 4 },
              { x: 4, y: 3 },
              { x: 5, y: 5 }
            ]}
            style={{ data: { stroke: "#c43a31" } }}
          />
          <VictoryScatter 
            data = {[
              { x: 0, y: 0 },
              { x: 1, y: 2 },
              { x: 2, y: 1 },
              { x: 3, y: 4 },
              { x: 4, y: 3 },
              { x: 5, y: 5 }
            ]}
            size={5}
            style={{ data: { fill: "#c43a31" } }}
          />
        </VictoryChart>


        
      


        <VictoryBar 
          theme={VictoryTheme.material} 
          data={data} 
          domainPadding={10}
          x="quarter" 
          y="earnings" 
          height={200}
          width={200}
          
        />
      


      <VictoryChart 
        theme={VictoryTheme.material}
        domainPadding={20}
        padding={{ top: 0, bottom: 50, left: 50, right: 50 }}
        height={200}
        width={200}
        domain={{ x: [0, 10], y: [0, 20] }}
      />

      <VictoryPie
        theme={VictoryTheme.material}
        height={200}
        width={200}
        domain={{ x: [0, 10], y: [0, 20] }}
        data={[
          { x: 'a', y: 10 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 4 },
          { x: 5, y: 5 },
          { x: 6, y: 6 },
          { x: 7, y: 7 },
          { x: 8, y: 8 },
          { x: 9, y: 9 },
          { x: 10, y: 10 }
        ]}
      />



      <VictoryPie
        theme={VictoryTheme.material}
        labelRadius={140}
        startAngle={-90}
        endAngle={90}
        height={300}
        width={300}
        padding={{ top: 50, bottom: 50, left: 50, right: 50 }}
        data={[
          { x: 1, y: 2, label: "one" },
          { x: 2, y: 3, label: "two" },
          { x: 3, y: 5, label: "three" }
        ]}
      />





        <VictoryPie
        style={{
          data: {
            fillOpacity: 0.9, stroke: "#c43a31", strokeWidth: 3
          },
          labels: {
            fontSize: 15, fill: "#fff"
          }
        }}
        theme={VictoryTheme.material}
        labelRadius={140}
        startAngle={-90}
        endAngle={90}
        height={300}
        width={300}
        padding={{ top: 50, bottom: 50, left: 50, right: 50 }}
        data={[
          { x: 1, y: 2, label: "one" },
          { x: 2, y: 3, label: "two" },
          { x: 3, y: 5, label: "three" }
        ]}
      />






        <VictoryPie
        theme={VictoryTheme.material}
        padAngle={({ datum }) => datum.y}
        labelRadius={140}
        innerRadius={50}
        startAngle={-90}
        endAngle={90}
        height={300}
        width={300}
        padding={{ top: 50, bottom: 50, left: 50, right: 50 }}
        data={[
          { x: 1, y: 2, label: "one" },
          { x: 2, y: 3, label: "two" },
          { x: 3, y: 5, label: "three" }
        ]}
      />







      <VictoryLine
        theme={VictoryTheme.material}
        height={200}
        width={200}
        domain={{ x: [0, 10], y: [0, 20] }}
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 4 },
          { x: 5, y: 5 },
          { x: 6, y: 6 },
          { x: 7, y: 7 },
          { x: 8, y: 8 },
          { x: 9, y: 9 },
          { x: 10, y: 10 }
        ]}
      />




        




      
      
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container : {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
