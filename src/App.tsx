import React from 'react';
import GetWeather from './compontents/GetWeather';
import GetForecast from './compontents/GetForecast';

function App() {
  return (
    <div className="font-body p-4 bg-background text-text min-h-screen">
      <GetWeather/>
      <h2 className="font-display text-3xl font-bold mb-2">Previsione</h2>
      <GetForecast/>
    </div>
  );
}

export default App;
