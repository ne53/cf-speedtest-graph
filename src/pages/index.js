// pages/index.js

import { useEffect, useState } from 'react';
import SpeedTestGraph from '../components/SpeedTestGraph';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // API からデータを取得
    const fetchData = async () => {
      const res = await fetch('http://127.0.0.1:5000/results');
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Speed Test Graph</h1>
      {data.length > 0 ? <SpeedTestGraph data={data} /> : <p>Loading...</p>}
    </div>
  );
}
