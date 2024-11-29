<template>
  <section class="bg-gray-50 min-h-screen p-8">
    <div class="container mx-auto text-center">
      <!-- Company Heading with Animation -->
      <h1 class="text-5xl font-bold text-gray-800 mb-6 animate-fadeIn">
        About TechSquad360
      </h1>
      <p class="text-gray-600 text-lg mb-8 animate-fadeIn">
        We are a team of dedicated tech professionals offering a wide range of services including SEO, Digital Marketing, Web Development, App Development, Cybersecurity, IT Support, and Cloud Computing.
      </p>

      <!-- Lottie Animation Section -->
      <div class="flex justify-center mb-10">
        <LottieAnimation src="path/to/animation.json" class="w-60 h-60"/>
      </div>

      <!-- Services Section -->
      <div class="grid md:grid-cols-3 gap-8 mt-10 animate-slideUp">
        <ServiceCard
            title="SEO Optimization"
            description="Enhancing your website's visibility to drive traffic and rank better."
            icon="search-circle"
        />
        <ServiceCard
            title="Digital Marketing"
            description="Digital strategies to grow your business and reach a wider audience."
            icon="lightning-bolt"
        />
        <ServiceCard
            title="Web Development"
            description="Professional website solutions tailored to your business needs."
            icon="desktop-computer"
        />
        <ServiceCard
            title="App Development"
            description="Native and cross-platform apps for Android and iOS."
            icon="device-mobile"
        />
        <ServiceCard
            title="Cybersecurity"
            description="Comprehensive protection for your digital assets."
            icon="shield-check"
        />
        <ServiceCard
            title="Cloud Computing"
            description="Cloud solutions to streamline your operations and enhance collaboration."
            icon="cloud"
        />
      </div>

      <!-- Team Section -->
      <div class="my-16">
        <h2 class="text-3xl font-semibold text-gray-800 mb-6 animate-fadeIn">
          Meet Our Team
        </h2>
        <div class="flex justify-center space-x-4">
          <TeamMemberCard
              name="Alex Johnson"
              role="Lead Developer"
              img="path/to/image.jpg"
          />
          <TeamMemberCard
              name="Sophia Lee"
              role="Digital Marketing Expert"
              img="path/to/image.jpg"
          />
          <TeamMemberCard
              name="Michael Brown"
              role="Cybersecurity Specialist"
              img="path/to/image.jpg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LottieAnimation from 'lottie-web';
import { defineComponent } from 'vue';
import { SearchCircleIcon, LightningBoltIcon, DesktopComputerIcon, DeviceMobileIcon, ShieldCheckIcon, CloudIcon } from '@heroicons/vue/outline';
import ServiceCard from './ServiceCard.vue';
import TeamMemberCard from './TeamMemberCard.vue';

export default defineComponent({
  components: {
    LottieAnimation,
    SearchCircleIcon,
    LightningBoltIcon,
    DesktopComputerIcon,
    DeviceMobileIcon,
    ShieldCheckIcon,
    CloudIcon,
    ServiceCard,
    TeamMemberCard,
  },
});
</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 2s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-slideUp {
  animation: slideUp 2s ease-in-out;
}
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
</style>
