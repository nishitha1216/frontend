<template>
  <div id="app">
    <h1>Weather Details</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <!-- Grid layout for the weather cards -->
      <div class="weather-grid">
        <div v-for="weather in apiData" :key="weather._id">
          <WeatherCard :weather="weather" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import WeatherCard from "./components/WeatherCard.vue"; // Import WeatherCard component

export default {
  name: "App",
  components: {
    WeatherCard, // Register the WeatherCard component
  },
  data() {
    return {
      apiData: [],
      loading: true,
    };
  },
  created() {
    this.fetchApiData();
  },
  methods: {
    async fetchApiData() {
      try {
        const response = await axios.get(
          "https://portfoliowebsite-30b7.onrender.com/api"
        );
        this.apiData = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  border: 5px solid #000; 
  margin: 10px; 
  padding: 20px;
  border-radius: 10px; 
}



h1 {
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 20px;
}

.weather-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns for 4 images in one row */
  gap: 20px; 
  justify-items: center; 
}

.weather-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: left;
}

.weather-card h2 {
  color: #2c3e50;
}

.weather-card p {
  margin: 5px 0;
}
</style>
