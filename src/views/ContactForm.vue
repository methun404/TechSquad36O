<template>
  <Navbar/>
  <div class="min-h-screen bg-gradient-to-r from-primary to-secondary text-white py-16 px-4 flex flex-col">
    <!-- Main content container -->
    <div class="container mx-auto flex-1 space-y-8 pt-16">
      <!-- Page heading -->
      <h1 class="text-4xl md:text-5xl font-bold text-center animate-fadeIn mb-12">
        Contact Us
      </h1>

      <!-- Contact form container -->
      <div class="bg-white text-black rounded-lg shadow-2xl p-8 max-w-3xl mx-auto animate-formReveal">
        <!-- Form element -->
        <form @submit.prevent="handleSubmit" class="space-y-6" ref="formContainer">
          <!-- Full Name input -->
          <div>
            <label for="fullName" class="block font-medium text-primary">Full Name</label>
            <input
                id="fullName"
                v-model="formData.fullName"
                type="text"
                required
                placeholder="Enter your full name"
                class="w-full border rounded-lg p-3 mt-2 focus:ring-primary focus:outline-none bg-transparent border-primary text-primary"
            />
          </div>

          <!-- Company Name input -->
          <div>
            <label for="companyName" class="block font-medium text-primary">Company Name</label>
            <input
                id="companyName"
                v-model="formData.companyName"
                type="text"
                placeholder="Enter your company name"
                class="w-full border rounded-lg p-3 mt-2 focus:ring-primary focus:outline-none bg-transparent border-primary text-primary"
            />
          </div>

          <!-- Email input -->
          <div>
            <label for="email" class="block font-medium text-primary">Email</label>
            <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                placeholder="Enter your email"
                class="w-full border rounded-lg p-3 mt-2 focus:ring-primary focus:outline-none bg-transparent border-primary text-primary"
            />
          </div>

          <!-- Service select -->
          <div>
            <label for="service" class="block font-medium text-primary">Select Service</label>
            <select
                id="service"
                v-model="formData.service"
                required
                class="w-full border rounded-lg p-3 mt-2 focus:ring-primary focus:outline-none bg-transparent border-primary text-primary"
            >
              <option value="" disabled>Select a service</option>
              <option v-for="(service, index) in services" :key="index" :value="service">
                {{ service }}
              </option>
            </select>
          </div>

          <!-- Description input -->
          <div>
            <label for="description" class="block font-medium text-primary">Description</label>
            <textarea
                id="description"
                v-model="formData.description"
                rows="5"
                placeholder="Describe your requirements"
                class="w-full border rounded-lg p-3 mt-2 focus:ring-primary focus:outline-none bg-transparent border-primary text-primary"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-center">
            <button
                type="submit"
                class="bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Footer component -->
    <Footer />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import gsap from "gsap";

export default defineComponent({
  name: "ContactForm",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      services: [
        "SEO",
        "Digital Marketing",
        "Web Development",
        "App Development",
        "Cybersecurity",
        "Cloud Computing",
        "IT Support",
        "SaaS Solutions",
      ],
      formData: {
        fullName: "",
        companyName: "",
        email: "",
        service: "",
        description: "",
      },
    };
  },
  mounted() {
    // Fix the visibility issue by adding a fade-in effect with a small delay
    gsap.from(".animate-fadeIn", {
      opacity: 0,
      duration: 1,
      delay: 0.3, // Added a delay to ensure visibility
    });
    gsap.from(".animate-formReveal", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      delay: 0.5,
    });
  },
  methods: {
    handleSubmit() {
      console.log("Form submitted:", this.formData);
      alert("Thank you for contacting us! We'll get back to you soon.");
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        fullName: "",
        companyName: "",
        email: "",
        service: "",
        description: "",
      };
    },
  },
});
</script>

<style scoped>
/* Keyframe animation for fade-in effect */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Apply fade-in animation */
.animate-fadeIn {
  animation: fadeIn 2s ease-in-out;
}

/* Keyframe animation for form reveal effect */
@keyframes formReveal {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Apply form reveal animation */
.animate-formReveal {
  animation: formReveal 1.2s ease-out 0.5s forwards;
}
</style>
