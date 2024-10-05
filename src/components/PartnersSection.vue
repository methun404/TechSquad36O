<template>
  <section id="booking" class="py-16 bg-white text-gray-900">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-center">
      <div class="md:w-1/2 p-8 bg-gray-100 rounded-lg shadow-md">
        <img src="../assets/logo.svg" alt="TeamSquad360 Logo" class="w-40 mx-auto mb-4">
        <h2 class="text-2xl font-bold text-center">Book a Free Strategy Session</h2>
        <p class="text-center mt-2 text-sm">30 min</p>
        <p class="text-center text-gray-500">Web conferencing details provided upon confirmation.</p>

        <div class="mt-6">
          <label for="date" class="block text-sm font-bold mb-2">Select a Date</label>
          <input
              type="date"
              id="date"
              v-model="selectedDate"
              class="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />
        </div>

        <div>
          <label class="block text-sm font-bold mb-2">Select a Time</label>
          <div class="grid grid-cols-2 gap-2">
            <button
                v-for="time in availableTimes"
                :key="time"
                @click="selectTime(time)"
                class="w-full py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-200"
            >
              {{ time }}
            </button>
          </div>
        </div>

        <div class="mt-4 text-center">
          <p class="text-gray-500">Time zone</p>
          <p class="text-sm">Asia/Dhaka (6:06 PM)</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FreeStrategySession",
  data() {
    return {
      selectedDate: null,
      availableTimes: ["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM"], // Example time slots
    };
  },
  methods: {
    selectTime(time) {
      // Handle the time selection
      alert(`You have selected ${time} on ${this.selectedDate}`);
    }
  }
};
</script>

<style scoped>
/* You can add any specific styles for this component here */
</style>
