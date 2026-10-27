<template>
  <div>
    <Navbar />
    <section class="min-h-screen bg-gradient-to-r from-[#213A57] to-[#0B6477] text-white py-16 px-4 flex flex-col pt-24">
      <div class="container mx-auto flex-1 space-y-16">
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-12 animate-fadeIn">Our Services</h1>
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :animationData="service.animationData"
          :keyPoints="service.keyPoints"
          :description="service.description"
          :reverse="index % 2 !== 0"
        />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import ServiceCard from "@/components/ServiceCard.vue";

import seoAnimationData from '../assets/lotti_animation/seo_animation_lotti.json';
import digitalMarketingAnimationData from '../assets/lotti_animation/degital_marketing_animation.json';
import webToAppAnimationData from '../assets/lotti_animation/web_to_app_animation.json';
import webDevAnimationData from '../assets/lotti_animation/web_development_animation.json';
import androidAppAnimationData from '../assets/lotti_animation/add_dev_animation.json';
import cybersecurityAnimationData from '../assets/lotti_animation/cyber_animation_lotti.json';
import itSupportAnimationData from '../assets/lotti_animation/service_animation.json';
import saasAnimationData from '../assets/lotti_animation/saas_animation.json';
import cloudComputingAnimationData from '../assets/lotti_animation/cloud_animation.json';

export default defineComponent({
  name: 'ServicesPage',
  components: {
    Navbar,
    Footer,
    ServiceCard,
  },
  data() {
    return {
      services: [
        {
          title: "SEO",
          animationData: seoAnimationData,
          keyPoints: "Keyword Research, On-page Optimization, Technical SEO Audits, Backlink Strategy, Mobile Optimization, Content Strategy",
          description: "Our comprehensive SEO services are designed to elevate your website's visibility and performance. We conduct in-depth keyword research, optimize on-page elements, perform technical SEO audits, and implement a robust backlink strategy to ensure your website ranks higher in search results. Our team also focuses on mobile optimization and content strategies to enhance user experience and drive long-term growth.",
        },
        {
          title: "Digital Marketing",
          animationData: digitalMarketingAnimationData,
          keyPoints: "Social Media Management, Email Marketing, PPC Advertising, Content Creation, Influencer Partnerships, Analytics and Reporting",
          description: "With our digital marketing expertise, your business can thrive through targeted campaigns. We cover everything from social media management and engaging email marketing campaigns to PPC advertising and compelling content creation. We collaborate with influencers and leverage analytics to measure performance, optimize strategies, and maximize your return on investment.",
        },
        {
          title: "Web to App",
          animationData: webToAppAnimationData,
          keyPoints: "Platform Conversion, App Optimization, User Engagement",
          description: "Transform your web platform into a mobile app to engage your audience more effectively. We optimize your platform for mobile devices, ensuring that the transition from web to app is seamless and provides a user-friendly experience. With a focus on user engagement, our team ensures that your app performs well, is scalable, and integrates perfectly with your existing systems.",
        },
        {
          title: "Web Development",
          animationData: webDevAnimationData,
          keyPoints: "Responsive Design, User-Centric, Fast Load Times",
          description: "Our web development services create fast, responsive, and user-friendly websites. We use the latest technologies to build websites that are not only visually appealing but also functional across all devices. Whether you need an e-commerce site, a personal blog, or a corporate website, our team will tailor a solution to meet your specific business needs, ensuring an optimal experience for your users.",
        },
        {
          title: "Android/Native App Development",
          animationData: androidAppAnimationData,
          keyPoints: "Custom Android Apps, Cross-Platform, High Performance",
          description: "We specialize in developing powerful, custom mobile applications for Android. Whether you need an app for e-commerce, social networking, or productivity, we have the skills and experience to turn your ideas into high-performance apps. We also ensure cross-platform compatibility, allowing your app to function seamlessly across different devices, giving your users a consistent experience.",
        },
        {
          title: "Cybersecurity",
          animationData: cybersecurityAnimationData,
          keyPoints: "Threat Protection, Data Security, Risk Management",
          description: "Our cybersecurity services are designed to protect your business from cyber threats. We offer comprehensive security assessments, threat monitoring, data protection strategies, and incident response services to safeguard your systems, networks, and data. With the ever-increasing complexity of cyber threats, we help you stay one step ahead with proactive solutions that mitigate risks and ensure business continuity.",
        },
        {
          title: "Technical/IT Support",
          animationData: itSupportAnimationData,
          keyPoints: "24/7 Support, System Maintenance, Network Solutions",
          description: "Our technical support services offer reliable and expert assistance whenever you need it. We provide 24/7 support, system maintenance, and troubleshooting for both hardware and software issues. Whether you're dealing with network problems, system crashes, or software malfunctions, our team is ready to help keep your business running smoothly and efficiently.",
        },
        {
          title: "SaaS Solutions",
          animationData: saasAnimationData,
          keyPoints: "Custom Solutions, Subscription Models, Scalability",
          description: "We develop and deploy custom SaaS (Software as a Service) solutions tailored to your business needs. From initial consultation and design to deployment and ongoing support, we ensure that your SaaS products are scalable, secure, and easy to use. Our team works with you to streamline operations, improve efficiency, and deliver a high-quality product that supports your business's growth.",
        },
        {
          title: "Cloud Computing",
          animationData: cloudComputingAnimationData,
          keyPoints: "Scalable Storage, Data Management, Remote Access",
          description: "Our cloud computing services offer scalable and cost-effective solutions to optimize your business operations. We provide cloud storage, data management, and remote access solutions that ensure your systems are secure, flexible, and easily accessible. Whether you need to scale your infrastructure, improve data management, or ensure business continuity, we provide the tools and expertise to meet your needs.",
        },
      ],
    };
  },
});
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fadeIn {
  animation: fadeIn 1.2s ease-in-out;
}
</style>
