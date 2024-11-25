import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { chartOptions } from '../../../config/RadarConfig';
// Chart.js 스케일 및 요소 등록
Chart.register(...registerables);

const StRadar = ({ data }) => {
  const chartData = {
    labels: ['클라이언트', 'PM', '디자인', '커뮤니케이션', 'AI', '서버'],
    datasets: [
      {
        label: '스탯',
        data: data,
        backgroundColor: 'rgba(0,0, 0, 0.7)',
        borderColor: '#393939',
        borderWidth: 5,
        pointBackgroundColor: '#393939',
        fill: true,
      },
    ],
  };

  return (
    <Radar data={chartData} options={chartOptions} width={10} height={10} />
  );
};

export default StRadar;
