<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark()
const toggleDark = useToggle(isDark);
const toggleAnimation = () => {
  const isDark = document.getElementsByClassName("dark")
  const toggleButton = document.getElementById('toggleBtn')

  if (isDark.length !== 0){
    toggleButton.style.transition = "translate .7s"
    toggleButton.style.translate = "150% 0%"

  }else{
    toggleButton.style.transition = "translate .7s"
    toggleButton.style.translate = "0% 0%"
  }
}
const displayMenu = () => {
  const menu = document.querySelector('.menu')
  if (menu.style.maxHeight === "500px"){
    menu.style.maxHeight = "0"
  }else{
    menu.style.maxHeight = "500px"
  }
  //fermer le menu automatiquement après un clic
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.menu') && !e.target.closest('.burger')) {
      menu.style.maxHeight = "0"
    }
  });
}
</script>

<template>
  <div class="navbar z-10 p-4 flex align-middle gap-8 " :class="isDark ? 'bg-dark-mode' : ' bg-white' ">
    <div class="logo text-2xl">
      <a href="" class="text-gradient silk-flower">
        Louis.
      </a>
    </div>
    <ul @click="toggleAnimation()" class="z-20">
      <ThemeToggle @click="toggleDark()" class="cursor-none" id="toggleBtn" />
    </ul>
    <button class="burger absolute right-12 top-5 z-50" @click="displayMenu"  type="button">
      <span :class="isDark ? 'dot-dark-mode' : 'dot-white-mode'"></span>
      <span :class="isDark ? 'dot-dark-mode' : 'dot-white-mode'"></span>
      <span :class="isDark ? 'dot-dark-mode' : 'dot-white-mode'"></span>
    </button>


    <ul class="menu z-10" :class="isDark ? 'bg-dark-mode' : ' bg-white' ">
      <li v-for="navbar_item in navbarItems" :key="navbar_item.id" class="z-10 ml-5">
        <a :href="navbar_item.link" class="w-full silk-flower" >
          {{navbar_item.name}}
        </a>
      </li>
    </ul>
  </div>

</template>

<script>
import ThemeToggle from "@/components/add-on/ThemeToggleComponent.vue";

export default {
  components: {ThemeToggle},
  props: {
    isDark: Boolean,
    navbarItems: Array
  }
}


</script>


<style scoped>
*, *:before, *:after {
  box-sizing: border-box;
}
.navbar {
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.2);
  width: 100%;
}


.dot-white-mode {
  display: block;
  width: 4px;
  height: 4px;
  background: #000;
  margin: 3px 0;
  border-radius: 100%;
  transition: all 0.4s ease-in-out;
}
.dot-dark-mode {
  display: block;
  width: 4px;
  height: 4px;
  background: #fff;
  margin: 3px 0;
  border-radius: 100%;
  transition: all 0.4s ease-in-out;
}
.navbar button.burger:focus span:first-child {
  transform-origin: 2px 9px;
  transform: rotate(-90deg);
}
.navbar button.burger:focus span:last-child {
  transform-origin: 2px -5px;
  transform: rotate(-90deg);
}
.navbar button.burger:focus + ul {
  max-height: 500px;
}
.navbar ul.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
  max-height: 0;
  transition: all 0.3s ease-in-out;;
}
.navbar ul.menu > li {
  display: block;
  padding: 10px 15px;
  transition: all 0.2s ease;
}
.navbar ul.menu > li:hover {
}

</style>