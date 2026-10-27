<template>
  <Navbar />
  <div class="about-page">
    <!-- About TechSquad Section -->
    <section class="bg-gradient py-12 mt-1">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">About TechSquad360</h2>
          <p class="mt-4 text-lg sm:text-xl text-white">Innovative technology solutions to empower your business.</p>
        </div>

        <!-- Main content with Lottie Animation -->
        <div class="flex flex-col md:flex-row items-center justify-between mb-12">
          <!-- Left Column: Text Content -->
          <div class="w-full md:w-1/2 text-left text-white">
            <h3 class="text-2xl font-semibold">Who We Are</h3>
            <p class="mt-4 text-lg leading-relaxed">
              TechSquad360 is a team of tech enthusiasts specializing in end-to-end technology services...
            </p>

            <!-- Mission and Vision -->
            <div class="grid md:grid-cols-2 gap-8 my-8">
              <div>
                <h3 class="text-2xl font-semibold">Our Mission</h3>
                <p class="mt-4 text-lg leading-relaxed">
                  To empower businesses with cutting-edge technology solutions that drive growth and innovation...
                </p>
              </div>
              <div>
                <h3 class="text-2xl font-semibold">Our Vision</h3>
                <p class="mt-4 text-lg leading-relaxed">
                  To be a global leader in technology solutions...
                </p>
              </div>
            </div>

            <!-- Core Services List -->
            <h3 class="text-2xl font-semibold">Our Core Services</h3>
            <ul class="mt-6 space-y-4 text-lg">
              <li class="flex items-center">
                <span class="text-teal-500 text-2xl mr-3">🌐</span>
                <span>Digital Marketing...</span>
              </li>
              <!-- Add other services similarly -->
            </ul>
          </div>

          <!-- Right Column: Lottie Animation -->
          <div class="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <LottieAnimation
                :animationData="animationData"
                :autoplay="true"
                :loop="true"
                class="lottie-animation"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Team Section -->
    <section class="leadership-team-section py-12 bg-[#213A57]">
      <div class="text-center mb-12">
        <h2 class="section-title text-white">Meet Our Leadership Team</h2>
      </div>
      <div class="team-container flex flex-wrap justify-center gap-8">
        <div
            v-for="(founder, index) in founders"
            :key="index"
            class="team-card bg-[#0B6477] p-6 rounded-xl shadow-lg w-64"
        >
          <!-- Image and Info Together in a Single Div -->
          <img
              :src="founder.image"
              alt="Founder Image"
              class="team-image w-full h-48 object-cover rounded-md mb-4"
          />
          <div class="team-info">
            <h3 class="text-lg font-semibold text-white">{{ founder.name }}</h3>
            <p class="role text-teal-500">{{ founder.role }}</p>
            <p class="text-white mt-2">{{ founder.responsibilities }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <Footer class="mt-0 pb-0" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { LottieAnimation } from 'lottie-web-vue';
import animationData from '../assets/lotti_animation/aboutPageAnimation.json';
import mainLogo from '../assets/main_logo.png';
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: 'AboutPage',
  components: {
    Navbar,
    Footer,
    LottieAnimation
  },
  setup() {
    const founders = [
      {
        name: 'Md Mithun Ahmed',
        role: 'Co-Founder & Lead Technologist',
        responsibilities: 'Leads web development, mobile solutions, and web-to-app conversion.',
        image: mainLogo
      },
      {
        name: 'Md Shohanur Islam',
        role: 'Co-Founder & Head of Innovation and Security',
        responsibilities: 'Manages cybersecurity, secure coding practices, and technical support.',
        image: mainLogo
      },
      {
        name: 'Himel Ahmed',
        role: 'Co-Founder & Director of Growth and Client Success',
        responsibilities: 'Guides SEO strategies, digital marketing campaigns, and client management.',
        image: mainLogo
      }
    ];

    return {
      animationData,
      founders
    };
  }
};
</script>

<style scoped>
/* Gradient Background for Section */
.bg-gradient {
  background: linear-gradient(45deg, #213A57, #0B6477);
}

/* Core Text Styling */
.text-white {
  color: white;
}

.text-teal-500 {
  color: #0AD1C8;
}

.container {
  max-width: 1200px;
}

.lottie-animation {
  width: 100%;
  max-width: 600px;
  height: auto;
  max-height: 600px;
}

.leadership-team-section .section-title {
  font-size: 2.5rem;
  color: #0AD1C8;
}

.team-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.team-card {
  background: #0B6477;
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
}

.team-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.team-info h3 {
  font-size: 1.2rem;
  color: #fff;
}

.team-info .role {
  font-size: 1rem;
  color: #80ED99;
}

/* Footer Fix */
footer {
  margin-top: 0 !important;
  padding-bottom: 0 !important;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.about-page {
  background: linear-gradient(45deg, #213A57, #0B6477);
  min-height: 100vh;
  padding-top: 60px; /* Adjust this to match navbar height */
}

.bg-gradient {
  margin-bottom: 0;
}

.leadership-team-section {
  margin-bottom: 0;
}
</style>
