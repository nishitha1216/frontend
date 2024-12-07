<template>
    <div class="weather-card">
      <h2>{{ weather.city }}</h2>
      <WeatherIcon :description="weather.description" />
      <p><strong>Temperature:</strong> {{ weather.temperature }}°C</p>
      <p><strong>Humidity:</strong> {{ weather.humidity }}%</p>
      <p><strong>Description:</strong> {{ weather.description }}</p>
      <p><strong>Sunrise:</strong> {{ weather.sunrise }}</p>
      <p><strong>Sunset:</strong> {{ weather.sunset }}</p>
    </div>
  </template>
  
  <script>
  import WeatherIcon from './WeatherIcon.vue'; // Import WeatherIcon component
  
  export default {
    name: "WeatherCard",
    components: {
      WeatherIcon,  // Register WeatherIcon component
    },
    props: {
      weather: Object,  // Receives weather data from parent
    },
  };
  </script>
  
  <style scoped>
  .weather-card {
    background-color: #fff;
    border-radius: 8px;
    padding: 15px;
    margin: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
  }
  
  .weather-card h2 {
    color: #2c3e50;
  }
  
  .weather-card p {
    margin: 5px 0;
  }
  </style>
  