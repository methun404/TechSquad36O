<template>
  <!-- Unified Calendar and Details Container -->
  <div class="calendar-container p-4 sm:p-8 bg-gray-100 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start justify-between">
    <!-- Left Side: Logo and Details -->
    <div class="md:w-1/3 w-full p-4 sm:p-8 flex flex-col items-center md:items-start text-center md:text-left">
      <img src="../assets/main_logo.png" alt="TechSquad360 Logo" class="w-28 sm:w-40 mb-4 object-contain">
      <h2 class="text-2xl sm:text-3xl font-bold text-[#213A57]">Book a Free Strategy Session</h2>
      <p class="mt-2 text-sm sm:text-base">30 min</p>
      <p class="text-gray-500 mt-2">Web conferencing details provided upon confirmation.</p>
      <!-- Time Zone Selection -->
      <div class="mt-4">
        <label class="block text-gray-500 mb-1">Select Time Zone</label>
        <select v-model="selectedTimeZone" class="border rounded px-2 py-1 w-full">
          <option v-for="(zone, index) in timeZones" :key="index" :value="zone">{{ zone }}</option>
        </select>
      </div>
      <!-- Submit Button -->
      <div v-if="selectedDate && selectedTime" class="mt-6">
        <button class="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
          Submit
        </button>
      </div>
    </div>
    <!-- Right Side: Custom Calendar -->
    <div class="md:w-2/3 w-full p-4 sm:p-8">
      <!-- Header: Month and Year with Navigation -->
      <div class="flex justify-between items-center mb-4">
        <button @click="previousMonth" class="bg-teal-500 text-white p-2 rounded hover:bg-teal-600 flex items-center">
          <i class="fas fa-chevron-left"></i>
        </button>
        <h2 class="text-lg sm:text-xl font-bold">{{ monthNames[currentMonth] }} {{ currentYear }}</h2>
        <button @click="nextMonth" class="bg-teal-500 text-white p-2 rounded hover:bg-teal-600 flex items-center">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <!-- Day Labels -->
      <div class="grid grid-cols-7 gap-1 text-center font-bold mb-2 text-sm sm:text-base">
        <div v-for="(day, index) in dayNames" :key="index">{{ day }}</div>
      </div>
      <!-- Calendar Grid -->
      <div class="grid grid-cols-7 gap-1 sm:gap-2 text-center">
        <div v-for="blank in blankDays" :key="blank"></div>
        <div v-for="day in daysInMonth" :key="day">
          <button
              @click="selectDate(day)"
              :class="['w-full py-2 rounded', selectedDate === day ? 'bg-teal-500 text-white' : 'bg-white hover:bg-gray-200']"
          >
            {{ day }}
          </button>
        </div>
      </div>
      <!-- Selected Date and Time Slots -->
      <div v-if="selectedDate" class="mt-6">
        <h3 class="text-lg sm:text-xl font-bold mb-2">Selected Date: {{ formattedSelectedDate }}</h3>
        <div>
          <label class="block text-sm font-bold mb-2">Select a Time</label>
          <div class="grid grid-cols-2 gap-2 sm:gap-4">
            <button v-for="time in availableTimes" :key="time" @click="selectTime(time)"
                    class="w-full py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-200">
              {{ time }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      selectedDate: null,
      selectedTime: null,
      selectedTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      availableTimes: ["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM"],
      dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      monthNames: [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
      ],
      timeZones: [
        "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Bamako",
        "Pacific/Yap"
      ]
    };
  },
  computed: {
    daysInMonth() {
      return [...Array(new Date(this.currentYear, this.currentMonth + 1, 0).getDate()).keys()].map(i => i + 1);
    },
    firstDayOfMonth() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    blankDays() {
      return Array(this.firstDayOfMonth).fill(null);
    },
    formattedSelectedDate() {
      return this.selectedDate
          ? `${this.monthNames[this.currentMonth]} ${this.selectedDate}, ${this.currentYear}`
          : '';
    }
  },
  methods: {
    previousMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    selectDate(day) {
      this.selectedDate = day;
    },
    selectTime(time) {
      this.selectedTime = time;
    }
  }
};
</script>

<style scoped>
.calendar-container {
  max-width: 90vw;
  margin: auto;
}
</style>
