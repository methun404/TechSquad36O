<template>
  <section class="bg-white text-gray-900 py-16" id="cta-section">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-6">Get in Touch with Us</h2>
      <p class="text-lg mb-10">Ready to take your business to the next level? Contact us today!</p>

      <!-- CTA Buttons -->
      <div class="flex flex-col md:flex-row justify-center mb-10">
        <a
            href="#schedule"
            class="bg-[#0AD1C8] text-white px-6 py-3 rounded-full hover:bg-[#0B6477] transition-transform transform hover:scale-105 mx-2 mb-4 md:mb-0"
        >
          Schedule a Call
        </a>
        <a
            href="#quote"
            class="bg-[#14919B] text-white px-6 py-3 rounded-full hover:bg-[#0B6477] transition-transform transform hover:scale-105 mx-2"
        >
          Get a Free Quote
        </a>
      </div>

      <!-- Contact Form -->
      <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto bg-[#5EDFB1]/20 p-8 rounded-lg shadow-lg border border-[#0AD1C8]/30">
        <h3 class="text-2xl font-semibold mb-6 text-center">Contact Us</h3>
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium mb-1">Name</label>
          <input type="text" id="name" v-model="formData.name" required class="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium mb-1">Email</label>
          <input type="email" id="email" v-model="formData.email" required class="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div class="mb-4">
          <label for="services" class="block text-sm font-medium mb-1">Services Needed</label>
          <select id="services" v-model="formData.services" required class="w-full p-2 border border-gray-300 rounded-md">
            <option value="" disabled>Select a service</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="Cyber Security">Cyber Security</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium mb-1">Message</label>
          <textarea id="message" v-model="formData.message" required rows="4" class="w-full p-2 border border-gray-300 rounded-md"></textarea>
        </div>
        <button type="submit" class="bg-[#0AD1C8] text-white px-6 py-3 rounded-full hover:bg-[#0B6477] transition-transform transform hover:scale-105">
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'CTASection',
  setup() {
    const formData = ref({
      name: '',
      email: '',
      services: '',
      message: '',
    });

    const handleSubmit = () => {
      // Handle form submission logic here (e.g., send data to an API)
      console.log('Form Data:', formData.value);
      // Reset form after submission
      formData.value = { name: '', email: '', services: '', message: '' };
    };

    return {
      formData,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
/* Optional styles for hover effect */
.transition-transform {
  transition: transform 0.3s ease;
}
</style>
