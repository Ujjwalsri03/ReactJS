import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartData = {
    labels: ['Loan Amount', 'Total Interest'],
    datasets: [{
      label: 'Financial Data',
      data: [data.loanAmount, data.totalInterestGenerated],
      backgroundColor: ['#36A2EB', '#FF6384'],
      hoverBackgroundColor: ['#36A2EB', '#FF6384'],
    }],
  };

  return <Pie data={chartData} />;
};

export default PieChart;
