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
              @change="onDateChange"
          />
        </div>

        <div>
          <label class="block text-sm font-bold mb-2">Select a Time</label>
          <div class="grid grid-cols-2 gap-2">
            <!-- Loop through available times and make them look and behave like radio buttons -->
            <label
                v-for="time in availableTimes"
                :key="time"
                class="flex items-center justify-center w-full py-2 rounded-lg cursor-pointer border border-gray-300 transition duration-200"
                :class="{
                'bg-teal-500 text-white border-teal-500': selectedTime === time,
                'hover:bg-gray-100': selectedTime !== time
              }"
            >
              <input
                  type="radio"
                  name="time"
                  :value="time"
                  v-model="selectedTime"
                  class="hidden"
              />
              {{ time }}
            </label>
          </div>
        </div>

        <div class="mt-4 text-center">
          <p class="text-gray-500">Time zone</p>
          <p class="text-sm">Asia/Dhaka (6:06 PM)</p>
        </div>

        <!-- Submit button appears when date and time are both selected -->
        <div v-if="isSubmitEnabled" class="mt-6 text-center">
          <button
              @click="submitBooking"
              class="py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
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
      selectedDate: "",
      selectedTime: null,
      availableTimes: ["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM"], // Example time slots
    };
  },
  computed: {
    // Computed property to check if both date and time are selected
    isSubmitEnabled() {
      return this.selectedDate !== "" && this.selectedTime !== null;
    }
  },
  methods: {
    onDateChange(event) {
      // Update selected date
      this.selectedDate = event.target.value;
    },
    submitBooking() {
      // Handle the booking submission logic
      alert(`Booking confirmed for ${this.selectedTime} on ${this.selectedDate}`);
    }
  }
};
</script>

<style scoped>
/* You can add any specific styles for this component here */
label {
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

label:hover {
  background-color: #f3f4f6; /* Lighter background on hover */
}

input[type="radio"]:checked + label {
  background-color: #38b2ac; /* Selected background */
  color: white;
}

input[type="radio"] {
  display: none; /* Hide actual radio button */
}

.bg-teal-500 {
  background-color: #38b2ac;
}

.text-white {
  color: white;
}

.border-teal-500 {
  border-color: #38b2ac;
}

.hover\:bg-gray-100:hover {
  background-color: #f7fafc;
}
</style>
