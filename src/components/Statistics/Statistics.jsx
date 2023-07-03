import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, LineChart } from 'recharts';

const Statistic = () => {
  const data02 = [
    { name: 'A1', value: 57 },
    { name: 'A2', value: 60 },
    { name: 'A3', value: 60 },
    { name: 'A4', value: 57 },
    { name: 'A5', value: 60 },
    { name: 'A6', value: 59 },
    { name: 'A7', value: 60 },
    { name: 'A8', value: 60 },
  ];
  return (
    <div  >
      <div className='flex items-center justify-center'>
        <PieChart width={450} height={450}>
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="#ec4899" label />
        </PieChart>
      </div>
      <div >
        <h1 className='text-center font-extrabold text-4xl mb-5'>
          Assignment <br></br>
        ::Marks::</h1>
      </div>
    </div >
  );
};

export default Statistic;