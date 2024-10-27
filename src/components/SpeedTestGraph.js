// components/SpeedTestGraph.js

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SpeedTestGraph = ({ data }) => {
  const chartData = {
    labels: data.map(entry => new Date(entry.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Download (100 kbps)',
        data: data.map(entry => entry.down_100kbps / 1_000_000), // ビット毎秒からメガビット毎秒に変換
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Download (1 Mbps)',
        data: data.map(entry => entry.down_1mbps / 1_000_000), // ビット毎秒からメガビット毎秒に変換
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
      {
        label: 'Download (10 Mbps)',
        data: data.map(entry => entry.down_10mbps / 1_000_000), // ビット毎秒からメガビット毎秒に変換
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
      },
      {
        label: 'Download (25 Mbps)',
        data: data.map(entry => entry.down_25mbps / 1_000_000), // ビット毎秒からメガビット毎秒に変換
        borderColor: 'rgba(255, 206, 86, 1)',
        fill: false,
      },
      {
        label: 'Upload (100 kbps)',
        data: data.map(entry => entry.up_100kbps / 1_000_000), // ビット毎秒からメガビット毎秒に変換
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
      },
      {
        label: 'Upload (1 Mbps)',
        data: data.map(entry => entry.up_1mbps / 1_000_000), // ビット毎秒からメガビット毎秒に変換
        borderColor: 'rgba(255, 159, 64, 1)',
        fill: false,
      },
      {
        label: 'Upload (10 Mbps)',
        data: data.map(entry => entry.up_10mbps / 1_000_000), // ビット毎秒からメガビット毎秒に変換
        borderColor: 'rgba(75, 192, 192, 0.5)',
        fill: false,
      },
      {
        label: 'Percentile Download',
        data: data.map(entry => entry.percentile_down / 1_000_000), // ビット毎秒からメガビット毎秒に変換
        borderColor: 'rgba(255, 99, 132, 0.5)',
        fill: false,
        dashed: true, // ダッシュ線のスタイルを設定（オプション）
      },
      {
        label: 'Percentile Upload',
        data: data.map(entry => entry.percentile_up / 1_000_000), // ビット毎秒からメガビット毎秒に変換
        borderColor: 'rgba(54, 162, 235, 0.5)',
        fill: false,
        dashed: true, // ダッシュ線のスタイルを設定（オプション）
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Speed (Mbps)',
        },
      }
    },
  };

  return <Line data={chartData} options={options} />;
};

export default SpeedTestGraph;
