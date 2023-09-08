import { Box } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const data = [
  { name: 'A', value: 50, color: '#3dcc5b' },
  { name: 'B', value: 10, color: '#f0d613' },
  { name: 'C', value: 40, color: '#ff5454' },
];
const cx = 190;
const cy = 150;
const iR = 50;
const oR = 100;

const NeedleChart = ({ value }) => {
  //* fuction to draw the needle
  const needle = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
      <circle key='circle' cx={x0} cy={y0} r={r} fill={color} stroke='none' />,
      <path
        key='path'
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        stroke='none'
        fill={color}
      />,
    ];
  };
  return (
    // <Box
    //   display={'flex'}
    //   justifyContent={'center'}
    //   alignItems={'center'}
    //   width={'100%'}
    //   height={'100%'}
    // >
    <PieChart width={400} height={250}>
      <Pie
        dataKey='value'
        cornerRadius={5}
        paddingAngle={7}
        startAngle={180}
        endAngle={0}
        data={data}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill='#8884d8'
        stroke='none'
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      {needle(value, data, cx, cy, iR, oR, '#000000')}
    </PieChart>
    // </Box>
  );
};

export default NeedleChart;
