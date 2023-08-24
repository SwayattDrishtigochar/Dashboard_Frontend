import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const data = [
  { name: 'A', value: 80, color: '#ff5454' },
  { name: 'B', value: 45, color: '#f0d613' },
  { name: 'C', value: 25, color: '#3dcc5b' },
];
const cx = 200;
const cy = 150;
const iR = 70;
const oR = 100;

const NeedleChart = ({ value }) => {
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
        stroke='#none'
        fill={color}
      />,
    ];
  };
  return (
    <PieChart width={400} height={250}>
      <Pie
        dataKey='value'
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
  );
};

export default NeedleChart;
