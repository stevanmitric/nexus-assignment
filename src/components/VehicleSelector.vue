<template>
  <div class="vehicle-selector">
    <div class="dropdown-group">
      <label for="year">Year:</label>
      <select
        id="year"
        v-model="selectedYear"
        @change="fetchMakes"
        class="dropdown"
      >
        <option value="" disabled>Select Year</option>
        <option v-for="year in years" :key="year" :value="year">
          {{ year }}
        </option>
      </select>
    </div>

    <div class="dropdown-group">
      <label for="make">Make:</label>
      <select
        id="make"
        v-model="selectedMake"
        @change="fetchModels"
        :disabled="!selectedYear"
        class="dropdown"
      >
        <option value="" disabled>Select Make</option>
        <option v-for="make in makes" :key="make.id" :value="make.name">
          {{ make.name }}
        </option>
      </select>
    </div>

    <div class="dropdown-group">
      <label for="model">Model:</label>
      <select
        id="model"
        v-model="selectedModel"
        :disabled="!selectedMake"
        class="dropdown"
      >
        <option value="" disabled>Select Model</option>
        <option v-for="model in models" :key="model.model" :value="model.model">
          {{ model.model }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
  import axiosInstance from '../api/axiosInstance';

  export default {
    data() {
      return {
        years: [],
        makesCache: {},
        modelsCache: {},
        makes: [],
        models: [],
        selectedYear: '',
        selectedMake: '',
        selectedModel: '',
      };
    },

    methods: {
      async fetchYears() {
        try {
          const response = await axiosInstance.get('/years');
          this.years = response.data.data;
        } catch (error) {
          console.error('Error fetching years:', error);
        }
      },

      async fetchMakes() {
        if (this.makesCache[this.selectedYear]) {
          this.makes = this.makesCache[this.selectedYear];
          return;
        }

        this.makes = [];
        this.models = [];

        try {
          const response = await axiosInstance.get(
            `/makes?year=${this.selectedYear}`
          );
          this.makes = response.data.data;
          this.makesCache[this.selectedYear] = response.data; // Cache the result
        } catch (error) {
          console.error('Error fetching makes:', error);
        }
      },

      async fetchModels() {
        const cacheKey = `${this.selectedYear}-${this.selectedMake}`;
        if (this.modelsCache[cacheKey]) {
          this.models = this.modelsCache[cacheKey];
          return;
        }

        this.models = [];

        try {
          const response = await axiosInstance.get(
            `/models?year=${this.selectedYear}&make=${this.selectedMake}`
          );
          this.models = response.data.data;
          this.modelsCache[cacheKey] = response.data.data;
        } catch (error) {
          console.error('Error fetching models:', error);
        }
      },
    },

    mounted() {
      this.fetchYears();
    },
  };
</script>

<style scoped>
    @import '@/styles/VehicleSelector.css';
</style>
