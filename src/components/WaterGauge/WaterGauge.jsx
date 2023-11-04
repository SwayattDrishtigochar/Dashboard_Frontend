import LiquidFillGauge from 'react-liquid-gauge';
import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import { Box } from '@mui/material';

const WaterGauge = ({ value }) => {
  //   const [value, setValue] = useState();
  const startColor = '#dc143c'; // cornflowerblue
  const endColor = '#6495ed'; // crimson

  const radius = 200;
  const interpolate = interpolateRgb(startColor, endColor);
  const fillColor = interpolate(value / 100);

  const gradientStops = [
    {
      key: '0%',
      stopColor: color(fillColor).darker(0.5).toString(),
      stopOpacity: 1,
      offset: '0%',
    },
    {
      key: '50%',
      stopColor: fillColor,
      stopOpacity: 0.75,
      offset: '50%',
    },
    {
      key: '100%',
      stopColor: color(fillColor).brighter(0.5).toString(),
      stopOpacity: 0.5,
      offset: '100%',
    },
  ];

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      padding={'10px '}
      height={250}
    >
      <LiquidFillGauge
        // style={{ margin: '0 auto' }}
        width={radius * 1}
        height={radius * 1}
        value={value}
        percent='%'
        textSize={1}
        textOffsetX={0}
        textOffsetY={0}
        textRenderer={(props) => {
          const roundedValue = Math.round(props.value);
          const radius = Math.min(props.height / 2, props.width / 2);
          const textPixels = (props.textSize * radius) / 2;
          const valueStyle = {
            fontSize: textPixels,
          };
          const percentStyle = {
            fontSize: textPixels * 0.6,
          };

          return (
            <tspan>
              <tspan className='value' style={valueStyle}>
                {roundedValue}
              </tspan>
              <tspan style={percentStyle}>{props.percent}</tspan>
            </tspan>
          );
        }}
        riseAnimation
        waveAnimation
        animationDuration={1}
        waveFrequency={2}
        waveAmplitude={1}
        gradient
        gradientStops={gradientStops}
        circleStyle={{
          fill: fillColor,
        }}
        waveStyle={{
          fill: fillColor,
        }}
        textStyle={{
          fill: color('#444').toString(),
          fontFamily: 'Arial',
        }}
        waveTextStyle={{
          fill: color('#fff').toString(),
          fontFamily: 'Arial',
        }}
      />
      {/* <div
        style={{
          margin: '20px auto',
          width: 120,
        }}
      ></div> */}
    </Box>
  );
};

export default WaterGauge;
