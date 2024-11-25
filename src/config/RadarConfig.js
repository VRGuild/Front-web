export const chartOptions = {
  elements: {
    line: {
      borderWidth: 2,
      borderColor: '#393939',
    },
    point: {
      pointBackgroundColor: '#393939',
    },
  },
  scales: {
    r: {
      ticks: {
        stepSize: 1,
        display: true,
      },
      grid: {
        color: '#CECECE', // 그리드 색상
        lineWidth: 2,
      },
      pointLabels: {
        font: {
          size: 10,
          weight: '700',
          family: 'Pretendard',
        },
        color: '#000',
      },
      angleLines: {
        display: true,
        color: '#CECECE',
        lineWidth: 2,
      },
      suggestedMin: 0,
      suggestedMax: 5, // 데이터값의 최대
    },
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          size: 20,
          weight: '700',
          family: 'Pretendard',
        },
        color: '#000',
      },
    },
  },
  animation: {
    duration: 0,
  },
};
