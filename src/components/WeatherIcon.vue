<template>
    <div class="weather-icon">
      <img :src="getWeatherIcon()" alt="weather icon" />
    </div>
  </template>
  
  <script>
  export default {
    name: "WeatherIcon",
    props: {
      description: String,  // Receives weather description from parent
    },
    methods: {
      getWeatherIcon() {
        const description = this.description.toLowerCase();
        if (description.includes("clear")) {
          return "https://img.icons8.com/plasticine/100/sky.png"; 
        } else if (description.includes("sunny")) {
          return "https://img.icons8.com/fluency/48/sun.png";
        } else if (description.includes("cloudy")) {
          return "https://img.icons8.com/color/48/partly-cloudy-day--v1.png";
        } else if (description.includes("foggy")) {
          return "https://img.icons8.com/external-those-icons-flat-those-icons/24/external-Foggy-weather-those-icons-flat-those-icons-3.png";
        } else if (description.includes("rain")) {
          return "https://img.icons8.com/emoji/48/cloud-with-lightning-and-rain.png";
        } else if (description.includes("overcast")) {
          return "https://img.icons8.com/external-phatplus-lineal-color-phatplus/64/external-overcast-weather-phatplus-lineal-color-phatplus.png";
        } 
        return "https://img.icons8.com/arcade/64/sky.png"; 
        
      },
    },
  };
  </script>
  
  <style scoped>
  .weather-icon img {
    width: 50px;
    height: 50px;
  }
  </style>
  