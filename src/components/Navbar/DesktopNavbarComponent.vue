<script setup>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)

const toggleAnimation = () => {
  const theme = localStorage.getItem('vueuse-color-scheme')
  const toggleButton = document.getElementById("themeBtn")
  if (theme === "light") {
    toggleButton.classList = 'button_untoggle'
  }else{
    toggleButton.classList = "button_toggle"
  }
}
import ThemeToggleComponent from '@/components/add-on/ThemeToggleComponent.vue'
import LanguageToggle from "@/components/add-on/LanguageToggle.vue";
</script>

<template>
  <div class="w-full flex justify-between p-10">
    <div
      class="p-6 text-4xl font-bold hover:shadow-2xl rounded-3xl transition duration-300 ease-in-out hover:scale-105 dark:text-white silk-flower"
    >
      <a href="#" class="text-gradient"> Louis. </a>
    </div>
    <div class="flex gap-10">
      <ul
        class="dark:text-white flex gap-6 mont-bold my-auto"
        v-for="navbar_item in navbarItems"
        :key="navbar_item.id"
      >
        <a :href="navbar_item.link" class="flex">
          <li
            class="p-6 hover:shadow-xl transition duration-300 ease-in-out hover:scale-105 hover:text-pink-color"
            :class="isDark ? 'dark-neumorphism' : 'neumorphism'"
          >
            {{ navbar_item.name }}
          </li>
        </a>
      </ul>
      <ul class="flex gap-8" @click="toggleAnimation">
        <LanguageToggle @click="toggleAnimation()" id="languageBtn"/>
        <ThemeToggleComponent @click="toggleDark(), toggleAnimation()" id="themeBtn" />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesktopNavbar',
  props: {
    isDark: Boolean,
    navbarItems: Array
  },
  mounted() {
    const theme = localStorage.getItem('vueuse-color-scheme')
    const toggleButton = document.getElementById('toggleBtn')
    if (theme === "light") {
      toggleButton.classList = 'button_untoggle'
    }
    if(theme === "auto") {
      toggleButton.classList = "button_toggle"
    }
  }
}
</script>

<style scoped>
.button_toggle{
  position: relative;
  transform: translateY(55%);
  transition: transform .7s;
}
.button_untoggle{
  transform: translateY(0%);
  transition: transform .7s;
}
</style>