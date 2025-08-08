import React, { useState, useEffect } from 'react';
import { Thermometer } from 'lucide-react';

const Temperature = () => {
  const [temperatureData, setTemperatureData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTemperature = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://kevinwilbertjohan.pythonanywhere.com/temperature');
      if (!response.ok) {
        throw new Error('Failed to fetch temperature data');
      }
      const data = await response.json();
      setTemperatureData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemperature();
    const interval = setInterval(fetchTemperature, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getTemperatureColor = (temp) => {
    if (temp < 20) return 'blue-text';
    if (temp < 25) return 'green-text';
    if (temp < 30) return 'yellow-text';
    return 'red-text';
  };

  const getTemperatureStatus = (temp) => {
    if (temp < 20) return 'Cold';
    if (temp < 25) return 'Cool';
    if (temp < 30) return 'Warm';
    return 'Hot';
  };

  return (
    <div className="page">
      <div className="container">
        <div className="text-center mb-8">
          <h1 className="title">Temperature Monitor</h1>
          <p className="subtitle">Real-time temperature data from your sensors</p>
        </div>

        <div className="card p-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="loader"></div>
              <p className="subtitle">Loading temperature data...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="error-box">
                <p className="error-text">Error: {error}</p>
              </div>
              <button onClick={fetchTemperature} className="btn-primary">
                Retry
              </button>
            </div>
          ) : temperatureData ? (
            <div className="text-center">
              <div className="mb-8">
                <div className={`temp-big ${getTemperatureColor(temperatureData.temperature)}`}>
                  {temperatureData.temperature}°{temperatureData.unit}
                </div>
                <div className="temp-status">
                  {getTemperatureStatus(temperatureData.temperature)}
                </div>
                <div className="timestamp">
                  Last updated: {formatTimestamp(temperatureData.timestamp)}
                </div>
              </div>
              <div className="grid three">
                <div className="small-card">
                  <div className="small-value">{temperatureData.temperature}°</div>
                  <div className="small-label">Current</div>
                </div>
                <div className="small-card">
                  <div className="small-value">{temperatureData.unit}</div>
                  <div className="small-label">Unit</div>
                </div>
                <div className="small-card">
                  <div className="small-value green-text">Online</div>
                  <div className="small-label">Status</div>
                </div>
              </div>
              <button onClick={fetchTemperature} className="btn-primary mt-8">
                <Thermometer className="icon" />
                <span>Refresh Data</span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Temperature;
