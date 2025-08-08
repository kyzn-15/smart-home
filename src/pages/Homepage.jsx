import React from 'react';
import { Link } from 'react-router-dom';
import { Thermometer, Wifi, Home } from 'lucide-react';

const Homepage = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="title">Welcome to SmartHome</h1>
          <p className="subtitle">
            Monitor and control your home environment with our simple and intuitive smart home system
          </p>
        </div>

        <div className="grid">
          <div className="card">
            <div className="card-icon blue-bg">
              <Thermometer className="icon-blue" />
            </div>
            <h3 className="card-title">Temperature Control</h3>
            <p className="card-text">
              Monitor real-time temperature data from your sensors
            </p>
            <Link to="/temperature" className="link-btn blue-text">
              View Temperature →
            </Link>
          </div>

          <div className="card">
            <div className="card-icon green-bg">
              <Wifi className="icon-green" />
            </div>
            <h3 className="card-title">Smart Connectivity</h3>
            <p className="card-text">
              All devices connected and monitored in real-time
            </p>
            <span className="status green-text">
              Status: Online
            </span>
          </div>

          <div className="card">
            <div className="card-icon purple-bg">
              <Home className="icon-purple" />
            </div>
            <h3 className="card-title">Home Automation</h3>
            <p className="card-text">
              Automate your daily routines with smart controls
            </p>
            <span className="status purple-text">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
