import React, { useEffect, useState } from 'react';
import { dates, getIconUrl, months } from '../utils';
import './card.css';

export default function MainCard({ current }) {
  const [month, setMonth] = useState('');
  const [monthName, setMonthName] = useState('');
  const [day, setDay] = useState('');
  useEffect(() => {
    const dt = new Date(current?.dt * 1000).toLocaleDateString();
    const j = dates[new Date(dt).getDay()];
    setDay(j);
    setMonth(new Date(dt).getDate());
    setMonthName(months[new Date(dt).getMonth()]);
  }, [current]);
  return (
    <div className="main-card">
      <div className="row">
        <div className="col-3">
          <img src={getIconUrl(current?.weather[0]?.icon)} />
        </div>
        <div className="col-9">
          <h3>{day}</h3>
          <h4>
            {month} {monthName}{' '}
          </h4>
        </div>
        <div className="col-4">Jour-{current.temp.day}°C</div>
        <div className="col-6">Pression-{current?.pressure}hPa</div>
        <div className="col-4">Nuit-{current.temp.night}°C</div>
        <div className="col-6">Vent-1{current.wind_speed} km/h</div>
        <div className="col-5">humidité-{current.humidity}%</div>
      </div>
    </div>
  );
}
